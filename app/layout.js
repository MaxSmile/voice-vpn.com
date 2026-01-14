// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://voice-vpn.com"),
  title: {
    default: "Voice VPN — Censorship‑Resistant VPN (Free Android APK)",
    template: "%s — Voice VPN",
  },
  description:
    "Free, censorship‑resistant VPN for Android. No sign‑up, no activity logs, ad‑supported credits. Download the latest Voice VPN APK.",
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  openGraph: {
    title: "Voice VPN — Censorship‑Resistant VPN (Free Android APK)",
    description:
      "Free, censorship‑resistant VPN for Android. No sign‑up, no activity logs, ad‑supported credits. Download the latest Voice VPN APK.",
    url: "/",
    siteName: "Voice VPN",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/voice-vpn-og.png",
        width: 1200,
        height: 630,
        alt: "Voice VPN — censorship‑resistant VPN for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice VPN — Censorship‑Resistant VPN (Free Android APK)",
    description:
      "Free, censorship‑resistant VPN for Android. No sign‑up, no activity logs, ad‑supported credits. Download the latest Voice VPN APK.",
    images: ["/og/voice-vpn-og.png"],
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
