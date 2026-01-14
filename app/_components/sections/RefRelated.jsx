// app/_components/sections/RefRelated.jsx

/**
 * Referral cross-links shown below the leaderboard.
 *
 * Props:
 *  - items: Array<{ href?: string, title?: string, alias?: string, subtitle?: string, description?: string, note?: string, avatarUrl?: string, badges?: string[], tags?: string[], region?: string }>
 *  - currentRefId?: string     // used to omit the current page if links include it
 *  - limit?: number            // default 6
 *  - title?: string            // section title
 *  - description?: string      // helper copy under the title
 *  - className?: string
 */
export default function RefRelated({
  items = [],
  currentRefId,
  limit = 6,
  title = 'Related invites',
  description = 'Discover other ambassadors and nearby offers.',
  className = '',
}) {
  const list = (items || [])
    .filter(Boolean)
    .filter((item) => {
      if (!currentRefId || !item.href) return true;
      const href = item.href.toLowerCase();
      return !href.endsWith(`/${currentRefId}`) && !href.includes(`ref=${currentRefId.toLowerCase()}`);
    })
    .slice(0, limit);

  if (list.length === 0) {
    return (
      <section className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}>
        <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-gray-400">No related invites yet.</p>
      </section>
    );
  }

  return (
    <section className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((item, idx) => {
          const name = item.title || item.alias || 'Invite';
          const subtitle = item.subtitle || item.description || item.note || item.region;
          const badges = item.badges || item.tags;
          return (
            <a
              key={idx}
              href={item.href || '#'}
              className="group flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
            >
              <div className="h-11 w-11 rounded-lg ring-1 ring-white/10 overflow-hidden bg-white/5 flex items-center justify-center text-sm font-semibold text-white/80 shrink-0">
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span aria-hidden>{name.slice(0, 1).toUpperCase()}</span>
                )}
              </div>

              <div className="min-w-0">
                <div className="text-sm font-medium text-white truncate">{name}</div>
                {subtitle ? (
                  <div className="mt-1 text-xs text-gray-400 overflow-hidden text-ellipsis">{subtitle}</div>
                ) : (
                  <div className="mt-1 text-xs text-gray-400">Trusted invite</div>
                )}
                {badges?.length ? (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {badges.slice(0, 3).map((b, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
