/* =============================================================================
   site.js — 渲染逻辑。正常维护网站不需要动这个文件，只改 data/ 里的内容。
   ========================================================================== */

(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const page = document.body.dataset.page;

  const el = (tag, props, children) => {
    const node = document.createElement(tag);
    Object.assign(node, props || {});
    (children || []).forEach((c) => node.append(c));
    return node;
  };

  /* ------------------------------------------------------------- sidebar -- */

  function renderSidebar() {
    const host = $("#sidebar");
    if (!host || typeof SITE === "undefined") return;

    const img = el("img", {
      className: "portrait",
      src: SITE.portrait,
      alt: SITE.portraitAlt || SITE.name,
      width: 128,
      height: 128,
      loading: "eager"
    });
    img.addEventListener("error", () => {
      img.src =
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
            '<rect width="128" height="128" fill="#e7eef6"/>' +
            '<circle cx="64" cy="50" r="21" fill="#b9cbde"/>' +
            '<path d="M22 122c6-25 22-37 42-37s36 12 42 37z" fill="#b9cbde"/>' +
          "</svg>"
        );
    });
    host.append(img);

    // 中文名放在 h1 里（视觉上还是独立一行），搜索引擎会把它当成同一个人的名字收录
    const heading = el("h1", { className: "sidebar-name" });
    heading.append(document.createTextNode(SITE.name));
    if (SITE.nameAlt) {
      const alt = el("span", { className: "sidebar-name-alt", textContent: SITE.nameAlt });
      alt.lang = "zh-Hans";
      heading.append(alt);
    }
    host.append(heading);

    const role = el("p", { className: "sidebar-role" });
    role.append(el("strong", { textContent: SITE.role }));
    if (SITE.affiliation) {
      role.append(document.createElement("br"));
      role.append(document.createTextNode(SITE.affiliation));
    }
    host.append(role);

    // 导航渲染到顶栏（#topnav）；页面上没有顶栏时退回侧边栏，保证不会丢导航
    const navHost = $("#topnav") || host;
    NAV.forEach((item) => {
      const a = el("a", { href: item.href, textContent: item.label });
      if (item.page === page) a.setAttribute("aria-current", "page");
      navHost.append(a);
    });
    if (navHost === host) host.append(el("div"));

    const meta = el("div", { className: "sidebar-meta" });

    if (SITE.school) {
      const line = el("p", { className: "sidebar-school" });
      if (SITE.schoolUrl) {
        line.append(
          el("a", {
            href: SITE.schoolUrl,
            textContent: SITE.school,
            target: "_blank",
            rel: "noopener"
          })
        );
      } else {
        line.textContent = SITE.school;
      }
      meta.append(line);
    }
    if (SITE.location) meta.append(el("p", { textContent: SITE.location }));

    if (SITE.email) {
      const mail = el("p", { className: "sidebar-email" });
      mail.append(el("a", { href: "mailto:" + SITE.email, textContent: SITE.email }));
      meta.append(mail);
    }

    if ((SITE.links || []).length) {
      const links = el("p", { className: "sidebar-links" });
      SITE.links.forEach((l) => {
        const a = el("a", { href: l.href, textContent: l.label });
        if (/^https?:/.test(l.href)) { a.target = "_blank"; a.rel = "noopener"; }
        links.append(a);
      });
      meta.append(links);
    }

    if (meta.childNodes.length) host.append(meta);
  }

  /* ---------------------------------------------------------------- news -- */

  function renderNews() {
    const host = $("#news");
    if (!host || typeof NEWS === "undefined") return;

    const limit = typeof NEWS_VISIBLE === "number" ? NEWS_VISIBLE : 8;
    const list = el("ul", { className: "news-list" });

    NEWS.forEach((item, i) => {
      const li = el("li", { className: "news-item" });
      if (i >= limit) li.hidden = true;
      li.append(el("span", { className: "news-date", textContent: item.date }));
      const text = el("p", { className: "news-text", innerHTML: item.html });
      // 外部链接一律新标签页打开，免得把人从站上带走
      text.querySelectorAll('a[href^="http"]').forEach((a) => {
        a.target = "_blank";
        a.rel = "noopener";
      });
      li.append(text);
      list.append(li);
    });
    host.append(list);

    if (NEWS.length > limit) {
      const btn = el("button", {
        className: "news-toggle",
        type: "button",
        textContent: "Show all " + NEWS.length + " updates"
      });
      let open = false;
      btn.addEventListener("click", () => {
        open = !open;
        list.querySelectorAll(".news-item").forEach((li, i) => {
          if (i >= limit) li.hidden = !open;
        });
        btn.textContent = open ? "Show less" : "Show all " + NEWS.length + " updates";
      });
      host.append(btn);
    }
  }

  /* ------------------------------------------------------------ research -- */

  function renderResearch() {
    const host = $("#research");
    if (!host || typeof RESEARCH_GROUPS === "undefined") return;

    // 框架图放在所有分组之前
    const figHost = $("#research-figure");
    if (figHost && typeof RESEARCH_FIGURE !== "undefined" && RESEARCH_FIGURE.src) {
      const fig = el("figure", { className: "framework" });
      fig.append(el("img", {
        src: RESEARCH_FIGURE.src,
        alt: RESEARCH_FIGURE.alt || "",
        loading: "eager"
      }));
      if (RESEARCH_FIGURE.caption) {
        fig.append(el("figcaption", { textContent: RESEARCH_FIGURE.caption }));
      }
      figHost.append(fig);
    }

    const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

    RESEARCH_GROUPS.forEach((group, i) => {
      const section = el("section", { className: "theme" });
      const h = el("h2", { className: "theme-heading" });
      h.append(el("span", { className: "theme-num", textContent: ROMAN[i] || String(i + 1) }));
      h.append(el("span", { className: "theme-title", textContent: group.heading }));
      section.append(h);
      if (group.blurb) {
        section.append(el("p", { className: "theme-blurb", textContent: group.blurb }));
      }
      // note 支持字符串或字符串数组（多段）
      if (group.note) {
        const notes = Array.isArray(group.note) ? group.note : [group.note];
        notes.forEach((n) => section.append(el("p", { className: "theme-note", textContent: n })));
      }
      if (group.tags && group.tags.length) {
        const ul = el("ul", { className: "tags" });
        group.tags.forEach((t) => ul.append(el("li", { className: "tag", textContent: t })));
        section.append(ul);
      }
      (group.projects || []).forEach((p) => section.append(projectNode(p)));
      host.append(section);
    });
  }

  function projectNode(p) {
    {
      const art = el("article", { className: "project" });

      const head = el("div", { className: "project-head" });
      head.append(el("h3", { className: "project-title", textContent: p.title }));
      if (p.status) head.append(el("span", { className: "status", textContent: p.status }));
      art.append(head);

      if (p.question) {
        art.append(el("p", { className: "project-question", textContent: p.question }));
      }

      const body = el("div", { className: "project-body" });
      (p.body || []).forEach((para) => body.append(el("p", { innerHTML: para })));
      art.append(body);

      if (p.image && p.image.src) {
        const fig = el("figure", { className: "project-figure" });
        fig.append(el("img", { src: p.image.src, alt: p.image.alt || "", loading: "lazy" }));
        if (p.image.caption) fig.append(el("figcaption", { textContent: p.image.caption }));
        art.append(fig);
      }

      if (p.tags && p.tags.length) {
        const ul = el("ul", { className: "tags" });
        p.tags.forEach((t) => ul.append(el("li", { className: "tag", textContent: t })));
        art.append(ul);
      }

      if (p.links && p.links.length) {
        const div = el("div", { className: "project-links" });
        p.links.forEach((l) => div.append(el("a", { href: l.href, textContent: l.label })));
        art.append(div);
      }

      return art;
    }
  }

  /* -------------------------------------------------------- publications -- */

  function authorsNode(str) {
    const p = el("p", { className: "pub-authors" });
    const parts = String(str).split("{me}");
    parts.forEach((chunk, i) => {
      if (i > 0) p.append(el("span", { className: "me", textContent: ME_NAME }));
      p.append(document.createTextNode(chunk));
    });
    return p;
  }

  function renderPublications() {
    const host = $("#publications");
    if (!host || typeof PUBLICATIONS === "undefined") return;

    let rendered = 0;

    PUB_GROUPS.forEach((group) => {
      const items = PUBLICATIONS.filter((p) => p.type === group.type);
      if (!items.length) return;
      rendered += items.length;

      const section = el("section", { className: "section" });
      section.append(el("h2", { className: "section-heading", textContent: group.label }));

      const ul = el("ul", { className: "pub-list" });
      items.forEach((p) => {
        const li = el("li", { className: "pub" });
        li.append(el("h3", { className: "pub-title", textContent: p.title }));
        li.append(authorsNode(p.authors));
        li.append(
          el("p", {
            className: "pub-venue",
            textContent: [p.venue, p.year].filter(Boolean).join(", ")
          })
        );
        if (p.links && p.links.length) {
          const div = el("div", { className: "pub-links" });
          p.links.forEach((l) => div.append(el("a", { href: l.href, textContent: l.label })));
          li.append(div);
        }
        ul.append(li);
      });

      section.append(ul);
      host.append(section);
    });

    if (!rendered) {
      host.append(el("p", { className: "photo-empty", textContent: "Coming soon." }));
    }
  }

  /* --------------------------------------------------------- photography -- */

  function renderPhotos() {
    const grid = $("#photo-grid");
    if (!grid || typeof PHOTOS === "undefined") return;

    if (!PHOTOS.length) {
      const n = typeof PHOTO_PLACEHOLDERS === "number" ? PHOTO_PLACEHOLDERS : 4;
      for (let i = 0; i < n; i++) {
        const fig = el("figure", { className: "photo" });
        fig.append(el("div", { className: "photo-cell is-placeholder", textContent: "photo " + (i + 1) }));
        const cap = el("figcaption", { className: "photo-caption" });
        cap.append(el("span", { className: "photo-title", textContent: "Title" }));
        cap.append(el("span", { className: "photo-place", textContent: "Place, Season Year" }));
        fig.append(cap);
        grid.append(fig);
      }
      const note = $("#photo-note");
      if (note) note.hidden = false;
      return;
    }

    const filters = $("#photo-filters");
    const tags = typeof PHOTO_TAGS !== "undefined" ? PHOTO_TAGS : ["All"];
    let active = tags[0] || "All";
    let visible = [];

    // 每张照片只建一次 DOM，之后布局只是把它们搬到不同的栏里
    const buttons = [];
    const figures = PHOTOS.map((photo, index) => {
      const fig = el("figure", { className: "photo" });

      const btn = el("button", { className: "photo-cell", type: "button" });
      btn.setAttribute("aria-label", "Open photo: " + (photo.title || photo.alt || "untitled"));
      const img = el("img", {
        src: photo.thumb || photo.src,
        alt: photo.alt || photo.title || "",
        loading: "lazy",
        decoding: "async"
      });
      // 先占好位，图片加载时不会跳动
      if (photo.ratio) img.style.aspectRatio = String(photo.ratio);
      btn.append(img);
      btn.addEventListener("click", () => openLightbox(index));
      fig.append(btn);

      if (photo.title || photo.place) {
        const cap = el("figcaption", { className: "photo-caption" });
        if (photo.title) cap.append(el("span", { className: "photo-title", textContent: photo.title }));
        if (photo.place) cap.append(el("span", { className: "photo-place", textContent: photo.place }));
        fig.append(cap);
      }

      buttons[index] = btn;
      return fig;
    });

    function columnCount() {
      const w = window.innerWidth;
      return w <= 620 ? 1 : w <= 900 ? 2 : 3;
    }

    let currentCols = 0;

    /* 逐张放进"当前最矮"的那一栏，平手时取最左。
       效果：照片按数组顺序从左往右、从上往下排，时间不会一列一列地跳。 */
    function layout() {
      const n = columnCount();
      currentCols = n;

      visible = PHOTOS
        .map((_, i) => i)
        .filter((i) => active === "All" || (PHOTOS[i].tags || []).includes(active));

      grid.textContent = "";
      const cols = [];
      const heights = [];
      for (let c = 0; c < n; c++) {
        const col = el("div", { className: "photo-col" });
        grid.append(col);
        cols.push(col);
        heights.push(0);
      }

      visible.forEach((i) => {
        let target = 0;
        for (let c = 1; c < n; c++) {
          if (heights[c] < heights[target] - 0.0001) target = c;
        }
        cols[target].append(figures[i]);
        // 相对栏宽的高度：图片本身 + 两行说明文字
        heights[target] += 1 / (PHOTOS[i].ratio || 1) + 0.3;
      });

      const empty = $("#photo-empty");
      if (empty) empty.hidden = visible.length > 0;
    }

    if (filters && tags.length > 1) {
      tags.forEach((tag) => {
        const b = el("button", { className: "filter", type: "button", textContent: tag });
        b.dataset.tag = tag;
        b.setAttribute("aria-pressed", String(tag === active));
        b.addEventListener("click", () => {
          active = tag;
          filters.querySelectorAll(".filter").forEach((x) =>
            x.setAttribute("aria-pressed", String(x.dataset.tag === tag))
          );
          layout();
        });
        filters.append(b);
      });
    }

    layout();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (columnCount() !== currentCols) layout();
      }, 150);
    });

    /* ------------------------------------------------------------ lightbox */

    let box = null;
    let current = 0;

    function show(index) {
      current = index;
      const photo = PHOTOS[index];
      const img = $("img", box);
      img.src = photo.src;
      img.alt = photo.alt || photo.title || "";

      const cap = $(".lightbox-caption", box);
      cap.textContent = "";
      if (photo.title) cap.append(el("em", { textContent: photo.title }));
      if (photo.place) {
        if (photo.title) cap.append(document.createTextNode("  ·  "));
        cap.append(document.createTextNode(photo.place));
      }
    }

    function step(delta) {
      if (!visible.length) return;
      const at = visible.indexOf(current);
      show(visible[(at + delta + visible.length) % visible.length]);
    }

    function onKey(e) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }

    function openLightbox(index) {
      if (!box) {
        box = el("div", { className: "lightbox" });
        box.setAttribute("role", "dialog");
        box.setAttribute("aria-modal", "true");
        box.setAttribute("aria-label", "Photo viewer");
        box.append(el("img", { src: "", alt: "" }));
        box.append(el("p", { className: "lightbox-caption" }));

        const mk = (cls, label, fn) => {
          const b = el("button", { className: "lightbox-btn " + cls, type: "button", innerHTML: label });
          b.setAttribute("aria-label", label === "×" ? "Close" : label === "‹" ? "Previous" : "Next");
          b.addEventListener("click", (e) => { e.stopPropagation(); fn(); });
          box.append(b);
        };
        mk("lightbox-close", "×", closeLightbox);
        mk("lightbox-prev", "‹", () => step(-1));
        mk("lightbox-next", "›", () => step(1));

        box.addEventListener("click", (e) => { if (e.target === box) closeLightbox(); });
      }
      document.body.append(box);
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
      show(index);
      $(".lightbox-close", box).focus();
    }

    function closeLightbox() {
      if (box && box.parentNode) box.remove();
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (buttons[current]) buttons[current].focus();
    }
  }

  /* ---------------------------------------------------------------- init -- */

  renderSidebar();
  renderNews();
  renderResearch();
  renderPublications();
  renderPhotos();

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
