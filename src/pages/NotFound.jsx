import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container-px mx-auto py-24 text-center">
      <h1 className="section-title">404 — Page Not Found</h1>

      <p className="muted mt-2 max-w-md mx-auto leading-relaxed">
        The page you’re trying to access doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="
          btn btn-primary mt-6 inline-flex items-center gap-2
          focus:outline-none focus:ring-2 focus:ring-amber-400
        "
      >
        ← Go Back Home
      </Link>
    </main>
  );
}
