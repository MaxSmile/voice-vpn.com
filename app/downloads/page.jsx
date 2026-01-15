import Link from "next/link";

import DownloadLink from "../_components/utils/DownloadLink";
import PlayStoreButton from "../_components/utils/PlayStoreButton";
import CyanButton from "../_components/utils/CyanButton";
import { LatestReleaseNotes, releaseInfo } from "../_components/utils/releaseInfo";

export const metadata = {
  title: "Downloads",
  description:
    "Download Voice VPN from Google Play or direct APK, read release notes, join the Telegram support group, and view the product roadmap.",
  alternates: { canonical: "/downloads" },
};

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-navy)] text-white">
      <header className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Downloads</h1>
        <p className="mt-4 text-[var(--brand-gray)] leading-relaxed max-w-3xl mx-auto">
          Get the app from the official sources, read what changed in the latest version, and join
          the community for updates and support.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PlayStoreButton 
            className="transition-transform hover:-translate-y-1" 
            imgClass="h-[60px]" 
          />
          <DownloadLink className="inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all w-full sm:w-auto">
            Download APK (direct)
          </DownloadLink>
          <a
            href={releaseInfo.uptodownUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/0 border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition-all w-full sm:w-auto"
          >
            Uptodown
          </a>
        </div>

        <div className="mt-4 text-xs text-[var(--brand-meta)]">
          Prefer details? See <Link className="underline hover:text-white" href="/features">Features</Link> and{" "}
          <Link className="underline hover:text-white" href="/faq">FAQ</Link>.
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--brand-meta)]">
              Release notes
            </div>
            <h2 className="mt-2 text-2xl font-bold">What&apos;s new in {releaseInfo.versionLabel}</h2>
            <p className="mt-2 text-sm text-[var(--brand-gray)]">
              Highlights from the latest build, focused on stability and speed.
            </p>
          </div>
          {releaseInfo.date && (
            <div className="text-xs text-[var(--brand-meta)]">Updated {releaseInfo.date}</div>
          )}
        </div>
        <LatestReleaseNotes showLinks={false} showHeader={false} />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-2xl font-bold">Telegram support group</h2>
          <p className="mt-2 text-[var(--brand-gray)] leading-relaxed">
            Join <span className="text-white font-medium">@voicevpnapp</span> to get update announcements.
            In the comments you can communicate with the developer to resolve issues or ask questions.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <CyanButton
              href="https://t.me/voicevpnapp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 text-sm font-semibold w-full sm:w-auto"
            >
              Open Telegram: @voicevpnapp
            </CyanButton>
            <div className="text-xs text-[var(--brand-meta)] self-center">
              Link:{" "}
              <a className="underline hover:text-white" href="https://t.me/voicevpnapp" target="_blank" rel="noopener noreferrer">
                https://t.me/voicevpnapp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <p className="mt-2 text-[var(--brand-gray)] leading-relaxed">
            High-level milestones for bringing Voice VPN to more platforms.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="text-sm font-semibold">Android</div>
              <div className="mt-1 text-sm text-[var(--brand-gray)]">
                Available now via Google Play and direct APK.
              </div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="text-sm font-semibold">iOS</div>
              <div className="mt-1 text-sm text-[var(--brand-gray)]">
                In progress. App Store review and platform readiness steps are underway.
              </div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="text-sm font-semibold">Windows</div>
              <div className="mt-1 text-sm text-[var(--brand-gray)]">
                Planned. Desktop client with simple connect + diagnostics.
              </div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="text-sm font-semibold">macOS</div>
              <div className="mt-1 text-sm text-[var(--brand-gray)]">
                Planned. Native experience with modern VPN permissions and stability focus.
              </div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 md:col-span-2">
              <div className="text-sm font-semibold">Linux</div>
              <div className="mt-1 text-sm text-[var(--brand-gray)]">
                Planned. CLI-friendly option plus a lightweight UI where possible.
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-[var(--brand-gray)]">
            Want to influence priorities? Join the Telegram group and share what platform you need most.
          </div>
        </div>
      </section>
    </main>
  );
}
