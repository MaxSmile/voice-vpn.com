import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = path.resolve(import.meta.dirname, "..");
const iconSvg = await readFile(path.join(rootDir, "public", "voice-vpn.svg"), "utf8");
const outDir = path.join(rootDir, "public", "og-images");

const pages = [
  {
    file: "home.jpg",
    label: "VOICE VPN",
    title: "Secure VPN for Android",
    subtitle: "Private, fast connections with no account required.",
  },
  {
    file: "downloads.jpg",
    label: "DOWNLOADS",
    title: "Get Voice VPN",
    subtitle: "Official Google Play and direct APK downloads.",
  },
  {
    file: "features.jpg",
    label: "FEATURES",
    title: "One-tap protection",
    subtitle: "Smart selection, live speed, and transparent credits.",
  },
  {
    file: "faq.jpg",
    label: "FAQ",
    title: "Clear VPN answers",
    subtitle: "How Voice VPN works, what it protects, and what to expect.",
  },
  {
    file: "privacy.jpg",
    label: "PRIVACY",
    title: "Built to minimize data",
    subtitle: "No account required and no deliberate browsing activity logs.",
  },
  {
    file: "security-manifesto.jpg",
    label: "SECURITY",
    title: "Security manifesto",
    subtitle: "Practical privacy and transparent tradeoffs.",
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function backgroundSvg({ label, title, subtitle }) {
  return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#061B32"/>
          <stop offset="0.52" stop-color="#0A2746"/>
          <stop offset="1" stop-color="#03111F"/>
        </linearGradient>
        <radialGradient id="glow" cx="74%" cy="28%" r="56%">
          <stop offset="0" stop-color="#21A9F7" stop-opacity="0.34"/>
          <stop offset="0.44" stop-color="#21A9F7" stop-opacity="0.12"/>
          <stop offset="1" stop-color="#21A9F7" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#000814" flood-opacity="0.42"/>
        </filter>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <rect width="1200" height="630" fill="url(#glow)"/>
      <path d="M0 476 C164 412 300 421 441 503 C615 604 762 603 944 517 C1040 472 1127 457 1200 469 L1200 630 L0 630 Z" fill="#0D3357" opacity="0.58"/>
      <path d="M0 536 C162 482 298 491 445 560 C616 641 767 638 936 570 C1041 528 1132 517 1200 529 L1200 630 L0 630 Z" fill="#21A9F7" opacity="0.16"/>
      <g transform="translate(74 80)">
        <text x="0" y="0" dominant-baseline="hanging" fill="#78D6FF" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="800" letter-spacing="5">${escapeXml(label)}</text>
        <text x="0" y="100" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="62" font-weight="850">${escapeXml(title)}</text>
        <text x="4" y="178" fill="#C5D5E5" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="500">${escapeXml(subtitle)}</text>
        <g transform="translate(0 336)">
          <rect x="0" y="0" width="196" height="46" rx="12" fill="#21A9F7"/>
          <text x="98" y="29" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800">voice-vpn.com</text>
          <rect x="218" y="0" width="182" height="46" rx="12" fill="#FFFFFF" opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.16"/>
          <text x="309" y="29" text-anchor="middle" fill="#DDEAF5" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="700">Free Android VPN</text>
        </g>
      </g>
      <g filter="url(#shadow)">
        <rect x="858" y="102" width="286" height="286" rx="64" fill="#061B32" opacity="0.52"/>
      </g>
    </svg>
  `;
}

async function renderImage(page) {
  const icon = await sharp(Buffer.from(iconSvg)).resize(250, 250).png().toBuffer();
  const background = await sharp(Buffer.from(backgroundSvg(page)))
    .composite([{ input: icon, left: 876, top: 120 }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  await writeFile(path.join(outDir, page.file), background);
}

await Promise.all(pages.map(renderImage));
