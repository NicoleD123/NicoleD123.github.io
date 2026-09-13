# nicoledeng.github.io

个人学术网站。纯 HTML / CSS / JS，没有构建步骤，没有依赖。

改内容 → `git push` → 一分钟后线上生效。

---

## 日常维护：只需要改 `data/` 里的文件

| 想做什么 | 改哪个文件 |
|---|---|
| 加一条 news | `data/news.js` — 在数组**最上面**加一行 |
| 改姓名 / 职位 / 邮箱 / 外链 / 头像 | `data/site.js` |
| 加或改一个研究项目 | `data/research.js` |
| 加一篇论文或海报 | `data/publications.js` |
| 加照片 | `data/photos.js`（先跑压缩脚本，见下） |

`assets/js/site.js` 是渲染逻辑，正常情况下不用动它。

### 加一条 news 的完整例子

打开 `data/news.js`，在 `const NEWS = [` 下面加：

```js
  { date: "2026.10", html: "Poster presented at <strong>SfN 2026</strong>, San Diego." },
```

存盘，push，完事。`html` 里可以写链接：`<a href=\"https://...\">abstract</a>`。

### 加照片

1. 把照片丢进 `assets/img/photos/`
2. 在网站根目录跑：`python3 tools/optimize_photos.py`
   （压到长边 1600px，自动生成 `thumbs/` 缩略图，并打印出可以直接粘贴的代码）
3. 把打印出来的行粘进 `data/photos.js`，补上 `alt`、`caption`、`tags`

标签栏显示什么，由 `data/photos.js` 顶部的 `PHOTO_TAGS` 决定。

### 换 CV

把新 PDF 覆盖到 `cv/` 下，保持文件名一致就不用改任何代码。

---

## 本地预览

**不要**直接双击 html 文件（部分浏览器会拦本地脚本）。在网站根目录跑：

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。`Ctrl-C` 停止。

---

## 上线 / 更新

```bash
git add -A
git commit -m "add SNE poster"
git push
```

GitHub Pages 会自动重新部署，约 1 分钟后 <https://nicoledeng.github.io> 就是新的了。
没看到变化就 hard refresh（Mac: `Cmd-Shift-R`）。

---

## 目录结构

```
index.html          About + News
research.html       研究项目
publications.html   论文与海报
photography.html    摄影
404.html            找不到页面时显示

data/               ← 平时只改这里
assets/css/         样式（配色改 style.css 顶部的 :root 变量）
assets/js/          渲染逻辑
assets/img/         头像、项目配图、照片
cv/                 CV PDF
tools/              照片压缩脚本
```

## 改配色

`assets/css/style.css` 最上面的 `:root` 块。改 `--accent` 一个值，全站链接、标签、
强调色一起变。深色模式的对应值在下面的 `@media (prefers-color-scheme: dark)` 里。

## 以后想用自定义域名

1. 买域名（Namecheap / Cloudflare，约 $12/年）
2. 在网站根目录建一个叫 `CNAME` 的文件，内容就一行：`weichundeng.com`
3. 在域名商那里加 4 条 A 记录指向 `185.199.108.153`、`185.199.109.153`、
   `185.199.110.153`、`185.199.111.153`，以及一条 `www` 的 CNAME 指向 `nicoledeng.github.io`
4. 仓库 Settings → Pages 里填上域名，勾选 Enforce HTTPS
