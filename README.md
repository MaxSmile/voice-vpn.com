# Voice VPN - Landing Page

Official landing page for Voice VPN - a lightweight, ad-supported VPN that works even in censored countries.

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaxSmile/voice-vpn.com.git
   cd voice-vpn.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration if needed.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Building for Production

```bash
npm run build
npm start
```

### Environment Variables

See `.env.example` for available configuration options.

Required variables:
- `NEXT_PUBLIC_REF_API_BASE` - Base URL for referral data API (default: https://ref-data.voice-vpn.com)

### Technology Stack

- **Framework**: Next.js 15.5.9
- **React**: 19.0.0
- **Styling**: Tailwind CSS 4.x
- **Language**: JavaScript (JSX)

### Project Structure

```
voice-vpn.com/
├── app/                      # Next.js app directory
│   ├── _components/          # Reusable components
│   │   └── sections/         # Section components
│   ├── r/                    # Referral pages
│   ├── layout.js             # Root layout
│   ├── page.jsx              # Home page
│   └── globals.css           # Global styles
├── public/                   # Static assets
│   ├── releases.json         # App release history
│   └── pad/                  # PAD files
└── package.json              # Dependencies and scripts
```

## About Voice VPN

Voice VPN is a secure, ad-supported VPN service with:
- No tracking
- No activity logs
- No subscriptions
- Works in censored countries (UAE, etc.)
- Free credit-based system

Read more: [Building a VPN That Survives Censorship in the UAE](https://dev.to/maximvasilkov/voice-vpn-what-it-takes-to-build-a-vpn-that-survives-censorship-in-the-uae-2je)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Build and test: `npm run build`
6. Submit a pull request

## License

Copyright © Vasilkoff Ltd. All rights reserved.

## Links

- [Download on Google Play](https://play.google.com/store/apps/details?id=com.fast.voicevpn)
- [Download from Uptodown](https://voice-vpn-fast-vpn-free.en.uptodown.com/android)
- [Direct APK](https://apk.voicevpn.top/latest.apk)
