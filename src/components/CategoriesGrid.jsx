import { Link } from "react-router-dom";

export default function CategoriesGrid() {
  const cats = [
    { slug: "mindset", title: "Mindset & Mental Health", count: "120+ articles" },
    { slug: "goals", title: "Goal Setting & Achievement", count: "85+ articles" },
    { slug: "career-growth", title: "Career & Professional Growth", count: "95+ articles" },
    { slug: "relationships", title: "Relationships & Communication", count: "70+ articles" },
    { slug: "wellness", title: "Self-Care & Wellness", count: "110+ articles" },
    { slug: "creativity", title: "Creativity & Innovation", count: "60+ articles" },
    { slug: "leadership", title: "Leadership & Influence", count: "75+ articles" },
    { slug: "learning", title: "Learning & Development", count: "90+ articles" },
  ];

  return (
    <section className="py-16">
      <div className="container-px mx-auto">

        {/* Section Title */}
        <h2 className="section-title text-center">Explore by Category</h2>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {cats.map((c, i) => (
            <Link
              to={`/category/${c.slug}`}
              key={i}
              className="
                block p-6 rounded-2xl group
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                shadow-sm 
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
                focus:outline-none focus:ring-0
              "
            >
              <div className="font-semibold text-neutral-900 dark:text-white group-hover:text-brand">
                {c.title}
              </div>

              <div className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">
                {c.count}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
