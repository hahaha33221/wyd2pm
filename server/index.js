// VPS용 서버: 빌드된 화면(dist/)을 내보내고, 질문·답변 데이터를 JSON 파일에 저장합니다.
// 외부 패키지 없이 Node.js(22 이상) 기본 기능만 씁니다.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "127.0.0.1";
const ADMIN_CODE = process.env.ADMIN_CODE || "2027";
const DATA_FILE = path.resolve(process.env.DATA_FILE || path.join(ROOT, "data", "db.json"));
const DIST = path.join(ROOT, "dist");

const COLLECTIONS = ["faq", "questions", "answers"];
// 참가자도 쓸 수 있는 곳. 지금은 질문 보내기 기능을 껐으므로 모든 쓰기에 운영자 번호가 필요합니다.
// 다시 켜려면 "POST questions" 를 넣으세요.
const PUBLIC_WRITE = new Set([]);
const MAX_BODY = 64 * 1024;

// ── 저장소 ──
function load() {
  try {
    const d = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    for (const c of COLLECTIONS) d[c] = d[c] || {};
    return d;
  } catch {
    return { faq: {}, questions: {}, answers: {} };
  }
}

let db = load();

function save() {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  const tmp = DATA_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(db));
  fs.renameSync(tmp, DATA_FILE);
  broadcast();
}

const uid = () => Date.now().toString(36) + crypto.randomBytes(3).toString("hex");

// ── 실시간(SSE) ──
const clients = new Set();

function broadcast() {
  const msg = `event: data\ndata: ${JSON.stringify(db)}\n\n`;
  for (const res of clients) res.write(msg);
}

setInterval(() => {
  for (const res of clients) res.write(": ping\n\n");
}, 25000);

// ── 도우미 ──
function send(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error("too large"));
        req.destroy();
      } else chunks.push(c);
    });
    req.on("end", () => {
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        const obj = text ? JSON.parse(text) : {};
        if (!obj || typeof obj !== "object" || Array.isArray(obj)) throw new Error("bad");
        resolve(obj);
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function isAdmin(req) {
  const given = Buffer.from(String(req.headers["x-admin-code"] || ""));
  const want = Buffer.from(ADMIN_CODE);
  return given.length === want.length && crypto.timingSafeEqual(given, want);
}

// 참가자가 보내는 질문은 정해진 필드만 받습니다.
function cleanQuestion(obj) {
  return {
    text: String(obj.text || "").trim().slice(0, 1000),
    lang: String(obj.lang || "ko").slice(0, 5),
    status: "new",
    createdAt: Date.now()
  };
}

// ── API ──
async function handleApi(req, res, parts) {
  const [first, id] = parts;

  if (req.method === "GET" && first === "data") return send(res, 200, db);

  if (req.method === "GET" && first === "stream") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no"
    });
    res.write(`event: data\ndata: ${JSON.stringify(db)}\n\n`);
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  if (req.method === "POST" && first === "auth") {
    return isAdmin(req) ? send(res, 200, { ok: true }) : send(res, 401, { error: "wrong code" });
  }

  if (!COLLECTIONS.includes(first)) return send(res, 404, { error: "not found" });
  if (!PUBLIC_WRITE.has(`${req.method} ${first}`) && !isAdmin(req)) {
    return send(res, 401, { error: "admin only" });
  }

  let body = {};
  if (req.method === "POST" || req.method === "PATCH") {
    try {
      body = await readBody(req);
    } catch {
      return send(res, 400, { error: "bad body" });
    }
  }

  if (req.method === "POST" && !id) {
    const item = first === "questions" && !isAdmin(req) ? cleanQuestion(body) : body;
    if (first === "questions" && !item.text) return send(res, 400, { error: "empty" });
    const newId = uid();
    db[first][newId] = { ...item, id: newId };
    save();
    return send(res, 201, { id: newId });
  }

  if (req.method === "PATCH" && id) {
    db[first][id] = { ...(db[first][id] || {}), ...body, id };
    save();
    return send(res, 200, { ok: true });
  }

  if (req.method === "DELETE" && id) {
    delete db[first][id];
    save();
    return send(res, 200, { ok: true });
  }

  return send(res, 405, { error: "method not allowed" });
}

// ── 정적 파일 ──
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff2": "font/woff2"
};

function serveStatic(req, res, urlPath) {
  let file = path.join(DIST, decodeURIComponent(urlPath));
  if (file !== DIST && !file.startsWith(DIST + path.sep)) return send(res, 403, { error: "forbidden" });
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(DIST, "index.html");
  if (!fs.existsSync(file)) {
    res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("dist/ 가 없습니다. 먼저 pnpm build 를 실행하세요.");
  }
  const ext = path.extname(file);
  res.writeHead(200, {
    "Content-Type": TYPES[ext] || "application/octet-stream",
    "Cache-Control": file.includes(`${path.sep}assets${path.sep}`) ? "public, max-age=31536000, immutable" : "no-cache"
  });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname.startsWith("/api/")) {
    const parts = url.pathname.slice(5).split("/").filter(Boolean);
    try {
      await handleApi(req, res, parts);
    } catch (e) {
      console.error(e);
      if (!res.headersSent) send(res, 500, { error: "server error" });
    }
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, { error: "method not allowed" });
  serveStatic(req, res, url.pathname);
});

server.listen(PORT, HOST, () => {
  console.log(`WYD Q&A 서버: http://${HOST}:${PORT}  (데이터: ${DATA_FILE})`);
});
