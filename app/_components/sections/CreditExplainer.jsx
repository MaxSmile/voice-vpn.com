// app/_components/sections/CreditExplainer.jsx
// Static, no props. All copy and values are hardcoded here.

export default function CreditExplainer() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-white">How credits work</h2>

          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            Credits power your connection time. You only spend credits while connected, and you can
            earn more by watching short ads. No subscriptions, no accounts.
          </p>

          {/* Stat tiles */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-[11px] uppercase tracking-wide text-gray-400">Start session</div>
              <div className="mt-1 text-base font-semibold text-white">2 credits</div>
              <div className="text-xs text-gray-400 mt-0.5">to connect</div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-[11px] uppercase tracking-wide text-gray-400">Active use</div>
              <div className="mt-1 text-base font-semibold text-white">1 / 30 min</div>
              <div className="text-xs text-gray-400 mt-0.5">while connected</div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-[11px] uppercase tracking-wide text-gray-400">Earn per ad</div>
              <div className="mt-1 text-base font-semibold text-white">4 credits</div>
              <div className="text-xs text-gray-400 mt-0.5">optional top-up</div>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-[11px] uppercase tracking-wide text-gray-400">First connect bonus</div>
              <div className="mt-1 text-base font-semibold text-white">Varies</div>
              <div className="text-xs text-gray-400 mt-0.5">via invites or promos</div>
            </div>
          </div>

          {/* Notes */}
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 text-white/80" fill="currentColor" aria-hidden>
                <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 6.543-6.543a1 1 0 0 1 1.414 0z" />
              </svg>
              <span className="text-sm text-gray-200">Credits are only used while connected.</span>
            </li>
            <li className="flex items-start gap-2">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 text-white/80" fill="currentColor" aria-hidden>
                <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 6.543-6.543a1 1 0 0 1 1.414 0z" />
              </svg>
              <span className="text-sm text-gray-200">Pause or disconnect any time to conserve credits.</span>
            </li>
            <li className="flex items-start gap-2">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 text-white/80" fill="currentColor" aria-hidden>
                <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 6.543-6.543a1 1 0 0 1 1.414 0z" />
              </svg>
              <span className="text-sm text-gray-200">Ads are optional; top up when you need to.</span>
            </li>
          </ul>
        </div>

        {/* Optional static UI mock (leave empty or swap in an asset later) */}
        {/* <div className="md:w-56 shrink-0">
          <img
            src="/images/credits-preview.png"
            alt="Credits UI preview"
            className="w-full h-auto rounded-xl ring-1 ring-white/10"
            loading="lazy"
          />
          <p className="mt-2 text-[11px] text-gray-400">Example app screen</p>
        </div> */}
      </div>
    </section>
  );
}
