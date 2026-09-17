# Imágenes de proyectos

Coloca aquí las imágenes reales de cada proyecto (por ejemplo
`piuranet.png`, `biospace.png`, `legal-rag.png`).

Luego, en `src/data/projects.js`, importa la imagen y asígnala al campo
`image` del proyecto correspondiente:

```js
import piuranetImg from "../assets/projects/piuranet.png";

// dentro del objeto del proyecto:
image: piuranetImg,
```

Mientras no agregues una imagen, la tarjeta del proyecto muestra
automáticamente un fondo generado (basado en el campo `visual`), así que
el sitio funciona igual de bien sin imágenes.
