// app/r/page.jsx
import DeviceDownloadSection from "../_components/sections/DeviceDownloadSection";

export const metadata = {
    title: "Referrals",
    description:
        "Referral links for Voice VPN. Download the app and claim invites directly from trusted members.",
    alternates: { canonical: "/r" },
};

export default function RPage() {
    return (
        <main className="min-h-screen bg-[var(--brand-navy)]">
            <header className="max-w-4xl mx-auto px-6 pt-14 pb-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Referrals</h1>
                <p className="text-[var(--brand-gray)] leading-relaxed">
                    If someone shared a Voice VPN referral, open their link to see details and claim
                    any available perks. Prefer installing first? Use the official download below.
                </p>
            </header>

            <DeviceDownloadSection />
        </main>
    );
}
