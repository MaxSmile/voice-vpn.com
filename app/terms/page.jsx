import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Voice VPN',
  description: 'Terms of Service for Voice VPN by Vasilkoff Ltd. Read the terms and conditions for using our VPN service.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-block mb-6 text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: January 9, 2026</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By downloading, installing, or using Voice VPN ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, do not use the Service.
            </p>
            <p className="text-gray-300">
              The Service is provided by Vasilkoff Ltd ("we", "us", or "our"), and these Terms constitute a legal agreement 
              between you and Vasilkoff Ltd.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              Voice VPN is a free, ad-supported Virtual Private Network (VPN) service that provides:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Encrypted internet connection</li>
              <li>Privacy protection while browsing</li>
              <li>Access to content without geographical restrictions</li>
              <li>Credit-based usage system</li>
              <li>No subscription fees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Credit System</h2>
            <p className="text-gray-300 mb-4">
              Voice VPN operates on a credit-based system:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Connecting to the VPN costs 2 credits</li>
              <li>Ongoing connection costs 1 credit per 30 minutes</li>
              <li>You can earn credits by watching advertisements</li>
              <li>Watching one ad earns approximately 4 credits</li>
              <li>Credits are stored locally on your device</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We reserve the right to modify the credit system, including costs and earning rates, at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use Policy</h2>
            <h3 className="text-xl font-semibold text-white mb-3">You agree NOT to use the Service to:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Engage in any illegal activities or violate any laws</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Launch attacks on networks, servers, or other infrastructure</li>
              <li>Spam, phish, or engage in fraudulent activities</li>
              <li>Harass, threaten, or harm others</li>
              <li>Infringe on intellectual property rights</li>
              <li>Share your account or credits with others for commercial purposes</li>
              <li>Attempt to circumvent the credit system or other service limitations</li>
              <li>Reverse engineer, decompile, or attempt to extract source code</li>
            </ul>
            <p className="text-gray-300">
              <strong className="text-white">Violation of this policy may result in immediate termination of your access to the Service.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy</h2>
            <p className="text-gray-300">
              Your privacy is important to us. Please review our{' '}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>{' '}
              to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Advertising</h2>
            <p className="text-gray-300 mb-4">
              Voice VPN is ad-supported. By using the Service, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Advertisements will be displayed within the app</li>
              <li>You may need to watch ads to earn credits</li>
              <li>Third-party advertisers may collect data as described in their privacy policies</li>
              <li>We are not responsible for the content of third-party advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Service Availability</h2>
            <p className="text-gray-300 mb-4">
              We strive to provide reliable service, but we cannot guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Uninterrupted or error-free operation</li>
              <li>Availability in all countries or regions</li>
              <li>Compatibility with all devices or networks</li>
              <li>Specific connection speeds or performance levels</li>
            </ul>
            <p className="text-gray-300">
              We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. No Account Required</h2>
            <p className="text-gray-300">
              Voice VPN does not require user registration or account creation. The Service is designed to work 
              immediately upon installation without collecting personal identification information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-300 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Complete security or privacy</li>
            </ul>
            <p className="text-gray-300">
              While we implement strong security measures, no system is completely secure. You use the Service at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VASILKOFF LTD SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, use, or other intangible losses</li>
              <li>Damages resulting from your use or inability to use the Service</li>
              <li>Unauthorized access to your device or data</li>
              <li>Actions or content of third parties</li>
            </ul>
            <p className="text-gray-300">
              Our total liability to you for all claims shall not exceed the amount you paid us in the past 12 months (which is $0 for free users).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold harmless Vasilkoff Ltd, its officers, directors, employees, and agents from any claims, 
              damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Referral Program</h2>
            <p className="text-gray-300 mb-4">
              Voice VPN may offer a referral program. If you participate:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You may share your referral code with others</li>
              <li>Referral rewards are subject to change</li>
              <li>Fraudulent referral activity will result in forfeiture of rewards and potential account termination</li>
              <li>We reserve the right to modify or discontinue the referral program at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Modifications to Terms</h2>
            <p className="text-gray-300">
              We may modify these Terms at any time. If we make material changes, we will notify you through the app 
              or by updating the "Last updated" date. Continued use of the Service after changes constitutes acceptance 
              of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">14. Termination</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Suspend or terminate your access to the Service at any time</li>
              <li>Remove or disable access from any device</li>
              <li>Delete any data associated with your use</li>
            </ul>
            <p className="text-gray-300">
              You may stop using the Service at any time by uninstalling the app from your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">15. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where 
              Vasilkoff Ltd is registered, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">16. Dispute Resolution</h2>
            <p className="text-gray-300">
              Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration, 
              except where prohibited by law. You waive any right to participate in class action lawsuits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">17. Severability</h2>
            <p className="text-gray-300">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">18. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about these Terms, please contact:
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-white font-semibold">Vasilkoff Ltd</p>
              <p className="text-gray-300">Email: support@voice-vpn.com</p>
              <p className="text-gray-300">Website: https://voice-vpn.com</p>
            </div>
          </section>

          <section className="mb-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <p className="text-gray-300">
              <strong className="text-white">By using Voice VPN, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
