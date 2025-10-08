// app/r/[refId]/page.jsx
import { notFound } from "next/navigation";

import RefHero from "@/app/_components/sections/RefHero";
import DeviceCtaCard from "@/app/_components/sections/DeviceCtaCard";
import MemberCard from "@/app/_components/sections/MemberCard";

// Placeholders you said you have:
import HowTo from "@/app/_components/sections/HowTo";
import RefTips from "@/app/_components/sections/RefTips";
import RefFAQ from "@/app/_components/sections/RefFAQ"; // (typo fixed from RAQ)
import RefLeaderboard from "@/app/_components/sections/RefLeaderboard";
import RefRelated from "@/app/_components/sections/RefRelated";
import TrustBar from "@/app/_components/sections/TrustBar";

const API_BASE = process.env.NEXT_PUBLIC_REF_API_BASE || "https://ref-data.voice-vpn.com";

async function fetchMember(refId) {
  const res = await fetch(`${API_BASE}/v1/members/${refId}`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  return res.json();
}

async function markdownToHtml(md) { return md; }

export async function generateStaticParams() { return []; }

// Next 15: params is a Promise
export async function generateMetadata({ params }) {
  const { refId } = await params;

  const member = await fetchMember(refId);
  if (!member) return notFound();

  const BASE_URL = "https://voice-vpn.com";
  const canonicalUrl = `${BASE_URL}/r/${refId}`;
  const pageTitle = member.title || "Voice VPN — Invite";
  const pageDescription = member.subtitle || "Fast, private, simple.";
  const memberImage = member.avatarUrl;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "Voice VPN",
      images: [{ url: memberImage, width: 800, height: 600 }],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [memberImage],
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function RefPage({ params }) {
  const { refId } = await params;
  const member = await fetchMember(refId);
  if (!member) notFound();

  const content = await markdownToHtml(member.content || "");
  const shareUrl = `https://voice-vpn.com/r/${refId}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": member.title,
    "about": {
      "@type": "SoftwareApplication",
      "name": "Voice VPN",
      "applicationCategory": "Utility",
      "operatingSystem": "Android,iOS",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": 359 }
    },
    "mainEntity": member.faq?.length
      ? {
          "@type": "FAQPage",
          "mainEntity": member.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }
      : undefined
  };

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <RefHero
        title={member.title}
        subtitle={member.subtitle}
        avatarUrl={member.avatarUrl}
        alias={member.alias}
        badges={member.badges}
        rating={member.rating}
        primaryCta={{ label: "Apply in App", href: `voicevpn://claim?ref=${refId}` }}
        secondaryCta={{ label: "Download APK", href: "https://apk.voicevpn.top/latest.apk" }}
        qrValue={shareUrl}
      />

      {/* Grid: sidebar first on mobile (MemberCard higher), right on desktop */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <aside className="order-1 md:order-2 space-y-4">
          {/* Member card (top) */}
          <MemberCard member={member} refId={refId} />

          {/* SMRT16 perk (if any) */}
          {member.smrt16?.enabled && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-sm font-semibold">SMRT16 Invite</div>
              <div className="mt-1 text-sm text-gray-300">
                Bonus minutes: {member.smrt16.perk_minutes ?? 0}
              </div>
              {member.smrt16.expires_at && (
                <div className="text-xs text-gray-400 mt-1">
                  Expires: {new Date(member.smrt16.expires_at).toDateString()}
                </div>
              )}
              <a
                href={`voicevpn://claim?ref=${refId}`}
                className="mt-3 inline-flex rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition"
              >
                Apply in App
              </a>
            </div>
          )}

          {/* Play Coins (teaser) */}
          {member.play_coins && member.play_coins.enabled === false && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-sm font-semibold">Play Coins (early access)</div>
              <div className="mt-1 text-sm text-gray-300">
                Pre-grant: {member.play_coins.pre_grant} coins
              </div>
              <a
                href={`voicevpn://claim?ref=${refId}&grant=coins&amount=${member.play_coins.pre_grant}`}
                className="mt-3 inline-flex rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/20 ring-1 ring-white/15 transition"
              >
                Reserve Coins
              </a>
            </div>
          )}

          {/* Device CTA (platform-aware, with QR on desktop) */}
          <DeviceCtaCard refId={refId} shareUrl={shareUrl} />

          {/* Trust strip */}
          <TrustBar
            ratingValue={member?.rating?.value ?? 4.8}
            ratingCount={member?.rating?.count ?? 359}
            notes={["No accounts", "No activity logs", "APK signature verified"]}
          />
        </aside>

        {/* Main content */}
        <div className="order-2 md:order-1 md:col-span-2 space-y-6">
          {/* How-to / Tips / Credits / FAQ */}
          <HowTo steps={member.contentSteps ?? []} />
          <RefTips tips={member.tips ?? []} />

          {/* Optional: raw markdown content block (kept minimal) */}
          {content && (
            <section
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          <RefFAQ items={member.faq ?? []} />
        </div>
      </div>

      {/* Full-width cross-links */}
      <div className="mt-8 space-y-6">
        <RefLeaderboard region={member.region} currentRefId={refId} />
        <RefRelated items={member.related ?? []} />
      </div>
    </main>
  );
}
