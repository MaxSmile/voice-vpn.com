import Faq from "../_components/sections/Faq";

export const metadata = {
  title: "FAQ",
  description:
    "Answers about Voice VPN downloads, privacy, censorship resistance, and safe APK installation.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-navy)]">
      <header className="max-w-4xl mx-auto px-6 pt-14 pb-2 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">FAQ</h1>
        <p className="text-[var(--brand-gray)] leading-relaxed">
          Short, practical answers before you download and connect.
        </p>
      </header>

      <Faq generateJsonLd />
    </main>
  );
}
