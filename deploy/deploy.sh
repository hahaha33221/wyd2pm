#!/usr/bin/env bash
# VPS에서 최신 코드를 받아 컨테이너를 다시 빌드·재시작합니다. 다른 서비스는 건드리지 않습니다.
# 사용: cd /opt/wyd2pm-qna && bash deploy/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

git pull --ff-only
docker compose up -d --build
bash db/apply.sh            # DB 테이블 만들기 + 엑셀 내용 반영
docker image prune -f --filter "label=com.docker.compose.project=wyd2pm-qna" >/dev/null || true
sleep 2
curl -fsS http://127.0.0.1:18797/api/data >/dev/null && echo "OK: wyd2pm-qna 동작 중"
