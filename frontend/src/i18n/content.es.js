// ---------------------------------------------------------------------------
// Contenido completo del sitio en ESPAÑOL. Es la "caja" de traducción: cada
// componente lee de aquí (vía useI18n()) en lugar de tener texto fijo.
// Todo el contenido proviene literalmente del CV; no se ha inventado nada.
// ---------------------------------------------------------------------------

export const es = {
  meta: {
    htmlTitle: "Cyndi Silva Abanto — AI Engineer & Data Scientist",
  },

  nav: [
    { id: "inicio", label: "Presentación" },
    { id: "sobre-mi", label: "Sobre mi" },
    { id: "experiencia", label: "Experiencia" },
    { id: "skills", label: "Skills" },
    { id: "proyectos", label: "Proyectos" },
    { id: "investigacion", label: "Investigación" },
    { id: "contacto", label: "Contacto & CV" },
    { id: "ai-chat", label: "AI Chat" },
  ],
  sidebarStatus: "Disponible para nuevos proyectos",

  profile: {
    name: "Cyndi Silva Abanto",
    role: "AI Engineer · Data Scientist & Agentic Systems",
    degree: "Bachiller en Ingeniería Industrial y de Sistemas",
    location: "Lima, Perú",
    phone: "+51 916 702 985",
    email: "nabanto18@gmail.com",
    linkedin: "https://www.linkedin.com/in/cyndi-nayeli-silva-abanto/", // TODO: pega tu URL de LinkedIn
    github: "https://github.com/NayeliSilva2322", // TODO: pega tu URL de GitHub
    summary: [
      "Data Scientist y AI Engineer con experiencia en el desarrollo e integración de soluciones de IA, LLMs y Computer Vision. He desarrollado aplicaciones end-to-end, desde la ingesta y procesamiento de datos hasta el despliegue e integración de modelos con bases de datos vectoriales y servicios cloud.",
      "Experiencia en automatización y orquestación de workflows con LangGraph y plataformas NoCode, desarrollo de APIs con FastAPI y Flask, containerización con Docker y seguimiento y evaluación de experimentos con MLflow.",
      "Complemento la experiencia técnica con gestión de requerimientos, metodologías Agile/Scrum y capacitación técnica, facilitando la adopción de soluciones de IA en equipos multidisciplinarios.",
      "Participación internacional en CVPR 2026 y proyectos de investigación aplicada en IA.",
    ],
    traits: ["Proactiva", "Disciplinada", "Orientada a objetivos", "Comunicativa"],
    education: [
      {
        school: "Universidad de Piura (UDEP)",
        place: "Piura, Perú",
        title: "Bachiller en Ingeniería Industrial y de Sistemas",
        period: "2020 – 2025",
      },
      {
        school: "TECH Global University",
        place: "",
        title: "University Expert in Advanced Techniques in Computer Vision",
        period: "Ene. 2026 – Jun. 2026",
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
        date: "Ene. 2025 – Mar. 2026",
      },
    ],
  },

  hero: {
    lead: "Construyo sistemas de IA de punta a punta — desde la ingesta y modelamiento de datos hasta agentes con LLMs, RAG y despliegue en producción.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
  },

  sectionTitles: {
    about: "About me",
    experience: "Experiencia",
    skills: "Skills y tecnologías",
    projects: "Proyectos",
    research: "Investigación y participación",
    contact: "Contacto & CV",
    aiChat: "AI Chat",
  },

  about: {
    educationLabel: "Educación",
    certificationsLabel: "Certificaciones",
  },

  experience: [
    {
      company: "Estación Científica Ramón Múgica",
      place: "Piura, Perú",
      role: "Research Scientist Junior",
      period: "Ene. 2026 – May. 2026",
      bullets: [
        "Procesé hasta 15 TB de datos meteorológicos para alimentar pipelines de análisis y modelamiento, utilizando Python, Dask, PostgreSQL y SQL Server, incorporando validaciones de calidad con Pydantic para mejorar la confiabilidad de los datos.",
        "Automaticé la integración y actualización de fuentes externas, conectando APIs de NOAA y servicios Azure, reduciendo aproximadamente 30% del trabajo manual del equipo (≈12 h/semana).",
        "Desarrollé soluciones de Machine Learning para predicción y detección de anomalías, integrando modelos preentrenados de Hugging Face y técnicas para series temporales.",
        "Implementé y evalué modelos predictivos, integrando los resultados con procesos analíticos y reportes en Power BI para facilitar el seguimiento de los resultados.",
      ],
    },
    {
      company: "Universidad de Piura (UDEP)",
      place: "Piura, Perú",
      role: "Practicante Profesional — Dirección de Proyectos",
      period: "Ene. 2025 – Dic. 2025",
      bullets: [
        "Reduje el tiempo de validación de referencias y enlaces en informes de proyecto de ~2 horas a ~2 minutos (98% menos), implementando agentes de IA con LangGraph y un sistema de RAG basado en pgvector y DeepSeek para verificar automáticamente la integridad documental de actas, hitos y alcance.",
        "Automaticé el seguimiento del estado de levantamiento de observaciones en +10 proyectos, diseñando un flujo de estados con LangGraph (pendiente → en revisión → levantado → cerrado) que eliminó el rastreo manual en hojas de cálculo.",
        "Centralicé el seguimiento de indicadores, riesgos y milestones de proyectos académicos y administrativos, desarrollando dashboards en Power BI y MS Project bajo metodologías PMI y Agile/Scrum, mejorando la visibilidad para la toma de decisiones.",
        "Reducí en aproximadamente 30% el tiempo de procesos administrativos manuales, automatizando flujos con Excel VBA, Power Query, Power Apps y Power Automate, y documentando los requerimientos mediante casos de uso, UML y flujogramas.",
      ],
    },
    {
      company: "Universidad de Piura (UDEP)",
      place: "Piura, Perú",
      role: "Asistente de Docencia — Sistemas de Bases de Datos y Álgebra Lineal",
      period: "Mar. 2023 – Dic. 2024",
      bullets: [
        "Brindé soporte técnico a +120 estudiantes en diseño de bases de datos, SQL, modelamiento relacional y análisis de información utilizando MySQL.",
        "Dicté talleres y sesiones prácticas sobre programación, bases de datos y fundamentos de álgebra lineal, adaptando conceptos técnicos a distintos niveles de conocimiento.",
        "Evalué soluciones y proporcioné retroalimentación estructurada, fortaleciendo la capacidad de los estudiantes para resolver problemas técnicos de forma autónoma.",
      ],
    },
  ],

  skillGroups: [
    {
      category: "IA Generativa & Sistemas Agénticos",
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
      category: "Ingeniería de Software & APIs",
      tone: "sky",
      items: ["Python", "JavaScript", "FastAPI", "Flask", "REST APIs", "Microservices", "Docker", "Git/GitHub"],
    },
    {
      category: "Datos & Cloud",
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
      category: "MLOps & Experimentación",
      tone: "sky",
      items: ["MLflow", "Experiment Tracking", "Model Evaluation", "Reproducibility"],
    },
    {
      category: "Gestión & Metodologías",
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
      title: "Predicción de Precipitaciones con Redes Neuronales Profundas",
      place: "Piura, Perú",
      period: "Jun. 2025 – May. 2026",
      description:
        "Diseño, desarrollo y evaluación de modelos de Deep Learning para precipitation nowcasting (U-Net, Swin Transformer, ConvLSTM, cGAN y modelos de difusión) sobre datos multidimensionales de radar meteorológico, con pipelines de preprocesamiento en Airflow y seguimiento de experimentos con MLflow. Resultados presentados en LatinX in AI Workshop @ CVPR 2026 y WiCV @ ECCV 2026.",
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
        "Solución de IA para clasificación y análisis de artículos científicos de biología espacial con SciBERT y BioMedBERT. Incluye embeddings, búsqueda semántica y un sistema RAG sobre pgvector, integrado con FastAPI, PostgreSQL, Docker y Azure.",
      tags: ["RAG", "pgvector", "FastAPI", "Docker", "Azure"],
      visual: "space",
      github: "",
      image: "",
    },
    {
      id: "llm-rag-legal",
      title: "LLM & RAG para Documentos Legales — Sistema Judicial de Piura",
      place: "",
      period: "Ago. 2023 – Dic. 2023",
      description:
        "Aplicación basada en LLMs para consulta inteligente de documentos jurídicos, con pipeline de RAG (embeddings, búsqueda semántica y recuperación de contexto) y fine-tuning con LoRA sobre un LLM open-source adaptado al dominio legal. Integración mediante APIs REST y backend conectado a base de datos.",
      tags: ["RAG", "LoRA", "Fine-tuning", "REST APIs"],
      visual: "legal",
      github: "",
      image: "",
    },
  ],
  projectsPage: {
    eyebrow: "Proyectos",
    title: "Proyectos",
    intro:
      "Selección de proyectos de IA, datos e investigación. Esta página vive aparte del resto del portfolio para poder ir sumando y actualizando proyectos con el tiempo.",
    repoLabel: "Ver todos mis repositorios en GitHub",
    backLabel: "Volver al inicio",
  },
  projectsUi: {
    githubLabel: "Ver en GitHub",
    githubDisabledLabel: "Repositorio no público",
  },

  research: [
    {
      title:
        "PiuraNet: Spatiotemporal Deep Learning for Radar-Based Precipitation Nowcasting in Piura",
      venue: "LatinX in AI Workshop @ CVPR 2026",
      place: "USA",
      date: "2026",
      type: "Póster",
    },
    {
      title: "2nd Workshop on Video Large Language Models in CVPR 2026",
      venue: "Travel Grant",
      place: "USA",
      date: "Jun. 2026",
      type: "Travel Grant",
    },
    {
      title: "Sesión de póster académico — programa intensivo de deep learning",
      venue: "Summit of AI in LatAm – Sala'26",
      place: "Ecuador",
      date: "2026",
      type: "Póster",
    },
    {
      title: "Selección para financiamiento en programa nacional competitivo",
      venue: "Concurso de Tesis de Pregrado — CONCYTEC",
      place: "Perú",
      date: "2025",
      type: "Financiamiento",
    },
    {
      title: "Becaria en formación e investigación en inteligencia artificial",
      venue: "PhawAI – Connecting Peruvian Researchers in AI",
      place: "Perú",
      date: "2025",
      type: "Beca",
    },
    {
      title: "Capacitación especializada en ciencia de datos aplicada",
      venue: "TaReCDa Regional Workshop",
      place: "Ecuador",
      date: "2023",
      type: "Beca",
    },
  ],

  contactCv: {
    windowPath: "cyndi@portfolio: ~/contacto-y-cv",
    contactLabel: "Contacto",
    contactLead:
      "¿Tienes un proyecto de IA, datos o automatización en mente? Escríbeme, con gusto conversamos.",
    linkLabels: { email: "Email", phone: "Teléfono", linkedin: "LinkedIn", github: "GitHub" },
    viewProfileLabel: "Ver perfil",
    cvLabel: "Curriculum Vitae",
    cvLead:
      "Descarga la versión completa en PDF, con el detalle de experiencia, educación, certificaciones y proyectos.",
    // El archivo debe existir en /public/cv/ con este nombre exacto.
    cvPath: "/cv/CV_Cyndi_Silva_Abanto.pdf",
    downloadLabel: "Descargar CV (PDF)",
    viewInBrowserLabel: "Ver en el navegador",
  },

  aiChat: {
    anchorIntro:
      "Este portfolio incluye un asistente conectado a un sistema RAG propio (embeddings + recuperación semántica sobre mi experiencia y proyectos). El backend vive por separado, en /rag-backend. Ábrelo desde el botón flotante en la esquina inferior derecha.",
    openButton: "Abrir asistente",
    closeLabel: "Cerrar chat",
    panelHeader: "Asistente · Cyndi Silva Abanto",
    welcomeMessage:
      "Hola, soy el asistente de este portfolio. Pregúntame sobre la experiencia, proyectos o investigación de Cyndi.",
    placeholder: "Escribe tu pregunta…",
    sendLabel: "Enviar",
    errorMessage:
      "No pude conectar con el asistente todavía. Conecta el backend RAG en /rag-backend y configura VITE_RAG_API_URL.",
  },

  languageToggle: {
    ariaLabel: "Cambiar idioma",
  },
  a11y: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Navegación principal",
    home: "Inicio",
  },
};
