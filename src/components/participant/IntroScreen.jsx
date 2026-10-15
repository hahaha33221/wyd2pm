import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import logoImg from "../../assets/logo.png";

// 첫 화면: 로고를 누르면 FAQ로 들어갑니다.
export default function IntroScreen({ onEnter }) {
  const { t } = useLanguage();
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    setTimeout(onEnter, reduce ? 0 : 650);
  };

  return (
    <div className={`intro ${leaving ? "leaving" : ""}`}>
      <div className="intro-blob b1" aria-hidden="true" />
      <div className="intro-blob b2" aria-hidden="true" />
      <div className="intro-blob b3" aria-hidden="true" />

      <div className="intro-center">
        <button type="button" className="intro-logo-btn" onClick={enter} aria-label={t.introHint}>
          <img src={logoImg} alt="WYD SEOUL 2027" className="intro-logo" />
        </button>

        <p className="intro-subtitle">{t.subtitle}</p>
        <p className="intro-hint">
          <span className="intro-hint-dot" aria-hidden="true" />
          {t.introHint}
        </p>
      </div>
    </div>
  );
}
