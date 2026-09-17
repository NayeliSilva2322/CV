import { useState, useRef, useEffect } from "react";
import SectionHeading from "../ui/SectionHeading";
import { sendChatMessage } from "../../services/ragApi";
import "./AIChat.css";

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Hola, soy el asistente de este portfolio. Pregúntame sobre la experiencia, proyectos o investigación de Cyndi.",
};

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
      <path
        d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8c-1.1 0-2.15-.22-3.1-.63L4 20l1.02-4.6C4.37 14.24 4 13.15 4 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, loading, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      // Este llamado apunta al backend RAG (ver src/services/ragApi.js).
      // Hasta que conectes tu backend en /rag-backend, esto mostrará
      // un mensaje de error controlado en la UI.
      const { answer } = await sendChatMessage(trimmed, nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch (err) {
      setError(
        "No pude conectar con el asistente todavía. Conecta el backend RAG en /rag-backend y configura VITE_RAG_API_URL."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Punto de anclaje para la navegación + descripción breve */}
      <section id="ai-chat" className="section ai-chat-anchor">
        <SectionHeading index="07" title="AI Chat" />
        <p className="ai-chat-anchor__text">
          Este portfolio incluye un asistente conectado a un sistema RAG
          propio (embeddings + recuperación semántica sobre mi experiencia y
          proyectos). El backend vive por separado, en{" "}
          <code>/rag-backend</code>. Ábrelo desde el botón flotante en la
          esquina inferior derecha.
        </p>
        <button className="ai-chat-anchor__cta" onClick={() => setOpen(true)}>
          <ChatIcon /> Abrir asistente
        </button>
      </section>

      {/* Widget flotante, estilo Gemini: botón + panel */}
      <div className="chat-widget">
        {open && (
          <div className="chat-widget__panel" role="dialog" aria-label="Asistente del portfolio">
            <div className="chat-widget__header">
              <span>Asistente · Cyndi Silva Abanto</span>
              <button
                className="chat-widget__close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="chat-widget__messages" ref={scrollRef}>
              {messages.map((message, i) => (
                <div
                  className={`chat-widget__bubble chat-widget__bubble--${message.role}`}
                  key={`${message.role}-${i}`}
                >
                  {message.content}
                </div>
              ))}
              {loading && (
                <div className="chat-widget__bubble chat-widget__bubble--assistant chat-widget__bubble--typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            {error && <p className="chat-widget__error">{error}</p>}

            <form className="chat-widget__form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta…"
                aria-label="Mensaje para el asistente"
                autoFocus
              />
              <button type="submit" disabled={loading || !input.trim()}>
                Enviar
              </button>
            </form>
          </div>
        )}

        <button
          className="chat-widget__fab"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar chat" : "Abrir chat"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <ChatIcon />}
        </button>
      </div>
    </>
  );
}
