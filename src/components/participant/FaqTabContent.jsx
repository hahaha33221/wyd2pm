import React, { useState, useMemo, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import FaqAccordion from "./FaqAccordion";

// 한 번에 보여줄 질문 수. 끝에 닿으면 이만큼씩 더 불러옵니다(무한 스크롤).
const PAGE_SIZE = 20;

function ChipRow({ label, items, selected, onSelect, allLabel, small }) {
  return (
    <div className="chip-block">
      <div className="chip-label">{label}</div>
      <div className="chip-wrap">
        <button
          type="button"
          className={`category-chip ${small ? "sub" : ""} ${selected === "all" ? "active" : ""}`}
          onClick={() => onSelect("all")}
        >
          {allLabel}
        </button>
        {items.map(({ label: name, count }) => (
          <button
            key={name}
            type="button"
            className={`category-chip ${small ? "sub" : ""} ${selected === name ? "active" : ""}`}
            onClick={() => onSelect(name)}
          >
            {name}
            <span className="chip-count">{count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FaqTabContent({ faqs }) {
  const { lang, pick, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedSub, setSelectedSub] = useState("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

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

  // 같은 값끼리 세기 (엑셀 순서 유지)
  const countBy = (list, key, noKey) => {
    const m = new Map();
    list.forEach((item) => {
      const v = name(item[key]);
      if (!v) return;
      const prev = m.get(v) || { label: v, no: noKey ? item[noKey] : "", count: 0 };
      prev.count += 1;
      m.set(v, prev);
    });
    return Array.from(m.values());
  };

  // 1단계 구분 → 2단계 주제(구분을 고르면) → 3단계 세부 항목(주제를 고르면)
  const sections = useMemo(() => countBy(faqs, "section", "sectionNo"), [faqs, lang]);
  const inSection = useMemo(
    () => (selectedSection === "all" ? faqs : faqs.filter((it) => name(it.section) === selectedSection)),
    [faqs, selectedSection, lang]
  );
  const topics = useMemo(() => (selectedSection === "all" ? [] : countBy(inSection, "topic")), [inSection, selectedSection]);
  const subs = useMemo(
    () => (selectedTopic === "all" ? [] : countBy(inSection.filter((it) => name(it.topic) === selectedTopic), "sub")),
    [inSection, selectedTopic]
  );

  // 분류와 검색어로 거르기
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

  // 조건이 바뀌면 처음 20개부터 다시
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [searchQuery, selectedSection, selectedTopic, selectedSub]);

  // 목록 끝이 보이면 더 불러오기
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible((v) => v + PAGE_SIZE);
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length, visible]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;
  const sectionNo = sections.find((s) => s.label === selectedSection)?.no;
  const path = [
    selectedSection !== "all" && (sectionNo ? `${sectionNo}. ${selectedSection}` : selectedSection),
    selectedTopic !== "all" && selectedTopic,
    selectedSub !== "all" && selectedSub
  ].filter(Boolean);

  return (
    <div className="faq-tab-container">
      {/* 1. 통합 검색 */}
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

      {/* 2. 분류: 구분(큰 버튼) → 주제 → 세부 항목 */}
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
        {sections.map(({ label, no }) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={selectedSection === label}
            className={`section-tab ${selectedSection === label ? "active" : ""}`}
            onClick={() => chooseSection(label)}
          >
            {no && <span className="section-tab-no">{no}.</span>}
            {label}
          </button>
        ))}
      </div>

      {topics.length > 0 && (
        <ChipRow
          label={t.topicLabel}
          items={topics}
          selected={selectedTopic}
          onSelect={chooseTopic}
          allLabel={t.allCategories}
        />
      )}
      {subs.length > 0 && (
        <ChipRow
          label={t.subLabel}
          items={subs}
          selected={selectedSub}
          onSelect={setSelectedSub}
          allLabel={t.allCategories}
          small
        />
      )}

      {/* 현재 위치 · 개수 */}
      <div className="faq-count-badge">
        {path.length > 0 && <span className="faq-path">{path.join(" > ")}</span>}
        <span>{t.found(filtered.length)}</span>
      </div>

      {/* 3. 아코디언 목록 */}
      <FaqAccordion items={shown} query={searchQuery} />

      {/* 4. 무한 스크롤 (자동으로 안 될 때를 위한 버튼 포함) */}
      {hasMore && (
        <div ref={sentinelRef} className="load-more">
          <button type="button" className="load-more-btn" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            {t.more} ({shown.length} / {filtered.length})
          </button>
        </div>
      )}
    </div>
  );
}
