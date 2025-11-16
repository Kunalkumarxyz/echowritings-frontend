// src/components/AddStoryForm.jsx
import { useState } from "react";
import postsFile from "../data/posts.js"; // seed data (might be ESM or CJS)

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

function slugify(s = "") {
  return s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-_\s]+/g, "")
    .replace(/[\s\_]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Helper to get seeded posts array whether postsFile is ESM default or CJS */
function getSeededPosts() {
  if (!postsFile) return [];
  if (Array.isArray(postsFile)) return postsFile;
  if (Array.isArray(postsFile.default)) return postsFile.default;
  return [];
}

export default function AddStoryForm({ onAdded }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("EchoWritings");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  async function saveToBackend(newPost) {
    try {
      const res = await fetch(`${BACKEND}/api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Backend returned an error");
      }
      const saved = await res.json();
      return { ok: true, source: "backend", post: saved };
    } catch (err) {
      console.warn("Backend save failed:", err);
      return { ok: false, error: err.message || "Backend error" };
    }
  }

  function saveToLocal(newPost) {
    try {
      const raw = localStorage.getItem("ew_posts");
      const saved = raw ? JSON.parse(raw) : null;
      const seeded = getSeededPosts();

      const all = Array.isArray(saved) && saved.length ? saved : (Array.isArray(seeded) ? seeded.slice() : []);

      // ensure no id collision
      const nextId =
        (all.reduce((m, x) => Math.max(m, Number(x?.id || 0)), 0) || 0) + 1;
      newPost.id = nextId;

      const updated = [newPost, ...all];
      localStorage.setItem("ew_posts", JSON.stringify(updated));
      return { ok: true, source: "local", post: newPost };
    } catch (err) {
      console.error("local save error:", err);
      return { ok: false, error: err.message || "localStorage error" };
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);

    if (!title.trim() || !content.trim()) {
      setMsg({ type: "error", text: "Title and content are required." });
      return;
    }

    setSaving(true);

    const paragraphs = content
      .split("\n")
      .map((p) => p.trim())
      .filter(Boolean);

    const wordCount = paragraphs.join(" ").split(/\s+/).filter(Boolean).length || 0;
    const estimatedMin = Math.max(3, Math.ceil(wordCount / 200));

    // find fallback image from seeded posts if available
    const seeded = getSeededPosts();
    const fallbackImg = (Array.isArray(seeded) && seeded[0] && seeded[0].img) || "";

    const newPost = {
      // id will be set by backend or local save
      slug: slugify(title) || `story-${Date.now()}`,
      title: title.trim(),
      metaTitle: title.trim(),
      metaDescription: (excerpt || paragraphs.slice(0, 1).join(" ")).slice(0, 150),
      time: `${estimatedMin} min read`,
      date: new Date().toISOString().split("T")[0],
      img: img || fallbackImg,
      author: author || "EchoWritings",
      excerpt: excerpt || paragraphs.slice(0, 1).join(" ").slice(0, 160),
      content: paragraphs,
    };

    try {
      // Try backend first (if configured)
      if (BACKEND) {
        const backendRes = await saveToBackend(newPost);
        if (backendRes.ok) {
          setMsg({ type: "success", text: "Story saved to backend." });
          onAdded?.(backendRes.post);
          setTitle("");
          setExcerpt("");
          setImg("");
          setContent("");
          setAuthor("EchoWritings");
          setSaving(false);
          return;
        }
        // fallthrough to local fallback (but inform)
        console.info("Falling back to local save after backend failure.");
      }

      // Local fallback
      const localRes = saveToLocal(newPost);
      if (localRes.ok) {
        setMsg({
          type: "success",
          text:
            BACKEND
              ? "Backend failed — saved locally (browser only)."
              : "Saved locally (browser only).",
        });
        onAdded?.(localRes.post);
        setTitle("");
        setExcerpt("");
        setImg("");
        setContent("");
        setAuthor("EchoWritings");
      } else {
        throw new Error(localRes.error || "Failed to save");
      }
    } catch (err) {
      console.error(err);
      setMsg({ type: "error", text: err.message || "Failed to add story." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="card p-6 space-y-3" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold">Add New Story</h3>

      {msg && (
        <div
          role="status"
          className={`p-3 rounded-md ${
            msg.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
          }`}
        >
          {msg.text}
        </div>
      )}

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Title"
        className="w-full px-3 py-2 rounded-md border"
        aria-label="Story title"
      />

      <input
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Short excerpt (SEO)"
        className="w-full px-3 py-2 rounded-md border"
        aria-label="Short excerpt"
      />

      <input
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Image URL (optional)"
        className="w-full px-3 py-2 rounded-md border"
        aria-label="Image URL"
      />

      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        className="w-full px-3 py-2 rounded-md border"
        aria-label="Author"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write paragraphs separated by new line"
        rows={6}
        className="w-full px-3 py-2 rounded-md border"
        aria-label="Content"
        required
      />

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="btn btn-primary"
          aria-disabled={saving}
        >
          {saving ? "Adding…" : "Add Story"}
        </button>

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => {
            setTitle("");
            setExcerpt("");
            setImg("");
            setContent("");
            setAuthor("EchoWritings");
            setMsg(null);
          }}
        >
          Clear
        </button>
      </div>

      <p className="text-xs muted mt-2">
        Note: If you don't configure a backend (VITE_BACKEND_URL), stories are saved to your browser's localStorage only.
      </p>
    </form>
  );
}
