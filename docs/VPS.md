# VPS 배포 안내

서버 `31.97.71.87`(Ubuntu 24.04)에는 이미 여러 서비스가 돌고 있으므로, **기존 것을 하나도 건드리지 않는 방식**으로 올립니다.

## 기존 서비스와 겹치지 않게 정한 것

| 항목 | 이 앱 | 이미 사용 중이라 피한 것 |
| --- | --- | --- |
| 이름 | `wyd2pm-qna` | `wyd-backend`(컨테이너·nginx·/srv) |
| 설치 위치 | `/opt/wyd2pm-qna` | /opt/dorandoran, /opt/finalcheck, /srv/wyd-backend 등 |
| 내부 포트 | `127.0.0.1:18797` | 3306·4000·5005·5432·6379·8080·8081·8090·8095·8787·18787 등 |
| 주소 | `https://wyd2pm.31-97-71-87.sslip.io` | 다른 sslip.io 서브도메인들 |
| Node | Docker 안의 Node 22 | 서버의 Node 20(다른 서비스가 사용)은 그대로 |
| 방화벽 | 변경 없음 (80·443만 사용) | |

## 최초 설치

```bash
git clone https://github.com/hahaha33221/wyd2pm.git /opt/wyd2pm-qna
cd /opt/wyd2pm-qna
cp .env.example .env && nano .env          # ADMIN_CODE 설정
mkdir -p data && chown 1000:1000 data      # 컨테이너(node 사용자)가 쓸 수 있게
docker compose up -d --build
curl -s http://127.0.0.1:18797/api/data    # {"faq":{},...} 가 나오면 정상

cp deploy/nginx.conf /etc/nginx/sites-available/wyd2pm-qna
ln -s /etc/nginx/sites-available/wyd2pm-qna /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx         # nginx -t 가 실패하면 reload 하지 않음
certbot --nginx -d wyd2pm.31-97-71-87.sslip.io
```

## 업데이트

```bash
cd /opt/wyd2pm-qna && bash deploy/deploy.sh
```

## 되돌리기 (이 앱만 제거)

```bash
cd /opt/wyd2pm-qna && docker compose down
rm /etc/nginx/sites-enabled/wyd2pm-qna && nginx -t && systemctl reload nginx
```

## 데이터베이스 (PostgreSQL)

이 앱 전용 컨테이너 `wyd2pm-qna-db`(postgres:16-alpine)입니다. 바깥 포트를 열지 않으며, 데이터는 Docker 볼륨 `wyd2pm-qna_pgdata`에 저장됩니다.

| 테이블 | 엑셀 시트 | 내용 |
| --- | --- | --- |
| `meeting_info` | Meeting_Info | 회의 정보 (항목·내용) |
| `qa_section` / `qa_topic` / `qa_subtopic` | QA_DB 분류 열 | 대분류 > 중분류 > 소분류 |
| `qa_item` | QA_DB | 질문번호·분류·순서·공개 여부 |
| `qa_item_i18n` | QA_DB | 언어별 질문·답변 (지금은 ko) |
| `opinion` | Opinions | 의견 (관련 항목·내용) |
| `inquiry` | — | 나중에 쓸 참가자 질문 접수 (비어 있음) |
| `qa_view` (보기) | — | 질문을 분류와 합쳐 보는 보기 |

```bash
cd /opt/wyd2pm-qna && bash db/apply.sh      # 테이블 만들기 + 엑셀 내용 반영 (여러 번 실행해도 안전)
docker compose exec wyd2pm-qna-db psql -U wyd2pm -d wyd2pm_qna   # 직접 조회
docker compose exec -T wyd2pm-qna-db pg_dump -U wyd2pm wyd2pm_qna > backup-$(date +%F).sql   # 백업
```

`.env`에 `POSTGRES_PASSWORD`가 있어야 합니다 (처음 설치 때 `openssl rand -hex 16`으로 만들기).

## 데이터 백업

질문·답변은 `/opt/wyd2pm-qna/data/db.json` 한 파일입니다.
