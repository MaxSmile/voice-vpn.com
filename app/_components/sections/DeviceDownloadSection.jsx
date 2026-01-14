// app/_components/sections/DeviceDownloadSection.jsx
export default function DeviceDownloadSection() {
  return (
    <section id="download" className="py-16 bg-[var(--brand-navy)]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Download Voice VPN
        </h2>
        <p className="mt-2 text-[var(--brand-gray)] text-center">
          Android is available now. iOS and desktop apps are coming soon.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Android */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-lg font-semibold text-white mb-1">Android</h3>
            <p className="text-sm text-gray-300 mb-4">
              Install from the official APK link, Uptodown, or Google Play.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://apk.voicevpn.top/latest.apk"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-cyan)] px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-90 transition-all"
              >
                Download APK (direct)
              </a>
              <a
                href="https://voice-vpn-fast-vpn-free.en.uptodown.com/android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10 transition"
              >
                Uptodown
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.fast.voicevpn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10 transition"
              >
                Google Play
              </a>
            </div>
          </div>

          {/* iOS */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-lg font-semibold text-white mb-1">iOS</h3>
            <p className="text-sm text-gray-300 mb-4">Coming soon.</p>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/40 ring-1 ring-white/10 cursor-not-allowed"
              aria-disabled="true"
            >
              App Store (soon)
            </button>
          </div>

          {/* macOS */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-base font-semibold text-white mb-1">macOS</h3>
            <p className="text-sm text-gray-300 mb-4">Coming soon.</p>
            <button
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/40 ring-1 ring-white/10 cursor-not-allowed"
              disabled
            >
              Download (soon)
            </button>
          </div>

          {/* Windows */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-base font-semibold text-white mb-1">Windows</h3>
            <p className="text-sm text-gray-300 mb-4">Coming soon.</p>
            <button
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/40 ring-1 ring-white/10 cursor-not-allowed"
              disabled
            >
              Download (soon)
            </button>
          </div>

          {/* Linux */}
          <div className="glass-card rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-base font-semibold text-white mb-1">Linux</h3>
            <p className="text-sm text-gray-300 mb-4">Coming soon.</p>
            <button
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/40 ring-1 ring-white/10 cursor-not-allowed"
              disabled
            >
              Download (soon)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
