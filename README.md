# voice-vpn.com
voice-vpn.com

## Landing page info list:

1. Current version - can on the top with the github icon

## Links to publish:
https://dev.to/maximvasilkov/voice-vpn-what-it-takes-to-build-a-vpn-that-survives-censorship-in-the-uae-2je
Voice VPN: What It Takes to Build a VPN That Survives Censorship in the UAE
#vpn
#censorship
#xrayreality
#free
TL;DR Most VPNs don’t work in censored countries like the UAE. They get blocked, flagged, or quietly expose the user. Here’s how we at Vasilkoff Ltd built Voice VPN — a lightweight, ad-supported VPN that survives deep packet inspection and blends in with normal traffic.





## TODO

### Design & Implementation Plan (Ryno Theme Adaptation Ref to the page which fits the ide the best https://templates.envytheme.com/ryno/solutions.html - feel free to open it any time)

To achieve the "Ryno" aesthetic (Modern SaaS, Dark AI/Tech Theme), the following roadmap is proposed:

#### 1. Design System & Global Styles
- [x] **Color Palette**: Update `globals.css` (Tailwind v4 `@theme`) to match `voice-vpn.svg` identity.
    -   **Backgrounds**: 
        -   `Brand Navy`: `#0B1426` (Current base).
        -   `Logo Dark`: `#051E37` (Use for gradients/depth).
    -   **Accents**: 
        -   `Electric Cyan`: `#21A9F7` (Primary Brand Color - derived from Logo).
        -   `Muted Graphite`: `#4F647E` (Secondary/Borders).
    -   **Text**: `White` (Headings), `#B1BBC2` (Body - Logo Gray), `#50657E` (Meta).
- [x] **Theme Strategy**: 
    -   **Default Dark**: Enforce the dark navy theme as the default experience (Ryno aesthetic).
    -   **Dark Mode Override**: Ensure `prefers-color-scheme: dark` references the Brand Navy, not generic black.
- [x] **Typography**: 
    -   Keep `Geist Sans` for body/UI.
    -   Use `Geist Mono` for tech specs/IP addresses.
- [x] **UI Effects**:
    -   **Glassmorphism**: `bg-[#051E37]/60 backdrop-blur-md` for cards.
    -   **Gradients**: Hero text gradient using `#21A9F7` to `#FFFFF`.
    -   **Glows**: `shadow-[0_0_30px_-5px_#21A9F7]` for primary CTAs.

#### 2. Component Refactoring & Creation
- [x] **Navigation (Navbar)**: 
    -   Refactor `Header.jsx` to be a pure navigation bar.
    -   **Left**: Logo (Text/Icon).
    -   **Center**: Navigation Links (Home, Features, Privacy, FAQ).
    -   **Right**: "Download" CTA button (Pill shaped, gradient border or background).
    -   *Current State*: `Header.jsx` contains hero content. Move this out.

- [x] **Hero Section (`_components/sections/RefHero.jsx` enhancement)**:
    -   **Layout**: Center aligned or Split (Left Text, Right Abstract Visual).
    -   **Content**: Large H1 with Gradient, Subtext, Dual CTAs ("Download APK", "Learn More").
    -   **Visual**: Add abstract background shapes/blobs (using CSS or SVG) behind the hero.

- [x] **Features/Solutions Grid**:
    -   Create a grid section (3 columns).
    -   **Cards**: Dark, slightly lighter than background, rounded corners (xl or 2xl), subtle border (`border-white/10`).
    -   **Content**: Icon + Title + Description.
    -   *Interactivity*: Hover effect -> Card lifts up (`-translate-y-2`), border glows.

- [x] **Stats Section**:
    -   Simple horizontal strip or grid.
    -   Big bold numbers ("100K+", "10M+"), small labels ("Active Users", "Downloads").

- [x] **Testimonials**:
    -   Grid of 2-3 review cards.
    -   Layout: Quote icon, Review text, User User Profile (Avatar + Name + Role).

- [x] **Footer (`_components/Footer.jsx`)**:
    -   Expand to multi-column layout.
    -   **Col 1**: Brand + Short bio.
    -   **Col 2**: Product Links (Download, Features).
    -   **Col 3**: Company (About, Contact).
    -   **Col 4**: Newsletter/CTA.
    -   **Bottom**: Copyright + Social Icons.

