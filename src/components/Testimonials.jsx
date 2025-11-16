const items = [
  {
    name: 'Sarah Mitchell',
    role: 'Entrepreneur & Business Coach',
    text: "I was struggling with imposter syndrome when building my coaching business. EchoWritings' articles completely transformed my mindset.",
  },
  {
    name: 'James Carter',
    role: 'Medical Student',
    text: "The daily inspiration emails and time management strategies helped me not just survive, but thrive.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    text: "After a devastating layoff, I regained confidence and started my own agency.",
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    text: "Evidence-based approach and practical strategies changed my perspective. I'm happier and more productive.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-950">
      <div className="container-px mx-auto">

        {/* Section Title */}
        <h2 className="section-title text-center">Words That Echo</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {items.map((t, i) => (
            <figure
              key={i}
              className="
                p-6 rounded-2xl
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                shadow-sm hover:shadow-lg
                transition
              "
            >
              <div className="text-5xl text-brand leading-none">“</div>

              <blockquote className="mt-3 text-lg text-neutral-800 dark:text-neutral-100 leading-relaxed">
                {t.text}
              </blockquote>

              <figcaption className="mt-4 text-sm muted">
                — {t.name} • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
