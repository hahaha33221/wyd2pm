import React from "react";
import { useStore } from "../../context/StoreContext";

export default function SettingsTab() {
  const { live, isCloud } = useStore();

  return (
    <div className="settings-tab">
      <p className="note">
        지금 상태:{" "}
        <strong>
          {isCloud
            ? live
              ? "서버에 연결됨"
              : "서버에 연결 시도 중..."
            : "테스트 모드 (서버 없이 실행 중)"}
        </strong>
        <br />
        <br />
        질문과 답변은 엑셀 파일이 원본입니다. 내용을 바꾸려면 엑셀을 고친 뒤
        <br />
        <code>python3 scripts/import_xlsx.py "엑셀 파일"</code> 을 실행하고 다시 배포하세요.
        <br />
        <br />
        운영자 접속 번호는 VPS의 <code>.env</code> 파일(<code>ADMIN_CODE</code>)에서 바꿀 수 있습니다.
      </p>
    </div>
  );
}
