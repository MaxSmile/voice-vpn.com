// app/_components/sections/RefHero.jsx
'use client';
import QRCode from 'react-qr-code';

export default function RefHero({
  title,
  subtitle,
  avatarUrl,
  alias,
  badges = [],
  rating,
  primaryCta = { label: 'Open / Install', href: '#' },
  secondaryCta,
  qrValue, // ← pass https://voice-vpn.com/r/<refId>
}) {
  return (
    <section className="w-full text-white py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt={alias ? `${alias} avatar` : 'Member avatar'}
                  width={48}
                  height={48}
                  className="rounded-xl ring-1 ring-white/10"
                />
              )}
              {alias && (
                <span className="text-sm text-gray-300">
                  Recommended by <span className="font-medium text-white">{alias}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl">
                {subtitle}
              </p>
            )}

            {badges.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {badges.map((b, i) => (
                  <li key={`${b}-${i}`} className="text-xs px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 text-xs text-gray-400">
              {rating
                ? `${rating.value.toFixed(1)}★ on Google Play · ${rating.count.toLocaleString()} reviews · No accounts. No tracking.`
                : 'No accounts. No tracking.'}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-200 transition"
              >
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>

          {/* QR (desktop only) */}
          {qrValue && (
            <div className="hidden md:flex w-40 shrink-0 flex-col items-center gap-2">
              <div className="p-2 rounded-lg bg-white">
                <QRCode
                  value={qrValue}
                  size={156}
                  level="M"              // error correction
                  aria-label="Scan to open"
                />
              </div>
              <span className="text-xs text-gray-400">Scan to open</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
