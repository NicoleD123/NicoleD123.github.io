#!/usr/bin/env python3
"""
批量处理摄影作品：压缩、生成缩略图、并从文件名自动生成小标题。

用法（在网站根目录下跑）：
    python3 tools/optimize_photos.py

关键约定：**文件名就是小标题**。
从「照片」App 导出时把文件名设成照片的「标题」，例如

    Cherry Blossom, DC, April 2026.jpeg

这个脚本会：
  1. 把文件名记成 caption → "Cherry Blossom, DC, April 2026"
  2. 把文件重命名成网址安全的形式 → cherry-blossom-dc-april-2026.jpg
  3. 压到长边 2000px（视网膜屏放大看也清晰），质量 85
  4. 在 photos/thumbs/ 生成长边 500px 的缩略图
  5. 打印出可以直接粘进 data/photos.js 的代码，caption 已经填好，
     只剩 alt 和 tags 要补

注意：原图会被替换成压缩版，所以请把未压缩的原始导出留一份在网站目录之外。

依赖 Pillow：pip3 install Pillow
"""

import re
import sys
import unicodedata
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("需要 Pillow：pip3 install Pillow")

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = ROOT / "assets" / "img" / "photos"
THUMBS = PHOTOS / "thumbs"

FULL_MAX = 2000
THUMB_MAX = 500
QUALITY = 85
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"}
UNSUPPORTED = {".heic", ".heif", ".dng", ".arw", ".cr2", ".nef"}


def slugify(text: str) -> str:
    """Cherry Blossom, DC, April 2026 → cherry-blossom-dc-april-2026"""
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")  # 去掉重音符号
    text = re.sub(r"[^\w\s-]", "", text).strip().lower()
    text = re.sub(r"[\s_]+", "-", text)
    return re.sub(r"-{2,}", "-", text).strip("-") or "photo"


def main() -> None:
    if not PHOTOS.exists():
        sys.exit(f"找不到 {PHOTOS}")
    THUMBS.mkdir(parents=True, exist_ok=True)

    files = sorted(p for p in PHOTOS.iterdir() if p.is_file() and not p.name.startswith("."))

    bad = [p.name for p in files if p.suffix.lower() in UNSUPPORTED]
    if bad:
        print("⚠️  下面的文件是 HEIC/RAW，脚本读不了，请从「照片」App 重新导出成 JPEG：")
        for name in bad:
            print("   ", name)
        print()

    images = [p for p in files if p.suffix.lower() in EXTS]
    if not images:
        sys.exit(f"{PHOTOS} 里没有可处理的图片（需要 jpg / png / tiff）。")

    entries = []
    used = set()

    for path in images:
        caption = path.stem.strip()            # 文件名 = 小标题
        slug = slugify(caption)

        n, candidate = 2, slug                 # 重名时自动加序号
        while candidate in used:
            candidate, n = f"{slug}-{n}", n + 1
        slug = candidate
        used.add(slug)

        out = PHOTOS / f"{slug}.jpg"

        with Image.open(path) as im:
            im = ImageOps.exif_transpose(im)    # 按 EXIF 摆正方向
            im = im.convert("RGB")

            full = im.copy()
            full.thumbnail((FULL_MAX, FULL_MAX), Image.LANCZOS)
            full.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)

            thumb = im.copy()
            thumb.thumbnail((THUMB_MAX, THUMB_MAX), Image.LANCZOS)
            thumb.save(THUMBS / out.name, "JPEG", quality=80, optimize=True)

        if path.resolve() != out.resolve():
            path.unlink()

        kb = out.stat().st_size / 1024
        print(f"  {caption[:38]:<40} → {out.name:<38} {kb:5.0f} KB")
        entries.append((out.name, caption))

    def split_caption(text: str):
        """Garden 1, Vancouver, Fall 2023 → ("Garden 1", "Vancouver, Fall 2023")"""
        head, sep, tail = text.partition(",")
        return (head.strip(), tail.strip()) if sep else (head.strip(), "")

    def js(text: str) -> str:
        return text.replace("\\", "\\\\").replace('"', '\\"')

    block = "\n".join(
        f'  {{\n'
        f'    src:   "assets/img/photos/{name}",\n'
        f'    thumb: "assets/img/photos/thumbs/{name}",\n'
        f'    title: "{js(split_caption(cap)[0])}",\n'
        f'    place: "{js(split_caption(cap)[1])}",\n'
        f'    alt:   "TODO: 描述画面内容",\n'
        f'    tags:  ["TODO"]\n'
        f'  }},'
        for name, cap in entries
    )

    print(f"\n共 {len(entries)} 张。把下面的内容粘进 data/photos.js 的 PHOTOS 数组：\n")
    print(block)

    snippet = ROOT / "tools" / "photos-entries.txt"
    snippet.write_text(block + "\n", encoding="utf-8")
    print(f"\n（同样的内容也写到了 {snippet.relative_to(ROOT)}，方便复制）")


if __name__ == "__main__":
    main()
