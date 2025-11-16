// src/pages/Contact.jsx
import { useState } from "react";
import { post } from "../utils/api"; // optional helper; safe fallback included below

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // {type:'success'|'error', text}
  const [loading, setLoading] = useState(false);

  function validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  // fallback backend call (if utils/api.js unavailable)
  async function contactRequest(body) {
    if (typeof post === "function") {
      return await post("/api/contact", body);
    } else {
      const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
      const res = await fetch(`${backend}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const txt = await res.text();
      try { return { ok: res.ok, data: JSON.parse(txt) }; }
      catch { return { ok: res.ok, data: txt }; }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }
    if (!validEmail(email.trim())) {
      setStatus({ type: "error", text: "Invalid email address." });
      return;
    }

    setLoading(true);
    try {
      const { ok, data } = await contactRequest({ name: name.trim(), email: email.trim(), message: message.trim() });

      if (ok) {
        setStatus({ type: "success", text: data?.message || "Message sent successfully!" });
        setName(""); setEmail(""); setMessage("");
      } else {
        const err = data?.error || "Failed to send message.";
        setStatus({ type: "error", text: err });
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus({ type: "error", text: "Network error — try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-px mx-auto py-12 max-w-2xl">
      <h1 className="section-title text-center">Get in Touch</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Contact form">
        {/* Name */}
        <label htmlFor="c-name" className="sr-only">Your name</label>
        <input
          id="c-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="
            w-full px-4 py-3 rounded-2xl
            bg-white dark:bg-neutral-900
            text-neutral-900 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            border border-neutral-200 dark:border-neutral-800
            focus:outline-none focus:ring-2 focus:ring-amber-300 dark:focus:ring-amber-400
            transition
          "
        />

        {/* Email */}
        <label htmlFor="c-email" className="sr-only">Your email</label>
        <input
          id="c-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="
            w-full px-4 py-3 rounded-2xl
            bg-white dark:bg-neutral-900
            text-neutral-900 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            border border-neutral-200 dark:border-neutral-800
            focus:outline-none focus:ring-2 focus:ring-amber-300 dark:focus:ring-amber-400
            transition
          "
        />

        {/* Message */}
        <label htmlFor="c-message" className="sr-only">Message</label>
        <textarea
          id="c-message"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          className="
            w-full px-4 py-3 rounded-2xl
            bg-white dark:bg-neutral-900
            text-neutral-900 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            border border-neutral-200 dark:border-neutral-800
            focus:outline-none focus:ring-2 focus:ring-amber-300 dark:focus:ring-amber-400
            transition
          "
        />

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full px-5 py-3 rounded-2xl
            bg-amber-500 hover:bg-amber-600 active:scale-[0.99]
            text-white font-medium shadow-sm
            transition disabled:opacity-60
            focus:outline-none focus:ring-0
          "
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
      </form>

      {/* Status message: visible & accessible in both themes */}
      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`
            mt-4 text-center text-sm
            ${status.type === "success"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
            }
          `}
        >
          {status.text}
        </div>
      )}

      {/* Optional contact info block */}
      <div className="mt-8 text-center">
        <p className="muted">Prefer email? Reach us at <a href="mailto:info@echowritings.com" className="text-amber-600 dark:text-amber-400 hover:underline">info@echowritings.com</a></p>
      </div>
    </div>
  );
}
