import { useI18n } from "../../i18n";
import { useChatWidget } from "../../context/ChatWidgetContext";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "./ChatWidget.css";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
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

export default function AIChatSection() {
  const { t } = useI18n();
  const { setOpen } = useChatWidget();

  return (
    <Reveal as="section" id="ai-chat" className="section ai-chat-anchor">
      <SectionHeading index="06" title={t.sectionTitles.aiChat} />
      <p className="ai-chat-anchor__text">
        {t.aiChat.anchorIntro.split("/rag-backend").map((part, i, arr) =>
          i < arr.length - 1 ? (
            <span key={i}>
              {part}
              <code>/rag-backend</code>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
      <button className="ai-chat-anchor__cta" onClick={() => setOpen(true)}>
        <ChatIcon /> {t.aiChat.openButton}
      </button>
    </Reveal>
  );
}
