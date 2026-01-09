// app/_components/sections/RefRelated.jsx
'use client';

/**
 * RefRelated — shows related ambassadors or referral links.
 *
 * Props:
 *  - items?: Array<{ href:string, alias:string, avatarUrl?:string, badges?:string[] }>
 *  - title?: string             // default "Related ambassadors"
 *  - className?: string
 */
export default function RefRelated({
  items = [],
  title = 'Related ambassadors',
  className = '',
}) {
  if (!items || items.length === 0) {
    return null; // Don't render if no related items
  }

  return (
    <section className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}>
      <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <a
            key={idx}
            href={it.href}
            className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
            rel="noopener noreferrer"
          >
            <img
              src={
                it.avatarUrl ||
                // fallback identicon via gravatar on alias hash-ish (not PII critical here since alias is public)
                `https://www.gravatar.com/avatar/${encodeURIComponent(
                  (it.alias || 'anon').toLowerCase()
                )}?d=identicon&s=80`
              }
              alt={it.alias || 'member'}
              width={40}
              height={40}
              className="rounded-lg ring-1 ring-white/10"
            />
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">{it.alias || 'Member'}</div>
              {it.badges?.length ? (
                <div className="mt-1 flex flex-wrap gap-1">
                  {it.badges.slice(0, 2).map((b, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-1 text-[11px] text-gray-400">Ambassador</div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
