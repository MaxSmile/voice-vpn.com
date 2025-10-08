// app/_components/Header.jsx
export default function Header() {
    return (<header className="row-start-1 text-center py-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Voice VPN</h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto mt-2">
            Free, censorship-resistant VPN powered by a simple credit system. No sign-up. No tracking. Built for users who need privacy and unrestricted access worldwide.
        </p>
        <a
            href="https://apk.voicevpn.top/latest.apk"
            className="mt-4 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition inline-block"
        >
            Download Latest APK
        </a>
        <p className="text-xs text-gray-400 mt-2">
            Latest version: served directly from our own infrastructure.
        </p>
        <div className="flex gap-4 justify-center mt-4">
            <a href='https://voice-vpn-fast-vpn-free.en.uptodown.com/android' title='Download Voice VPN - Fast VPN (Free)' >
                <img src='https://stc.utdstc.com/img/mediakit/download-aao-big.png' alt='Download Voice VPN - Fast VPN (Free)' /></a>
        </div>
    </header>
    )
}