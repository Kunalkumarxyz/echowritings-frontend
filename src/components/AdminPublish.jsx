// src/components/AdminPublish.jsx
// Dev-only admin panel (publish + load subscribers)
// IMPORTANT: Do NOT expose real secrets in frontend for production.
// Set VITE_ADMIN_API_KEY in .env for local dev testing only.

import React, { useState } from "react";
import { post } from "../utils/api"; // optional helper; safe fallback included

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://echowritings-backend.onrender.com";

export default function AdminPublish() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [url, setUrl] = useState("");
  const [loadingPublish, setLoadingPublish] = useState(false);

  const [subs, setSubs] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(false);

  const apiKey = import.meta.env.VITE_ADMIN_API_KEY;

  // helper: call backend publish endpoint (uses utils/post if available)
  async function publishArticle() {
    if (!apiKey) return alert("Set VITE_ADMIN_API_KEY in frontend .env for dev");
    if (!title.trim() || !url.trim()) return alert("Title and URL are required");
    setLoadingPublish(true);

    const body = { title: title.trim(), excerpt: excerpt.trim(), url: url.trim() };

    try {
      if (typeof post === "function") {
        const { ok, data } = await post("/api/admin/publish", body, { "x-admin-key": apiKey });
        if (ok) {
          alert(data?.message || "Published & notifications attempted");
          setTitle(""); setExcerpt(""); setUrl("");
        } else {
          alert(data?.error || "Publish failed");
        }
      } else {
        const res = await fetch(`${BACKEND}/api/admin/publish`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-admin-key": apiKey,
          },
          body: JSON.stringify(body),
        });

        const txt = await res.text();
        let json = null;
        try {
          json = JSON.parse(txt);
        } catch {
          json = { message: txt };
        }

        if (res.ok) {
          alert(json?.message || "Published & notifications attempted");
          setTitle(""); setExcerpt(""); setUrl("");
        } else {
          alert(json?.error || txt || "Publish failed");
        }
      }
    } catch (err) {
      console.error("Publish error:", err);
      alert("Network error during publish");
    } finally {
      setLoadingPublish(false);
    }
  }

  async function loadSubscribers() {
    if (!apiKey) return alert("Set VITE_ADMIN_API_KEY in frontend .env for dev");
    setLoadingSubs(true);
    try {
      const res = await fetch(`${BACKEND}/api/admin/subscribers`, {
        headers: { "x-admin-key": apiKey },
      });

      const text = await res.text();
      let data = null;
      try { data = JSON.parse(text); } catch { data = null; }

      if (!res.ok) {
        // show server text or parsed error
        const msg = (data && data.error) || text || "Failed to load subscribers";
        alert("Failed to load subscribers: " + msg);
        setSubs([]);
      } else {
        setSubs(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Subscribers error:", err);
      alert("Network error while loading subscribers");
      setSubs([]);
    } finally {
      setLoadingSubs(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Admin — Publish & Subscribers (dev)</h2>

      {/* Publish form */}
      <div className="mt-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
        <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Publish new article</h3>

        <div className="mt-3 space-y-3">
          <label className="block">
            <span className="sr-only">Title</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
              aria-label="Article title"
            />
          </label>

          <label className="block">
            <span className="sr-only">Excerpt</span>
            <input
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Excerpt (optional)"
              className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
              aria-label="Article excerpt"
            />
          </label>

          <label className="block">
            <span className="sr-only">Article URL</span>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Article URL (https://...)"
              className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
              aria-label="Article URL"
            />
          </label>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={publishArticle}
              disabled={loadingPublish}
              aria-busy={loadingPublish}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-sm disabled:opacity-60"
            >
              {loadingPublish ? "Publishing…" : "Publish & Notify"}
            </button>

            <button
              type="button"
              onClick={() => { setTitle(""); setExcerpt(""); setUrl(""); }}
              className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Subscribers */}
      <div className="mt-6 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-neutral-800 dark:text-neutral-100">Recent subscribers</h3>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={loadSubscribers}
              disabled={loadingSubs}
              aria-busy={loadingSubs}
              className="px-3 py-1.5 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-sm shadow-sm disabled:opacity-60"
            >
              {loadingSubs ? "Loading…" : "Load subscribers"}
            </button>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {subs.length ? `${subs.length} loaded` : "No subscribers loaded"}
            </div>
          </div>
        </div>

        <div className="mt-4 max-h-64 overflow-auto border-t border-neutral-100 dark:border-neutral-800 pt-3">
          {subs.length === 0 ? (
            <div className="text-neutral-600 dark:text-neutral-400 text-sm">No subscribers — click "Load subscribers"</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-neutral-700 dark:text-neutral-300">
                  <tr>
                    <th className="py-2 px-3">Email</th>
                    <th className="py-2 px-3">Verified</th>
                    <th className="py-2 px-3">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {subs.map((s, i) => (
                    <tr key={i} className="border-b border-neutral-100 dark:border-neutral-800">
                      <td className="py-2 px-3">{s.email}</td>
                      <td className="py-2 px-3">{s.verified ? "Yes" : "No"}</td>
                      <td className="py-2 px-3">{s.createdAt ? new Date(s.createdAt).toLocaleString() : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-xs text-neutral-600 dark:text-neutral-400">
        <strong>Dev note:</strong> Uses <code>VITE_ADMIN_API_KEY</code> and backend <code>/api/admin/subscribers</code>. Do NOT expose real secrets in frontend for production.
      </div>
    </div>
  );
}
