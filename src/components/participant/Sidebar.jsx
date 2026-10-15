import React, { useMemo, useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { OPINIONS, MEETING_INFO } from "../../constants/seedData";

// 같은 값끼리 묶기 (엑셀 순서 유지). key는 한국어 원문이라 언어를 바꿔도 선택이 유지됩니다.
function groupBy(list, getKey, getLabel, getNo) {
  const m = new Map();
  list.forEach((item) => {
    const k = getKey(item);
    if (!k) return;
    if (!m.has(k)) m.set(k, { key: k, label: getLabel(item), no: getNo ? getNo(item) : "", items: [] });
    m.get(k).items.push(item);
  });
  return Array.from(m.values());
}

// 왼쪽 네비게이션: 엑셀 시트별(회의 정보 · 질의응답 · 의견)로 묶습니다.
export default function Sidebar({ faqs, nav, onNavigate, open, onClose, onCollapse }) {
  const { lang, pick, t } = useLanguage();
  const name = (o) => (o ? pick(o, lang) : "");

  // 대분류 > 중분류 > 소분류 트리
  const tree = useMemo(
    () =>
      groupBy(faqs, (it) => it.section?.ko, (it) => name(it.section), (it) => it.sectionNo).map((s) => ({
        ...s,
        topics: groupBy(s.items, (it) => it.topic?.ko, (it) => name(it.topic), (it) => it.topicNo).map((tp) => ({
          ...tp,
          subs: groupBy(tp.items, (it) => it.sub?.ko, (it) => name(it.sub), (it) => it.subNo)
        }))
      })),
    [faqs, lang]
  );

  // 펼침 상태: 선택된 대분류·중분류는 자동으로 펼침
  const [expanded, setExpanded] = useState({});
  useEffect(() => {
    if (nav.view !== "qa" || nav.section === "all") return;
    setExpanded((e) => {
      const next = { ...e, [nav.section]: true };
      if (nav.topic !== "all") next[`${nav.section}|${nav.topic}`] = true;
      return next;
    });
  }, [nav]);
  const toggle = (key) => setExpanded((e) => ({ ...e, [key]: !e[key] }));

  const go = (next) => {
    onNavigate(next);
    onClose();
  };
  const isQa = nav.view === "qa";
  const active = (cond) => (cond ? "active" : "");

  return (
    <>
      <div className={`sidebar-backdrop ${open ? "show" : ""}`} onClick={onClose} aria-hidden="true" />
      <nav className={`sidebar ${open ? "open" : ""}`} aria-label={t.menu}>
        <div className="sidebar-head">
          <span className="sidebar-title">{t.menu}</span>
          <button type="button" className="sidebar-close" onClick={onClose} aria-label={t.close}>
            ✕
          </button>
          <button type="button" className="sidebar-collapse" onClick={onCollapse} title={t.collapseNav} aria-label={t.collapseNav}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
              <path d="M20 4v16" />
            </svg>
          </button>
        </div>

        {/* Meeting_Info 시트 */}
        <div className="nav-group">
          <div className="nav-group-label">{t.navInfo}</div>
          <button type="button" className={`nav-item ${active(nav.view === "info")}`} onClick={() => go({ view: "info" })}>
            <span className="nav-item-text">{t.navInfoItem}</span>
            <span className="nav-count">{MEETING_INFO.length}</span>
          </button>
        </div>

        {/* QA_DB 시트: 대분류 > 중분류 > 소분류 */}
        <div className="nav-group">
          <div className="nav-group-label">{t.navQa}</div>
          <button
            type="button"
            className={`nav-item ${active(isQa && nav.section === "all")}`}
            onClick={() => go({ view: "qa", section: "all", topic: "all", sub: "all" })}
          >
            <span className="nav-item-text">{t.allQa}</span>
            <span className="nav-count">{faqs.length}</span>
          </button>

          {tree.map((s) => {
            const sOpen = !!expanded[s.key];
            return (
              <div key={s.key} className="nav-branch">
                <div className="nav-row">
                  <button
                    type="button"
                    className={`nav-caret ${sOpen ? "open" : ""}`}
                    onClick={() => toggle(s.key)}
                    aria-label={s.label}
                    aria-expanded={sOpen}
                  />
                  <button
                    type="button"
                    className={`nav-item lvl1 ${active(isQa && nav.section === s.key && nav.topic === "all")}`}
                    onClick={() => {
                      setExpanded((e) => ({ ...e, [s.key]: true }));
                      go({ view: "qa", section: s.key, topic: "all", sub: "all" });
                    }}
                  >
                    <span className="nav-item-text">
                      {s.no && <span className="nav-no">{s.no}.</span>}
                      {s.label}
                    </span>
                    <span className="nav-count">{s.items.length}</span>
                  </button>
                </div>

                {sOpen &&
                  s.topics.map((tp) => {
                    const key = `${s.key}|${tp.key}`;
                    const hasSubs = tp.subs.length > 0;
                    const tOpen = !!expanded[key];
                    return (
                      <div key={key} className="nav-branch lvl2-wrap">
                        <div className="nav-row">
                          {hasSubs ? (
                            <button
                              type="button"
                              className={`nav-caret ${tOpen ? "open" : ""}`}
                              onClick={() => toggle(key)}
                              aria-label={tp.label}
                              aria-expanded={tOpen}
                            />
                          ) : (
                            <span className="nav-caret-space" />
                          )}
                          <button
                            type="button"
                            className={`nav-item lvl2 ${active(isQa && nav.section === s.key && nav.topic === tp.key && nav.sub === "all")}`}
                            onClick={() => {
                              if (hasSubs) setExpanded((e) => ({ ...e, [key]: true }));
                              go({ view: "qa", section: s.key, topic: tp.key, sub: "all" });
                            }}
                          >
                            <span className="nav-item-text">
                              {tp.no && <span className="nav-no">{tp.no}.</span>}
                              {tp.label}
                            </span>
                            <span className="nav-count">{tp.items.length}</span>
                          </button>
                        </div>

                        {hasSubs &&
                          tOpen &&
                          tp.subs.map((sb) => (
                            <button
                              key={sb.key}
                              type="button"
                              className={`nav-item lvl3 ${active(isQa && nav.section === s.key && nav.topic === tp.key && nav.sub === sb.key)}`}
                              onClick={() => go({ view: "qa", section: s.key, topic: tp.key, sub: sb.key })}
                            >
                              <span className="nav-item-text">
                                {sb.no && <span className="nav-no">{sb.no}.</span>}
                                {sb.label}
                              </span>
                              <span className="nav-count">{sb.items.length}</span>
                            </button>
                          ))}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>

        {/* Opinions 시트: 분류는 의견 화면 안에서 고릅니다 */}
        <div className="nav-group">
          <div className="nav-group-label">{t.navOpinions}</div>
          <button
            type="button"
            className={`nav-item ${active(nav.view === "opinions")}`}
            onClick={() => go({ view: "opinions" })}
          >
            <span className="nav-item-text">{t.allOpinions}</span>
            <span className="nav-count">{OPINIONS.length}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
