import ScrollReveal from "../utils/ScrollReveal";
import { FAQ_ITEMS } from "../content/faqItems";

export default function Faq({
  items = FAQ_ITEMS,
  limit,
  generateJsonLd = false,
  showReadMore = false,
  readMoreHrefBase = "/faq",
}) {
  const displayed = typeof limit === "number" ? items.slice(0, limit) : items;

  const jsonLd =
    generateJsonLd &&
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: displayed.map((it) => ({
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
          {displayed.map((it, idx) => (
            <ScrollReveal key={it.q} delay={idx * 0.06}>
              <div id={it.id || undefined} className="scroll-mt-24">
                <details className="glass-card rounded-2xl p-5">
                  <summary className="cursor-pointer list-none text-white font-semibold">
                    {it.q}
                  </summary>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{it.a}</p>
                  {showReadMore && it.id && (
                    <a
                      href={`${readMoreHrefBase}#${it.id}`}
                      className="mt-3 inline-flex text-sm text-[var(--brand-cyan)] hover:opacity-90"
                    >
                      Read more →
                    </a>
                  )}
                </details>
              </div>
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
