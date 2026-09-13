/* =============================================================================
   research.js — 研究页内容。

   结构跟着 Nicole 自己的研究框架图走：中心是 neural mechanisms of affective
   experience，四个外圈是四条进路。RESEARCH_GROUPS 的顺序 = 页面顺序，
   目前按框架图从正上方顺时针排（Decisions → Affect–cognition →
   Representation → Methods）。

   ⚠️ 每个项目的 question / body 仍是 Claude 拟的草稿，措辞请按自己的语气改。
   ========================================================================== */

const RESEARCH_FIGURE = {
  src: "assets/img/research/framework.png",
  alt: "Research framework: neural mechanisms of affective experience at the centre, " +
       "surrounded by decisions and behavior, affect–cognition interactions, " +
       "neural representation of affect, and fMRI methods and computational modeling",
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
        status: "In preparation",
        question:
          "Why do people pass some news along and let the rest go — and can the brain tell us before the behavior does?",
        body: [
          "Participants read actual news headlines in the scanner and decided what to read more of and what to repost. I model the reading period with parametric modulators for self-reported valence, arousal, and positive and negative affect, framed around the AIM account of anticipatory affect (NAcc, MPFC, anterior insula) together with social and self-related regions."
        ],
        tags: ["AFNI", "3dDeconvolve", "Parametric modulators", "R", "Neurosynth"],
        links: []
      },
      {
        title: "Neural responses and aggregate demand",
        status: "Manuscript in prep",
        question:
          "Can neural responses from a small group anticipate what a market full of strangers will do — and if so, where in the brain does that signal live?",
        body: [
          "This line of work asks whether brain responses to vehicle images and movie trailers track aggregate market demand beyond the behavioral and time-series measures (ARIMA/SARIMA) already available. The work is supported by the Toyota Research Institute."
        ],
        tags: ["AFNI", "ARIMA / SARIMA", "R", "Out-of-sample prediction"],
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
          "I am also examining whether expression of this neural signature is associated with participants' habitual use of cognitive reappraisal in everyday life, asking whether the neural representation captures not only momentary regulation during the task, but also more stable reappraisal tendencies.",
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
          "Using the CamCAN lifespan sample, I estimate grey matter density in amygdala and hippocampus with FSL FAST partial-volume maps and FreeSurfer ROI masks.",
          "Partial correlations relate that structure to positivity bias, anxiety, and an affective-experience composite, split by age group to look for lifespan differences."
        ],
        tags: ["FSL FAST", "FreeSurfer", "CamCAN", "Partial correlation", "HPC cluster"],
        links: []
      }
    ]
  },

  {
    heading: "fMRI methods and computational modeling",
    // 这一组没有独立项目，是贯穿前三组的方法线，所以用一段话代替项目卡
    note:
      "Every thread above rests on the same toolkit, and building it is part of the research. " +
      "I develop AFNI-based GLM pipelines with parametric modulators, whole-brain multivariate " +
      "decoding and signature development (SVM, lasso-PCR) with cross-validation and permutation " +
      "testing, inter-subject correlation for naturalistic data, and time-series models as " +
      "benchmarks. I also write the documentation and checks that let someone else re-run any of it.",
    tags: ["AFNI", "FSL", "FreeSurfer", "CANlab tools", "SVM", "lasso-PCR", "ISC", "Python", "R", "HPC"]
  }
];
