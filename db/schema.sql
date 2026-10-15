-- WYD 2PM 세션 Q&A 데이터베이스 (PostgreSQL 16)
-- 엑셀 시트와 1:1로 대응합니다: QA_DB → qa_*, Opinions → opinion, Meeting_Info → meeting_info
-- 여러 번 실행해도 안전하도록 IF NOT EXISTS 를 씁니다.

-- ── 회의 정보 (Meeting_Info 시트) ──
CREATE TABLE IF NOT EXISTS meeting_info (
  id          SERIAL PRIMARY KEY,
  label       TEXT NOT NULL UNIQUE,          -- 항목 (회의명, 일자, …)
  value       TEXT NOT NULL,                 -- 내용
  sort_order  INT  NOT NULL DEFAULT 0
);

-- ── 질의응답 분류: 대분류 > 중분류 > 소분류 (QA_DB 시트의 분류 열) ──
CREATE TABLE IF NOT EXISTS qa_section (
  id          SERIAL PRIMARY KEY,
  code        TEXT NOT NULL UNIQUE,          -- 대분류코드 (Ⅰ, Ⅱ, …)
  name        TEXT NOT NULL,                 -- 대분류
  sort_order  INT  NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS qa_topic (
  id          SERIAL PRIMARY KEY,
  section_id  INT  NOT NULL REFERENCES qa_section(id) ON DELETE CASCADE,
  no          TEXT NOT NULL,                 -- 중분류번호 (1, 2, …)
  name        TEXT NOT NULL,                 -- 중분류
  sort_order  INT  NOT NULL DEFAULT 0,
  UNIQUE (section_id, no)
);

CREATE TABLE IF NOT EXISTS qa_subtopic (
  id          SERIAL PRIMARY KEY,
  topic_id    INT  NOT NULL REFERENCES qa_topic(id) ON DELETE CASCADE,
  code        TEXT NOT NULL,                 -- 소분류코드 (a, b, …)
  name        TEXT NOT NULL,                 -- 소분류
  sort_order  INT  NOT NULL DEFAULT 0,
  UNIQUE (topic_id, code)
);

-- ── 질문·답변 (QA_DB 시트의 행) ──
CREATE TABLE IF NOT EXISTS qa_item (
  id           SERIAL PRIMARY KEY,
  question_no  TEXT NOT NULL UNIQUE,         -- 질문번호 (Q1 ~)
  section_id   INT  NOT NULL REFERENCES qa_section(id),
  topic_id     INT  NOT NULL REFERENCES qa_topic(id),
  subtopic_id  INT  REFERENCES qa_subtopic(id),   -- 소분류가 없는 질문은 NULL
  sort_order   INT  NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT TRUE,     -- 화면에 보일지
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS qa_item_category_idx ON qa_item (section_id, topic_id, subtopic_id);

-- 언어별 질문·답변 (지금은 ko만, 다른 언어는 나중에 행만 추가)
CREATE TABLE IF NOT EXISTS qa_item_i18n (
  item_id     INT  NOT NULL REFERENCES qa_item(id) ON DELETE CASCADE,
  lang        TEXT NOT NULL,                 -- ko, en, es, fr, it, pt
  question    TEXT NOT NULL,
  answer      TEXT,                          -- NULL이면 '답변 준비 중'
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (item_id, lang)
);

-- ── 의견 (Opinions 시트) ──
CREATE TABLE IF NOT EXISTS opinion (
  id          SERIAL PRIMARY KEY,
  no          INT  NOT NULL UNIQUE,          -- No
  topic       TEXT NOT NULL,                 -- 관련 항목
  content     TEXT NOT NULL,                 -- 의견
  sort_order  INT  NOT NULL DEFAULT 0
);

-- ── 나중에 쓸 저장 기능: 참가자 질문 접수 (지금은 비어 있음) ──
CREATE TABLE IF NOT EXISTS inquiry (
  id           SERIAL PRIMARY KEY,
  question     TEXT NOT NULL,
  lang         TEXT NOT NULL DEFAULT 'ko',
  status       TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'answered', 'hidden')),
  answer       TEXT,
  qa_item_id   INT  REFERENCES qa_item(id) ON DELETE SET NULL,  -- 답변을 FAQ로 올렸을 때 연결
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  answered_at  TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS inquiry_status_idx ON inquiry (status, created_at DESC);

-- 화면에서 바로 쓰기 좋은 모양으로 합친 보기
CREATE OR REPLACE VIEW qa_view AS
SELECT i.question_no, s.code AS section_code, s.name AS section,
       t.no AS topic_no, t.name AS topic, st.code AS subtopic_code, st.name AS subtopic,
       n.lang, n.question, n.answer, i.sort_order, i.is_published
FROM qa_item i
JOIN qa_section s ON s.id = i.section_id
JOIN qa_topic t ON t.id = i.topic_id
LEFT JOIN qa_subtopic st ON st.id = i.subtopic_id
JOIN qa_item_i18n n ON n.item_id = i.id;
