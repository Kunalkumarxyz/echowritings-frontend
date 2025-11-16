// src/components/Services.jsx
import { Sparkles, BookOpen, Users, Target } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Daily Inspiration Newsletter",
      desc: "Motivational quotes and mindset tips delivered to your inbox every day.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-500" />,
      title: "Personal Growth Library",
      desc: "Access our curated collection of articles, guides, and inspiration.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: "Community Forums",
      desc: "Share your journey and receive support from like-minded individuals.",
    },
    {
      icon: <Target className="w-6 h-6 text-amber-500" />,
      title: "Coaching Content",
      desc: "Expert frameworks and strategies to help you achieve your goals.",
    }
  ];

  return (
    <div className="container-px mx-auto py-12 max-w-5xl">
      <h1 className="section-title text-center">Services</h1>

      <p className="muted text-center max-w-2xl mx-auto mt-2">
        Everything you need for personal growth, motivation, and a stronger mindset — all in one place.
      </p>

      <ul className="mt-10 grid sm:grid-cols-2 gap-6">
        {items.map((s, i) => (
          <li
            key={i}
            className="
              p-6 rounded-2xl
              bg-white dark:bg-neutral-900
              border border-neutral-200 dark:border-neutral-800
              shadow-sm hover:shadow-md transition 
              hover:-translate-y-1
            "
          >
            <div className="flex items-center gap-3">
              {s.icon}
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                {s.title}
              </h3>
            </div>

            <p className="mt-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {s.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
