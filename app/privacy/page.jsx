import Link from "next/link";

export const metadata = {
  title: "Privacy",
  description:
    "Voice VPN is designed to minimize data collection: no sign‑up required and no browsing activity logs.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-navy)]">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Privacy</h1>

        <div className="glass-card rounded-2xl p-6 space-y-5">
          <p className="text-[var(--brand-gray)] leading-relaxed">
            Voice VPN is built to be usable without creating an account. We aim to minimize data
            collection and do not keep browsing activity logs.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">What this site does</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Provides official download links and product information.</li>
              <li>May use basic, privacy‑safe analytics to understand which pages and downloads perform best.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">What Voice VPN avoids</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>No email or phone number required to start.</li>
              <li>No browsing history logging for ad targeting.</li>
              <li>No subscription paywalls.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-300">
            For the full legal privacy policy, see{" "}
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
