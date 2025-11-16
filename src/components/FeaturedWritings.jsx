import { Link } from "react-router-dom";
import posts from "../data/posts.js"; // <-- use real posts with slug

export default function FeaturedWritings() {
  // Show only first 3 featured
  const featured = posts.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container-px mx-auto">
        
        {/* Section Title */}
        <h2 className="section-title text-center">Featured Writings</h2>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {featured.map((p) => (
            <article
              key={p.id}
              className="card overflow-hidden hover:shadow-md transition rounded-2xl"
            >
              {/* Thumbnail */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <div className="muted text-sm">
                  {p.time} • {new Date(p.date).toDateString()}
                </div>

                <h3 className="mt-2 font-semibold text-lg text-neutral-900 dark:text-white leading-snug">
                  {p.title}
                </h3>

                {/* Correct Slug Route */}
                <Link
                  to={`/stories/${p.slug}`}
                  className="
                    btn btn-outline mt-4
                    focus:outline-none focus:ring-0
                  "
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
