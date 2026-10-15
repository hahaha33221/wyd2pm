import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

// 검색어를 굵게 표시합니다.
function Highlight({ text, query }) {
  const words = (query || "").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return text;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "gi"));
  return parts.map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

export default function FaqAccordion({ items, query = "" }) {
  const { lang, pick, t } = useLanguage();
  const [openIds, setOpenIds] = useState({});

  const toggle = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (!items || items.length === 0) {
    return (
      <div className="empty">
        <strong>{t.emptyT}</strong>
        {t.emptyB}
      </div>
    );
  }

  return (
    <div className="faq-list">
      {items.map((it) => {
        const isOpen = !!openIds[it.id];
        const questionText = pick(it.q, lang);
        const answerText = pick(it.a, lang);
        // 카드 위 분류 표시: 구분 > 주제 (· 세부 항목)
        const crumb = [it.section, it.topic].filter(Boolean).map((o) => pick(o, lang)).join(" > ");
        const subText = it.sub ? pick(it.sub, lang) : "";

        return (
          <div key={it.id} className={`qa-card ${isOpen ? "open" : ""}`}>
            <div
              className="qa-summary"
              onClick={() => toggle(it.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(it.id);
                }
              }}
              aria-expanded={isOpen}
            >
              <div className="qa-summary-content">
                {crumb && (
                  <div className="qa-tags">
                    {it.no && <span className="qa-no">{it.no}</span>}
                    <span className="category-pill-tag">{crumb}</span>
                    {subText && <span className="category-pill-tag sub">{subText}</span>}
                  </div>
                )}
                <div className="qa-question-title">
                  <span className="qa-mark q">Q.</span>
                  <span>
                    <Highlight text={questionText} query={query} />
                  </span>
                </div>
              </div>
              <span className="qa-summary-arrow" aria-hidden="true" />
            </div>

            {isOpen && (
              <div className="qa-body-content">
                {it.pending ? (
                  <div className="pending-notice-box">
                    <span className="pill wait">{t.preparing}</span>
                    <p className="pending-text">{t.soon}</p>
                  </div>
                ) : (
                  <div className="qa-answer">
                    <span className="qa-mark a">A.</span>
                    <div className="answer-text-wrap">
                      <Highlight text={answerText} query={query} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