#### 3. Animations & Polish
- [x] **Scroll Animations**: Add `framer-motion` or simple CSS fade-ins (`opacity-0` -> `opacity-100` on view).
- [x] **Micro-interactions**: Hover states for all buttons and links.
- [x] **Responsiveness**: Ensure stacking works correctly on mobile (Hamburger menu for Navbar?).

### Content & SEO
- [x] Refresh copy to match the "Voice VPN" brand in a "Ryno" tone (Empowering, Secure, Advanced) with a clear value prop (unblocks in censored regions, fast, safe, no logs).
- [x] Add trust signals: protocols/tech stack, privacy stance, uptime/reliability, transparency link for how censorship evasion works safely.
- [x] Localize/lint messaging for high-risk regions (UAE, etc.) to avoid flagged phrasing while keeping benefits obvious; add compliance/usage disclaimers where needed.
- [x] **Meta Tags Strategy (Per [Vasilkoff Blog Guidelines](https://vasilkoff.com/blog/meta-tags))**:
    -   **Next.js Implementation**:
        -   Use `export const metadata` in `layout.js` for global defaults (title template, default open graph).
        -   Implement `generateMetadata` in dynamic routes (`app/r/[refId]/page.jsx`) to customize titles/descriptions for referrals.
    -   **Required Tags**:
        -   **Open Graph**: `og:title`, `og:description`, `og:image` (1200x630px), `og:url`, `og:type` (website/app).
        -   **Twitter Cards**: `twitter:card` (use `summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.
        -   **Facebook**: Add `fb:app_id` if available to enable insights.
- [x] Run quick keyword set: primary (voice vpn, vpn for uae, censorship vpn), secondary (whatsapp vpn, dpi resistant vpn, android vpn apk). Map to H1/H2, hero subtext, and CTA anchors.
- [x] Update meta title/description and OpenGraph/Twitter cards to emphasize unblock capability + free/ad-supported angle; ensure schema-friendly length.
- [x] Add on-page SEO basics: alt text for hero/feature visuals, descriptive link text, clean slugs for any new sections (e.g., `/features`, `/privacy`, `/faq`), and lightweight FAQ schema for common queries.
- [x] Outline 2-3 supporting landing/blog topics to capture intent ("Best VPN for UAE WhatsApp calls", "How DPI-safe VPNs work", "Free VPN vs paid for censorship") with clear CTAs to download APK.
- [x] Ensure copy differentiates vs commodity VPNs (survives DPI, blends as normal traffic, lightweight, transparent about ads) and repeats key benefits above the fold and near CTAs.
- [x] **Validation & Testing**:
    -   Test final deployment with **Facebook Sharing Debugger** and **Twitter Card Validator**.
    -   Verify previews using **MetaTags.io** or local host preview tools.
- [x] Generate structured data JSON-LD: `SoftwareApplication`/`MobileApplication` (name, OS, category, downloadUrl, offers), plus FAQ schema aligned to on-page questions; ensure no conflicting data.
- [x] Add `robots.txt` + `sitemap.xml` (or Next route) and confirm canonical tag to avoid dupes; block non-prod routes if any.

### Analytics & Funnels
- [ ] Define funnel: landing view → hero CTA click → APK download start → install success → first connection → returning session. Set KPIs for each stage.
- [ ] Instrument events (privacy-safe): hero CTA clicks (Download APK / Learn More), nav links, scroll depth, FAQ expands, download start/success, first open, first successful connection, disconnect, errors. Use a privacy-friendly stack (e.g., self-hosted PostHog/Umami/Amplitude) with consent banner if using GA/Meta.
- [ ] Add UTM handling and persist through download links to attribute campaigns; log geo/device/platform to measure censored-market performance.
- [ ] Set up conversion dashboards and alerting for drop-offs (download failures, connection errors) segmented by region/device; add funnel annotations for campaigns/releases.
- [ ] Plan A/B tests for hero headline, CTA text/placement, and proof points (stats/testimonials). Track retention cohort for returning connections and impact of trust signals.
