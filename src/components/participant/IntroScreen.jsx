import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import logoImg from "../../assets/logo.png";

// 첫 화면: 로고를 누르면 FAQ로 들어갑니다.
export default function IntroScreen({ onEnter }) {
  const { t, lang } = useLanguage();
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

        <p className="intro-subtitle">{t.heroTitle}</p>
        <p className="intro-hint">
          <span className="intro-hint-dot" aria-hidden="true" />
          {t.introHint}
        </p>

        {/* 한국어 등 영어가 아닌 화면에서는 아래에 영어 안내를 함께 보여 줍니다 (2026-10-23 요청). */}
        {lang !== "en" && (
          <div className="intro-en" lang="en">
            <p className="intro-subtitle intro-subtitle-en">
              WYD Seoul 2027 Second Preparatory Meeting
              <br />
              Session Q&amp;A
            </p>
            <p className="intro-hint intro-hint-en">Tap the logo to enter</p>
          </div>
        )}
      </div>
    </div>
  );
}
