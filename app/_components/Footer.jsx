import Image from "next/image";
import Link from "next/link";
import DownloadLink from "./utils/DownloadLink";
import { releaseInfo } from "./utils/releaseInfo";
import CyanButton from "./utils/CyanButton";

export default function Footer() {
    return (
        <footer className="bg-[#051E37] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Col 1: Brand */}
                <div className="col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                         <Image
                            src="/voice-vpn.svg"
                            alt="Voice VPN Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        <span className="text-xl font-bold text-white tracking-tight">
                            Voice<span className="text-[var(--brand-cyan)]">VPN</span>
                        </span>
                    </Link>
                    <p className="text-sm text-[var(--brand-gray)] leading-relaxed">
                        The censorship-resistant VPN built for the modern free web. No tracking, no subscriptions, just connection.
                    </p>
                </div>

                {/* Col 2: Product */}
                <div>
                    <h4 className="text-white font-bold mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-[var(--brand-gray)]">
                        <li>
                            <a
                                href="/downloads"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[var(--brand-cyan)] transition-colors"
                            >
                                Download Application
                            </a>
                        </li>
                        <li><Link href="/features" className="hover:text-[var(--brand-cyan)] transition-colors">Features</Link></li>
                        <li><Link href="/faq" className="hover:text-[var(--brand-cyan)] transition-colors">FAQ</Link></li>
                        <li><a href="/pad/voicevpn.xml" className="hover:text-[var(--brand-cyan)] transition-colors">PAD File</a></li>
                    </ul>
                </div>

                 {/* Col 3: Company */}
                 <div>
                    <h4 className="text-white font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-[var(--brand-gray)]">
                        <li><a href="https://vasilkoff.com/about-us" className="hover:text-[var(--brand-cyan)] transition-colors" target="_blank">About Vasilkoff</a></li>
                        <li><a href="https://vasilkoff.com/contact-us" className="hover:text-[var(--brand-cyan)] transition-colors" target="_blank">Contact</a></li>
                        <li><Link href="/privacy" className="hover:text-[var(--brand-cyan)] transition-colors">Privacy</Link></li>
                        <li><a href="https://vasilkoff.com/privacy-policy" className="hover:text-[var(--brand-cyan)] transition-colors" target="_blank" rel="noopener noreferrer">Full Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Col 4: Stay Connected */}
                <div>
                     <h4 className="text-white font-bold mb-4">Stay Connected</h4>
                     <p className="text-sm text-[var(--brand-gray)] mb-4">
                        Have questions or feedback? Reach out to the team at Vasilkoff Ltd.
                     </p>
                     <CyanButton
                        href="https://vasilkoff.com/contact-us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-sm font-medium"
                     >
                        Contact Us
                     </CyanButton>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center">
                 <p className="text-xs text-[var(--brand-meta)]">
                    © {new Date().getFullYear()} <a href="https://vasilkoff.com" className="hover:text-white transition-colors">Vasilkoff Ltd</a>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
