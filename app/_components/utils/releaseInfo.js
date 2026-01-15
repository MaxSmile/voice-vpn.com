import releases from "@/public/releases.json";
import { PLAY_STORE_URL, UPTODOWN_URL, FALLBACK_APK_URL } from "./constants";
import PlayStoreButton from "./PlayStoreButton";

const latestRelease = releases?.[0] || {};
const versionRaw = latestRelease.version || "Latest build";
const versionBase = versionRaw.split("+")[0] || versionRaw;
const versionLabel = versionBase.startsWith("v") ? versionBase : `v${versionBase}`;

export const releaseInfo = {
  latest: latestRelease,
  versionRaw,
  version: versionBase,
  versionLabel,
  date: latestRelease.date || "",
  notes: latestRelease.notes || "",
  apkUrl: latestRelease.apk || FALLBACK_APK_URL,
  playUrl: PLAY_STORE_URL,
  uptodownUrl: UPTODOWN_URL,
};

export function ReleaseBadge({ className = "", href = "#latest-version" }) {
  return (
    <div className={`p-2 ${className}`}>
      <a
        href={href}
        className={`p-2 px-3 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/10 backdrop-blur-sm`}
      >
        <span className="text-xs font-mono text-[var(--brand-cyan)] uppercase tracking-wider">
          {releaseInfo.versionLabel} Available Now
        </span>
      </a>
    </div>
  );
}

export function ReleaseSummary({ className = "" }) {
  const firstLine = releaseInfo.notes?.split("\n")?.[0] || "";
  return (
    <div className={`text-xs text-[var(--brand-meta)] space-y-1 ${className}`}>
      <div>Latest: {releaseInfo.versionLabel}{releaseInfo.date ? ` • ${releaseInfo.date}` : ""}</div>
      {firstLine && <div className="text-[var(--brand-gray)]">{firstLine}</div>}
    </div>
  );
}

export function LatestReleaseNotes({
  className = "",
  id = "latest-version",
  showLinks = true,
  showHeader = true,
}) {
  const items = String(releaseInfo.notes || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[•*-]\s*/, ""));

  return (
    <section id={id} className={className} aria-labelledby={`${id}-title`}>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        {showHeader && (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id={`${id}-title`} className="text-lg sm:text-xl font-semibold text-white">
              Latest version: {releaseInfo.versionLabel}
            </h2>
            {releaseInfo.date && (
              <div className="text-xs text-[var(--brand-meta)]">{releaseInfo.date}</div>
            )}
          </div>
        )}

        {items.length ? (
          <ul className={`space-y-2 text-sm text-[var(--brand-gray)] leading-relaxed ${showHeader ? "mt-4" : ""}`}>
            {items.map((text, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-[var(--brand-gray)]">Release notes are not available.</p>
        )}

        {showLinks && (
          <div className="mt-5 flex flex-wrap gap-2">
            <PlayStoreButton imgClass="h-[36px]" />
            <a
              href={releaseInfo.apkUrl}
              className="inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-all"
            >
              APK (direct)
            </a>
            <a
              href={releaseInfo.uptodownUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/0 border border-white/10 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/5 transition-all"
            >
              Uptodown
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
