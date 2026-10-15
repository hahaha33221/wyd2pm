#!/usr/bin/env bash
# 테이블을 만들고(이미 있으면 그대로) 엑셀 내용을 DB에 맞춥니다.
# 사용 (VPS): cd /opt/wyd2pm-qna && bash db/apply.sh
set -euo pipefail
cd "$(dirname "$0")/.."

docker compose up -d wyd2pm-qna-db
for _ in $(seq 1 30); do
  docker compose exec -T wyd2pm-qna-db pg_isready -U wyd2pm -d wyd2pm_qna >/dev/null 2>&1 && break
  sleep 1
done

docker compose exec -T wyd2pm-qna-db psql -U wyd2pm -d wyd2pm_qna -v ON_ERROR_STOP=1 -q \
  -f /docker-entrypoint-initdb.d/sql/schema.sql \
  -f /docker-entrypoint-initdb.d/sql/seed.sql

docker compose exec -T wyd2pm-qna-db psql -U wyd2pm -d wyd2pm_qna -t -A -F ' ' -c "
  SELECT 'meeting_info', count(*) FROM meeting_info UNION ALL
  SELECT 'qa_section',   count(*) FROM qa_section   UNION ALL
  SELECT 'qa_topic',     count(*) FROM qa_topic     UNION ALL
  SELECT 'qa_subtopic',  count(*) FROM qa_subtopic  UNION ALL
  SELECT 'qa_item',      count(*) FROM qa_item      UNION ALL
  SELECT 'qa_item_i18n', count(*) FROM qa_item_i18n UNION ALL
  SELECT 'opinion',      count(*) FROM opinion      UNION ALL
  SELECT 'inquiry',      count(*) FROM inquiry;"
