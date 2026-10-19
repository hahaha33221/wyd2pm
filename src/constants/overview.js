// 'Q&A 소개 > 취합 개요' 화면의 2번부터 내용 (언어별 워드 문서 원문).
// 1번 회의 개요 표는 엑셀 Meeting_Info 시트(MEETING_INFO, 영어는 translations/en/meta.json)를 씁니다.
// 줄 항목: 문자열 하나 = 글머리표 한 줄, { label, items } = 이름표가 붙은 하위 목록.
// 모든 언어 2번(배경 및 목적)까지만 둡니다. 3번 취합 방법·4번 활용 시 유의사항은 2026-10-19 요청으로 삭제.
export const OVERVIEW_SECTIONS = {
  ko: [
    {
      title: "배경 및 목적",
      items: [
        "제2차 국제준비회의 내 청중응답시스템 '피전홀(Pigeonhole)'로 세션별 실시간 질문 접수.",
        {
          label: "해당세션",
          items: [
            "S3. 순례자 모집 및 참가 준비",
            "S4. 등록시스템·순례자앱",
            "S5. 교구대회 & 본대회",
            "S6. 서울 도착부터 대회 참가까지"
          ]
        },
        "시간관계상 발표 내 답변하지 못한 질문을 추후 조직위원회에서 답변하기로 안내.",
        "회의종료 후, 세션팀(국제부, 기획조정부, 순례자부)에서 질문 정리 후, 해당 부서별 답변작성 및 조율."
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
  ],
  // es·fr·it·pt: 확인된 영어(위 en)를 기준으로 번역 (2026-10-19)
  es: [
    {
      title: "Contexto y objetivo",
      items: [
        "Durante la Segunda Reunión Preparatoria, las preguntas de cada sesión se recogieron en tiempo real mediante el sistema de respuesta del público “Pigeonhole Live”.",
        {
          label: "Sesiones",
          items: [
            "S3. Preparación para la convocatoria y la participación de los peregrinos",
            "S4. Sistema de inscripción y App del Peregrino",
            "S5. Días en las Diócesis y Evento Principal",
            "S6. El camino del peregrino: de la llegada a la participación en la JMJ"
          ]
        },
        "Se informó a los participantes de que las preguntas que no pudieron responderse durante las sesiones por falta de tiempo serían respondidas más adelante por el COL.",
        "Tras la reunión, el Equipo de Sesiones (División de Relaciones Globales, División de Planificación y Coordinación, División de Peregrinos) organizó las preguntas, y las divisiones correspondientes redactaron y coordinaron las respuestas."
      ]
    }
  ],
  fr: [
    {
      title: "Contexte et objectif",
      items: [
        "Pendant la Deuxième réunion préparatoire, les questions de chaque session ont été recueillies en temps réel grâce au logiciel de réponse du public « Pigeonhole Live ».",
        {
          label: "Sessions",
          items: [
            "S3. Préparer la mobilisation et la participation des pèlerins",
            "S4. Système d'inscription et Application du pèlerin",
            "S5. Journées dans les diocèses et Événement principal",
            "S6. Le parcours du pèlerin : de l'arrivée à la participation aux JMJ"
          ]
        },
        "Les participants ont été informés que les questions auxquelles il n'avait pas été possible de répondre pendant les sessions, faute de temps, recevraient plus tard une réponse du COL.",
        "Après la réunion, l'Équipe des sessions (Division des relations globales, Division de la planification et de la coordination, Division des pèlerins) a organisé les questions, et les divisions concernées ont rédigé et coordonné les réponses."
      ]
    }
  ],
  it: [
    {
      title: "Contesto e finalità",
      items: [
        "Durante il Secondo Incontro Preparatorio, le domande di ciascuna sessione sono state raccolte in tempo reale tramite il software di risposta del pubblico “Pigeonhole Live”.",
        {
          label: "Sessioni",
          items: [
            "S3. Preparare il coinvolgimento e la partecipazione dei pellegrini",
            "S4. Sistema di iscrizione e App del Pellegrino",
            "S5. Giornate nelle Diocesi ed Evento principale",
            "S6. Il cammino del pellegrino: dall'arrivo alla partecipazione alla GMG"
          ]
        },
        "Ai partecipanti è stato comunicato che alle domande a cui non è stato possibile rispondere durante le sessioni per mancanza di tempo avrebbe risposto in seguito il COL.",
        "Dopo l'incontro, il Team delle sessioni (Divisione Relazioni Globali, Divisione Pianificazione e Coordinamento, Divisione Pellegrini) ha organizzato le domande, e le divisioni competenti hanno redatto e coordinato le risposte."
      ]
    }
  ],
  pt: [
    {
      title: "Contexto e objetivo",
      items: [
        "Durante a Segunda Reunião Preparatória, as perguntas de cada sessão foram recolhidas em tempo real através do sistema de resposta do público “Pigeonhole Live”.",
        {
          label: "Sessões",
          items: [
            "S3. Preparar a mobilização e a participação dos peregrinos",
            "S4. Sistema de inscrição e App do Peregrino",
            "S5. Dias nas Dioceses e Evento Principal",
            "S6. O caminho do peregrino: da chegada à participação na JMJ"
          ]
        },
        "Os participantes foram informados de que as perguntas a que não foi possível responder durante as sessões, por falta de tempo, seriam respondidas mais tarde pelo COL.",
        "Depois da reunião, a Equipa das Sessões (Divisão de Relações Globais, Divisão de Planeamento e Coordenação, Divisão de Peregrinos) organizou as perguntas, e as divisões responsáveis redigiram e coordenaram as respostas."
      ]
    }
  ]
};
