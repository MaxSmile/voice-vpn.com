import Link from "next/link";

import Features from "../_components/sections/Features";
import DownloadLink from "../_components/utils/DownloadLink";
import PlayStoreButton from "../_components/utils/PlayStoreButton";
import { releaseInfo } from "../_components/utils/releaseInfo";

export const metadata = {
  title: "Features",
  description:
    "Voice VPN features explained simply: one-tap connect, smart server selection, live speed/usage visibility, transparent credits, referrals, and in-app support.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  const highlights = [
    {
      title: "Tap to connect",
      desc: "One big button: tap once to turn protection on, tap again to turn it off—like a light switch.",
    },
    {
      title: "Smart server selection",
      desc: "Choose Automatic to pick a good server for you, or pick a place yourself when you want.",
    },
    {
      title: "Live connection visibility",
      desc: "See what’s happening while you’re connected: current speed and how much traffic is going through the VPN.",
    },
    {
      title: "Usage you can understand",
      desc: "Simple history + totals + trends, so you can see your sessions over time instead of guessing.",
    },
    {
      title: "Quick Settings tile (Android)",
      desc: "Add a button to Android Quick Settings to start/stop the VPN without opening the app.",
    },
    {
      title: "Referral sharing",
      desc: "Generate a referral link/ID to share with friends. Easy invites that are trackable and simple.",
    },
    {
      title: "Support built in",
      desc: "Send feedback and bug reports from inside the app—no need to hunt for an email address.",
    },
    {
      title: "Trust essentials",
      desc: "Quick access to Terms, Privacy Policy, EULA, and Contact—so the important stuff is easy to find.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--brand-navy)] text-white">
      <header className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <span className="font-mono">{releaseInfo.versionLabel}</span>
          <span className="text-white/30">•</span>
          <span>Features</span>
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight">
          Voice VPN — Features
        </h1>
        <p className="mt-4 text-[var(--brand-gray)] leading-relaxed max-w-3xl mx-auto">
          Built for speed, clarity, and control: one tap to connect, real-time visibility while
          you’re protected, and a transparent credit system that makes usage predictable.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <PlayStoreButton 
            className="transition-transform hover:-translate-y-1" 
            imgClass="h-[52px]" 
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
          Prefer details? See <Link className="underline hover:text-white" href="/faq">FAQ</Link> and{" "}
          <Link className="underline hover:text-white" href="/privacy">Privacy</Link>.
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Explained simply</h2>
          <p className="mt-2 text-[var(--brand-gray)]">
            Short, clear explanations (like you’re 12).
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[var(--brand-dark)] border border-white/5 p-5"
            >
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="mt-2 text-sm text-[var(--brand-gray)] leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Features />

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[var(--brand-dark)] border border-white/5 p-6">
            <h2 className="text-2xl font-bold">Transparent credits</h2>
            <p className="mt-2 text-[var(--brand-gray)] leading-relaxed">
              Credits are like game coins, but they buy time—designed to be predictable.
            </p>

            <div className="mt-5 space-y-3 text-sm text-[var(--brand-gray)]">
              <div className="flex gap-3">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                <div><span className="text-white font-medium">1 credit ≈ 30 minutes</span> of VPN time.</div>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                <div>There’s a small fixed cost <span className="text-white/90">on connect</span>, then charges apply <span className="text-white/90">as time elapses</span>.</div>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                <div>Rapid connect/disconnect actions are deduplicated to avoid accidental double-charges.</div>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-cyan)] shrink-0" />
                <div>If you run out of credits, the VPN stops automatically.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--brand-dark)] border border-white/5 p-6">
            <h2 className="text-2xl font-bold">Ways to get premium access</h2>
            <p className="mt-2 text-[var(--brand-gray)] leading-relaxed">
              Choose what fits your style.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-sm font-semibold">Earn credits</div>
                <div className="mt-1 text-sm text-[var(--brand-gray)]">
                  Rewarded ads, daily bonuses (games/quizzes links), and achievements.
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-sm font-semibold">Buy credit packs</div>
                <div className="mt-1 text-sm text-[var(--brand-gray)]">
                  One-time purchases when you don’t want to wait.
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-sm font-semibold">Subscribe</div>
                <div className="mt-1 text-sm text-[var(--brand-gray)]">
                  Unlimited connection time while your subscription is active (credits aren’t charged).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-2xl font-bold">Stats and reliability insights</h2>
          <p className="mt-2 text-[var(--brand-gray)] leading-relaxed">
            To improve reliability, the app may track operational signals like whether a connection worked or failed,
            where it got stuck, and how long it took to connect. Crash/stability diagnostics may also be collected to
            fix bugs—focused on reliability, not your browsing activity.
          </p>
          <div className="mt-4 text-sm text-[var(--brand-gray)]">
            Learn more on the <Link className="underline hover:text-white" href="/privacy">Privacy</Link> page.
          </div>
        </div>
      </section>
    </main>
  );
}
