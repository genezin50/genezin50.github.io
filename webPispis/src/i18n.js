import React from "react";

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
    if (stored === "tr" || stored === "en") return stored;
    const prefersEn = window.navigator.language?.toLowerCase().startsWith("en");
    return prefersEn ? "en" : "tr";
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
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  }, []);

  const value = React.useMemo(() => ({ lang, setLang, toggle }), [lang, toggle]);

  return React.createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}
