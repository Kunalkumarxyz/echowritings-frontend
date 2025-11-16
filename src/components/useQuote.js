import { useEffect, useRef, useState } from "react";

// Helper: timeout wrapper (keeps behavior same)
function withTimeout(promise, ms = 6000) {
  return Promise.race([
    promise,
    new Promise((_, rej) =>
      setTimeout(() => rej(new Error("Request timed out")), ms)
    ),
  ]);
}

/* PROVIDERS (accept an AbortSignal) */
async function fetchFromQuotable(tag, signal) {
  const url = tag
    ? `https://api.quotable.io/random?tags=${encodeURIComponent(tag)}`
    : `https://api.quotable.io/random`;

  const res = await withTimeout(fetch(url, { signal }));
  if (!res.ok) throw new Error("Quotable failed");

  const data = await res.json();
  return { content: data.content, author: "EchoWritings" };
}

async function fetchFromZenQuotes(signal) {
  const res = await withTimeout(fetch("https://zenquotes.io/api/random", { signal }));
  if (!res.ok) throw new Error("ZenQuotes failed");

  const data = await res.json();
  const first = Array.isArray(data) ? data[0] : data;
  return { content: first.q, author: "EchoWritings" };
}

async function fetchFromDummyJSON(signal) {
  const res = await withTimeout(fetch("https://dummyjson.com/quotes/random", { signal }));
  if (!res.ok) throw new Error("DummyJSON failed");

  const data = await res.json();
  return { content: data.quote, author: "EchoWritings" };
}

export default function useQuote(tag) {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  const intervalRef = useRef(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    // abort previous in-flight request
    if (abortRef.current) {
      try { abortRef.current.abort(); } catch(_) {}
    }
    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;

    try {
      const providers = [
        () => fetchFromQuotable(tag, signal),
        () => fetchFromZenQuotes(signal),
        () => fetchFromDummyJSON(signal),
      ];

      let result = null;
      for (const p of providers) {
        try {
          result = await p();
          if (result?.content) break;
        } catch (e) {
          // if fetch was aborted, rethrow so we stop trying providers
          if (e.name === "AbortError") throw e;
          // otherwise continue to next provider
        }
      }

      if (!result) throw new Error("No provider worked");
      setQuote(result);
    } catch (e) {
      // if aborted, don't set a user-visible error (silent)
      if (e.name === "AbortError") {
        // do nothing (fetch was cancelled due to unmount or new request)
      } else {
        setError(e.message || "Failed to fetch quote");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // initial fetch
    fetchQuote();

    // auto-refresh every 1 minute
    intervalRef.current = setInterval(() => {
      fetchQuote();
    }, 60 * 1000);

    return () => {
      // cleanup interval + abort any in-flight fetch
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      if (abortRef.current) {
        try { abortRef.current.abort(); } catch (_) {}
        abortRef.current = null;
      }
    };
    // only re-run when tag changes
  }, [tag]);

  return { quote, loading, error, refresh: fetchQuote };
}
