import Link from "next/link";

export const metadata = {
  title: "Privacy",
  description:
    "How Voice VPN handles data on this website and in the app, including what we collect, why, and your choices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-navy)]">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Privacy</h1>

        <div className="glass-card rounded-2xl p-6 space-y-5">
          <p className="text-[var(--brand-gray)] leading-relaxed">
            We built Voice VPN to be usable without creating an account and to minimize data
            collection. This page explains (in plain language) what data may be processed when you
            use this website and the Voice VPN app/service, why we process it, and what choices you
            have.
          </p>

          <p className="text-sm text-gray-300">
            <span className="font-medium text-white">Last updated:</span> January 15, 2026
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Scope</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              This policy covers (1) the public website at voice-vpn.com, and (2) the Voice VPN
              app/service. The website and the VPN service involve different kinds of data. We try
              to keep both as minimal as possible.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Website data</h2>
            <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <p>
                Like most websites, our hosting providers and CDNs may process basic request data so
                the site can load reliably and stay secure:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="text-white/90">Log data:</span> IP address, user-agent, referral
                  URL, approximate location (derived from IP), timestamps, and requested pages/files.
                </li>
                <li>
                  <span className="text-white/90">Diagnostics:</span> error reports and performance
                  metrics (for example, when a page fails to load).
                </li>
              </ul>
              <p>
                We may also use aggregated, privacy-minded analytics to understand which pages and
                downloads are useful. We do not use this website to build advertising profiles or
                sell personal data.
              </p>
              <p>
                <span className="text-white/90">Cookies/local storage:</span> we try to keep usage to
                a minimum (for example, to remember basic preferences). If third-party services are
                added that require cookies, we’ll update this page accordingly.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Voice VPN app/service data</h2>
            <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <p>
                The VPN service must handle certain technical data to function (for example, your
                IP address during an active session so traffic can be routed). Our goal is to keep
                data collection minimal and avoid tracking your browsing activity.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="text-white/90">No account required:</span> we aim to keep Voice
                  VPN usable without email or phone number sign-up.
                </li>
                <li>
                  <span className="text-white/90">No browsing activity logs:</span> we do not
                  deliberately record the websites you visit or the contents of your traffic.
                </li>
                <li>
                  <span className="text-white/90">Operational data:</span> we may process limited
                  information needed to run, secure, and improve the service (for example, server
                  health metrics and abuse prevention signals).
                </li>
                <li>
                  <span className="text-white/90">Optional diagnostics:</span> if the app provides a
                  way to share crash reports or diagnostics, it’s intended to be opt-in and used to
                  fix bugs—not to track you.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">How we use data</h2>
            <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
              <li>Provide downloads, content, and core functionality.</li>
              <li>Protect against abuse, fraud, and attacks.</li>
              <li>Measure reliability and improve performance.</li>
              <li>Comply with legal obligations when required.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Sharing</h2>
            <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
              <p>
                We may share limited data with service providers that help operate the website and
                app (for example, hosting, CDN, and analytics providers). They process data on our
                behalf under contractual and security controls.
              </p>
              <p>
                We do not sell personal information. We may disclose information if we believe it’s
                necessary to comply with applicable law, protect users, prevent abuse, or defend our
                rights.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Retention</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We aim to keep data only for as long as needed for the purposes described above, then
              delete or aggregate it. Retention periods may vary depending on the type of data (for
              example, short-term security logs vs. aggregated analytics).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Your choices</h2>
            <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
              <li>Use privacy tools like tracker blockers in your browser.</li>
              <li>Limit diagnostic sharing inside the app (if offered).</li>
              <li>
                Request help or ask privacy questions via{" "}
                <a
                  href="https://vasilkoff.com/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-cyan)] hover:underline"
                >
                  our contact page
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use reasonable technical and organizational measures to protect data. No method of
              transmission or storage is 100% secure, but we work to reduce risk and respond to
              issues quickly.
            </p>
          </div>

          <p className="text-sm text-gray-300">
            For the full legal privacy policy and any jurisdiction-specific terms, see{" "}
            <a
              href="https://vasilkoff.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand-cyan)] hover:underline"
            >
              vasilkoff.com/privacy-policy
            </a>
            .
          </p>

          <div className="text-sm">
            <Link href="/" className="text-[var(--brand-cyan)] hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
