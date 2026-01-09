// app/_components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
    return (<footer className="row-start-3 text-xs text-gray-200 text-center width-full">
        <div className="flex justify-center gap-4 mb-2">
            <Link
                href="/privacy"
                className="underline hover:text-white"
            >
                Privacy Policy
            </Link>
            <Link
                href="/terms"
                className="underline hover:text-white"
            >
                Terms of Service
            </Link>
            <a
                href="/pad/voicevpn.xml"
                className="underline hover:text-white"
            >
                PAD file
            </a>
        </div>
        <p className="text-gray-400">v.0.1.0</p>

        <div className="mt-4 mb-2 text-gray-400 text-xs width-full">
            <p>© {new Date().getFullYear()} <a
                href="https://vasilkoff.com/voice-vpn"
                className="hover:underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
            >Vasilkoff Ltd.</a> &nbsp; All rights reserved.
            </p>
        </div>


    </footer>
    )
}