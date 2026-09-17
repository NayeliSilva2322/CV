# RAG Backend (placeholder)

Esta carpeta es un **placeholder vacío**. Aquí debes copiar y pegar tu
proyecto Docker del RAG que ya tienes desarrollado. Este repositorio de
portfolio **no implementa ni modifica tu RAG** — solo define la estructura
para que la integración con el frontend sea directa.

## Qué copiar aquí

Pega el contenido completo de tu carpeta Docker actual, respetando (o
adaptando) esta estructura sugerida:

```
rag-backend/
├── app/              <- tu código del RAG (FastAPI/Flask, pipeline, etc.)
├── Dockerfile         <- tu Dockerfile actual
├── docker-compose.yml <- si usas múltiples servicios (DB vectorial, API, etc.)
├── requirements.txt   <- o pyproject.toml, según tu proyecto
└── .env               <- variables de entorno reales (NO subir a git)
```

## Contrato esperado por el frontend

El frontend (`frontend/src/services/ragApi.js`) espera que tu API exponga,
como mínimo, un endpoint de chat:

```
POST /chat
Body:    { "message": "string", "history": [{ "role": "user"|"assistant", "content": "string" }] }
Response: { "answer": "string", "sources": [{ "title": "string", "url": "string" }] }
```

Y, opcionalmente, un endpoint de salud:

```
GET /health
Response: 200 OK
```

Si tu implementación actual usa otros nombres de rutas o de campos, tienes
dos opciones:
1. Ajustar tu backend para exponer estas rutas/campos (más simple), o
2. Editar `frontend/src/services/ragApi.js` para que coincida con tu
   contrato real (solo cambia esa función, no la lógica del RAG).

## CORS

Como el frontend (Vercel) y el backend (tu Docker) se despliegan por
separado, recuerda habilitar CORS en tu API para el dominio de Vercel:

```python
# ejemplo con FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://tu-portfolio.vercel.app", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Despliegue

Este backend NO se despliega en Vercel (Vercel es solo para el frontend
estático). Puedes desplegarlo en cualquier servicio que soporte Docker:
Railway, Render, Fly.io, un VPS propio, Azure Container Apps, etc. Una vez
desplegado, toma la URL pública y colócala como variable de entorno
`VITE_RAG_API_URL` en la configuración del proyecto de Vercel del frontend.
