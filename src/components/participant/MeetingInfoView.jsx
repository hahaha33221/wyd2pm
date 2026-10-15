import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MEETING_INFO } from "../../constants/seedData";

// Meeting_Info 시트
export default function MeetingInfoView() {
  const { t } = useLanguage();

  return (
    <section className="view-card">
      <h2 className="view-title">{t.navInfoItem}</h2>
      <dl className="info-list">
        {MEETING_INFO.map((row) => (
          <div key={row.label} className="info-row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
