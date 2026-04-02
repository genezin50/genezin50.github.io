import React from "react";

const SUPPORTED_LANGS = ["tr", "en", "es"];

const LanguageContext = React.createContext({
  lang: "tr",
  setLang: () => {},
  toggle: () => {},
});

const STORAGE_KEY = "gk-language";

export function LanguageProvider({ children }) {
  const [lang, setLang] = React.useState(() => {
    if (typeof window === "undefined") return "tr";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    const locale = window.navigator.language?.toLowerCase() || "tr";
    if (locale.startsWith("es")) return "es";
    if (locale.startsWith("en")) return "en";
    return "tr";
  });

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, [lang]);

  const toggle = React.useCallback(() => {
    setLang((prev) => {
      const index = SUPPORTED_LANGS.indexOf(prev);
      const nextIndex = index === -1 ? 0 : (index + 1) % SUPPORTED_LANGS.length;
      return SUPPORTED_LANGS[nextIndex];
    });
  }, []);

  const value = React.useMemo(() => ({ lang, setLang, toggle }), [lang, toggle]);

  return React.createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}
