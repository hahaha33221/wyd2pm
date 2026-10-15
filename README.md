# WYD SEOUL 2027 · 안내 데스크 Q&A

참가자는 QR로 들어와 다국어(6개 언어) FAQ를 검색하고, 운영자는 `#admin`에서 답변을 관리하며, 큰 화면은 `#screen`으로 송출합니다.

| 주소 | 화면 |
| --- | --- |
| `/` | 참가자 FAQ |
| `/#admin` | 운영자 화면 (접속 번호 필요) |
| `/#screen` | 송출용 큰 화면 |

## 구성

- `src/` — React + Vite 화면
- `server/index.js` — VPS용 Node 서버 (외부 패키지 없음). `dist/`를 내보내고 `/api`로 데이터를 저장·실시간 전송(SSE)
- `Dockerfile`, `docker-compose.yml` — VPS에서 컨테이너로 실행 (서버의 다른 서비스와 분리)
- `deploy/` — nginx 설정, 배포 스크립트

동작 모드는 빌드 시 `VITE_API_BASE`로 정해집니다.

- 기본(`/api`): **서버 모드** — VPS의 `data/db.json`에 저장, 모든 기기에 실시간 반영
- 빈 값(`""`): **테스트 모드** — 브라우저 안에만 저장 (GitHub Pages 빌드가 이 모드)

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
| POST | `/api/questions` | 누구나 (text, lang만 저장) |
| POST | `/api/auth` | 접속 번호 확인 |
| POST/PATCH/DELETE | `/api/{faq,questions,answers}[/:id]` | 운영자 (`X-Admin-Code` 헤더) |

## VPS 배포

[docs/VPS.md](docs/VPS.md) 참고.
