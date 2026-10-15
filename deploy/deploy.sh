#!/usr/bin/env bash
# VPS에서 최신 코드를 받아 다시 빌드하고 서버를 재시작합니다.
# 사용: cd /srv/wyd-qna && bash deploy/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

git pull --ff-only
pnpm install --frozen-lockfile
pnpm run build
sudo systemctl restart wyd-qna
sudo systemctl --no-pager --lines=5 status wyd-qna
