// app/_components/sections/RefLeaderboard.jsx
'use client';

import { useEffect, useMemo, useState } from 'react';

/**
 * RefLeaderboard — privacy-safe ambassador crosslinks.
 *
 * Props:
 *  - region?: string            // e.g. "ae" | "global"
 *  - currentRefId?: string      // to hide the current page from the list
 *  - items?: Array<{ href:string, alias:string, avatarUrl?:string, badges?:string[] }>
 *      If provided, component will NOT fetch.
 *  - limit?: number             // default 6
 *  - title?: string             // default "Top ambassadors"
 *  - apiBase?: string           // default env or https://ref-data.voice-vpn.com
 *  - className?: string
 */
export default function RefLeaderboard({
  region = 'global',
  currentRefId,
  items,
  limit = 6,
  title = 'Top ambassadors',
  apiBase = process.env.NEXT_PUBLIC_REF_API_BASE || 'https://ref-data.voice-vpn.com',
  className = '',
}) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  const shouldFetch = !items;

  useEffect(() => {
    if (!shouldFetch) return;
    let on = true;
    const url = `${apiBase}/v1/leaderboard?region=${encodeURIComponent(region)}&limit=${limit}`;
    fetch(url, { cache: 'no-store' })
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        if (on) setData(j);
      })
      .catch((e) => on && setErr(e.message || 'Failed to load'));
    return () => {
      on = false;
    };
  }, [apiBase, limit, region, shouldFetch]);

  const list = useMemo(() => {
    const src = items || data?.items || [];
    return src
      .filter((it) => (currentRefId ? !it.href.endsWith(`/${currentRefId}`) : true))
      .slice(0, limit);
  }, [items, data, limit, currentRefId]);

  if (err) {
    return (
      <section className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}>
        <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-gray-400">Couldn’t load leaderboard.</p>
      </section>
    );
  }

  const isLoading = shouldFetch && !data;

  return (
    <section className={`bg-white/5 border border-white/10 rounded-2xl p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
        <span className="text-xs text-gray-400">{region === 'global' ? 'Global' : region.toUpperCase()}</span>
      </div>

      {isLoading ? (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="animate-pulse bg-white/5 rounded-xl p-4 h-24 border border-white/10" />
          ))}
        </div>
      ) : list.length === 0 ? (
        <p className="mt-3 text-sm text-gray-400">No ambassadors to show yet.</p>
      ) : (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((it, idx) => (
            <a
              key={idx}
              href={it.href}
              className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
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
      )}
    </section>
  );
}
