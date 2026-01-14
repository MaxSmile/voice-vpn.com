import ScrollReveal from "../utils/ScrollReveal";

export default function Stats() {
    const stats = [
      { label: "Active Users", value: "100K+" },
      { label: "Daily Connections", value: "2M+" },
      { label: "Countries Supported", value: "15+" },
      { label: "Logs Kept", value: "0" },
    ];
  
    return (
      <section className="border-y border-white/5 bg-[var(--brand-dark)]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                    </span>
                    <span className="text-sm font-medium text-[var(--brand-cyan)] uppercase tracking-wider">
                    {stat.label}
                    </span>
                </div>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }
  