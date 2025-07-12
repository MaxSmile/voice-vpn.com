import Image from "next/image";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 gap-12 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundColor: "#0B1426" }}
    >
      <main className="flex flex-col items-center text-center gap-6 row-start-2 max-w-xl">
        <Image
          src="/voice-vpn.svg"
          alt="Voice VPN app"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Voice VPN</h1>
        <p className="text-sm sm:text-base text-gray-300">
          Free, censorship-resistant VPN powered by a simple credit system. No sign-up. No tracking. Built for users who need privacy and unrestricted access worldwide.
        </p>
        <a
          href="https://apk.voicevpn.top/latest.apk"
          className="mt-4 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Download Latest APK
        </a>
        <p className="text-xs text-gray-400 mt-2">
          Latest version: served directly from our own infrastructure.
        </p>
        <div className="flex gap-4">
          <a href='https://voice-vpn-fast-vpn-free.en.uptodown.com/android' title='Download Voice VPN - Fast VPN (Free)' >
            <img src='https://stc.utdstc.com/img/mediakit/download-aao-big.png' alt='Download Voice VPN - Fast VPN (Free)' /></a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
