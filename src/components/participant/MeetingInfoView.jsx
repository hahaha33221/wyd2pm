import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MEETING_INFO } from "../../constants/seedData";
import { OVERVIEW_SECTIONS } from "../../constants/overview";

// Q&A 소개 > 취합 개요: 1. 회의 개요(엑셀 Meeting_Info 시트) + 2~4 (워드 문서 원문)
export default function MeetingInfoView() {
  const { lang, pick, t } = useLanguage();

  return (
    <section className="view-card overview">
      <h2 className="view-title">{t.navInfoItem}</h2>

      <h3 className="overview-heading">1. {t.meetingOverview}</h3>
      <dl className="info-list">
        {MEETING_INFO.map((row) => (
          <div key={row.label.ko} className="info-row">
            <dt>{pick(row.label, lang)}</dt>
            <dd>{pick(row.value, lang)}</dd>
          </div>
        ))}
      </dl>

      {OVERVIEW_SECTIONS.map((section, i) => (
        <div key={section.title} className="overview-section">
          <h3 className="overview-heading">
            {i + 2}. {section.title}
          </h3>
          <ul className="overview-list">
            {section.items.map((item) =>
              typeof item === "string" ? (
                <li key={item}>{item}</li>
              ) : (
                <li key={item.label} className="overview-sub">
                  <span className="overview-sub-label">{item.label}</span>
                  <ul>
                    {item.items.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}
