// Habilidades del CV, agrupadas en categorías más generales para facilitar
// la lectura, y coloreadas alternadamente (celeste / naranja) para
// diferenciar visualmente cada grupo. No se agregó ninguna tecnología que
// no estuviera en el CV original; solo se reorganizó y se removieron
// duplicados (ej. Python/SQL aparecían en dos secciones distintas).
export const skillGroups = [
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
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
      "OpenCV",
    ],
  },
  {
    category: "Ingeniería de Software & APIs",
    tone: "sky",
    items: [
      "Python",
      "JavaScript",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
      "Docker",
      "Git/GitHub",
    ],
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
];
