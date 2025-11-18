import { Link } from "react-router-dom";

export default function SubscribeThanks() {
  return (
    <main className="container-px mx-auto py-24 text-center">
      <div className="max-w-xl mx-auto card p-8 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-4">You're all set! 🎉</h1>
        <p className="muted mb-6">
          Your subscription has been successfully confirmed.  
          You'll now receive updates from EchoWritings.
        </p>

        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
