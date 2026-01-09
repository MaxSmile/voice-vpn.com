// app/_components/sections/DeviceCtaCard.jsx
'use client';
import { useMemo, useState } from 'react';
import QRCode from 'react-qr-code';

function detectPlatform() {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || '';
  if (/Android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  return 'desktop';
}

export default function DeviceCtaCard({
  refId,
  shareUrl, // e.g. `https://voice-vpn.com/r/${refId}` for QR
  notSure = false,
  playUrl = 'https://play.google.com/store/apps/details?id=com.fast.voicevpn',
  uptodownUrl = 'https://voice-vpn-fast-vpn-free.en.uptodown.com/android',
  apkUrl = 'https://apk.voicevpn.top/latest.apk',
  iosWaitlistUrl = '/ios-waitlist', // or mailto:
}) {
  const [override, setOverride] = useState('');
  const platform = useMemo(() => override || detectPlatform(), [override]);

  const deepLink = refId ? `voicevpn://claim?ref=${refId}` : 'voicevpn://open';
  const storeUrl = platform === 'android' ? playUrl : iosWaitlistUrl;

  const onOpenInstall = () => {
    // Try deep link, then fallback to store after 800ms.
    const t = Date.now();
    window.location.href = deepLink;
    setTimeout(() => {
      // If still here after ~800ms, go to store
      if (Date.now() - t < 1800) window.location.href = storeUrl;
    }, 800);
  };

  return (
    <section className="w-full">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 text-white">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-semibold">Get Voice VPN</h2>
          {notSure && (
            <div className="text-xs">
              <label className="mr-2 text-gray-300">Device</label>
              <select
                className="bg-white/10 border border-white/10 rounded-md px-2 py-1"
                value={override}
                onChange={(e) => setOverride(e.target.value)}
              >
                <option value="">Auto</option>
                <option value="android">Android</option>
                <option value="ios">iOS</option>
                <option value="desktop">Desktop</option>
              </select>
            </div>
          )}
        </div>

        {/* Main message */}
        <p className="mt-2 text-sm text-gray-300">
          {platform === 'android' && 'Install from Google Play or download the APK.'}
          {platform === 'ios' && 'iOS is under review. You can join the waitlist.'}
          {platform === 'desktop' && 'Scan the QR to open on your phone, or use the links below.'}
        </p>

        {/* Primary CTA row */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
          {platform === 'android' && (
            <>
              <button
                onClick={onOpenInstall}
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-200 transition"
              >
                Open / Install
              </button>
              <a
                href={playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                Google Play
              </a>
              <a
                href={apkUrl}
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                APK (direct)
              </a>
              <a
                href={uptodownUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                Uptodown
              </a>
            </>
          )}

          {platform === 'ios' && (
            <>
              <button
                onClick={onOpenInstall}
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-200 transition"
              >
                Open App
              </button>
              <a
                href={iosWaitlistUrl}
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                Join iOS Waitlist
              </a>
            </>
          )}

          {platform === 'desktop' && (
            <>
              <a
                href={playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-200 transition"
              >
                Google Play
              </a>
              <a
                href={apkUrl}
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                APK (direct)
              </a>
              <a
                href={uptodownUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                Uptodown
              </a>
            </>
          )}
        </div>

        {/* QR (desktop only) */}
        {shareUrl && platform === 'desktop' && (
          <div className="mt-5 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-white">
              <QRCode value={shareUrl} size={120} level="M" aria-label="Scan to open" />
            </div>
            <div className="text-xs text-gray-400">
              Scan with your phone camera to open this page. It will route to app or store.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
