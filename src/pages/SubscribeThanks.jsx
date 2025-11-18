// src/pages/SubscribeThanks.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SubscribeThanks() {
  const loc = useLocation();
  useEffect(()=> {
    // optional: page view analytics
  }, []);
  return (
    <div className="container-px mx-auto py-20 text-center">
      <h1 className="section-title">Subscription confirmed</h1>
      <p className="muted mt-4">Thanks — your email is verified. Check your inbox for updates.</p>
    </div>
  );
}
