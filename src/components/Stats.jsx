// Stats.jsx

export default function Stats() {
  const items = [
    { value: "50K+", label: "Daily Readers" },
    { value: "120+", label: "Countries Reached" },
    { value: "10M+", label: "Total Impressions" },
    { value: "5K+", label: "Quotes Delivered" }
  ];

  return (
    <section
      className="
        bg-gradient-to-b
        from-amber-50 dark:from-neutral-900
        to-white dark:to-neutral-900
      "
    >
      <div className="container-px mx-auto py-16">

        {/* Section Title */}
        <h2 className="section-title text-center">
          Our Impact in Numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {items.map((it, i) => (
            <div
              key={i}
              className="
                p-6 text-center rounded-2xl
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                shadow-sm hover:shadow-md transition
              "
            >
              <div className="text-3xl md:text-4xl font-bold text-brand tracking-tight">
                {it.value}
              </div>

              <div className="mt-2 text-sm md:text-base muted">
                {it.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
