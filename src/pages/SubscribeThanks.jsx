import { Link } from "react-router-dom";

export default function SubscribeThanks() {
  return (
    <main className="container-px mx-auto py-24 text-center">
      <div className="max-w-xl mx-auto card p-8 rounded-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">You're all set! 🎉</h1>
        <p className="muted mb-6">
          Thanks for confirming — you will now receive emails from EchoWritings.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <a
            href="mailto:info@echowritings.com"
            className="muted hover:underline"
            onClick={(e) => {
              // Remove default focus/border on some mobile browsers (if needed)
              try { e.currentTarget.blur(); } catch {}
            }}
          >
            Contact support
          </a>
        </div>
      </div>
    </main>
  );
}
