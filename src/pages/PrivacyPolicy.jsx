// src/pages/PrivacyPolicy.jsx
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="container-px mx-auto py-12 max-w-4xl" id="top">

      {/* PAGE HEADER */}
      <section className="text-center">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="muted mt-3 text-sm">
          Effective Date: <strong>November 14, 2025</strong>
        </p>
        <p className="muted text-sm max-w-xl mx-auto mt-1">
          Your privacy is extremely important to us. This Privacy Policy explains how EchoWritings collects, uses, and safeguards your data.
        </p>

        {/* Quick anchors */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <a href="#privacy" className="text-amber-600 hover:underline font-medium">Privacy Policy</a>
          <span className="text-neutral-400">•</span>
          <a href="#terms" className="text-amber-600 hover:underline font-medium">Terms of Service</a>
          <span className="text-neutral-400">•</span>
          <Link to="/terms-of-service" className="text-amber-600 hover:underline font-medium">Open Terms Page</Link>
        </div>
      </section>

      {/* ---------- PRIVACY POLICY (anchor) ---------- */}
      <section id="privacy" className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Introduction</h2>
        <p className="muted mt-3 leading-relaxed">
          EchoWritings (“we”, “our”, “us”) is committed to protecting your personal information.
          This policy applies when you access <span className="font-medium">echowritings.com</span> or use any of our services.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Information We Collect</h3>
        <ul className="muted mt-4 space-y-2 list-disc list-inside leading-relaxed">
          <li><strong>Personal Data:</strong> Name, email, and message details you submit.</li>
          <li><strong>Device & Usage Data:</strong> IP address, browser type, pages visited, time spent, and referral source.</li>
          <li><strong>Cookies:</strong> Used for preferences, analytics, performance, and smooth functionality.</li>
        </ul>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">How We Use Your Information</h3>
        <p className="muted mt-3 leading-relaxed">We use your information to:</p>
        <ul className="muted mt-3 list-disc list-inside space-y-2">
          <li>Provide motivational quotes, newsletters, and platform updates.</li>
          <li>Respond to support messages and customer requests.</li>
          <li>Improve website performance and user experience.</li>
          <li>Send emails or updates (only if you subscribe).</li>
        </ul>
        <p className="muted mt-3 leading-relaxed">
          We <span className="font-semibold text-neutral-900 dark:text-white">never sell</span> your personal information to third parties.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Cookies & Tracking Technologies</h3>
        <p className="muted mt-3 leading-relaxed">
          Cookies help us improve website performance, remember your preferences, and analyze traffic.
          You may disable cookies in your browser settings, but some features may not function correctly.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Third-Party Services</h3>
        <p className="muted mt-3 leading-relaxed">
          We use trusted third-party providers (analytics, hosting, email delivery).
          They collect necessary data only to perform their services. Each provider has its own privacy policy.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Data Security</h3>
        <p className="muted mt-3 leading-relaxed">
          We use modern security measures to protect your information.
          However, no method of transmission over the internet is completely secure.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Your Rights</h3>
        <p className="muted mt-3 leading-relaxed">You may request:</p>
        <ul className="muted mt-3 list-disc list-inside space-y-2">
          <li>Access to your personal data</li>
          <li>Correction or updates</li>
          <li>Deletion of your account/data</li>
          <li>Opt-out from newsletters anytime</li>
        </ul>
        <p className="muted mt-3">
          Email us at:
          <a href="mailto:info@echowritings.com" className="text-amber-600 dark:text-amber-400 hover:underline"> info@echowritings.com</a>
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Children’s Privacy</h3>
        <p className="muted mt-3 leading-relaxed">
          EchoWritings is not intended for children under 13. We do not knowingly collect data from children.
          If you believe a child has submitted data, contact us immediately.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Changes to This Policy</h3>
        <p className="muted mt-3 leading-relaxed">
          We may update this Privacy Policy from time to time. A new “Effective Date” will be posted at the top of the page.
        </p>
      </section>

      {/* ---------- TERMS OF SERVICE (anchor) ---------- */}
      <section id="terms" className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Terms of Service</h2>
        <p className="muted mt-3 leading-relaxed">
          These Terms of Service (“Terms”) govern your access to and use of EchoWritings (the “Service”) at <span className="font-medium">echowritings.com</span>.
          By using the Service, you agree to these Terms. If you do not agree, please do not use the Service.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Eligibility</h3>
        <p className="muted mt-3 leading-relaxed">
          You must be at least 13 years old to use the Service. If you are under 18, you must have parental consent.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Using the Service</h3>
        <p className="muted mt-3 leading-relaxed">
          You may access content, sign up for newsletters, and interact with available features.
          Use the Service lawfully and do not post prohibited content (hate speech, illegal activity, harassment, spam, or copyrighted material you do not own).
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">User Content</h3>
        <p className="muted mt-3 leading-relaxed">
          If you submit content (comments, messages), you grant EchoWritings a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content on the Service.
          Do not submit personal, sensitive, or copyrighted materials you do not own.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Intellectual Property</h3>
        <p className="muted mt-3 leading-relaxed">
          All content on the Service (text, images, code) is owned or licensed by EchoWritings unless otherwise stated.
          You may not copy or republish content without permission.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Termination</h3>
        <p className="muted mt-3 leading-relaxed">
          We may suspend or terminate access for violations of these Terms or illegal behavior. These Terms survive termination for provisions that by their nature should survive.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Disclaimers</h3>
        <p className="muted mt-3 leading-relaxed">
          Content is provided for informational and inspirational purposes only. EchoWritings is not providing professional (legal, medical, financial) advice.
          Rely on content at your own risk.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Limitation of Liability</h3>
        <p className="muted mt-3 leading-relaxed">
          To the fullest extent permitted by law, EchoWritings and its affiliates are not liable for indirect, incidental, special, or consequential damages arising from your use of the Service.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Governing Law</h3>
        <p className="muted mt-3 leading-relaxed">
          These Terms are governed by the laws of India. Any dispute will be resolved in the competent courts of India.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Changes to Terms</h3>
        <p className="muted mt-3 leading-relaxed">
          We may update these Terms occasionally. We will post the updated effective date at the top.
          Continued use after changes means you accept the revised Terms.
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">Contact</h3>
        <p className="muted mt-3 leading-relaxed">
          For questions about these Terms or Privacy, email us at
          <a href="mailto:info@echowritings.com" className="text-amber-600 dark:text-amber-400 hover:underline"> info@echowritings.com</a>.
        </p>
      </section>

      {/* FOOTNOTE / NAV TO TOP */}
      <div className="mt-8 text-center">
        <a href="#top" className="text-neutral-600 dark:text-neutral-400 hover:underline">Back to top</a>
      </div>

      <div className="mb-16" />
    </main>
  );
}
