/* =============================================================================
   research.js — 研究页内容。

   结构跟着 Nicole 自己的研究框架图走：中心是 neural mechanisms of affective
   experience，四个外圈是四条进路。RESEARCH_GROUPS 的顺序 = 页面顺序，
   按框架图从正上方顺时针排（Decisions → Affect–cognition → Representation → Methods）。

   内容以 Notion 页「个人网站content」为准，2026-09-14 同步。
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
          "Why do people pass some news along and let the rest go — and can neural responses help us anticipate what they will share?",
        body: [
          "Participants read real news headlines in the scanner and decided which stories they wanted to read more about and which they would repost. I examine neural activity during the reading period using parametric modulators of self-reported valence, arousal, and positive and negative affect (PA and NA).",
          "The analysis is motivated by the Affect-Integration-Motivation (AIM) framework (<a href=\"https://pubmed.ncbi.nlm.nih.gov/25873038/\">Samanez-Larkin &amp; Knutson, 2015</a>), with a focus on the nucleus accumbens (NAcc), medial prefrontal cortex (MPFC), and anterior insula, alongside regions implicated in social and self-referential processing, with masks adapted from Neurosynth.",
          "I also compare affective estimates derived from three approaches: participants\u2019 self-reported ratings, dictionary-based sentiment analysis (SentiStrength), and LLM-based ratings (GPT-4o)."
        ],
        tags: ["AFNI", "Hierarchical regression", "Parametric modulation", "Neurosynth",
               "Sentiment analysis", "LLM-based annotation"],
        links: []
      },
      {
        title: "Neural responses and aggregate demand",
        status: "Manuscript submitted",
        question:
          "Can neural responses from a small group tell us something about what a much larger market will do next?",
        body: [
          "This line of work asks whether brain responses to vehicle images and movie trailers track aggregate market demand beyond the behavioral and time-series measures (ARIMA/SARIMA) already available. The work is supported by the Toyota Research Institute."
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
      "What happens when cognition acts on affect — and whether the neural markers we build for it " +
      "survive a change of stimulus.",
    projects: [
      {
        title: "A neural signature of emotion regulation, and what it represents",
        status: "In progress",
        question:
          "Can a neural signature of reappraisal success generalize across independent datasets, and does it relate to how habitually people use reappraisal in daily life?",
        body: [
          "I derive a multivariate neural signature of reappraisal success and test how well it generalizes out of sample, across independent datasets and task contexts.",
          "I am also examining whether the expression of this neural signature is associated with participants\u2019 habitual use of cognitive reappraisal in everyday life, asking whether the neural representation captures not only momentary regulation during the task, but also more stable reappraisal tendencies.",
          "The next step is a directional test of stimulus format: train the signature on static images, then ask whether it still holds for dynamic stimuli."
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
      "I develop AFNI-based GLM pipelines with parametric modulators; whole-brain multivariate decoding and neural signature development (SVM, lasso-PCR) with cross-validation, permutation testing, and bootstrap inference; information-preserving decompositions for testing what spatial averaging and brain parcellation remove from fMRI patterns; inter-subject correlation for naturalistic data; and time-series models as forecasting benchmarks.",
      "In graduate school, I hope to deepen my methodological training and explore more fundamental questions about how we represent, validate, and extract generalizable information from neural data."
    ],
    tags: ["AFNI", "FSL", "FreeSurfer", "CANlab tools", "SVM", "lasso-PCR", "ISC", "Python", "R", "HPC"]
  }
];
