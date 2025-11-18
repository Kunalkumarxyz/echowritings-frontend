// src/pages/Stories.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import initialPosts from "../data/posts.js";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://echowritings-backend.onrender.com";

export default function Stories() {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    let mounted = true;

    async function load() {
      setLoading(true);

      // 1) Try backend first (if configured)
      try {
        const res = await fetch(`${BACKEND}/api/posts`, { signal: ac.signal });
        if (res.ok) {
          // safe parse
          const ct = res.headers.get("content-type") || "";
          let data = null;
          if (ct.includes("application/json")) {
            data = await res.json();
          } else {
            try { data = JSON.parse(await res.text()); } catch { data = null; }
          }

          if (Array.isArray(data) && data.length) {
            if (!mounted) return;
            setPosts(data);
            try { localStorage.setItem("ew_posts", JSON.stringify(data)); } catch {}
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        if (err.name !== "AbortError") console.warn("Backend unreachable → using fallback", err);
      }

      // 2) Try localStorage
      try {
        const saved = localStorage.getItem("ew_posts");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length) {
            if (!mounted) return;
            setPosts(parsed);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("localStorage parse failed", err);
      }

      // 3) Fallback to initial posts
      if (mounted) {
        setPosts(initialPosts);
        setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
      ac.abort();
    };
  }, []);

  return (
    <div className="container-px mx-auto py-12 max-w-6xl">
      <h1 className="section-title text-center">Stories</h1>
      <p className="muted text-center mt-2">
        Explore meaningful stories, guides, and mindset-transforming writings.
      </p>

      {loading && <p className="text-center muted mt-10">Loading stories…</p>}

      {!loading && posts.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {posts.map((p) => (
            <article
              key={p.id ?? p.slug}
              className="card overflow-hidden hover:shadow-lg transition rounded-2xl"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-44 object-cover"
              />

              <div className="p-5">
                <div className="muted text-sm">
                  {p.time} • {p.date ? new Date(p.date).toDateString() : ""}
                </div>

                <h3 className="mt-2 font-semibold text-lg text-neutral-900 dark:text-white">
                  {p.title}
                </h3>

                <p className="muted text-sm mt-1 line-clamp-3">
                  {p.excerpt}
                </p>

                <Link
                  to={`/stories/${p.slug ?? p.id}`}
                  title={`Read full story: ${p.title}`}
                  className="btn btn-outline mt-4 w-full text-center focus:outline-none focus:ring-0"
                  aria-label={`Read more about ${p.title}`}
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {!loading && posts.length === 0 && (
        <p className="text-center muted mt-10">
          No stories yet. Add one from the Admin Panel.
        </p>
      )}
    </div>
  );
}
