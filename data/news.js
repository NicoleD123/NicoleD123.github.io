/* =============================================================================
   news.js — News 时间线。最新的放最上面。
   加一条 = 在数组顶部加一行。html 字段里可以写 <a href="...">链接</a>，
   外部链接会自动在新标签页打开，不用手写 target。
   内容来自 Notion「个人网站content」页。
   ========================================================================== */

const NEWS = [
  {
    date: "April 2026",
    html:
      "I presented my first-author project at the <strong>Social and Affective Neuroscience Society (SANS)</strong> " +
      "Annual Meeting in San Diego!"
  },
  {
    date: "October 2025",
    html:
      "Two of my projects, including my first-author work, were presented at the " +
      "<strong>Society for Neuroeconomics (SNE)</strong> Annual Meeting in Boston, and I gave a talk at " +
      "Stanford's <strong>Affective Science Seminar</strong>!"
  },
  {
    date: "June 2025",
    html:
      "I presented our collaborative work with " +
      "<a href=\"https://psychology.stanford.edu/people/golijeh-golarai\">Dr. Golijeh Golarai</a> at the " +
      "<strong>Bay Area Affective Science (BAAS)</strong> Meeting at Stanford!"
  },
  {
    date: "June 2024",
    html:
      "I joined the <a href=\"https://spanlab.stanford.edu\">SPAN Lab</a> at Stanford as a Research " +
      "Coordinator and Lab Manager, working with " +
      "<a href=\"https://stanford.edu/~knutson/\">Dr. Brian Knutson</a>."
  },
  {
    date: "May 2024",
    html:
      "I graduated from <strong>Wesleyan University</strong> with B.A.s in Psychology and " +
      "Neuroscience &amp; Behavior and a minor in Data Analysis. I'm incredibly grateful to everyone who made " +
      "my undergraduate years so meaningful."
  },
  {
    date: "May 2024",
    html:
      "I wrapped up my undergraduate capstone on event boundaries and memory and shared the work in an invited " +
      "talk at Wesleyan's Data Insight Talk Series. Many thanks to " +
      "<a href=\"https://www.wesleyan.edu/academics/faculty/yezzyat/profile.html\">Dr. Youssef Ezzyat</a> and " +
      "<a href=\"https://www.rkabacoff.com/\">Dr. Robert Kabacoff</a> for their mentorship along the way!"
  },
  {
    date: "April 2024",
    html:
      "I presented my capstone research on the neural mechanisms of event boundaries and memory at the " +
      "<strong>NEURON Conference</strong> — my very first conference!"
  },
  {
    date: "Summer 2023",
    html:
      "I was awarded Wesleyan's Adelphic Educational Funds summer grant to support my research at the " +
      "<a href=\"https://www.nki.rfmh.org\">Nathan Kline Institute</a>, where I had the wonderful opportunity to " +
      "work with <a href=\"https://www.nki.rfmh.org/people/anna-mackay-brandt-ph-d/\">Dr. Anna MacKay-Brandt</a>."
  },
  {
    date: "September 2022",
    html:
      "I joined <a href=\"https://www.wesleyan.edu/academics/faculty/yezzyat/profile.html\">Dr. Youssef Ezzyat</a>'s " +
      "<a href=\"https://ezzyatlab.research.wesleyan.edu/people/\">Computational Memory Lab</a> at Wesleyan, where " +
      "I began studying how the brain organizes memories across event boundaries. This work would eventually grow " +
      "into my undergraduate capstone!"
  },
  {
    date: "Summer 2022",
    html:
      "I began my very first paid research experience through Wesleyan's Quantitative Analysis Center " +
      "Apprenticeship! I'm especially thankful to the QAC and " +
      "<a href=\"https://www.wesleyan.edu/about/directory/profile.html?id=anegrete\">Dr. Andrea Negrete</a> for " +
      "giving me such an encouraging start to my research journey."
  }
];

// 首页默认显示的条数，超出部分点 "show all" 展开
const NEWS_VISIBLE = 6;
