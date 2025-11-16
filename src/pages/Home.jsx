// src/pages/Home.jsx
import Meta from "../components/Meta.jsx";
import Hero from '../components/Hero.jsx'
import QuoteBanner from '../components/QuoteBanner.jsx'
import Stats from '../components/Stats.jsx'
import Offerings from '../components/Offerings.jsx'
import FeaturedWritings from '../components/FeaturedWritings.jsx'
import CategoriesGrid from '../components/CategoriesGrid.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FounderMessage from '../components/FounderMessage.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Meta
        title="EchoWritings — Daily inspiration & stories"
        description="EchoWritings brings daily motivation, short stories, and life-changing quotes in English & Hindi. Join 50,000+ readers for daily inspiration, mindset tips, and practical growth guides."
        url="https://www.echowritings.com/"
        image="/src/assets/Logo.jpg"
        keywords="motivation, quotes, inspirational stories, personal growth, mindset, daily quotes"
      />

      <Hero />
      <QuoteBanner />

      {/* 3 Values Section */}
      <section className="py-16">
        <div className="container-px mx-auto grid md:grid-cols-3 gap-6">

          <div className="
            card p-6 rounded-2xl
            bg-white dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            shadow-sm text-center
          ">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Authenticity
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Genuine stories that resonate with the heart and inspire real change.
            </p>
          </div>

          <div className="
            card p-6 rounded-2xl
            bg-white dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            shadow-sm text-center
          ">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Knowledge
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Insightful content that sparks personal growth.
            </p>
          </div>

          <div className="
            card p-6 rounded-2xl
            bg-white dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            shadow-sm text-center
          ">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              Community
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              A supportive network of motivated individuals on their journey to success.
            </p>
          </div>

        </div>
      </section>

      <Stats />
      <Offerings />
      <FeaturedWritings />
      <CategoriesGrid />
      <Testimonials />
      <FounderMessage />
      <CTA />
    </>
  );
}
