import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Voice VPN',
  description: 'Privacy Policy for Voice VPN by Vasilkoff Ltd. Learn about our commitment to user privacy and data protection.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-block mb-6 text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: January 9, 2026</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              Vasilkoff Ltd ("we", "us", or "our") operates Voice VPN, a free, ad-supported VPN service. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our service.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Our Core Commitment:</strong> Voice VPN is built on the principle of user privacy. 
              We do not track your browsing activity or maintain logs of your VPN connections.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3">Information We DO NOT Collect</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Your browsing history or activity while connected to the VPN</li>
              <li>Websites you visit or content you access</li>
              <li>DNS queries made through our service</li>
              <li>Connection logs or session data</li>
              <li>Your real IP address after the initial connection</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Information We DO Collect</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong className="text-white">App Analytics:</strong> Anonymous crash reports and app performance data to improve stability</li>
              <li><strong className="text-white">Advertising Data:</strong> Anonymous advertising IDs for serving ads (managed by our ad partners)</li>
              <li><strong className="text-white">Credit System:</strong> Credit balance and ad viewing history (stored locally on your device)</li>
              <li><strong className="text-white">Referral Data:</strong> If you use a referral code, we store the referral relationship (anonymized)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Information</h2>
            <p className="text-gray-300 mb-4">The limited information we collect is used for:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Providing and improving the VPN service</li>
              <li>Fixing bugs and crashes</li>
              <li>Serving relevant advertisements (our business model)</li>
              <li>Managing the credit-based system</li>
              <li>Processing referral rewards</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Advertising and Third Parties</h2>
            <p className="text-gray-300 mb-4">
              Voice VPN is free because we show ads. Our advertising partners may collect:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Device information (device model, OS version)</li>
              <li>Advertising ID (Google Advertising ID or similar)</li>
              <li>App usage statistics</li>
            </ul>
            <p className="text-gray-300">
              These partners have their own privacy policies. We recommend reviewing them:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Google AdMob Privacy Policy</li>
              <li>Unity Ads Privacy Policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-gray-300 mb-4">
              Since we don't collect activity logs or connection data, there's nothing to retain. 
              The minimal data we do collect (crash reports, anonymous analytics) is retained only as long as necessary 
              for debugging and improving the service, typically no more than 90 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect any data we do collect. 
              Your VPN traffic is encrypted using modern protocols, and we regularly update our security practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">Depending on your location, you may have rights including:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access to your personal data</li>
              <li>Deletion of your data</li>
              <li>Opting out of personalized advertising</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights or for privacy questions, contact us at: privacy@voice-vpn.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
            <p className="text-gray-300">
              Voice VPN is not intended for children under 13. We do not knowingly collect information from children under 13. 
              If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-300">
              Voice VPN operates globally. Any data we collect may be transferred to and processed in countries 
              where we or our service providers operate. We ensure appropriate safeguards are in place.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              For any questions about this Privacy Policy, please contact:
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-white font-semibold">Vasilkoff Ltd</p>
              <p className="text-gray-300">Email: privacy@voice-vpn.com</p>
              <p className="text-gray-300">Website: https://voice-vpn.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
