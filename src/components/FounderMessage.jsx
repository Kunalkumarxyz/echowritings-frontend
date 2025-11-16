// src/components/FounderMessage.jsx
import founderImg from "../assets/kunal-founder.png";

export default function FounderMessage() {
  return (
    <section className="py-20">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Founder Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={founderImg}
            alt="Kunal Kumar — Founder of EchoWritings"
            loading="lazy"
            className="
              rounded-2xl shadow-xl
              w-full max-w-sm sm:max-w-md
              h-80 sm:h-96 object-cover
              border-4 border-white dark:border-neutral-800
            "
          />
        </div>

        {/* Founder Message */}
        <div className="text-center lg:text-left">
          {/* Decorative Quote Mark */}
          <div className="text-5xl sm:text-6xl text-brand leading-none select-none">“</div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white mt-3">
            A Message from the Founder
          </h3>

          <p className="muted mt-5 text-base sm:text-lg leading-relaxed">
            I’m <span className="font-semibold text-neutral-900 dark:text-white">Kunal Kumar</span>,
            the founder of EchoWritings. I built this platform with one mission — to provide
            clarity, hope, and strength through meaningful words that truly make a difference.
          </p>

          <p className="muted mt-4 text-base sm:text-lg leading-relaxed">
            Every quote, story, and message here is carefully crafted to help you rise above
            distractions, build confidence, and improve your mindset. My goal is to create a
            peaceful digital space where inspiration feels natural, fresh, and real.
          </p>

          <div className="mt-8">
            <p className="font-semibold text-neutral-900 dark:text-white text-lg">— Kunal Kumar</p>
            <p className="muted text-sm">Founder & Creator • EchoWritings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
