// src/components/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      role="banner"
      className="
        relative w-full
        bg-[url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2000&q=80')]
        bg-cover bg-center
      "
      aria-label="Hero Section — Transform your life through words"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50" aria-hidden="true"></div>

      {/* Top pill (subtle glass) */}
      <div className="relative z-30">
        <div className="container-px mx-auto">
          <div className="flex justify-center pt-6">
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-1.5 rounded-full
                bg-white/10 backdrop-blur-sm border border-white/20
                text-white text-[11px] font-medium shadow-sm
                select-none
              "
              aria-hidden="true"
            >
              <svg
                className="w-3 h-3 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M12 2l2.5 5.2L20 9l-4 3.7L17 20l-5-2.6L7 20l1-7.3L4 9l5.5-1.8L12 2z" fill="currentColor" />
              </svg>
              <span className="leading-tight">
                Join 50,000+ readers transforming their lives daily
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-20">
        <div className="container-px mx-auto min-h-[70vh] flex items-center justify-center">
          <div className="max-w-4xl text-center px-4">

            <h1
              className="
                font-semibold
                text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]
                leading-[1.05] tracking-tight
                text-neutral-50 dark:text-neutral-50
              "
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="block">Transform Your Life Through the</span>
              <span className="block">
                <span className="text-brand">Power</span> of Words
              </span>
            </h1>

            <p
              className="
                mt-4 text-[15px] md:text-[17px]
                font-normal leading-relaxed
                text-neutral-200 dark:text-neutral-300
              "
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Discover daily inspiration, expert insights, and proven strategies that create lasting change.
            </p>

            <p
              className="
                mt-2 text-[13px] md:text-[14px]
                leading-relaxed
                text-neutral-300 dark:text-neutral-400
              "
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From mindset mastery to career success — your personal growth journey starts here
            </p>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 text-[15px] font-medium
                  bg-amber-500 hover:bg-amber-600 text-white
                  rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300
                "
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get Free Daily Inspiration →
              </Link>
            </div>

            <p
              className="
                mt-4 text-[12px] tracking-tight
                text-neutral-300 dark:text-neutral-400
              "
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ✓ Free forever • ✓ No credit card required • ✓ Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Mouse indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10" aria-hidden="true">
        <div className="w-7 h-10 rounded-full border-2 border-white/50 dark:border-white/40 flex items-start justify-center p-1">
          <span className="block w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
        </div>
      </div>
    </section>
  );
}
