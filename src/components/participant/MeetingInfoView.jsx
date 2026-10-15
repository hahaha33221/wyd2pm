import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MEETING_INFO } from "../../constants/seedData";

// Meeting_Info 시트
export default function MeetingInfoView() {
  const { lang, pick, t } = useLanguage();

  return (
    <section className="view-card">
      <h2 className="view-title">{t.navInfoItem}</h2>
      <dl className="info-list">
        {MEETING_INFO.map((row) => (
          <div key={row.label.ko} className="info-row">
            <dt>{pick(row.label, lang)}</dt>
            <dd>{pick(row.value, lang)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
