import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración estándar de Vite para despliegue en Vercel.
// El build se genera en /dist y no requiere configuración adicional.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
