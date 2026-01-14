import ScrollReveal from "../utils/ScrollReveal";

export default function Faq({ generateJsonLd = false }) {
  const items = [
    {
      q: "Is Voice VPN really free?",
      a: "Yes. Voice VPN is ad‑supported and uses a simple credit system instead of subscriptions. You can download the APK and start without creating an account.",
    },
    {
      q: "Does it work in censored regions (UAE, etc.)?",
      a: "Voice VPN is built to stay usable in restrictive networks by blending in with normal traffic. Availability can vary by network; if it slows down, reconnect once or try again later.",
    },
    {
      q: "Do you require sign‑up or collect activity logs?",
      a: "No sign‑up is required. Voice VPN is designed to minimize data collection and does not keep browsing activity logs.",
    },
    {
      q: "How do I install the APK safely?",
      a: "Download the APK from the official link on this site, open it, and follow Android’s install prompts. Only install updates from trusted sources to avoid tampered files.",
    },
  ];

  const jsonLd =
    generateJsonLd &&
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    });

  return (
    <section id="faq" className="py-20 bg-[var(--brand-navy)]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">FAQ</h2>
            <p className="text-[var(--brand-gray)]">
              Quick answers about downloads, privacy, and censorship resistance.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {items.map((it, idx) => (
            <ScrollReveal key={it.q} delay={idx * 0.06}>
              <details className="glass-card rounded-2xl p-5">
                <summary className="cursor-pointer list-none text-white font-semibold">
                  {it.q}
                </summary>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{it.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>

        {generateJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
          />
        )}
      </div>
    </section>
  );
}

