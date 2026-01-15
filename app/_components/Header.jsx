"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DownloadLink from "./utils/DownloadLink";
import CyanButton from "./utils/CyanButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 sm:px-8 border-b border-white/5 bg-[#0B1426]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <Image
            src="/voice-vpn.svg"
            alt="Voice VPN Logo"
            width={32}
            height={32}
            className="w-8 h-8 transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-bold text-white tracking-tight">
            Voice<span className="text-[var(--brand-cyan)]">VPN</span>
          </span>
        </Link>

        {/* Desktop Navigation Center */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--brand-gray)]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <a href="/pad/voicevpn.xml" className="hover:text-white transition-colors">PAD</a>
        </div>

        {/* Desktop CTA Right */}
        <div className="hidden md:flex items-center gap-4">
          <CyanButton
            as={DownloadLink}
            href="/downloads"
            className="px-5 py-2 rounded-lg text-sm font-semibold shadow-[0_0_20px_-5px_rgba(33,169,247,0.5)] hover:shadow-[0_0_25px_-5px_rgba(33,169,247,0.7)]"
          >
            Downloads
          </CyanButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 relative p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-[#0B1426] flex flex-col items-center justify-center gap-8 md:hidden z-40"
            >
              <div className="flex flex-col items-center gap-6 text-xl font-medium text-[var(--brand-gray)]">
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy
                </Link>
                 <a
                    href="/pad/voicevpn.xml"
                    className="hover:text-white transition-colors"
                     onClick={() => setIsOpen(false)}
                 >
                     PAD File
                 </a>
              </div>

              <div className="mt-4">
                <CyanButton
                  as={DownloadLink}
                  href="/downloads"
                  className="px-8 py-3 rounded-lg text-base font-semibold shadow-[0_0_20px_-5px_rgba(33,169,247,0.5)]"
                  onClick={() => setIsOpen(false)}
                >
                  Download APK
                </CyanButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
