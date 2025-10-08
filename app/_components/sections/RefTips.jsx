// app/_components/sections/RefTips.jsx
/**
 * RefTips — small, server-friendly tips list (no client JS).
 *
 * Props:
 *  - tips?: string[]                  // defaults provided if empty
 *  - title?: string                   // default "Tips that actually help"
 *  - className?: string
 *  - columns?: 1 | 2 | 3              // responsive columns hint (default 1→2 on md)
 *  - compact?: boolean                // tighter spacing
 */
export default function RefTips({
  tips,
  title = "Tips that actually help",
  className = "",
  columns = 2,
  compact = false,
}) {
  const items =
    tips && tips.length
      ? tips
      : [
          "Prefer stable Wi-Fi over weak LTE for calls.",
          "If the network changes, reconnect once.",
          "Disable Battery Saver during long calls.",
          "If ping spikes, switch to a nearby server.",
          "Keep the app in recent apps to avoid kills.",
        ];

  // grid cols: 1 on mobile; up to N on md+
  const colClass =
    columns === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1";

  return (
    <section className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}>
      <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>

      <ul
        className={`mt-4 grid ${colClass} gap-3 sm:gap-4`}
      >
        {items.map((t, i) => (
          <li
            key={`${i}-${t.slice(0, 24)}`}
            className={`flex items-start gap-2 rounded-lg bg-white/5 border border-white/10 px-3 ${
              compact ? "py-2" : "py-3"
            }`}
          >
            {/* check icon (inline SVG, no client JS) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 shrink-0 text-white/80"
              fill="currentColor"
            >
              <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 6.543-6.543a1 1 0 0 1 1.414 0z" />
            </svg>
            <span className="text-sm text-gray-200">{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
