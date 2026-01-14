import Features from "../_components/sections/Features";

export const metadata = {
  title: "Features",
  description:
    "Voice VPN features: censorship resistance, no sign‑up, privacy‑first design, and a fair credit system instead of subscriptions.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-navy)]">
      <header className="max-w-4xl mx-auto px-6 pt-14 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Features</h1>
        <p className="text-[var(--brand-gray)] leading-relaxed">
          Built for real‑world networks: fast to install, simple to use, and designed to keep
          working where many VPNs fail.
        </p>
      </header>

      <Features />

      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Download</h2>
        <p className="mt-2 text-[var(--brand-gray)]">
          Get the latest Android build directly from our infrastructure.
        </p>
        <a
          href="https://apk.voicevpn.top/latest.apk"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--brand-cyan)] px-6 py-3 text-sm font-semibold text-white hover:bg-opacity-90 transition-all"
        >
          Download APK
        </a>
      </section>
    </main>
  );
}
