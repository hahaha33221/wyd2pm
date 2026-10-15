import React, { createContext, useContext, useState, useEffect } from "react";
import { LANGS, T } from "../constants/languages";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // 쓸 수 있는(비활성이 아닌) 언어만 고릅니다. 없으면 한국어.
  const detectLanguage = () => {
    const usable = (code) => LANGS.some((l) => l.code === code && !l.disabled);
    let saved = null;
    try {
      saved = localStorage.getItem("lfaq.lang");
    } catch {
      /* 저장소를 못 써도 기본값으로 */
    }
    if (saved && usable(saved)) return saved;
    const nav = (navigator.language || "ko").slice(0, 2).toLowerCase();
    return usable(nav) ? nav : "ko";
  };

  const [lang, setLangState] = useState(detectLanguage);

  const setLang = (newLang) => {
    if (LANGS.find((l) => l.code === newLang)?.disabled) return;
    setLangState(newLang);
    try {
      localStorage.setItem("lfaq.lang", newLang);
    } catch {
      /* 저장소를 못 써도 화면은 바뀜 */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = T[lang] || T.en;

  // Multi-language text selector helper
  const pick = (obj, language = lang) => {
    if (!obj) return "";
    return obj[language] || obj.en || obj.ko || Object.values(obj)[0] || "";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick, langs: LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
