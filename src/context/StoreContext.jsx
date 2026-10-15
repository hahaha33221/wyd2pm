import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { CONFIG } from "../constants/config";
import { SEED } from "../constants/seedData";

const StoreContext = createContext();

const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

class LocalStore {
  constructor() {
    this.live = false;
    this.subs = [];
    window.addEventListener("storage", (e) => {
      if (e.key === "lfaq") this.emit();
    });
    this.ch = "BroadcastChannel" in window ? new BroadcastChannel("lfaq") : null;
    if (this.ch) {
      this.ch.onmessage = () => this.emit();
    }
  }
  read() {
    let d;
    try {
      d = JSON.parse(localStorage.getItem("lfaq"));
    } catch {
      d = null;
    }
    d = d || {};
    d.faq = d.faq || {};
    d.questions = d.questions || {};
    d.answers = d.answers || {};
    return d;
  }
  write(d) {
    localStorage.setItem("lfaq", JSON.stringify(d));
    if (this.ch) this.ch.postMessage(1);
    this.emit();
  }
  emit() {
    const d = this.read();
    this.subs.forEach((f) => f(d, false));
  }
  subscribe(f) {
    this.subs.push(f);
    f(this.read(), false);
    return () => {
      this.subs = this.subs.filter((s) => s !== f);
    };
  }
  async add(path, obj) {
    const d = this.read();
    d[path] = d[path] || {};
    const id = uid();
    d[path][id] = { ...obj, id };
    this.write(d);
    return id;
  }
  async patch(path, id, obj) {
    const d = this.read();
    d[path] = d[path] || {};
    d[path][id] = { ...(d[path][id] || {}), ...obj };
    this.write(d);
  }
  async remove(path, id) {
    const d = this.read();
    if (d[path]) delete d[path][id];
    this.write(d);
  }
}

// VPS 서버(server/index.js)와 주고받는 저장소. 실시간 갱신은 SSE(/api/stream)로 받습니다.
class ApiStore {
  constructor(base) {
    this.base = base.replace(/\/$/, "");
    this.live = false;
    this.subs = [];
    this.data = { faq: {}, questions: {}, answers: {} };
    this.connect();
  }
  connect() {
    this.es = new EventSource(this.base + "/stream");
    this.es.addEventListener("data", (e) => {
      const d = JSON.parse(e.data) || {};
      this.data = { faq: d.faq || {}, questions: d.questions || {}, answers: d.answers || {} };
      this.live = true;
      this.emit();
    });
    this.es.onerror = () => {
      // EventSource가 알아서 다시 연결합니다.
      this.live = false;
      this.emit();
    };
  }
  emit() {
    this.subs.forEach((f) => f(this.data, this.live));
  }
  subscribe(f) {
    this.subs.push(f);
    f(this.data, this.live);
    return () => {
      this.subs = this.subs.filter((s) => s !== f);
    };
  }
  async request(method, url, body) {
    const r = await fetch(this.base + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Code": sessionStorage.getItem("lfaq.code") || ""
      },
      body: body === undefined ? undefined : JSON.stringify(body)
    });
    if (!r.ok) throw new Error(`${method} ${url} → ${r.status}`);
    return r.json();
  }
  async add(path, obj) {
    const j = await this.request("POST", `/${path}`, obj);
    return j.id;
  }
  async patch(path, id, obj) {
    await this.request("PATCH", `/${path}/${id}`, obj);
  }
  async remove(path, id) {
    await this.request("DELETE", `/${path}/${id}`);
  }
}

const storeInstance = CONFIG.apiBase ? new ApiStore(CONFIG.apiBase) : new LocalStore();

// 개발 중 파일이 다시 불러와질 때 이전 실시간 연결을 닫습니다 (닫지 않으면 연결이 쌓여 화면이 멈춤).
if (import.meta.hot) {
  import.meta.hot.dispose(() => storeInstance.es?.close());
}

export function StoreProvider({ children }) {
  const [data, setData] = useState({ faq: {}, questions: {}, answers: {} });
  const [live, setLive] = useState(false);

  useEffect(() => {
    const unsubscribe = storeInstance.subscribe((newData, isLive) => {
      setData({
        faq: newData.faq || {},
        questions: newData.questions || {},
        answers: newData.answers || {}
      });
      setLive(isLive);
    });
    return () => unsubscribe();
  }, []);

  // 엑셀에서 만든 FAQ(SEED). 서버에 덧붙인 답변(answers)·FAQ(faq)가 있으면 함께 보여줍니다.
  const faqs = useMemo(() => {
    const ov = data.answers || {};
    const seeds = SEED.map((it) => {
      const a = { ...(it.a || {}), ...(ov[it.id] || {}) };
      Object.keys(a).forEach((k) => {
        if (!a[k] || !String(a[k]).trim()) delete a[k];
      });
      return {
        ...it,
        a,
        pending: Object.keys(a).length === 0
      };
    });
    const custom = Object.values(data.faq || {});
    // 엑셀 순서를 그대로 둡니다 (화면에서 주제별로 묶어 보여줌).
    return [...seeds, ...custom];
  }, [data.answers, data.faq]);

  return (
    <StoreContext.Provider value={{ data, live, faqs, isCloud: !!CONFIG.apiBase }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
