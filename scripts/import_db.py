"""Q&A DB 엑셀(WYD_2nd_Prep_Meeting_QA_DB.xlsx)을 앱 데이터(src/constants/seedData.js)로 바꿉니다.

사용:
    python3 scripts/import_db.py "WYD_2nd_Prep_Meeting_QA_DB.xlsx"

시트 3개를 읽습니다 (왼쪽 네비게이션도 이 시트 구성을 따릅니다).
  - QA_DB        : No / 질문번호 / 대분류코드 / 대분류 / 중분류번호 / 중분류 / 소분류코드 / 소분류 / 질문 / 답변
  - Opinions     : No / 관련 항목 / 의견
  - Meeting_Info : 항목 / 내용
엑셀이 원본입니다. 내용을 고칠 때는 엑셀을 고친 뒤 이 스크립트를 다시 실행하세요.
필요: pip install openpyxl
"""
import json
import re
import sys
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "constants" / "seedData.js"


def clean(value, one_line=False):
    """보이지 않는 공백을 없애고 앞뒤 공백을 정리합니다."""
    if value is None:
        return ""
    s = str(value).replace("\xa0", " ").replace("​", "").replace("﻿", "")
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    lines = [re.sub(r"[ \t]+", " ", line).strip() for line in s.split("\n")]
    s = "\n".join(lines).strip()
    if one_line:
        s = re.sub(r"\s*\n\s*(?=·)", "", s)
        s = re.sub(r"\s*\n\s*", " ", s)
    return s


def rows(ws, header):
    """머리글을 확인하고 내용 행을 dict로 돌려줍니다."""
    it = ws.iter_rows(values_only=True)
    first = [clean(c) for c in next(it, [])]
    if first[: len(header)] != header:
        sys.exit(f"'{ws.title}' 시트 머리글이 다릅니다: {first} (기대: {header})")
    for row_no, row in enumerate(it, start=2):
        vals = [clean(v) for v in (list(row) + [None] * len(header))[: len(header)]]
        if any(vals):
            yield row_no, dict(zip(header, vals))


def sheet(wb, name):
    if name not in wb.sheetnames:
        sys.exit(f"'{name}' 시트가 없습니다. 시트 목록: {wb.sheetnames}")
    return wb[name]


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    wb = openpyxl.load_workbook(sys.argv[1], data_only=True)
    problems = []

    qa = []
    qa_header = ["No", "질문번호", "대분류코드", "대분류", "중분류번호", "중분류", "소분류코드", "소분류", "질문", "답변"]
    for row_no, r in rows(sheet(wb, "QA_DB"), qa_header):
        if not (r["질문번호"] and r["대분류"] and r["중분류"] and r["질문"]):
            problems.append(f"QA_DB {row_no}행: 질문번호·대분류·중분류·질문 중 빈 칸이 있어 건너뜀")
            continue
        if not r["답변"]:
            problems.append(f"QA_DB {row_no}행: 답변이 비어 있음 (화면에는 '답변 준비 중')")
        item = {
            "id": r["질문번호"],
            "no": r["질문번호"],
            "section": {"ko": r["대분류"]},
            "sectionNo": r["대분류코드"],
            "topic": {"ko": r["중분류"]},
            "topicNo": r["중분류번호"],
            # 질문 앞의 '○ ' 같은 표시는 뺍니다
            "q": {"ko": re.sub(r"^○\s*", "", r["질문"])},
            "a": {"ko": r["답변"]} if r["답변"] else {},
        }
        if r["소분류"]:
            item["sub"] = {"ko": r["소분류"]}
            item["subNo"] = r["소분류코드"]
        qa.append(item)

    opinions = [
        {"id": f"O{r['No'] or row_no}", "topic": clean(r["관련 항목"], one_line=True), "text": r["의견"]}
        for row_no, r in rows(sheet(wb, "Opinions"), ["No", "관련 항목", "의견"])
        if r["의견"]
    ]

    info = [
        {"label": r["항목"], "value": r["내용"]}
        for _, r in rows(sheet(wb, "Meeting_Info"), ["항목", "내용"])
        if r["항목"]
    ]

    def js(v):
        return json.dumps(v, ensure_ascii=False, indent=2)

    OUT.write_text(
        "// 자동 생성 파일입니다. 직접 고치지 말고 엑셀을 고친 뒤 다시 만드세요.\n"
        f"// 원본: {Path(sys.argv[1]).name}\n"
        "// 만드는 법: python3 scripts/import_db.py \"<엑셀 파일>\"\n\n"
        "// QA_DB 시트\n"
        f"export const SEED = {js(qa)};\n\n"
        "// Opinions 시트\n"
        f"export const OPINIONS = {js(opinions)};\n\n"
        "// Meeting_Info 시트\n"
        f"export const MEETING_INFO = {js(info)};\n",
        encoding="utf-8",
    )

    print(f"질문 {len(qa)}개 · 의견 {len(opinions)}개 · 회의 정보 {len(info)}개 → {OUT.relative_to(ROOT)}")
    for p in problems:
        print("  ! " + p)


if __name__ == "__main__":
    main()
