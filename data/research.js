/* =============================================================================
   research.js — 研究页内容。

   结构跟着 Nicole 自己的研究框架图走：中心是 neural mechanisms of affective
   experience，四个外圈是四条进路。RESEARCH_GROUPS 的顺序 = 页面顺序（I–IV 自动编号），
   按框架图从正上方顺时针排（Decisions → Affect–cognition → Representation → Methods）。

   内容以 Notion 页「个人网站content」第 4 节为准，2026-09-17 同步。
   ========================================================================== */

const RESEARCH_FIGURE = {
  src: "assets/img/research/framework.png",
  alt: "Research framework: neural mechanisms of affective experience at the centre, " +
       "surrounded by decisions and behavior, affect–cognition interactions, " +
       "neural representation of affect, and fMRI methods and statistical modeling",
  caption: "How the four threads fit together."
};

const RESEARCH_GROUPS = [
  {
    heading: "Decisions and behavior",
    blurb:
      "How affective responses translate into what people choose, share, and buy — " +
      "and whether brain activity measured in a scanner holds up against outcomes recorded elsewhere.",
    projects: [
      {
        title: "Affective and neural contributions to news sharing",
        status: "Manuscript in progress",
        question:
          "How are affective responses to news represented in the brain, and how do they contribute to decisions about what people share?",
        body: [
          "Participants read real news headlines in the scanner and decided which stories they wanted to read more about and which they would repost. I examine how neural responses during news consumption vary with self-reported valence, arousal, and positive and negative affect (PA and NA) using parametric modulation.",
          "The analysis is motivated by the Affect-Integration-Motivation (AIM) framework (<a href=\"https://pubmed.ncbi.nlm.nih.gov/25873038/\" target=\"_blank\" rel=\"noopener\">Samanez-Larkin &amp; Knutson, 2015</a>), with a focus on the nucleus accumbens (NAcc), medial prefrontal cortex (MPFC), and anterior insula, alongside regions implicated in social and self-referential processing (<a href=\"https://academic.oup.com/scan/article/18/1/nsad013/7069077\" target=\"_blank\" rel=\"noopener\">Scholz, Baek, &amp; Falk, 2023</a>). Spatial similarity between the resulting whole-brain maps and Neurosynth meta-analytic maps for 50 psychological terms provides converging evidence for these findings.",
          "I also compare affective estimates derived from three approaches: participants’ self-reported ratings, dictionary-based sentiment analysis (<a href=\"https://github.com/MikeThelwall/SentiStrength\" target=\"_blank\" rel=\"noopener\">SentiStrength</a>), and LLM-based ratings (GPT-4o)."
        ],
        tags: ["AFNI", "Hierarchical regression", "Parametric modulation", "Neurosynth",
               "Sentiment analysis", "LLM-based annotation"],
        links: []
      },
      {
        title: "Neural responses and aggregate demand",
        status: "Manuscript submitted",
        question:
          "Can neural responses predict what individuals choose — and reveal information about future behavior and aggregate demand that behavioral measures alone do not capture?",
        body: [
          "This line of work examines how neural responses during decision-making relate to behavior across multiple scales. At the individual level, I test whether neural responses to vehicles predict participants’ choices, including purchases measured longitudinally two years later, and when neural measures provide predictive information beyond participants’ stated preferences and other behavioral measures. At the aggregate level, I ask whether brain responses from a relatively small group can forecast broader market demand for vehicles and movies beyond behavioral measures and time-series benchmarks (ARIMA/SARIMA). The work is supported by the <a href=\"https://www.tri.global/our-work/human-centered-ai\" target=\"_blank\" rel=\"noopener\">Toyota Research Institute</a>."
        ],
        tags: ["AFNI", "FSL FLIRT", "Hierarchical regression", "Cross-validated classification",
               "Parametric modulators", "ARIMA", "Out-of-sample forecasting"],
        links: []
      }
    ]
  },

  {
    heading: "Affect–cognition interactions",
    blurb:
      "How cognitive processes shape affective responses — and how these interactions are " +
      "represented in the brain across contexts.",
    projects: [
      {
        title: "A neural signature of emotion regulation, and what it represents",
        status: "In progress",
        question:
          "Can a neural signature of reappraisal success generalize across independent datasets, and does it relate to how habitually people use reappraisal in daily life?",
        body: [
          "I derive a multivariate neural signature of reappraisal success and test how well it generalizes out of sample, across independent datasets and task contexts.",
          "I am also examining whether the expression of this neural signature is associated with participants’ habitual use of cognitive reappraisal in everyday life, asking whether the neural representation captures not only momentary regulation during the task, but also more stable reappraisal tendencies. The next step is to test generalization across stimulus formats by training the signature on static images and evaluating whether it transfers to dynamic stimuli."
        ],
        tags: ["MVPA", "Cross-dataset generalization", "Individual differences", "CANlab tools"],
        links: []
      }
    ]
  },

  {
    heading: "Neural representation of affect",
    blurb:
      "How affective experience is organized in the brain, and how that organization differs " +
      "between people and across the lifespan.",
    projects: [
      {
        title: "Grey matter, positivity bias, and anxiety across the lifespan",
        status: "Analysis",
        question:
          "Does the structure of the amygdala and hippocampus track how positively people see the world as they age?",
        body: [
          "Using the CamCAN lifespan sample, I estimate grey matter density in the amygdala and hippocampus with FSL FAST partial-volume maps and FreeSurfer ROI masks.",
          "Partial correlations relate that structure to positivity bias, anxiety, and an affective-experience composite, with analyses split by age group to look for lifespan differences."
        ],
        tags: ["FSL FAST", "FreeSurfer", "CamCAN", "Partial correlation", "HPC cluster"],
        links: []
      }
    ]
  },

  {
    heading: "fMRI methods and statistical modeling",
    // 这一组没有独立项目，用几段话代替项目卡
    note: [
      "Every thread above rests on the same toolkit, and building it is part of the research.",
      "I develop AFNI-based GLM pipelines with parametric modulators; whole-brain multivariate decoding and neural signature development (SVM, lasso-PCR) with cross-validation, permutation testing, and bootstrap inference; decomposition methods that separate what a brain region’s average activity carries from what the finer pattern within it carries; pair-wise inter-subject correlation (ISC) on naturalistic data; and time-series models as forecasting benchmarks.",
      "In graduate school, I hope to deepen this methodological training while pursuing more fundamental questions about how the brain represents affective states: for instance, at what levels of neural organization affective information is represented, how we can design tasks that better capture and distinguish these signals, and which aspects of their neural representation generalize across people, tasks, and samples."
    ],
    tags: ["AFNI", "FSL", "FreeSurfer", "CANlab tools", "SVM", "lasso-PCR", "ISC", "Python", "R", "HPC"]
  }
];
