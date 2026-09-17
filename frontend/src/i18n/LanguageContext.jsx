import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { es } from "./content.es";
import { en } from "./content.en";

const STORAGE_KEY = "portfolio-lang";
const CONTENT = { es, en };

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  // Si el navegador está en español, arrancamos en ES; si no, en EN.
  const browserLang = window.navigator.language?.slice(0, 2);
  return browserLang === "es" ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "es" ? "en" : "es")),
      t: CONTENT[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/**
 * Hook principal de i18n. Devuelve:
 *  - t: el "diccionario"/caja completa de contenido para el idioma activo
 *  - lang: "es" | "en"
 *  - toggleLang / setLang: para cambiar de idioma
 */
export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
