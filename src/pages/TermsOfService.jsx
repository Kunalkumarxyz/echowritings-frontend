// src/pages/TermsOfService.jsx
export default function TermsOfService() {
  const effectiveDate = "November 14, 2025";

  const sections = [
    {
      id: "agreement",
      title: "Agreement to Terms",
      text: `These Terms govern your use of EchoWritings at echowritings.com.
             By using the Service, you agree to these Terms. Otherwise, discontinue using the platform.`
    },
    {
      id: "eligibility",
      title: "Eligibility",
      text: `You must be 13+ to use the Service. Users under 18 require parental permission.`
    },
    {
      id: "using",
      title: "Using the Service",
      text: `You may browse content, subscribe, and access features. You must not upload illegal, abusive, hateful,
             copyrighted, or spam content. Use the Service lawfully and respectfully.`
    },
    {
      id: "user-content",
      title: "User Content",
      text: `When you submit comments or messages, you grant EchoWritings permission to display or manage such content
             as part of the Service. Do not submit sensitive personal data.`
    },
    {
      id: "ip",
      title: "Intellectual Property",
      text: `All content (text, UI, images, brand identity) belongs to EchoWritings or its licensors. You may not duplicate
             or republish content without permission.`
    },
    {
      id: "termination",
      title: "Termination",
      text: `We may suspend or block users who violate these Terms. Necessary sections remain valid even after termination.`
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      text: `EchoWritings provides motivational and informational content, not professional advice. Rely on content at your own risk.`
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      text: `EchoWritings is not responsible for indirect, incidental, special, or consequential damages arising from platform use.`
    },
    {
      id: "law",
      title: "Governing Law",
      text: `These Terms are governed by the laws of India. Any dispute will be resolved in the competent courts of India.`
    },
    {
      id: "changes",
      title: "Changes to Terms",
      text: `We may modify the Terms occasionally. Updated effective date will appear at the top. Continuing to use the site means you accept changes.`
    }
  ];

  return (
    <main className="container-px mx-auto py-10 sm:py-12 max-w-3xl lg:max-w-4xl">
      {/* HEADER */}
      <section className="text-center px-2 sm:px-4">
        <h1 className="section-title text-2xl sm:text-3xl md:text-4xl">Terms of Service</h1>

        <p className="muted mt-3 text-xs sm:text-sm">
          Effective Date:{" "}
          <time dateTime="2025-11-14" className="font-medium text-neutral-900 dark:text-white">
            {effectiveDate}
          </time>
        </p>

        <p className="muted text-xs sm:text-sm max-w-xl mx-auto mt-1">
          Please read these Terms carefully. By using EchoWritings, you agree to follow them.
        </p>
      </section>

      {/* OPTIONAL: quick anchor list for long pages (mobile-friendly) */}
      <nav className="mt-6 px-2 sm:px-0">
        <ul className="flex flex-wrap gap-2 justify-center text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-neutral-700 dark:text-neutral-300 hover:text-brand">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* SECTIONS */}
      {sections.map((sec) => (
        <section
          id={sec.id}
          key={sec.id}
          className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 md:p-8 mt-8 shadow-sm"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">{sec.title}</h2>
          <p className="muted mt-3 leading-relaxed text-sm sm:text-base whitespace-pre-line">{sec.text}</p>
        </section>
      ))}

      {/* CONTACT SECTION */}
      <section className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 md:p-8 mt-10 mb-16 shadow-sm">
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">Contact Us</h2>

        <p className="muted mt-3 text-sm sm:text-base leading-relaxed">
          If you have questions regarding these Terms, reach us at:
        </p>

        <a
          href="mailto:info@echowritings.com"
          className="text-amber-600 dark:text-amber-400 hover:underline mt-1 block text-sm sm:text-base"
        >
          info@echowritings.com
        </a>

        <p className="muted mt-4 text-xs">
          Note: This page is a summary-like Terms document tailored for a motivational content website.
          For detailed legal needs, consult a qualified attorney.
        </p>
      </section>
    </main>
  );
}
