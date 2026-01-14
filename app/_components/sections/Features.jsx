import ScrollReveal from "../utils/ScrollReveal";

export default function Features() {
  const features = [
    {
      title: "Censorship Resistant",
      desc: "Built on the XRay Reality protocol to bypass Deep Packet Inspection (DPI) in restrictive regions like the UAE, China, and Iran. We blend in with normal web traffic.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Privacy First",
      desc: "No email required. No phone number. No logs. We don't know who you are, and we can't track your activity even if we wanted to.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
      ),
    },
    {
      title: "Fair Credit System",
      desc: "Why pay monthly subscriptions? Earn time by watching simple ads. High-speed access accessible to everyone, everywhere, for free.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-[var(--brand-navy)]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Engineered for <span className="text-[var(--brand-cyan)]">Freedom</span>
            </h2>
            <p className="text-[var(--brand-gray)] max-w-2xl mx-auto">
              Advanced technology meets simple usability. Voice VPN is built to keep you connected when others fail.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div
                className="group relative p-8 h-full rounded-2xl bg-[var(--brand-dark)] border border-white/5 hover:border-[var(--brand-cyan)]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl rounded-2xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-cyan)]/10 flex items-center justify-center text-[var(--brand-cyan)] mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-cyan)] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-[var(--brand-gray)] leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
