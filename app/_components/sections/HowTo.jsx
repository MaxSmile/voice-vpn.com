// app/_components/sections/HowTo.jsx
/**
 * HowTo — concise step list with optional JSON-LD.
 *
 * Props:
 *  - steps?: Array<{ title: string, body?: string }>
 *  - title?: string
 *  - className?: string
 *  - showNumbers?: boolean         // default true
 *  - generateJsonLd?: boolean      // embed HowTo schema
 */
export default function HowTo({
  steps,
  title = 'How to get started',
  className = '',
  showNumbers = true,
  generateJsonLd = false,
}) {
  const items =
    steps && steps.length
      ? steps
      : [
          { title: 'Install Voice VPN', body: 'Get it from Google Play or download the APK.' },
          { title: 'Open and allow VPN', body: 'Approve the VPN permission when prompted.' },
          { title: 'Tap Connect', body: 'Wait for the key icon; you’re secured.' },
          { title: 'Test a quick call', body: 'If quality drops, reconnect once.' },
        ];

  const jsonLd =
    generateJsonLd &&
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: items.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.title,
        itemListElement: s.body
          ? [{ '@type': 'HowToDirection', text: s.body }]
          : undefined,
      })),
    });

  return (
    <section
      aria-labelledby="howto-title"
      className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}
    >
      <h2 id="howto-title" className="text-lg sm:text-xl font-semibold text-white">
        {title}
      </h2>

      <ol className="mt-4 space-y-3">
        {items.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            {showNumbers && (
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-xs font-semibold text-white">
                {i + 1}
              </span>
            )}
            <div>
              <div className="text-sm sm:text-base font-medium text-white">{s.title}</div>
              {s.body && <p className="text-sm text-gray-300 mt-0.5">{s.body}</p>}
            </div>
          </li>
        ))}
      </ol>

      {generateJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </section>
  );
}
