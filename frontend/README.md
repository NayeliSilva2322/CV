# Portfolio — Cyndi Silva Abanto

Portfolio profesional (AI Engineer / Data Scientist) construido en React +
Vite, con diseño dark y detalles neon, listo para desplegarse en Vercel.
El chat con IA (`AI Chat`) se conecta a un backend RAG propio que vive en
una carpeta separada (`rag-backend/`), pensada para que copies ahí tu
proyecto Docker existente sin que este repositorio lo modifique.

## Estructura del repositorio

```
portfolio-cyndi/
├── frontend/          <- Aplicación React (lo único que se despliega en Vercel)
│   ├── public/
│   │   └── cv/        <- Coloca aquí tu CV en PDF
│   ├── src/
│   │   ├── assets/projects/   <- Imágenes de proyectos (opcional)
│   │   ├── components/
│   │   │   ├── layout/        <- Sidebar, Footer, LanguageToggle (ES/EN)
│   │   │   ├── sections/      <- Secciones de la Home + ChatWidget global
│   │   │   │                     (Contacto y CV unificados en ContactCV.jsx)
│   │   │   └── ui/             <- Botones, tags, encabezados, Reveal
│   │   ├── pages/               <- Home.jsx y ProjectsPage.jsx (ruta /proyectos,
│   │   │                          independiente para poder ir sumando proyectos)
│   │   ├── i18n/                 <- content.es.js / content.en.js: TODO el
│   │   │                            texto del sitio, como "cajas" traducibles
│   │   ├── context/               <- Estado compartido del chat flotante
│   │   ├── hooks/                 <- useReveal (animaciones on-scroll)
│   │   ├── data/               <- Contenido extraído de tu CV (sin inventos)
│   │   ├── services/ragApi.js  <- Cliente HTTP hacia el backend RAG
│   │   └── styles/             <- Tokens de diseño y estilos globales
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
└── rag-backend/        <- Placeholder vacío para tu proyecto Docker del RAG
    ├── app/             <- Pega aquí tu código
    ├── README.md        <- Cómo conectarlo con el frontend
    └── .env.example
```

Separar `frontend/` y `rag-backend/` en carpetas independientes permite:
- Desplegar el frontend en Vercel sin arrastrar el backend ni Docker.
- Desplegar el backend donde prefieras (Railway, Render, Fly.io, VPS, etc.).
- Desarrollar y versionar el RAG de forma completamente independiente.

## Cómo correr el frontend en local

```bash
cd frontend
npm install
npm run dev
```

Se abrirá en `http://localhost:5173`.

## Cómo conectar tu RAG

1. Copia tu proyecto Docker completo dentro de `rag-backend/` (ver su
   README para el contrato de API esperado).
2. Corre tu backend localmente (por ejemplo, expuesto en
   `http://localhost:8000`).
3. En `frontend/`, copia `.env.example` como `.env` y ajusta
   `VITE_RAG_API_URL` si tu backend corre en otra URL/puerto.
4. Reinicia `npm run dev`. La sección "AI Chat" ya está lista para
   conversar con tu backend real.

## Contenido pendiente de completar

Estos campos se dejaron vacíos a propósito porque no estaban en el CV
(no se inventó ninguna URL ni recurso):

- `frontend/src/i18n/content.es.js` y `content.en.js`: `profile.linkedin`,
  `profile.github` (URLs de tus perfiles) en AMBOS archivos.
- `frontend/src/i18n/content.es.js` y `content.en.js`: `projects[].github`
  e `image` de cada proyecto (en ambos idiomas si agregas un repo).
- `frontend/public/cv/`: agrega los dos PDFs de tu CV — ver
  `public/cv/README.md` (uno para español, otro para inglés).
- `frontend/public/profile/`: agrega tu fotografía sin fondo (`photo.png`)
  para que aparezca en la sección de Presentación. Sin este archivo, el
  hero se muestra igual de bien, solo sin la foto.

## Idiomas (ES/EN) y la página de Proyectos

- Todo el texto del sitio vive en `frontend/src/i18n/content.es.js` y
  `content.en.js` — dos "cajas" con la misma forma. El botón ES/EN
  (esquina superior derecha) cambia entre ellas al vuelo y recuerda la
  preferencia en el navegador. Para editar contenido, edita ambos
  archivos (no los componentes).
- Los Proyectos ahora son una página independiente (`/proyectos`), pensada
  para que puedas seguir agregando proyectos con el tiempo sin tocar el
  resto del sitio. Se edita en `frontend/src/i18n/content.*.js` (array
  `projects`) — no hace falta tocar `ProjectsPage.jsx` para añadir uno
  nuevo.

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En Vercel, crea un nuevo proyecto e importa el repo.
3. Configura **Root Directory** como `frontend`.
4. Vercel detectará automáticamente Vite (usa `vercel.json` incluido).
5. Agrega la variable de entorno `VITE_RAG_API_URL` en el panel de Vercel
   apuntando a la URL pública de tu backend RAG ya desplegado.
6. Deploy.

## Stack

- **Frontend:** React 18, Vite, CSS puro con variables de diseño (sin
  frameworks de UI, para mantener una identidad visual propia).
- **Backend (aparte):** tu proyecto RAG en Docker (no incluido, no
  modificado).
