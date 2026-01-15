import Hero from "./_components/sections/Hero";
import Stats from "./_components/sections/Stats";
import Features from "./_components/sections/Features";
import Testimonials from "./_components/sections/Testimonials";
import HowTo from "./_components/sections/HowTo";
import CreditExplainer from "./_components/sections/CreditExplainer";
import Faq from "./_components/sections/Faq";
import { LatestReleaseNotes } from "./_components/utils/releaseInfo";
import { FAQ_ITEMS } from "./_components/content/faqItems";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://voice-vpn.com/#website",
        url: "https://voice-vpn.com/",
        name: "Voice VPN",
      },
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        "@id": "https://voice-vpn.com/#app",
        name: "Voice VPN",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Android",
        description:
          "Free, censorship‑resistant VPN for Android. No sign‑up, no activity logs, ad‑supported credits.",
        downloadUrl: "https://apk.voicevpn.top/latest.apk",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        publisher: { "@type": "Organization", name: "Vasilkoff Ltd" },
      },
    ],
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Features />

      <section id="how-it-works" className="py-20 bg-[var(--brand-dark)]/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HowTo generateJsonLd />
          <CreditExplainer />
        </div>
      </section>

      <Testimonials />
      <Faq items={FAQ_ITEMS} limit={4} showReadMore generateJsonLd />
      <section className="py-20 bg-[var(--brand-dark)]/30">
        <div className="max-w-4xl mx-auto px-6">
          <LatestReleaseNotes />
        </div>
      </section>
    </main>
  );
}
