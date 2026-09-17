// ---------------------------------------------------------------------------
// Full site content in ENGLISH. Mirrors content.es.js field by field so the
// UI can switch languages by swapping this whole "box". All facts are the
// same as the CV — this is a translation, not new content.
// ---------------------------------------------------------------------------

export const en = {
  meta: {
    htmlTitle: "Cyndi Silva Abanto — AI Engineer & Data Scientist",
  },

  nav: [
    { id: "inicio", label: "Overview" },
    { id: "sobre-mi", label: "About me" },
    { id: "experiencia", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "proyectos", label: "Projects" },
    { id: "investigacion", label: "Research" },
    { id: "contacto", label: "Contact & CV" },
    { id: "ai-chat", label: "AI Chat" },
  ],
  sidebarStatus: "Available for new projects",

  profile: {
    name: "Cyndi Silva Abanto",
    role: "AI Engineer · Data Scientist & Agentic Systems",
    degree: "B.Sc. in Industrial and Systems Engineering",
    location: "Lima, Peru",
    phone: "+51 916 702 985",
    email: "nabanto18@gmail.com",
    linkedin: "", // TODO: paste your LinkedIn URL
    github: "", // TODO: paste your GitHub URL
    summary: [
      "Data Scientist and AI Engineer with experience developing and integrating AI, LLM, and Computer Vision solutions. I've built end-to-end applications — from data ingestion and processing to model deployment and integration with vector databases and cloud services.",
      "Experienced in workflow automation and orchestration with LangGraph and NoCode platforms, API development with FastAPI and Flask, containerization with Docker, and experiment tracking and evaluation with MLflow.",
      "I complement my technical background with requirements management, Agile/Scrum methodologies, and technical training, helping multidisciplinary teams adopt AI solutions.",
      "International participation at CVPR 2026 and applied AI research projects.",
    ],
    traits: ["Proactive", "Disciplined", "Goal-oriented", "Communicative"],
    education: [
      {
        school: "Universidad de Piura (UDEP)",
        place: "Piura, Peru",
        title: "B.Sc. in Industrial and Systems Engineering",
        period: "2020 – 2025",
      },
      {
        school: "TECH Global University",
        place: "",
        title: "University Expert in Advanced Techniques in Computer Vision",
        period: "Jan. 2026 – Jun. 2026",
      },
    ],
    certifications: [
      { name: "Oracle Cloud Infrastructure AI Foundations Associate", date: "Jun. 2026" },
      {
        name: "Introduction to Deep Learning — NVIDIA Deep Learning Institute",
        date: "Feb. 2025",
      },
      {
        name: "Data Science — ONE Tech Foundation, Oracle Next Education & Alura Latam",
        date: "Jan. 2025 – Mar. 2026",
      },
    ],
  },

  hero: {
    lead: "I build AI systems end to end — from data ingestion and modeling to LLM agents, RAG, and production deployment.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },

  sectionTitles: {
    about: "About me",
    experience: "Experience",
    skills: "Skills & technologies",
    projects: "Projects",
    research: "Research & participation",
    contact: "Contact & CV",
    aiChat: "AI Chat",
  },

  about: {
    educationLabel: "Education",
    certificationsLabel: "Certifications",
  },

  experience: [
    {
      company: "Estación Científica Ramón Múgica",
      place: "Piura, Peru",
      role: "Junior Research Scientist",
      period: "Jan. 2026 – May 2026",
      bullets: [
        "Processed up to 15 TB of weather data to feed analysis and modeling pipelines using Python, Dask, PostgreSQL, and SQL Server, adding data-quality validation with Pydantic to improve data reliability.",
        "Automated the integration and updating of external sources by connecting NOAA APIs and Azure services, cutting the team's manual workload by roughly 30% (≈12 h/week).",
        "Developed Machine Learning solutions for prediction and anomaly detection, integrating pretrained Hugging Face models and time-series techniques.",
        "Implemented and evaluated predictive models, feeding results into analytical processes and Power BI reports to track outcomes.",
      ],
    },
    {
      company: "Universidad de Piura (UDEP)",
      place: "Piura, Peru",
      role: "Professional Intern — Project Management Office",
      period: "Jan. 2025 – Dec. 2025",
      bullets: [
        "Cut reference- and link-validation time in project reports from ~2 hours to ~2 minutes (98% less) by building AI agents with LangGraph and a pgvector + DeepSeek RAG system to automatically verify the documentary integrity of minutes, milestones, and scope.",
        "Automated status tracking for observation follow-ups across 10+ projects, designing a state flow with LangGraph (pending → under review → resolved → closed) that eliminated manual tracking in spreadsheets.",
        "Centralized tracking of indicators, risks, and milestones for academic and administrative projects, building Power BI and MS Project dashboards under PMI and Agile/Scrum methodologies, improving visibility for decision-making.",
        "Reduced manual administrative process time by approximately 30%, automating workflows with Excel VBA, Power Query, Power Apps, and Power Automate, and documenting requirements through use cases, UML, and flowcharts.",
      ],
    },
    {
      company: "Universidad de Piura (UDEP)",
      place: "Piura, Peru",
      role: "Teaching Assistant — Database Systems and Linear Algebra",
      period: "Mar. 2023 – Dec. 2024",
      bullets: [
        "Provided technical support to 120+ students on database design, SQL, relational modeling, and data analysis using MySQL.",
        "Led workshops and hands-on sessions on programming, databases, and linear algebra fundamentals, adapting technical concepts to different knowledge levels.",
        "Evaluated student solutions and gave structured feedback, strengthening students' ability to solve technical problems independently.",
      ],
    },
  ],

  skillGroups: [
    {
      category: "Generative AI & Agentic Systems",
      tone: "sky",
      items: [
        "LLMs",
        "Agentic AI",
        "RAG",
        "Tool Calling",
        "Prompt Engineering",
        "Embeddings & Semantic Search",
        "Fine-tuning / LoRA",
        "NLP",
        "OpenAI API",
        "Gemini",
      ],
    },
    {
      category: "Machine Learning & Computer Vision",
      tone: "orange",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers", "OpenCV"],
    },
    {
      category: "Software Engineering & APIs",
      tone: "sky",
      items: ["Python", "JavaScript", "FastAPI", "Flask", "REST APIs", "Microservices", "Docker", "Git/GitHub"],
    },
    {
      category: "Data & Cloud",
      tone: "orange",
      items: [
        "SQL",
        "PostgreSQL",
        "pgvector",
        "SQL Server",
        "MySQL",
        "Pandas / NumPy / Dask",
        "Microsoft Azure",
        "OCI",
        "AWS",
      ],
    },
    {
      category: "MLOps & Experimentation",
      tone: "sky",
      items: ["MLflow", "Experiment Tracking", "Model Evaluation", "Reproducibility"],
    },
    {
      category: "Management & Methodologies",
      tone: "orange",
      items: [
        "Agile / Scrum",
        "PMI",
        "Requirements Engineering",
        "Process Modeling",
        "Technical Documentation",
      ],
    },
  ],

  projects: [
    {
      id: "piuranet-precipitation",
      title: "Precipitation Forecasting with Deep Neural Networks",
      place: "Piura, Peru",
      period: "Jun. 2025 – May 2026",
      description:
        "Design, development, and evaluation of Deep Learning models for precipitation nowcasting (U-Net, Swin Transformer, ConvLSTM, cGAN, and diffusion models) on multidimensional weather-radar data, with preprocessing pipelines in Airflow and experiment tracking with MLflow. Results presented at the LatinX in AI Workshop @ CVPR 2026 and WiCV @ ECCV 2026.",
      tags: ["Deep Learning", "PyTorch", "Airflow", "MLflow", "Computer Vision"],
      visual: "radar",
      github: "",
      image: "",
    },
    {
      id: "biospace-nasa-space-apps",
      title: "BioSpace — NASA Space Apps Challenge",
      place: "",
      period: "Oct. 2025",
      description:
        "AI solution for classifying and analyzing space-biology research articles with SciBERT and BioMedBERT. Includes embeddings, semantic search, and a RAG system on pgvector, integrated with FastAPI, PostgreSQL, Docker, and Azure.",
      tags: ["RAG", "pgvector", "FastAPI", "Docker", "Azure"],
      visual: "space",
      github: "",
      image: "",
    },
    {
      id: "llm-rag-legal",
      title: "LLM & RAG for Legal Documents — Piura Judicial System",
      place: "",
      period: "Aug. 2023 – Dec. 2023",
      description:
        "LLM-based application for intelligent legal-document search, with a RAG pipeline (embeddings, semantic search, and context retrieval) and LoRA fine-tuning of an open-source LLM adapted to the legal domain. Integrated via REST APIs and a backend connected to a database.",
      tags: ["RAG", "LoRA", "Fine-tuning", "REST APIs"],
      visual: "legal",
      github: "",
      image: "",
    },
  ],
  projectsPage: {
    eyebrow: "Projects",
    title: "Projects",
    intro:
      "A selection of AI, data, and research projects. This page lives apart from the rest of the portfolio so it's easy to keep adding and updating projects over time.",
    repoLabel: "See all my repositories on GitHub",
    backLabel: "Back to home",
  },
  projectsUi: {
    githubLabel: "View on GitHub",
    githubDisabledLabel: "Repository not public",
  },

  research: [
    {
      title:
        "PiuraNet: Spatiotemporal Deep Learning for Radar-Based Precipitation Nowcasting in Piura",
      venue: "LatinX in AI Workshop @ CVPR 2026",
      place: "USA",
      date: "2026",
      type: "Poster",
    },
    {
      title: "2nd Workshop on Video Large Language Models in CVPR 2026",
      venue: "Travel Grant",
      place: "USA",
      date: "Jun. 2026",
      type: "Travel Grant",
    },
    {
      title: "Academic poster session — intensive deep learning program",
      venue: "Summit of AI in LatAm – Sala'26",
      place: "Ecuador",
      date: "2026",
      type: "Poster",
    },
    {
      title: "Selected for funding in a national competitive program",
      venue: "Undergraduate Thesis Competition — CONCYTEC",
      place: "Peru",
      date: "2025",
      type: "Funding",
    },
    {
      title: "Fellow in AI training and research",
      venue: "PhawAI – Connecting Peruvian Researchers in AI",
      place: "Peru",
      date: "2025",
      type: "Fellowship",
    },
    {
      title: "Specialized training in applied data science",
      venue: "TaReCDa Regional Workshop",
      place: "Ecuador",
      date: "2023",
      type: "Fellowship",
    },
  ],

  contactCv: {
    windowPath: "cyndi@portfolio: ~/contact-and-cv",
    contactLabel: "Contact",
    contactLead: "Have an AI, data, or automation project in mind? Reach out — I'd love to talk.",
    linkLabels: { email: "Email", phone: "Phone", linkedin: "LinkedIn", github: "GitHub" },
    viewProfileLabel: "View profile",
    cvLabel: "Curriculum Vitae",
    cvLead:
      "Download the full PDF version, with the complete detail of experience, education, certifications, and projects.",
    // English CV — must exist at /public/cv/ with this exact filename.
    cvPath: "/cv/CV_Cyndi_Silva_Abanto_EN.pdf",
    downloadLabel: "Download CV (PDF)",
    viewInBrowserLabel: "View in browser",
  },

  aiChat: {
    anchorIntro:
      "This portfolio includes an assistant connected to my own RAG system (embeddings + semantic retrieval over my experience and projects). The backend lives separately, in /rag-backend. Open it from the floating button in the bottom-right corner.",
    openButton: "Open assistant",
    closeLabel: "Close chat",
    panelHeader: "Assistant · Cyndi Silva Abanto",
    welcomeMessage:
      "Hi, I'm this portfolio's assistant. Ask me about Cyndi's experience, projects, or research.",
    placeholder: "Type your question…",
    sendLabel: "Send",
    errorMessage:
      "I couldn't reach the assistant yet. Connect the RAG backend in /rag-backend and set VITE_RAG_API_URL.",
  },

  languageToggle: {
    ariaLabel: "Switch language",
  },
  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    home: "Home",
  },
};
