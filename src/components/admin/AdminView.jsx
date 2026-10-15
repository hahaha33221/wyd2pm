import React, { useState } from "react";
import { SEED } from "../../constants/seedData";
import AdminGate from "./AdminGate";
import QrTab from "./QrTab";
import SettingsTab from "./SettingsTab";

export default function AdminView() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("lfaq.ok") === "1"
  );
  const [currentTab, setCurrentTab] = useState("qr");

  if (!unlocked) {
    return <AdminGate onUnlock={() => setUnlocked(true)} />;
  }

  const tabList = [
    { key: "qr", label: "QR 코드" },
    { key: "set", label: "설정" }
  ];

  return (
    <div className="admin">
      <div className="admin-header">
        <div>
          <h1>운영자 화면</h1>
          <p className="sub">등록된 질문 {SEED.length}개</p>
        </div>
        <a
          href="#"
          className="btn ghost"
          style={{ textDecoration: "none", fontSize: "13px" }}
        >
          ← 참가자 화면 보기
        </a>
      </div>

      <div className="tabs" role="tablist">
        {tabList.map(({ key, label }) => (
          <button
            key={key}
            role="tab"
            aria-selected={currentTab === key}
            onClick={() => setCurrentTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {currentTab === "qr" && <QrTab />}
      {currentTab === "set" && <SettingsTab />}
    </div>
  );
}
