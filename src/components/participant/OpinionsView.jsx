import React, { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { OPINIONS } from "../../constants/seedData";

// Opinions 시트: 답변 없이 참고용으로 보여주는 의견. 관련 항목은 화면 안에서 골라 봅니다.
export default function OpinionsView() {
  const { lang, pick, t } = useLanguage();
  const [topic, setTopic] = useState("all");

  const topics = useMemo(() => {
    const m = new Map();
    // key는 한국어 원문이라 언어를 바꿔도 선택이 유지됩니다
    OPINIONS.forEach((o) => {
      const key = o.topic.ko;
      const prev = m.get(key) || { key, label: pick(o.topic, lang), count: 0 };
      prev.count += 1;
      m.set(key, prev);
    });
    return Array.from(m.values());
  }, [lang, pick]);
  const list = topic === "all" ? OPINIONS : OPINIONS.filter((o) => o.topic.ko === topic);

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
        {topics.map(({ key, label, count }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={topic === key}
            className={`category-chip ${topic === key ? "active" : ""}`}
            onClick={() => setTopic(key)}
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
            <span className="category-pill-tag">{pick(o.topic, lang)}</span>
            <p className="opinion-text">{pick(o.text, lang)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
