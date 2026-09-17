import { useI18n } from "../../i18n";
import "./LanguageToggle.css";

export default function LanguageToggle() {
  const { lang, toggleLang, t } = useI18n();

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.languageToggle.ariaLabel}
      title={t.languageToggle.ariaLabel}
    >
      <span className={`lang-toggle__opt ${lang === "es" ? "lang-toggle__opt--active" : ""}`}>
        ES
      </span>
      <span className="lang-toggle__sep" aria-hidden="true" />
      <span className={`lang-toggle__opt ${lang === "en" ? "lang-toggle__opt--active" : ""}`}>
        EN
      </span>
    </button>
  );
}
