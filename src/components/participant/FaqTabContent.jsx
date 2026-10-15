import React, { useState, useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import FaqAccordion from "./FaqAccordion";

export default function FaqTabContent({ faqs }) {
  const { lang, pick, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedSub, setSelectedSub] = useState("all");

  const name = (obj) => (obj ? pick(obj, lang) : "");
  const chooseSection = (v) => {
    setSelectedSection(v);
    setSelectedTopic("all");
    setSelectedSub("all");
  };
  const chooseTopic = (v) => {
    setSelectedTopic(v);
    setSelectedSub("all");
  };

  // 구분(엑셀 순서 그대로)
  const sections = useMemo(() => {
    const seen = new Map();
    faqs.forEach((item) => {
      const name = item.section ? pick(item.section, lang) : "";
      if (name && !seen.has(name)) seen.set(name, item.sectionNo || "");
    });
    return Array.from(seen, ([name, no]) => ({ name, no }));
  }, [faqs, lang, pick]);

  // 선택한 구분의 주제, 선택한 주제의 세부 항목 (엑셀 순서, 개수 포함)
  const countBy = (list, key) => {
    const m = new Map();
    list.forEach((item) => {
      const v = name(item[key]);
      if (v) m.set(v, (m.get(v) || 0) + 1);
    });
    return Array.from(m, ([label, count]) => ({ label, count }));
  };
  const inSection = useMemo(
    () => (selectedSection === "all" ? faqs : faqs.filter((it) => name(it.section) === selectedSection)),
    [faqs, selectedSection, lang]
  );
  const topics = useMemo(() => countBy(inSection, "topic"), [inSection]);
  const subs = useMemo(
    () => (selectedTopic === "all" ? [] : countBy(inSection.filter((it) => name(it.topic) === selectedTopic), "sub")),
    [inSection, selectedTopic]
  );

  // 구분·주제·세부 항목과 검색어로 거르기
  const filtered = useMemo(() => {
    let list = inSection;
    if (selectedTopic !== "all") list = list.filter((it) => name(it.topic) === selectedTopic);
    if (selectedSub !== "all") list = list.filter((it) => name(it.sub) === selectedSub);
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
  }, [inSection, searchQuery, selectedTopic, selectedSub, lang]);

  // 주제별로 묶기 (순서 유지)
  const groups = useMemo(() => {
    const out = [];
    filtered.forEach((item) => {
      const section = item.section ? pick(item.section, lang) : "";
      const topic = item.topic ? pick(item.topic, lang) : "";
      const subName = item.sub ? pick(item.sub, lang) : "";
      const key = `${section}|${topic}`;
      let g = out[out.length - 1];
      if (!g || g.key !== key) {
        g = { key, section, topic, count: 0, subs: [] };
        out.push(g);
      }
      let sg = g.subs[g.subs.length - 1];
      if (!sg || sg.name !== subName) {
        sg = { name: subName, items: [] };
        g.subs.push(sg);
      }
      sg.items.push(item);
      g.count += 1;
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
            onClick={() => chooseSection("all")}
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
              onClick={() => chooseSection(name)}
            >
              {no && <span className="section-tab-no">{no}</span>}
              {name}
            </button>
          ))}
        </div>
      )}

      {/* 주제 · 세부 항목 */}
      {topics.length > 0 && (
        <div className="chip-block">
          <div className="chip-label">{t.topicLabel}</div>
          <div className="chip-wrap">
            <button
              type="button"
              className={`category-chip ${selectedTopic === "all" ? "active" : ""}`}
              onClick={() => chooseTopic("all")}
            >
              {t.allCategories}
            </button>
            {topics.map(({ label, count }) => (
              <button
                key={label}
                type="button"
                className={`category-chip ${selectedTopic === label ? "active" : ""}`}
                onClick={() => chooseTopic(label)}
              >
                {label}
                <span className="chip-count">{count}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {subs.length > 0 && (
        <div className="chip-block">
          <div className="chip-label">{t.subLabel}</div>
          <div className="chip-wrap">
            <button
              type="button"
              className={`category-chip sub ${selectedSub === "all" ? "active" : ""}`}
              onClick={() => setSelectedSub("all")}
            >
              {t.allCategories}
            </button>
            {subs.map(({ label, count }) => (
              <button
                key={label}
                type="button"
                className={`category-chip sub ${selectedSub === label ? "active" : ""}`}
                onClick={() => setSelectedSub(label)}
              >
                {label}
                <span className="chip-count">{count}</span>
              </button>
            ))}
          </div>
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
                <span className="topic-heading-count">{g.count}</span>
              </h2>
            )}
            {g.subs.map((sg) => (
              <div key={sg.name || "-"} className="sub-group">
                {sg.name && <h3 className="sub-heading">{sg.name}</h3>}
                <FaqAccordion items={sg.items} />
              </div>
            ))}
          </section>
        ))
      )}
    </div>
  );
}
