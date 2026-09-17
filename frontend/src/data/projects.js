// Proyectos relevantes, extraídos del CV.
// `github` e `image` se dejan vacíos a propósito: no se inventan enlaces
// ni recursos que no estén en el CV.
//
// Para conectar cada proyecto:
//  - github: pega la URL del repositorio (si es público). Si lo dejas
//    vacío, el botón "Ver en GitHub" no se muestra.
//  - image: coloca un archivo en src/assets/projects/ y referencia su
//    import aquí. Si lo dejas vacío, se usa un fondo generado (visual).
export const projects = [
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
];
