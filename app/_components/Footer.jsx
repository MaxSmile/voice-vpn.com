

export default function Footer() {
    return (<footer className="row-start-3 text-xs text-gray-200 text-center width-full">
        <a
            href="/pad/voicevpn.xml"
            className="underline hover:text-white"
        >
            PAD file
        </a> &nbsp; v.0.1.0


        <div className="mt-4 mb-2 text-gray-400 text-xs width-full">
            <p>© {new Date().getFullYear()} <a
                href="https://vasilkoff.com/voice-vpn"
                className="hover:underline hover:text-white">Vasilkoff Ltd.</a> &nbsp; All rights reserved.
            </p>
        </div>


    </footer>
    )
}