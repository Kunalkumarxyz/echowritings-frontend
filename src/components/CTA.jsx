// src/components/CTA.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { post as postHelper } from "../utils/api"; // optional helper; safe fallback included

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://echowritings-backend.onrender.com";

function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // {type,text}
  const [loading, setLoading] = useState(false);

  async function subscribeToBackend(emailValue) {
    // try centralized helper first
    if (typeof postHelper === "function") {
      try {
        return await postHelper("/api/subscribe", { email: emailValue });
      } catch (err) {
        return { ok: false, data: err.message || "Helper error" };
      }
    }

    // fallback fetch (uses BACKEND env)
    if (!BACKEND) {
      return { ok: false, data: "No backend configured" };
    }

    try {
      const res = await fetch(`${BACKEND}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue }),
      });
      const txt = await res.text();
      let data = null;
      try { data = JSON.parse(txt); } catch { data = txt; }
      return { ok: res.ok, data };
    } catch (err) {
      return { ok: false, data: err.message || "Network error" };
    }
  }

  async function handleSubscribe(e) {
    if (e && e.preventDefault) e.preventDefault();
    setStatus(null);

    if (!email || !validEmail(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    if (loading) return; // avoid double submits
    setLoading(true);

    try {
      const { ok, data } = await subscribeToBackend(email);

      if (ok) {
        const successText =
          (data && (data.message || data.msg)) ||
          "Confirmation email sent — check your inbox.";
        setStatus({ type: "success", text: successText });
        setEmail("");
      } else {
        const errText =
          (data && (data.error || data.message)) ||
          (typeof data === "string" ? data : "Subscribe failed");
        setStatus({ type: "error", text: errText });
      }
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus({ type: "error", text: "Network error — please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="
        py-16
        bg-gradient-to-tr
        from-amber-50 via-amber-100 to-white
        dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900
        text-neutral-900 dark:text-white
      "
    >
      <div className="container-px mx-auto max-w-4xl">
        {/* Heading (center) */}
        <div className="text-center mx-auto max-w-3xl">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ready to Transform Your Life?
          </h2>

          <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl mx-auto">
            Join thousands who wake up to inspiring content that fuels success and fulfillment.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-2xl
              bg-amber-500 hover:bg-amber-600
              text-white font-medium shadow-sm
              transition w-full sm:w-auto
            "
            aria-label="Start your journey"
          >
            Start Your Journey Today
          </Link>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="
              w-full sm:w-72 px-4 py-3 rounded-2xl
              bg-white dark:bg-neutral-800
              text-neutral-900 dark:text-neutral-100
              placeholder:text-neutral-400 dark:placeholder:text-neutral-500
              border border-neutral-200 dark:border-neutral-700
              outline-none focus:ring-2 focus:ring-amber-400 transition
            "
            aria-label="Email address"
          />

          {/* Desktop Subscribe */}
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`hidden sm:inline-flex px-6 py-3 rounded-2xl ${
              loading ? "opacity-70 cursor-not-allowed bg-neutral-700 dark:bg-neutral-200" : "bg-neutral-900 dark:bg-white"
            } text-white dark:text-neutral-900 font-medium hover:opacity-90 transition`}
          >
            {loading ? "Sending…" : "Subscribe"}
          </button>
        </form>

        {/* Mobile Subscribe */}
        <button
          onClick={handleSubscribe}
          disabled={loading}
          aria-busy={loading}
          className={`mt-2 sm:hidden w-full px-6 py-3 rounded-2xl ${
            loading ? "opacity-70 cursor-not-allowed bg-amber-400" : "bg-amber-500 hover:bg-amber-600"
          } text-white font-medium transition`}
        >
          {loading ? "Sending…" : "Subscribe"}
        </button>

        {/* Footer note */}
        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4 text-center">
          No credit card required • Cancel anytime • Free for all time
        </p>

        {/* Status */}
        {status && (
          <div
            className={`mt-3 text-sm text-center ${
              status.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}
            role="status"
          >
            {status.text}
          </div>
        )}
      </div>
    </section>
  );
}
