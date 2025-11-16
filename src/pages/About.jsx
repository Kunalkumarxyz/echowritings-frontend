// src/pages/About.jsx
// Place your chosen photo at: src/assets/kunal-founder.jpg

import { useEffect } from "react";
import { Link } from "react-router-dom";
import QuoteBanner from "../components/QuoteBanner.jsx";
import founderImg from "../assets/kunal-founder.png";

export default function About() {
  // ensure page always starts at top when opened directly or via route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="container-px mx-auto py-12">

      {/* ---------- PAGE TITLE ---------- */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="section-title">About EchoWritings</h1>

        <p className="muted mt-4 text-lg leading-relaxed">
          EchoWritings is a motivational quote company dedicated to uplifting people through
          meaningful, impactful, and life-changing words. Our platform delivers clean,
          powerful, and daily inspiration designed to help readers grow mentally, emotionally,
          and spiritually.
        </p>

        {/* NEW INFORMATION (ADDED professionally) */}
        <p className="muted mt-4 leading-relaxed">
          EchoWritings is a self-owned digital platform founded by{" "}
          <span className="font-semibold text-neutral-900 dark:text-white">Kunal Kumar</span> in 2020,
          focusing on spreading positivity and thought-provoking motivation. We share daily encouragement
          in both Hindi and English, offering visually engaging reels, posters, and quotes that inspire
          growth, resilience, and emotional strength.
        </p>

        <p className="muted mt-4 leading-relaxed">
          Our mission is to help individuals find clarity, strength, and purpose through the power of words.
          Every quote we create or share is designed to bring value, spark self-reflection, and encourage
          continuous improvement.
        </p>

        <p className="muted mt-4 leading-relaxed">
          Be a part of this movement of learning, self-development, and positivity. Together, we are building
          a community that transforms lives — one quote at a time.
        </p>
      </section>

      {/* ---------- WHAT WE DO ---------- */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          What We Do
        </h2>

        <p className="muted mt-4 leading-relaxed">
          We provide high-quality motivational quotes, mindset guidance, and inspirational
          content tailored for students, creators, professionals, entrepreneurs, and anyone
          seeking positivity and clarity in their life.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="card p-6 text-center bg-white dark:bg-neutral-900 
                          border border-neutral-200 dark:border-neutral-800 
                          shadow-sm rounded-2xl">
            <h3 className="font-semibold text-neutral-900 dark:text-white text-lg">
              Daily Quotes
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Fresh, impactful quotes written and selected to inspire you every day.
            </p>
          </div>

          <div className="card p-6 text-center bg-white dark:bg-neutral-900 
                          border border-neutral-200 dark:border-neutral-800 
                          shadow-sm rounded-2xl">
            <h3 className="font-semibold text-neutral-900 dark:text-white text-lg">
              Mindset Growth
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Short lessons helping you build discipline, confidence & clarity.
            </p>
          </div>

          <div className="card p-6 text-center bg-white dark:bg-neutral-900 
                          border border-neutral-200 dark:border-neutral-800 
                          shadow-sm rounded-2xl">
            <h3 className="font-semibold text-neutral-900 dark:text-white text-lg">
              Visual Motivation
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Share-worthy posters and creative quote designs for social media.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- OUR MISSION ---------- */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Our Mission
        </h2>

        <p className="muted mt-4 leading-relaxed">
          Our mission is to make motivation simple, accessible, and meaningful. We believe
          that a few words at the right moment can transform a person’s day — or even their life.
          Through EchoWritings, we aim to help millions develop inner strength, emotional balance,
          gratitude, and a growth-focused mindset.
        </p>
      </section>

      {/* ---------- OUR VISION ---------- */}
      <section className="max-w-4xl mx-auto mt-14 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Our Vision
        </h2>

        <p className="muted mt-4 leading-relaxed">
          To become one of the world’s most trusted motivational platforms — a place people visit
          whenever they need strength, clarity, comfort, or inspiration.
        </p>
      </section>

      {/* ---------- FOUNDER SECTION ---------- */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">
          Meet the Founder — Kunal Kumar
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          <div className="flex justify-center md:justify-start">
            <img
              src={founderImg}
              alt="Kunal Kumar - Founder of EchoWritings"
              className="w-44 h-44 md:w-56 md:h-56 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-neutral-800"
              loading="lazy"
            />
          </div>

          <div className="md:col-span-2">
            <p className="muted leading-relaxed">
              I’m <span className="font-semibold text-neutral-900 dark:text-white">Kunal Kumar</span>,
              the founder of EchoWritings. I created this platform to share short, powerful quotes
              that help people build confidence, discipline, and mental strength.
            </p>

            <p className="muted mt-4 leading-relaxed">
              I belong to Nawada, Bihar, and I’m currently studying Computer Science at GGITS Jabalpur,
              Data Science at IIT Madras, and Computer Science at the University of the People. With
              my background in Web Development, UI/UX, Python, and Data Science, I’ve built EchoWritings
              to be a clean, fast, and peaceful digital experience.
            </p>

            <p className="muted mt-4 leading-relaxed">
              My vision is to spread motivation globally through simple words that speak to the heart
              and strengthen the mind.
            </p>

            <p className="muted mt-4 text-sm italic">
              “If words can touch a heart, they can change a life.” — Kunal Kumar
            </p>
          </div>
        </div>
      </section>

      {/* ---------- STATS SECTION ---------- */}
      <section className="bg-gradient-to-b from-amber-50 dark:from-neutral-900 to-white dark:to-neutral-900 mt-20 py-16 rounded-2xl">
        <h2 className="section-title text-center">Our Impact in Numbers</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
          {[
            { value: "50K+", label: "Daily Readers" },
            { value: "1M+", label: "Quotes Viewed" },
            { value: "120+", label: "Countries Reached" },
            { value: "24/7", label: "Inspiration Available" }
          ].map((it, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="text-3xl font-bold text-brand">{it.value}</div>
              <div className="mt-2 muted">{it.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ SECTION ---------- */}
      <section className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              What does EchoWritings provide?
            </h3>
            <p className="muted mt-2">
              Daily motivational quotes, mindset tips, and inspirational content.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Who is the founder?
            </h3>
            <p className="muted mt-2">
              EchoWritings is founded by Kunal Kumar, a creator and developer from Bihar, India.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Is the platform free?
            </h3>
            <p className="muted mt-2">
              Yes, all motivational content is free for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- LEGAL INFORMATION (embedded summaries + links) ---------- */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">
          Policies & Legal Information
        </h2>

        <p className="muted mt-4 leading-relaxed text-center">
          EchoWritings values transparency. Below are short summaries — click to read full policies.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Privacy Policy</h3>
            <p className="muted mt-2 leading-relaxed">
              We collect minimal personal data (name, email) for contact and newsletter. We never sell your data.
              You can request data removal anytime by contacting us.
            </p>
            <Link
              to="/privacy-policy"
              aria-label="Read full Privacy Policy"
              className="inline-block mt-3 text-amber-600 dark:text-amber-400 font-medium hover:underline focus:outline-none focus:ring-0"
            >
              Read full Privacy Policy →
            </Link>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Terms & Conditions</h3>
            <p className="muted mt-2 leading-relaxed">
              By using EchoWritings you agree to our content guidelines and usage terms. Content is inspirational only and not a substitute for professional advice.
            </p>
            <Link
              to="/terms-of-service"
              aria-label="Read full Terms of Service"
              className="inline-block mt-3 text-amber-600 dark:text-amber-400 font-medium hover:underline focus:outline-none focus:ring-0"
            >
              Read full Terms of Service →
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center muted">
          <p>Need help? <Link to="/contact" className="text-amber-600 dark:text-amber-400 hover:underline focus:outline-none focus:ring-0">Contact Us</Link> or email <a href="mailto:info@echowritings.com" className="text-amber-600 dark:text-amber-400 hover:underline">info@echowritings.com</a>.</p>
        </div>
      </section>

      <div className="mt-20">
        <QuoteBanner tag="wisdom" />
      </div>

    </main>
  );
}
