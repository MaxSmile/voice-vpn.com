import Image from 'next/image';
import ScrollReveal from "../utils/ScrollReveal";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Finally a VPN that actually works for WhatsApp calls here in Dubai. Tried everything else, this is the only one that doesn't disconnect every 5 minutes.",
      author: "Ahmed K.",
      role: "Digital Nomad",
      location: "UAE"
    },
    {
      text: "I love that I don't need to register. Just download the APK and it works. The credit system is fair, no subscription traps.",
      author: "Elena R.",
      role: "Journalist",
      location: "China"
    },
    {
      text: "The connection speed is surprisingly good for a free service. Invisible to DPI filters which is huge for my line of work.",
      author: "Michael T.",
      role: "Expat",
      location: "Iran"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[var(--brand-navy)] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[var(--brand-dark)] rounded-full blur-[100px] opacity-40" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Trusted where it <span className="text-[var(--brand-cyan)]">Matters</span>
            </h2>
            <p className="text-[var(--brand-gray)] max-w-2xl mx-auto">
              Real users bypassing censorship in the toughest regions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="glass-card p-8 rounded-2xl md:hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-6 text-[var(--brand-cyan)]">
                  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-cyan)] to-[var(--brand-dark)] flex items-center justify-center text-white font-bold text-sm">
                      {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{t.author}</h4>
                    <p className="text-xs text-[var(--brand-meta)]">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
