import Image from "next/image";
import ScrollReveal from "../utils/ScrollReveal";
import DownloadLink from "../utils/DownloadLink";

export default function Hero() {
  return (
    <section className="relative w-full pt-20 pb-32 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <ScrollReveal delay={0.2} className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[var(--brand-cyan)]/20 rounded-full blur-[100px] opacity-50 animate-pulse" />
        <ScrollReveal delay={0.4} className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[var(--brand-dark)]/80 rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <ScrollReveal delay={0.1}>
            <div className="mb-8 p-1 px-3 rounded-full border border-[var(--brand-cyan)]/30 bg-[var(--brand-cyan)]/10 backdrop-blur-sm">
                <span className="text-xs font-mono text-[var(--brand-cyan)] uppercase tracking-wider">
                    v0.1.0 Available Now
                </span>
            </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Unblock the World with <br className="hidden sm:block" />
            <span className="text-gradient">Voice VPN</span>
            </h1>
        </ScrollReveal>

        {/* Subhead */}
        <ScrollReveal delay={0.3}>
            <p className="text-lg sm:text-xl text-[var(--brand-gray)] max-w-2xl mb-10 leading-relaxed">
            The lightweight, censorship-resistant VPN that blends in with normal traffic. 
            No sign-up. No tracking. Just open internet.
            </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.4} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <DownloadLink
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[var(--brand-cyan)] text-white hover:bg-opacity-90 transition-all glow-primary transform hover:-translate-y-1"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download APK
            </DownloadLink>
            <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
                Learn More
            </a>
            </div>
        </ScrollReveal>

        {/* Meta / Trust */}
        <ScrollReveal delay={0.5}>
            <div className="mt-8 flex flex-col items-center gap-3">
                <p className="text-xs text-[var(--brand-meta)]">
                    Latest version: served directly from our own infrastructure.
                </p>
                <div className="flex gap-4 opacity-80 hover:opacity-100 transition-opacity">
                    <a href='https://voice-vpn-fast-vpn-free.en.uptodown.com/android' title='Download Voice VPN - Fast VPN (Free)' target="_blank" rel="noopener noreferrer">
                        <img src='https://stc.utdstc.com/img/mediakit/download-aao-big.png' alt='Download from Uptodown' className="h-10 w-auto" />
                    </a>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
