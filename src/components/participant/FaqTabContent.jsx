import React, { useState, useMemo, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import FaqAccordion from "./FaqAccordion";

// 한 번에 보여줄 질문 수. 끝에 닿으면 이만큼씩 더 불러옵니다(무한 스크롤).
const PAGE_SIZE = 20;

// 분류(대분류·중분류·소분류)는 왼쪽 네비게이션에서 고르고, 여기서는 검색과 목록을 보여줍니다.
export default function FaqTabContent({ faqs, section = "all", topic = "all", sub = "all", onOpenMenu }) {
  const { lang, pick, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

  const name = (obj) => (obj ? pick(obj, lang) : "");

  const filtered = useMemo(() => {
    let list = faqs;
    // section·topic·sub 는 한국어 원문 값입니다 (언어를 바꿔도 선택 유지)
    if (section !== "all") list = list.filter((it) => it.section?.ko === section);
    if (topic !== "all") list = list.filter((it) => it.topic?.ko === topic);
    if (sub !== "all") list = list.filter((it) => it.sub?.ko === sub);
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;
    const words = q.split(/\s+/);
    return list.filter((item) => {
      const hay = [item.q, item.a, item.section, item.topic, item.sub]
        .map((o) => Object.values(o || {}).join(" "))
        .concat(item.no || "")
        .join(" ")
        .toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [faqs, section, topic, sub, searchQuery, lang]);

  // 조건이 바뀌면 처음 20개부터 다시
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [searchQuery, section, topic, sub]);

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
  // 현재 위치는 고른 언어로 보여줍니다
  const sample = faqs.find(
    (it) =>
      (section === "all" || it.section?.ko === section) &&
      (topic === "all" || it.topic?.ko === topic) &&
      (sub === "all" || it.sub?.ko === sub)
  );
  const path = sample
    ? [
        section !== "all" && (sample.sectionNo ? `${sample.sectionNo}. ${name(sample.section)}` : name(sample.section)),
        topic !== "all" && name(sample.topic),
        sub !== "all" && name(sample.sub)
      ].filter(Boolean)
    : [];

  return (
    <div className="faq-tab-container">
      {/* 통합 검색 */}
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

      {/* 현재 위치 · 개수 (좁은 화면에서는 분류 열기 버튼) */}
      <div className="faq-count-badge">
        <button type="button" className="path-menu-btn" onClick={onOpenMenu}>
          ☰ {t.categories}
        </button>
        <span className="faq-path">{path.length ? path.join(" > ") : t.allQa}</span>
        <span>{t.found(filtered.length)}</span>
      </div>

      <FaqAccordion items={shown} query={searchQuery} />

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
