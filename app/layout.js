// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { BASE_URL, SITE_NAME } from "./_lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Voice VPN — Censorship‑Resistant VPN (Free Android APK)",
    template: "%s — Voice VPN",
  },
  description:
    "Free, censorship‑resistant VPN for Android. No sign‑up, no activity logs, ad‑supported credits. Download the latest Voice VPN APK.",
  manifest: "/manifest.json",
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="voice-vpn.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[var(--brand-navy)] text-[var(--brand-gray)]`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
