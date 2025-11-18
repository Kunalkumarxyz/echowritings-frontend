// src/pages/Confirm.jsx
import { useEffect, useState } from "react";

export default function Confirm() {
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (!token) {
      setStatus("error");
      setMsg("No token provided.");
      return;
    }

    async function verify() {
      try {
        const backend = import.meta.env.VITE_BACKEND_URL || "https://echowritings-backend.onrender.com";
        // call backend confirm endpoint (it will mark verified and redirect normally,
        // but here we call API endpoint directly to get JSON or status)
        const url = (backend ? backend.replace(/\/$/, "") : "") + `/api/confirm?token=${encodeURIComponent(token)}`;

        // Use fetch but we expect backend to redirect; to handle redirect we call a dedicated confirm-API
        // If your backend returns HTML redirect, alternatively create an API route that returns JSON.
        const res = await fetch(url, { redirect: 'follow' });
        // if backend redirects to frontend page, the fetch will follow and may return HTML.
        if (res.ok) {
          // if endpoint responded 200 or redirect landed
          setStatus("success");
          setMsg("Your subscription is confirmed. Thank you!");
        } else {
          const text = await res.text().catch(()=>"");
          setStatus("error");
          setMsg(text || `Confirm failed (status ${res.status}).`);
        }
      } catch (err) {
        setStatus("error");
        setMsg("Network error while confirming. Try again.");
      }
    }

    verify();
  }, []);

  return (
    <main className="container-px mx-auto py-20 text-center">
      <div className="max-w-xl mx-auto card p-8 rounded-2xl">
        {status === "loading" && <p className="muted">Verifying your subscription…</p>}
        {status === "success" && (
          <>
            <h1 className="text-2xl font-semibold mb-2">Subscription confirmed</h1>
            <p className="muted mb-4">{msg}</p>
            <a href="/" className="btn btn-primary">Go to Home</a>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-semibold mb-2">Could not confirm</h1>
            <p className="muted mb-4">{msg}</p>
            <p className="text-sm muted">If the link looks old or invalid, please try subscribing again.</p>
            <a href="/" className="btn btn-outline mt-4">Back home</a>
          </>
        )}
      </div>
    </main>
  );
}
