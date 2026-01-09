// app/_components/sections/DeviceDownloadSection.jsx
export default function DeviceDownloadSection() {
  return (
    <section id="download" className="py-10 sm:py-12 bg-[#f5f7fa]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
          Download Voice VPN
        </h2>
        <p className="mt-2 text-slate-600 text-center">
          Android available now. iOS and desktop apps are coming soon.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Android */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Android</h3>
            <p className="text-sm text-slate-600 mb-3">Get it on Google Play or from Uptodown.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.fast.voicevpn"
                target="_blank" rel="noopener noreferrer"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a
                href="https://voice-vpn-fast-vpn-free.en.uptodown.com/android"
                target="_blank" rel="noopener noreferrer"
              >
                <img
                  src="https://stc.utdstc.com/img/mediakit/download-aao-big.png"
                  alt="Download from Uptodown"
                  className="h-10"
                />
              </a>
            </div>

            <div className="mt-4">
              <a
                href="https://apk.voicevpn.top/latest.apk"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Download APK (direct)
              </a>
            </div>
          </div>

          {/* iOS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">iOS</h3>
            <p className="text-sm text-slate-600 mb-3">Under App Store review. Coming soon.</p>
            <div className="flex flex-wrap items-center gap-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store (coming soon)"
                className="h-10 opacity-40 grayscale"
              />
              <button
                type="button"
                disabled
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-400 cursor-not-allowed"
                aria-disabled="true"
              >
                Notify me
              </button>
            </div>
          </div>

          {/* macOS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-base font-semibold text-slate-900 mb-1">macOS</h3>
            <p className="text-sm text-slate-600 mb-3">Coming soon.</p>
            <button
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-400 cursor-not-allowed"
              disabled
            >
              Download
            </button>
          </div>

          {/* Windows */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-base font-semibold text-slate-900 mb-1">Windows</h3>
            <p className="text-sm text-slate-600 mb-3">Coming soon.</p>
            <button
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-400 cursor-not-allowed"
              disabled
            >
              Download
            </button>
          </div>

          {/* Linux */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 h-full">
            <h3 className="text-base font-semibold text-slate-900 mb-1">Linux</h3>
            <p className="text-sm text-slate-600 mb-3">Coming soon.</p>
            <button
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-400 cursor-not-allowed"
              disabled
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
