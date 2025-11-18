// src/pages/StoryDetails.jsx
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import Meta from "../components/Meta.jsx";
import seedPosts from "../data/posts.js";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://echowritings-backend.onrender.com";

async function fetchPostsFromBackend() {
  if (!BACKEND) return null;
  try {
    const res = await fetch(`${BACKEND}/api/posts`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    return data;
  } catch (err) {
    console.warn("Backend posts fetch failed:", err);
    return null;
  }
}

function loadPostsFromLocalStorage() {
  try {
    const raw = localStorage.getItem("ew_posts");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed;
  } catch (err) {
    console.warn("Failed reading ew_posts from localStorage:", err);
    return null;
  }
}

export default function StoryDetails() {
  const params = useParams(); // expects { slug } usually
  const navigate = useNavigate();
  const [post, setPost] = useState(undefined); // undefined = loading, null = not found, object = found
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadAndFind() {
      setLoading(true);

      // 1) try backend
      let all = await fetchPostsFromBackend();

      // 2) try localStorage
      if (!all || !Array.isArray(all) || all.length === 0) {
        const local = loadPostsFromLocalStorage();
        if (local && Array.isArray(local) && local.length) {
          all = local;
        }
      }

      // 3) fallback to seed
      if (!all || !Array.isArray(all) || all.length === 0) {
        all = seedPosts || [];
      }

      const paramValue = params.slug ?? params.id ?? Object.values(params)[0] ?? null;

      let found = null;
      if (paramValue) {
        found = all.find((p) => p.slug && String(p.slug) === String(paramValue));
        if (!found) {
          const num = Number(paramValue);
          if (!Number.isNaN(num)) {
            found = all.find((p) => Number(p.id) === num);
          }
        }
      }

      if (mounted) {
        setPost(found || null);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    loadAndFind();

    return () => {
      mounted = false;
    };
  }, [params.slug, params.id, JSON.stringify(params)]);

  if (loading || post === undefined) {
    return (
      <main className="container-px mx-auto py-12 max-w-3xl">
        <div className="text-center muted">Loading article…</div>
      </main>
    );
  }

  if (post === null) {
    return (
      <main className="container-px mx-auto py-12 max-w-3xl">
        <div className="card p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Article not found</h2>
          <p className="muted mt-3">We could not find the requested story.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline focus:outline-none focus:ring-0"
            >
              Go Back
            </button>
            <Link to="/stories" className="btn btn-primary focus:outline-none focus:ring-0">All Stories</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Meta
        title={post.metaTitle || post.title}
        description={post.metaDescription || (Array.isArray(post.content) ? post.content[0].slice(0,160) : (post.excerpt || ''))}
        url={(typeof window !== 'undefined' ? window.location.origin : '') + `/stories/${post.slug || post.id}`}
        image={post.img || '/src/assets/Logo.jpg'}
        keywords={post.metaKeywords || "motivation, quotes, stories"}
      />

      <main className="container-px mx-auto py-10 max-w-3xl">
        {/* Back + meta bar */}
        <div className="flex items-start gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm muted hover:text-neutral-900 dark:hover:text-white focus:outline-none focus:ring-0"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() =>
                navigator.share
                  ? navigator.share({ title: post.title, text: post.content?.[0], url: window.location.href })
                  : alert('Share not supported on this browser')
              }
              className="inline-flex items-center gap-2 muted text-sm hover:text-neutral-900 dark:hover:text-white focus:outline-none focus:ring-0"
              aria-label="Share article"
              title="Share"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        {/* Hero image */}
        <article className="card overflow-hidden">
          {post.img && (
            <img src={post.img} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
          )}

          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:itemscenter sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
                  {post.title}
                </h1>
                <div className="muted mt-2 text-sm">
                  {post.author} • {post.time} • {new Date(post.date).toDateString()}
                </div>
              </div>

              <div className="hidden sm:block">
                <Link to="/stories" className="btn btn-outline focus:outline-none focus:ring-0">All Stories</Link>
              </div>
            </div>

            {/* Article content */}
            <div className="mt-6 prose prose-neutral dark:prose-invert max-w-none">
              {Array.isArray(post.content) ? (
                post.content.map((para, i) => (
                  <p key={i} className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                    {para}
                  </p>
                ))
              ) : (
                <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">{String(post.content)}</p>
              )}
            </div>

            {/* CTA / related area */}
            <div className="mt-8 border-t border-neutral-100 dark:border-neutral-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="muted text-sm">Enjoyed this read? Share it with someone who needs inspiration today.</p>
              </div>

              <div className="flex items-center gap-3">
                <Link to="/contact" className="btn btn-outline focus:outline-none focus:ring-0">Contact Us</Link>
                <Link to="/stories" className="btn btn-primary focus:outline-none focus:ring-0">More Stories</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
