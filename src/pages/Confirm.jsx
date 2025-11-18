// src/pages/Confirm.jsx
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Confirm() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setError("Confirmation token missing.");
      return;
    }

    // Build backend confirm URL. Prefer VITE_BACKEND_URL if set, else use relative path.
    const backend = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");
    const confirmUrl = backend ? `${backend}/api/confirm?token=${encodeURIComponent(token)}` : `/api/confirm?token=${encodeURIComponent(token)}`;

    // Redirect the browser to the backend confirm endpoint.
    // Backend will verify token and redirect back to FRONTEND /subscribe-thanks.
    window.location.replace(confirmUrl);
  }, [token]);

  return (
    <main className="container-px mx-auto py-24 text-center">
      <div className="max-w-xl mx-auto card p-8 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-4">Confirming…</h1>
        <p className="muted mb-4">
          We're confirming your subscription. If your browser doesn't move automatically, use the button below.
        </p>

        {error ? (
          <div className="text-red-600 dark:text-red-400">{error}</div>
        ) : (
          <>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  const backend = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");
                  const confirmUrl = backend ? `${backend}/api/confirm?token=${encodeURIComponent(token)}` : `/api/confirm?token=${encodeURIComponent(token)}`;
                  window.location.href = confirmUrl;
                }}
                className="btn btn-primary"
              >
                Confirm now
              </button>

              <Link to="/" className="muted hover:underline">Back to home</Link>
            </div>

            <p className="mt-4 text-xs muted">
              If you prefer, open this link in your browser:
              <br />
              <a
                href={(import.meta.env.VITE_BACKEND_URL || "") ? `${(import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "")}/api/confirm?token=${encodeURIComponent(token)}` : `/api/confirm?token=${encodeURIComponent(token)}`}
                className="break-words underline"
              >
                {(import.meta.env.VITE_BACKEND_URL || "") ? `${(import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "")}/api/confirm?token=${encodeURIComponent(token)}` : `${window.location.origin}/api/confirm?token=${encodeURIComponent(token)}`}
              </a>
            </p>
          </>
        )}
      </div>
    </main>
  );
}

