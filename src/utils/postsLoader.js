// src/utils/postsLoader.js
import seedPosts from "../data/posts.js";

/**
 * loadPosts:
 *  - Tries GET /api/posts first (if BACKEND set)
 *  - Then tries localStorage ('ew_posts')
 *  - Falls back to seedPosts
 *
 * savePost:
 *  - Tries POST /api/posts first (if BACKEND set)
 *  - Else saves to localStorage (prepends new)
 */

const RAW_BACKEND = import.meta.env.VITE_BACKEND_URL || "https://echowritings-backend.onrender.com";
export const BACKEND = RAW_BACKEND ? RAW_BACKEND.replace(/\/+$/, "") : "";

const DEFAULT_TIMEOUT = 7000;

function slugify(s = "") {
  return s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-_\s]+/g, "")
    .replace(/[\s\_]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function fetchWithTimeout(url, opts = {}, ms = DEFAULT_TIMEOUT) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal, ...opts });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function loadPosts() {
  // 1) try backend (only if BACKEND configured)
  if (BACKEND) {
    try {
      const res = await fetchWithTimeout(`${BACKEND}/api/posts`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) return data;
      } else {
        // non-ok: fallthrough to local
        console.warn("Backend returned non-OK from /api/posts:", res.status);
      }
    } catch (e) {
      console.warn("Backend posts fetch failed (timeout/network):", e?.message || e);
    }
  }

  // 2) try localStorage
  try {
    const raw = localStorage.getItem("ew_posts");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) {
    console.warn("Failed to read ew_posts from localStorage:", e?.message || e);
  }

  // 3) fallback seed (ensure we return a new array copy)
  return Array.isArray(seedPosts) ? [...seedPosts] : [];
}

export async function savePost(incomingPost = {}) {
  // normalize incoming post (do not mutate original)
  const now = new Date().toISOString().split("T")[0];
  const post = {
    ...incomingPost,
    title: String(incomingPost.title || "").trim(),
    excerpt: incomingPost.excerpt ?? "",
    img: incomingPost.img ?? (Array.isArray(seedPosts) && seedPosts[0] ? seedPosts[0].img : ""),
    author: incomingPost.author ?? "EchoWritings",
    date: incomingPost.date ?? now,
    slug: incomingPost.slug || slugify(incomingPost.title || `story-${Date.now()}`),
    content: Array.isArray(incomingPost.content)
      ? incomingPost.content
      : typeof incomingPost.content === "string"
      ? incomingPost.content.split("\n").map(s => s.trim()).filter(Boolean)
      : (incomingPost.content ? [String(incomingPost.content)] : []),
  };

  // try backend first if configured
  if (BACKEND) {
    try {
      const res = await fetchWithTimeout(`${BACKEND}/api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      const text = await res.text();
      let data = null;
      try { data = JSON.parse(text); } catch { data = text; }

      if (res.ok) {
        // backend should return saved post (with id). Return that
        return { ok: true, source: "backend", post: data };
      } else {
        console.warn("Backend save returned non-OK:", res.status, data);
        // fallthrough to local fallback
      }
    } catch (e) {
      console.warn("Backend save failed (network/timeout):", e?.message || e);
      // continue to localStorage fallback
    }
  }

  // LocalStorage fallback: prepend and ensure an id exists
  try {
    const raw = localStorage.getItem("ew_posts");
    const stored = raw ? (JSON.parse(raw) || []) : (Array.isArray(seedPosts) ? [...seedPosts] : []);
    // compute next id
    const nextId = (stored.reduce((m, x) => Math.max(m, Number(x.id || 0)), 0) || 0) + 1;
    const toSave = { ...post, id: incomingPost.id ?? nextId };

    const updated = [toSave, ...stored];
    localStorage.setItem("ew_posts", JSON.stringify(updated));
    return { ok: true, source: "local", post: toSave };
  } catch (e) {
    console.error("Local save failed:", e?.message || e);
    return { ok: false, error: e?.message || "Failed to save post locally" };
  }
}
