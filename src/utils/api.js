// src/utils/api.js

const RAW = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// Ensure no trailing slash
export const BACKEND = RAW.replace(/\/+$/, "");

// Safe POST
export async function post(path, body = {}, headers = {}) {
  try {
    const res = await fetch(`${BACKEND}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    const txt = await res.text();

    try {
      return { ok: res.ok, data: JSON.parse(txt) };
    } catch {
      return { ok: res.ok, data: txt };
    }
  } catch (err) {
    console.error("POST request failed:", err.message);
    return { ok: false, data: { error: "Network error" } };
  }
}

// Safe GET
export async function get(path) {
  try {
    const res = await fetch(`${BACKEND}${path}`);
    const txt = await res.text();

    try {
      return { ok: res.ok, data: JSON.parse(txt) };
    } catch {
      return { ok: res.ok, data: txt };
    }
  } catch (err) {
    console.error("GET request failed:", err.message);
    return { ok: false, data: { error: "Network error" } };
  }
}
