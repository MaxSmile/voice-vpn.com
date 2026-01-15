import Link from "next/link";

import { FAQ_SEO_ITEMS } from "../_components/content/faqSeoItems";

export const metadata = {
  title: "FAQ",
  description:
    "Voice VPN FAQ: popular VPN questions answered simply—privacy, logs, speeds, censored networks, credits, downloads, and safety.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SEO_ITEMS.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a.join("\n\n") },
    })),
  });

  return (
    <main className="min-h-screen bg-[var(--brand-navy)] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-20 md:grid md:grid-cols-12 md:gap-10">
        <aside className="md:col-span-4 lg:col-span-3 md:sticky md:top-24 md:self-start md:max-h-[calc(100vh-7rem)] md:overflow-auto md:pr-2">
          <h2 className="text-lg font-semibold">Questions</h2>
          <ul className="mt-3 space-y-2 text-[var(--brand-gray)]">
            {FAQ_SEO_ITEMS.map((it) => (
              <li key={it.id}>
                <a className="hover:text-white" href={`#${it.id}`}>
                  {it.q}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article id="top" className="md:col-span-8 lg:col-span-9 mt-10 md:mt-0">
          <header>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Voice VPN FAQ</h1>
            <p className="mt-4 text-[var(--brand-gray)] leading-relaxed">
              Friendly answers to common VPN questions (and how Voice VPN helps). If you’re new to VPNs,
              this page is written to be easy to understand.
            </p>
            <p className="mt-3 text-sm text-[var(--brand-meta)]">
              Related pages:{" "}
              <Link className="underline hover:text-white" href="/features">Features</Link>{" "}
              ·{" "}
              <Link className="underline hover:text-white" href="/privacy">Privacy</Link>
            </p>
          </header>

          <hr className="my-10 border-white/10" />

          <div className="space-y-10">
            {FAQ_SEO_ITEMS.map((it) => (
              <section key={it.id} id={it.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold leading-snug">{it.q}</h2>
                <div className="mt-3 space-y-3 text-[var(--brand-gray)] leading-relaxed">
                  {it.a.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="mt-4 text-sm">
                  <a className="text-[var(--brand-cyan)] hover:opacity-90" href="#top">
                    Back to top
                  </a>
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
