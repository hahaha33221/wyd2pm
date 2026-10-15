import React, { useState, useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import FaqAccordion from "./FaqAccordion";

export default function FaqTabContent({ faqs }) {
  const { lang, pick, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("all");

  // 구분(엑셀 순서 그대로)
  const sections = useMemo(() => {
    const seen = new Map();
    faqs.forEach((item) => {
      const name = item.section ? pick(item.section, lang) : "";
      if (name && !seen.has(name)) seen.set(name, item.sectionNo || "");
    });
    return Array.from(seen, ([name, no]) => ({ name, no }));
  }, [faqs, lang, pick]);

  // 구분과 검색어로 거르기
  const filtered = useMemo(() => {
    let list = faqs;
    if (selectedSection !== "all") {
      list = list.filter((item) => item.section && pick(item.section, lang) === selectedSection);
    }
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;
    const words = q.split(/\s+/);
    return list.filter((item) => {
      const hay = [item.q, item.a, item.section, item.topic, item.sub]
        .map((o) => Object.values(o || {}).join(" "))
        .join(" ")
        .toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [faqs, searchQuery, selectedSection, lang, pick]);

  // 주제별로 묶기 (순서 유지)
  const groups = useMemo(() => {
    const out = [];
    filtered.forEach((item) => {
      const section = item.section ? pick(item.section, lang) : "";
      const topic = item.topic ? pick(item.topic, lang) : "";
      const key = `${section}|${topic}`;
      let g = out[out.length - 1];
      if (!g || g.key !== key) {
        g = { key, section, topic, items: [] };
        out.push(g);
      }
      g.items.push(item);
    });
    return out;
  }, [filtered, lang, pick]);

  return (
    <div className="faq-tab-container">
      {/* 구분 선택 */}
      {sections.length > 0 && (
        <div className="section-tabs" role="tablist" aria-label="Sections">
          <button
            type="button"
            role="tab"
            aria-selected={selectedSection === "all"}
            className={`section-tab ${selectedSection === "all" ? "active" : ""}`}
            onClick={() => setSelectedSection("all")}
          >
            {t.allCategories}
          </button>
          {sections.map(({ name, no }) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={selectedSection === name}
              className={`section-tab ${selectedSection === name ? "active" : ""}`}
              onClick={() => setSelectedSection(name)}
            >
              {no && <span className="section-tab-no">{no}</span>}
              {name}
            </button>
          ))}
        </div>
      )}

      {/* 검색 */}
      <div className="wyd-search-box">
        <svg
          className="search-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          placeholder={t.ph}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label={t.ph}
        />
        {searchQuery ? (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => setSearchQuery("")}
            aria-label="clear"
          >
            ✕
          </button>
        ) : null}
      </div>

      <div className="faq-count-badge">
        <span>{t.found(filtered.length)}</span>
      </div>

      {groups.length === 0 ? (
        <FaqAccordion items={[]} />
      ) : (
        groups.map((g) => (
          <section key={g.key} className="topic-group">
            {(g.topic || g.section) && (
              <h2 className="topic-heading">
                {selectedSection === "all" && g.section && (
                  <span className="topic-heading-section">{g.section}</span>
                )}
                {g.topic}
                <span className="topic-heading-count">{g.items.length}</span>
              </h2>
            )}
            <FaqAccordion items={g.items} />
          </section>
        ))
      )}
    </div>
  );
}
