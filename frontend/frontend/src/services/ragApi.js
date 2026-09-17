// ---------------------------------------------------------------------------
// Cliente del frontend para el servicio RAG (backend en Docker, separado
// de este proyecto). Este archivo SOLO define cómo el frontend llama a la
// API; no contiene lógica de RAG ni del modelo — eso vive en /rag-backend.
//
// Configura la URL real del backend en frontend/.env (VITE_RAG_API_URL).
// ---------------------------------------------------------------------------

const RAG_API_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8000";

/**
 * Envía un mensaje al endpoint de chat del RAG y devuelve la respuesta.
 *
 * Contrato esperado con el backend (ajústalo a tu implementación real):
 *   POST {RAG_API_URL}/chat
 *   body: { message: string, history: Array<{role, content}> }
 *   respuesta: { answer: string, sources?: Array<{title, url}> }
 *
 * @param {string} message - Mensaje del usuario.
 * @param {Array<{role: "user"|"assistant", content: string}>} history - Historial previo.
 * @returns {Promise<{answer: string, sources: Array}>}
 */
export async function sendChatMessage(message, history = []) {
  const response = await fetch(`${RAG_API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });

  if (!response.ok) {
    throw new Error(`El servicio RAG respondió con estado ${response.status}`);
  }

  return response.json();
}

/**
 * Comprueba si el backend RAG está disponible (endpoint de salud opcional).
 * Útil para mostrar un estado "conectado / no conectado" en la UI.
 */
export async function checkRagHealth() {
  try {
    const response = await fetch(`${RAG_API_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
