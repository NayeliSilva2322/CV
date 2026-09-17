import { useState, useRef, useEffect } from "react";
import { useI18n } from "../../i18n";
import { useChatWidget } from "../../context/ChatWidgetContext";
import { sendChatMessage } from "../../services/ragApi";
import "./ChatWidget.css";

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
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ChatWidget() {
  const { t, lang } = useI18n();
  const { open, setOpen } = useChatWidget();
  const [messages, setMessages] = useState([{ role: "assistant", content: t.aiChat.welcomeMessage }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  // Si cambia el idioma, reiniciamos la conversación con el saludo en el
  // idioma nuevo (evita mezclar mensajes previos en dos idiomas distintos).
  useEffect(() => {
    setMessages([{ role: "assistant", content: t.aiChat.welcomeMessage }]);
    setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

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
      setError(t.aiChat.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-widget__panel" role="dialog" aria-label={t.aiChat.panelHeader}>
          <div className="chat-widget__header">
            <span>{t.aiChat.panelHeader}</span>
            <button
              className="chat-widget__close"
              onClick={() => setOpen(false)}
              aria-label={t.aiChat.closeLabel}
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
              placeholder={t.aiChat.placeholder}
              aria-label={t.aiChat.placeholder}
              autoFocus
            />
            <button type="submit" disabled={loading || !input.trim()}>
              {t.aiChat.sendLabel}
            </button>
          </form>
        </div>
      )}

      <button
        className="chat-widget__fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.aiChat.closeLabel : t.aiChat.openButton}
        aria-expanded={open}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}
