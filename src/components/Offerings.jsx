// src/components/Offerings.jsx
import React from "react";

export default function Offerings() {
  const cards = [
    {
      title: "Daily Inspiration",
      desc: "Curated quotes, success stories, and actionable insights to kickstart your day."
    },
    {
      title: "Personal Growth Library",
      desc: "Access 100+ articles on mindset, productivity, relationships, and more."
    },
    {
      title: "Expert Coaching Content",
      desc: "Frameworks from coaches and experts to help you set goals and build a resilient mindset."
    },
    {
      title: "Thriving Community",
      desc: "Connect with growth-minded people — celebrate wins, ask questions, and get support."
    }
  ];

  return (
    <section className="py-16">
      <div className="container-px mx-auto">

        {/* Section Title */}
        <header className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">What We Offer</h2>
          <p className="muted mt-3">
            Practical resources and daily motivation to help you grow — mentally, professionally, and emotionally.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {cards.map((c, i) => (
            <article
              key={i}
              className="
                p-6 rounded-2xl
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                shadow-sm hover:shadow-md transition-transform duration-200
                hover:-translate-y-1 focus-within:-translate-y-1
                outline-none
              "
              tabIndex={0}
              aria-labelledby={`offering-title-${i}`}
            >
              <h3
                id={`offering-title-${i}`}
                className="text-xl font-semibold text-neutral-900 dark:text-white"
              >
                {c.title}
              </h3>

              <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {c.desc}
              </p>

              {/* small action — optional (keeps card interactive on keyboard) */}
              <div className="mt-4">
                <a
                  href="/services"
                  className="inline-block text-sm font-medium text-amber-600 dark:text-amber-400 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
                >
                  Learn more →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
