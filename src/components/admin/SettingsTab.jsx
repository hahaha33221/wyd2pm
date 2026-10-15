import React from "react";
import { CONFIG } from "../../constants/config";
import { useStore } from "../../context/StoreContext";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";

export default function SettingsTab() {
  const { live, isCloud, wipeAllQuestions } = useStore();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const handleWipe = async () => {
    if (window.confirm(t.wipeConfirm)) {
      await wipeAllQuestions();
      showToast(t.wipedAlert);
    }
  };

  return (
    <div className="settings-tab">
      <p className="note">
        지금 상태:{" "}
        <strong>
          {isCloud
            ? live
              ? "실시간 연결됨 (VPS 서버)"
              : "서버에 연결 시도 중..."
            : "테스트 모드 (이 기기에만 저장)"}
        </strong>
        <br />
        <br />
        서버 모드에서는 질문과 답변이 VPS의 <code>data/db.json</code>에 저장되고, 접속한 모든 기기에 바로 반영됩니다.
        <br />
        <br />
        운영자 접속 번호는 VPS의 <code>ADMIN_CODE</code> 환경변수에서 바꿀 수 있습니다.
        <br />
        송출용 큰 화면은 주소 뒤에 <code>#screen</code>을 붙이면 열립니다.
      </p>

      <div className="row" style={{ marginTop: "24px" }}>
        <button type="button" className="btn ghost danger" onClick={handleWipe}>
          받은 질문 모두 지우기
        </button>
      </div>
    </div>
  );
}
