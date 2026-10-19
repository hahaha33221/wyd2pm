// 'Q&A 소개 > 취합 개요' 화면의 2번부터 내용 (언어별 워드 문서 원문).
// 1번 회의 개요 표는 엑셀 Meeting_Info 시트(MEETING_INFO, 영어는 translations/en/meta.json)를 씁니다.
// 줄 항목: 문자열 하나 = 글머리표 한 줄, { label, items } = 이름표가 붙은 하위 목록.
// 영어 워드 문서(#[2PM]세션발표 Q&A_취합개요_EN_261019.docx)에는 2번까지만 있어 영어는 2번만 보여 줍니다.
export const OVERVIEW_SECTIONS = {
  ko: [
    {
      title: "배경 및 목적",
      items: [
        "제2차 국제준비회의 내 청중응답시스템 '피전홀(Pigeonhole)'로 세션별 실시간 질문 접수",
        {
          label: "해당세션",
          items: [
            "S3. 순례자 모집 및 참가 준비",
            "S4. 등록시스템·순례자앱",
            "S5. 교구대회 & 본대회",
            "S6. 서울 도착부터 대회 참가까지"
          ]
        },
        "시간관계상 발표 내 답변하지 못한 질문을 추후 조직위원회에서 답변하기로 안내",
        "회의종료 후, 세션팀(국제부, 기획조정부, 순례자부)에서 질문 정리 후, 해당 부서별 답변작성 및 조율.",
        "조직위 내부 공유 및 참가자 대상 답변 공유 목적"
      ]
    },
    {
      title: "취합 방법",
      items: [
        "총 159건(질문 146건, 의견 13건)으로 정리",
        "질문을 4개 대분류(참가 신청 및 등록 / 순례자 지원 / 현장 도착 및 운영 / 프로그램)로 재편하여 수록, 의견은 별첨으로 수록",
        "답변 작성: 질문별 검토부서(1~3순위)를 지정하고 해당 부서에서 답변 작성"
      ]
    },
    {
      title: "활용 시 유의사항",
      items: [
        "본 자료는 조직위 내부 검토용으로, 대외 배포 시에는 최종 확인 절차를 거쳐야 함.",
        "본 답변은 현 시점 검토기준으로 작성. 추후 정책 확정사항에 수정 및 업데이트 될 수 있음."
      ]
    }
  ],
  en: [
    {
      title: "Background and Purpose",
      items: [
        "Questions were collected in real time for each session through the audience response software \u201cPigeonhole Live\u201d during the Second Preparatory Meeting.",
        {
          label: "Sessions",
          items: [
            "S3. Preparing for Pilgrim Recruitment and Participation",
            "S4. Registration System & Pilgrim App",
            "S5. Days in the Dioceses & Main Event",
            "S6. The Pilgrim Journey: From Arrival to WYD Participation"
          ]
        },
        "Participants were informed that questions which could not be answered during the sessions due to time constraints would be answered later by the LOC.",
        "After the meeting, the Session Team (Global Relations Division, Planning & Coordination Division, Pilgrims Division) organized the questions, and the relevant divisions drafted and coordinated the answers."
      ]
    }
  ]
};
