import React, { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { OPINIONS } from "../../constants/seedData";

// Opinions 시트: 답변 없이 참고용으로 보여주는 의견. 관련 항목은 화면 안에서 골라 봅니다.
export default function OpinionsView() {
  const { t } = useLanguage();
  const [topic, setTopic] = useState("all");

  const topics = useMemo(() => {
    const m = new Map();
    OPINIONS.forEach((o) => o.topic && m.set(o.topic, (m.get(o.topic) || 0) + 1));
    return Array.from(m, ([label, count]) => ({ label, count }));
  }, []);
  const list = topic === "all" ? OPINIONS : OPINIONS.filter((o) => o.topic === topic);

  return (
    <section>
      <div className="view-head">
        <h2 className="view-title">{t.allOpinions}</h2>
        <p className="view-desc">{t.opinionsDesc}</p>
      </div>

      <div className="chip-wrap op-chips" role="tablist" aria-label={t.categories}>
        <button
          type="button"
          role="tab"
          aria-selected={topic === "all"}
          className={`category-chip ${topic === "all" ? "active" : ""}`}
          onClick={() => setTopic("all")}
        >
          {t.allCategories}
          <span className="chip-count">{OPINIONS.length}</span>
        </button>
        {topics.map(({ label, count }) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={topic === label}
            className={`category-chip ${topic === label ? "active" : ""}`}
            onClick={() => setTopic(label)}
          >
            {label}
            <span className="chip-count">{count}</span>
          </button>
        ))}
      </div>

      <div className="faq-count-badge">
        <span>{t.opinionCount(list.length)}</span>
      </div>
      <div className="faq-list">
        {list.map((o) => (
          <article key={o.id} className="opinion-card">
            {o.topic && <span className="category-pill-tag">{o.topic}</span>}
            <p className="opinion-text">{o.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
