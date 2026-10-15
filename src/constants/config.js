export const CONFIG = {
  // 행사 이름 — 참가자 화면 상단에 표시됩니다
  eventName: "WYD SEOUL 2027",

  // VPS 서버(server/index.js)의 API 주소. 기본값은 같은 서버의 /api 입니다.
  // 빌드할 때 VITE_API_BASE="" 로 비우면 이 기기 안에서만 저장되는 테스트 모드로 동작합니다.
  apiBase: import.meta.env.VITE_API_BASE ?? "/api",

  // 테스트 모드에서만 쓰는 운영자 화면(#admin) 접속 번호.
  // 서버 모드에서는 VPS의 ADMIN_CODE 환경변수로 확인합니다.
  adminCode: "2027",

  // 첫 화면(히어로)에 표시할 문의 이메일과 작성 시점
  contactEmail: "inquiries@wydseoul.org",
  noticeDate: "2026.10",

  // QR이 가리킬 주소. 비워두면 지금 보고 있는 주소를 씁니다.
  publicUrl: ""
};
