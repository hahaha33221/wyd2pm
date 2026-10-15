import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { CONFIG } from "../../constants/config";
import logoImg from "../../assets/logo.png";

export default function HeaderPanel({ onOpenLangModal, onOpenMenu }) {
  const { lang, langs, t } = useLanguage();
  const currentLangName = langs.find((l) => l.code === lang)?.name || "Language";

  return (
    <header className="wyd-header">
      {/* 좁은 화면에서 왼쪽 네비게이션 열기 */}
      <button type="button" className="menu-btn" onClick={onOpenMenu} aria-label={t.menu}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="wyd-header-top">
        <div />
        <button
          type="button"
          className="lang-selector-btn"
          onClick={onOpenLangModal}
          aria-haspopup="dialog"
          aria-label={t.lang}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
          </svg>
          <span>{currentLangName}</span>
        </button>
      </div>

      {/* Centered WYD Seoul 2027 Official Logo */}
      <div className="wyd-logo-wrapper">
        <img
          src={logoImg}
          alt="WYD SEOUL 2027"
          className="wyd-main-logo"
        />
      </div>

      {/* 히어로: 제목 · 안내 문구 · 문의처 · 발행 */}
      <div className="wyd-header-text">
        <h1 className="wyd-title">{t.heroTitle}</h1>
        <p className="wyd-notice">{t.heroNotice}</p>
        <p className="wyd-contact">
          {t.contact}: <a href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</a>
        </p>
        <p className="wyd-org">
          <span className="wyd-org-line">{CONFIG.noticeDate}</span>
          <span className="wyd-org-line">{t.org}</span>
        </p>
      </div>
    </header>
  );
}
