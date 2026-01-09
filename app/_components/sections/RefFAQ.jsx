// app/_components/sections/RefFAQ.jsx
'use client';

/**
 * Reference FAQ Section
 * Props:
 *  - items: { q: string, a: string }[]
 *  - title?: string
 *  - className?: string
 *  - generateJsonLd?: boolean  // if true, embeds FAQPage JSON-LD for this block
 */
export default function RefFAQ({
  items = [],
  title = 'FAQ',
  className = '',
  generateJsonLd = false,
}) {
  const faqs = items.length
    ? items
    : [
        { q: 'Do I need an account?', a: 'No. Just install, connect, and go.' },
        {
          q: 'How do credits work?',
          a: 'Connecting costs 2 credits, then 1 per 30 minutes. Watch an ad to earn 4 credits.',
        },
        {
          q: 'Does it work on hotel/office Wi-Fi?',
          a: 'Usually yes. If the network changes, reconnect once.',
        },
      ];

  const jsonLd =
    generateJsonLd &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });

  return (
    <section
      aria-labelledby="ref-faq-title"
      className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}
    >
      <h2 id="ref-faq-title" className="text-lg sm:text-xl font-semibold text-white">
        {title}
      </h2>

      <div className="mt-4 divide-y divide-white/10">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group py-3"
            aria-labelledby={`faq-q-${i}`}
            // open the first by default if you like:
            // open={i === 0}
          >
            <summary
              id={`faq-q-${i}`}
              className="flex cursor-pointer items-start justify-between gap-3 list-none text-left text-sm sm:text-base text-white/90 hover:text-white focus:outline-none"
            >
              <span className="pr-6">{item.q}</span>
              <span
                className="mt-0.5 shrink-0 rounded-md border border-white/15 px-1.5 py-0.5 text-[10px] text-white/70 group-open:hidden"
                aria-hidden
              >
                +
              </span>
              <span
                className="mt-0.5 hidden shrink-0 rounded-md border border-white/15 px-1.5 py-0.5 text-[10px] text-white/70 group-open:inline"
                aria-hidden
              >
                –
              </span>
            </summary>
            <div className="mt-2 text-sm text-gray-300 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      {generateJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </section>
  );
}

