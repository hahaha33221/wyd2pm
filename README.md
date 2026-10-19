# WYD SEOUL 2027 · 안내 데스크 Q&A

제2차 국제준비회의 세션 질문에 대한 답변집입니다. 참가자는 QR로 들어와 구분·주제별로 질문을 찾아보고 검색합니다.

| 주소 | 화면 |
| --- | --- |
| `/` | 참가자 FAQ |
| `/#admin` | 운영자 화면 (QR 코드, 상태 확인 · 접속 번호 필요) |

## 질문·답변 바꾸기

엑셀 `WYD_2nd_Prep_Meeting_QA_DB.xlsx`가 원본입니다. 엑셀을 고친 뒤 아래를 실행하면 `src/constants/seedData.js`가 다시 만들어집니다.

```bash
pip install openpyxl     # 처음 한 번
python3 scripts/import_db.py "WYD_2nd_Prep_Meeting_QA_DB.xlsx"
```

시트 3개를 읽고, 왼쪽 네비게이션도 시트별로 나옵니다.

| 시트 | 열 | 네비게이션 |
| --- | --- | --- |
| `QA_DB` | No / 질문번호 / 대분류코드 / 대분류 / 중분류번호 / 중분류 / 소분류코드 / 소분류 / 질문 / 답변 | 질의응답 (대분류 > 중분류 > 소분류) |
| `Opinions` | No / 관련 항목 / 의견 | (화면에 싣지 않음, DB에만 저장) |
| `Meeting_Info` | 항목 / 내용 | 회의 정보 |

엑셀과 다르게 보여야 하는 한국어 문장은 `overrides/ko.json`에 "이 문장 → 이 문장"으로 적습니다 (현재 Q77·Q129 영대 관련 답변).
바꿀 문장을 엑셀에서 찾지 못하면 변환이 멈추므로, 엑셀이 바뀌어 수정이 빠지는 일은 없습니다.
'Q&A 소개 > 취합 개요' 화면의 2번(배경 및 목적) 내용은 `src/constants/overview.js`에 있습니다 (1번 회의 개요 표는 엑셀 Meeting_Info 시트).

같은 스크립트가 VPS 데이터베이스용 `db/seed.sql`도 만듭니다 (테이블 설계는 `db/schema.sql`).

바꾼 뒤 커밋·푸시하고 VPS에서 `bash deploy/deploy.sh`를 실행하세요 (DB 반영 포함).

## 구성

- `src/` — React + Vite 화면
- `server/index.js` — VPS용 Node 서버 (외부 패키지 없음). `dist/`를 내보내고 `/api`로 데이터를 저장·실시간 전송(SSE)
- `Dockerfile`, `docker-compose.yml` — VPS에서 컨테이너로 실행 (서버의 다른 서비스와 분리)
- `deploy/` — nginx 설정, 배포 스크립트

동작 모드는 빌드 시 `VITE_API_BASE`로 정해집니다.

- 기본(`/api`): **서버 모드** — VPS의 `data/db.json`에 저장, 모든 기기에 실시간 반영
- 빈 값(`""`): **테스트 모드** — 브라우저 안에만 저장

## 자동 배포 (GitHub Actions → Vercel)

`main`에 푸시하면 `.github/workflows/vercel-deploy.yml`이 https://wyd2pmqna.vercel.app 에 자동 배포합니다.
저장소 Settings → Secrets and variables → Actions 에 아래가 있어야 합니다.

| 종류 | 이름 | 값 |
| --- | --- | --- |
| Secret | `VERCEL_TOKEN` | Vercel 계정 토큰 (https://vercel.com/account/tokens) |
| Variable | `VERCEL_ORG_ID` | Vercel 팀 ID (설정됨) |
| Variable | `VERCEL_PROJECT_ID` | wyd2pmqna 프로젝트 ID (설정됨) |

## 다른 언어 (번역)

한국어는 엑셀 원문 그대로이고, 다른 언어는 `translations/<언어코드>/*.json`에 따로 있습니다.
지금은 6개 언어가 모두 켜져 있습니다. 켜진 언어의 번역만 화면 파일에 실리고,
모든 번역은 VPS DB에 저장됩니다. 언어를 켜려면:

1. 확인된 번역으로 `translations/<언어코드>/*.json`을 바꿉니다.
2. `src/constants/enabledLangs.json`에 언어 코드를 추가합니다 (예: `["ko", "en"]`).
3. `python3 scripts/import_db.py "<엑셀 파일>"`을 다시 실행합니다.
4. 검수 전 번역이면 `src/constants/languages.js`에서 그 언어에 `test: true`를 붙여 "(테스트)"로 표시할 수 있습니다.

| 언어 | 번역 |
| --- | --- |
| English (en) | **켜짐.** 질문·답변 146개, 분류명, 취합 개요 모두 확인된 영어(엑셀·워드 2026-10-19) |
| Español (es) | **켜짐.** 확인된 영어를 기준으로 번역 (2026-10-19, 원어민 검수 전) |
| Français (fr) | **켜짐.** 확인된 영어를 기준으로 번역 (2026-10-19, 원어민 검수 전) |
| Italiano (it) | **켜짐.** 확인된 영어를 기준으로 번역 (2026-10-19, 원어민 검수 전) |
| Português (pt) | **켜짐.** 확인된 영어를 기준으로 번역 (2026-10-19, 원어민 검수 전) |

## 배포 방식 두 가지

- **VPS (서버 모드):** `docker compose up -d --build` — [docs/VPS.md](docs/VPS.md)
- **Vercel (정적 사이트):** 저장소를 Vercel에 연결하면 `vercel.json`대로 서버 없이 빌드됩니다. 프로젝트 이름을 `wyd2pmqna`로 하면 주소가 `wyd2pmqna.vercel.app`이 됩니다.

링크 미리보기(제목 `2PM세션Q&A`, 이미지 `public/og-image.png`)는 `index.html`의 `og:` 태그에 있습니다. 실제 주소가 정해지면 `og:url`, `og:image`를 그 주소로 바꾸세요.

## 로컬 개발

```bash
pnpm install
pnpm start          # 터미널 1: API 서버 (http://127.0.0.1:3000)
pnpm dev            # 터미널 2: 화면 (/api 는 3000번으로 프록시)
```

운영 모드 그대로 확인하려면 `pnpm build && pnpm start` 후 http://127.0.0.1:3000 을 엽니다.

## API

| 메서드 | 경로 | 권한 |
| --- | --- | --- |
| GET | `/api/data` | 누구나 |
| GET | `/api/stream` (SSE) | 누구나 |
| POST | `/api/auth` | 접속 번호 확인 |
| POST/PATCH/DELETE | `/api/{faq,questions,answers}[/:id]` | 운영자 (`X-Admin-Code` 헤더) |

## VPS 배포

[docs/VPS.md](docs/VPS.md) 참고.
