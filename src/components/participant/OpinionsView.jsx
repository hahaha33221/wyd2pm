import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { OPINIONS } from "../../constants/seedData";

// Opinions 시트: 답변 없이 참고용으로 보여주는 의견
export default function OpinionsView({ topic = "all" }) {
  const { t } = useLanguage();
  const list = topic === "all" ? OPINIONS : OPINIONS.filter((o) => o.topic === topic);

  return (
    <section>
      <div className="view-head">
        <h2 className="view-title">{topic === "all" ? t.allOpinions : topic}</h2>
        <p className="view-desc">{t.opinionsDesc}</p>
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
