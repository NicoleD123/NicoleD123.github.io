/* =============================================================================
   publications.js — 论文与海报。

   type 可选值: "preprint" | "journal" | "poster" | "inprep"
   分组标题和顺序在下面 PUB_GROUPS 里定义。
   作者串里用 {me} 标记自己的名字，渲染时会自动加粗。
   ========================================================================== */

const PUB_GROUPS = [
  { type: "journal",  label: "Journal articles" },
  { type: "preprint", label: "Preprints" },
  { type: "poster",   label: "Conference posters" },
  { type: "inprep",   label: "In preparation" }
];

const PUBLICATIONS = [
  // TODO: 全部替换成真实条目。下面两条是格式示例，上线前必须删掉或改对。
  {
    type: "poster",
    authors: "{me}, & Knutson, B.",
    title: "Affective and neural contributions to news sharing",
    venue: "Society for Neuroeconomics (SNE) Annual Meeting",
    year: "2026",
    links: [
      // { label: "Poster (PDF)", href: "assets/pdf/sne2026.pdf" },
      // { label: "Abstract", href: "#" }
    ]
  },
  {
    type: "inprep",
    authors: "{me}, & Knutson, B.",
    title: "Neuroforecasting aggregate vehicle demand",
    venue: "Manuscript in preparation",
    year: "2026",
    links: []
  }
];

// 用于给 {me} 加粗
const ME_NAME = "Deng, W. N.";
