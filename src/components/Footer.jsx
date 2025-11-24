// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Rss } from "lucide-react";
import { post } from "../utils/api"; // uses VITE_BACKEND_URL or fallback

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // {type,text}
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e) {
    if (e && e.preventDefault) e.preventDefault();
    setStatus(null);
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }

    setLoading(true);
    try {
      const { ok, data } = await post("/api/subscribe", { email });
      if (ok) {
        setStatus({ type: "success", text: data?.message || "Check your inbox to confirm." });
        setEmail("");
      } else {
        setStatus({ type: "error", text: (data && data.error) || "Subscription failed." });
      }
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus({ type: "error", text: "Network error — try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 mt-16">

      {/* Remove border/outline from ALL links (email included) */}
      <style>{`
        footer a:focus, footer a:active, footer a:hover {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
      `}</style>

      <div className="container-px mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* BRAND + BLURB + SOCIAL */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900
                              animate-[floatLogo_4s_ease-in-out_infinite]" aria-hidden="true">
                <img src="/src/assets/Logo.jpg" alt="EchoWritings Logo" className="w-full h-full object-cover"/>
              </div>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-white">Echo<span className="text-brand">Writings</span></div>
                <div className="text-xs muted">Daily inspiration & short stories</div>
              </div>
            </div>

            <p className="muted mt-3 text-sm">
              Inspiring lives through short, actionable quotes and meaningful stories.
            </p>

            <div className="flex gap-3 mt-4">
              <a href="https://x.com/EchoWritings/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-9 h-9 rounded-md muted hover:text-brand"
                 aria-label="EchoWritings on X (Twitter)" title="EchoWritings on X">
                <Twitter className="w-5 h-5" />
              </a>

              <a href="https://www.instagram.com/echowritings/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-9 h-9 rounded-md muted hover:text-brand"
                 aria-label="EchoWritings on Instagram" title="EchoWritings on Instagram">
                <Instagram className="w-5 h-5" />
              </a>

              <a href="https://www.linkedin.com/company/echowritings/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-9 h-9 rounded-md muted hover:text-brand"
                 aria-label="EchoWritings on LinkedIn" title="EchoWritings on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>

              <a href="/" 
              className="inline-flex items-center justify-center w-9 h-9 rounded-md muted hover:text-brand" aria-label="RSS feed" title="RSS">
             <Rss className="w-5 h-5" />
             </a>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h5 className="font-semibold text-neutral-900 dark:text-white">Company</h5>
            <ul className="mt-3 space-y-2">
              <li><Link to="/about" className="muted hover:text-brand">About Us</Link></li>
              <li><Link to="/stories" className="muted hover:text-brand">Stories</Link></li>
              <li><Link to="/services" className="muted hover:text-brand">Services</Link></li>
            </ul>
          </div>

          {/* SUPPORT / LEGAL */}
          <div>
            <h5 className="font-semibold text-neutral-900 dark:text-white">Support</h5>
            <ul className="mt-3 space-y-2">
              <li><Link to="/contact" className="muted hover:text-brand">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="muted hover:text-brand">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="muted hover:text-brand">Terms of Service</Link></li>
            </ul>

            <address className="not-italic mt-4 text-sm muted">
              <a href="mailto:info@echowritings.com" className="hover:underline">info@echowritings.com</a>
            </address>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h5 className="font-semibold text-neutral-900 dark:text-white">Get weekly inspiration</h5>
            <p className="muted mt-2 text-sm">Short emails — no spam. Unsubscribe anytime.</p>

            <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
              <label htmlFor="fw-email" className="sr-only">Email address</label>
              <input
                id="fw-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm focus:outline-none"
                aria-label="Your email address"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium"
                aria-busy={loading}
              >
                {loading ? "Sending…" : "Subscribe"}
              </button>
            </form>

            {status && (
              <div className={`mt-3 text-sm ${status.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`} role="status" aria-live="polite">
                {status.text}
              </div>
            )}

            <p className="text-xs muted mt-4">We respect your privacy. No third-party selling.</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 mt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center gap-2 justify-between text-center sm:text-left">
          <p className="muted text-sm">© {new Date().getFullYear()} EchoWritings. All rights reserved.</p>

          {/* UPDATED: Made by Kunal Kumar with LinkedIn link */}
          <p className="muted text-sm">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/kunalkumarxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Kunal Kumar
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
