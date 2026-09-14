/* =============================================================================
   site.js — 全站基本信息。改这里，四个页面的侧边栏一起变。
   带 TODO: 的行是需要 Nicole 确认/替换的占位内容。
   ========================================================================== */

const SITE = {
  name: "Weichun Nicole Deng",
  // 想在名字下面显示中文名就填在这里，不需要就设成 ""
  nameAlt: "邓维淳",

  role: "Research Coordinator & Lab Manager",
  affiliation: "@spanlab, department of psychology",

  // 侧边栏底部的基本信息。schoolUrl 填了的话，"Stanford University" 就会变成可点的链接。
  school: "Stanford University",
  schoolUrl: "https://profiles.stanford.edu/weichun-deng",
  location: "Palo Alto, CA",

  email: "ndeng01@stanford.edu",

  // 头像：把文件放到 assets/img/ 下，改成对应文件名即可
  portrait: "assets/img/profile.jpg",
  portraitAlt: "Portrait of Weichun Nicole Deng",

  // 侧边栏外链。想加回 CV / Google Scholar / ORCID / GitHub，照格式加一行就行。
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nicole-deng-7b87b3229/" }
  ],

  // 用于 <meta description> 和分享预览
  description:
    "Weichun Nicole Deng (邓维淳) — research coordinator at Stanford University, " +
    "studying affect, emotion regulation, and neuroforecasting of real-world behavior."
};

// 导航。把某一行删掉/注释掉，那个入口就从侧边栏消失（页面文件还在，随时可以恢复）。
const NAV = [
  { label: "About", href: "index.html", page: "about" },
  { label: "Research", href: "research.html", page: "research" },
  // { label: "Publications", href: "publications.html", page: "publications" },
  { label: "Photography", href: "photography.html", page: "photography" }
];
