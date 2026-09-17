# Portfolio — Cyndi Silva Abanto

Portfolio profesional (AI Engineer / Data Scientist) construido en React +
Vite, Y conectado con un base y RAG
## Estructura del repositorio

```
portfolio-cyndi/
├── frontend/          
│   ├── public/
│   │   └── cv/        <- Coloca aquí tu CV en PDF
│   ├── src/
│   │   ├── assets/projects/   
│   │   ├── components/
│   │   │   ├── layout/       
│   │   │   ├── sections/      
│   │   │   │                     
│   │   │   └── ui/             
│   │   ├── pages/              
│   │   ├── i18n/                 
│   │   ├── context/               
│   │   ├── hooks/                 
│   │   ├── data/               
│   │   ├── services/ragApi.js  
│   │   └── styles/             
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
└── rag-backend/        
    ├── app/             
    ├── README.md        
    └── .env.example
```

Separar `frontend/` y `rag-backend/` en carpetas independientes permite:
- Desplegar el frontend en Vercel sin arrastrar el backend ni Docker.
- Desplegar el backend donde prefieras (Railway, Render, Fly.io, VPS, etc.).
- Desarrollar y versionar el RAG de forma completamente independiente.
