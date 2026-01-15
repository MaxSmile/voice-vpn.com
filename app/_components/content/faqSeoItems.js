export const FAQ_SEO_ITEMS = [
  {
    id: "free-and-credits",
    q: "Is Voice VPN really free?",
    a: [
      "Yes. You can use Voice VPN without a subscription.",
      "Instead of charging monthly, Voice VPN uses a simple “credits = time” model. Think of credits like game coins that buy connection time. This keeps the rules predictable: you can see what you have, and you can decide how you want to use it.",
      "If you prefer not to earn credits, there can also be paid options (credit packs or subscription) depending on what’s available in your region.",
    ],
  },
  {
    id: "censored-regions",
    q: "Does it work in censored regions (UAE, China, Iran)?",
    a: [
      "Voice VPN is built for difficult networks. Some countries and networks use deep traffic inspection to detect and block VPNs, so “works everywhere forever” is not realistic for any VPN.",
      "What Voice VPN tries to do is blend in with normal web traffic so it’s harder to identify and block. In practice, results can vary by region, ISP, and even by the Wi‑Fi you’re on.",
      "If you have trouble connecting, the simplest fixes are: reconnect once, switch servers/regions, or try again later (network rules can change throughout the day).",
    ],
  },
  {
    id: "signup-and-logs",
    q: "Do I need to sign up, and do you keep activity logs?",
    a: [
      "No sign-up is required to start using the app.",
      "Voice VPN is designed to minimize data collection and not keep browsing activity logs. That said, every online service has to operate infrastructure, so it’s important to read the Privacy page for the exact details of what is and isn’t collected.",
      "If your threat model is very sensitive, treat “privacy” as something you verify: use reputable sources, keep your OS updated, and avoid logging into services you don’t trust.",
    ],
  },
  {
    id: "safe-apk-install",
    q: "How do I install the APK safely?",
    a: [
      "The safest option is Google Play, because it provides signature verification and update checks.",
      "If you install via APK, only download from official links you trust. Avoid random reuploads or “modified” builds.",
      "On Android, after downloading, open the file and follow the install prompts. If Android asks you to allow installs from your browser or file manager, enable it only for that app and turn it off later if you want extra safety.",
    ],
  },
  {
    id: "what-is-a-vpn",
    q: "What is a VPN (in simple words)?",
    a: [
      "A VPN is a protected tunnel for your internet.",
      "Normally, your device talks directly to websites and apps through your ISP or Wi‑Fi provider. With a VPN, your device connects to a VPN server first, and then the VPN server connects to the internet for you.",
      "This helps on public Wi‑Fi (it’s harder for the local network to spy on your traffic) and can help bypass some network blocks.",
    ],
  },
  {
    id: "does-vpn-make-anonymous",
    q: "Does a VPN make me anonymous?",
    a: [
      "Not completely. A VPN improves privacy, but it doesn’t make you invisible.",
      "Websites you log into can still identify you. Also, tracking can happen through cookies, browser fingerprinting, and accounts.",
      "A good mental model is: a VPN helps protect your traffic on the network level; you still need good online habits for identity privacy.",
    ],
  },
  {
    id: "what-vpn-hides",
    q: "What does Voice VPN hide, and from whom?",
    a: [
      "A VPN primarily hides your traffic from the local network you’re using (like a café Wi‑Fi) and makes it harder for your ISP to see which sites you’re visiting.",
      "The destination sites can still see your connection, but it appears to come from the VPN server instead of your home or mobile IP address.",
      "It does not magically hide everything from every party: if you log into a service, that service still knows it’s you.",
    ],
  },
  {
    id: "can-vpn-see-traffic",
    q: "Can a VPN see my traffic?",
    a: [
      "In general, a VPN provider can potentially see some network metadata and, depending on the traffic type, parts of the content. That’s why provider trust and privacy practices matter.",
      "Modern apps often use HTTPS, which encrypts content between your device and the website. Even then, metadata like the destination domain can sometimes still be inferred.",
      "Voice VPN’s goal is to be privacy-first and minimize collection. For the exact policy, review the Privacy page.",
    ],
  },
  {
    id: "public-wifi",
    q: "Should I use a VPN on public Wi‑Fi?",
    a: [
      "Yes, it’s one of the best everyday uses of a VPN.",
      "Public Wi‑Fi networks can be monitored, and sometimes attackers create “evil twin” hotspots that look legitimate. A VPN makes it much harder to snoop on your traffic at the Wi‑Fi layer.",
      "A VPN isn’t a substitute for HTTPS, but it adds a strong extra layer of protection.",
    ],
  },
  {
    id: "school-work-blocks",
    q: "Will Voice VPN bypass school/work blocks?",
    a: [
      "Sometimes. It depends on how the network blocks traffic and how aggressive it is.",
      "Some networks only block a list of websites; a VPN can usually help. Other networks detect and block VPN patterns; that can be harder.",
      "Voice VPN focuses on censorship resistance, but no VPN can guarantee success on every managed network.",
    ],
  },
  {
    id: "speed-impact",
    q: "Will a VPN slow my internet down?",
    a: [
      "Often a little, yes. Your traffic takes an extra hop through a server and goes through encryption.",
      "To get better speed: choose a nearby server, make sure your signal is strong, and avoid overloaded networks. If your speed drops suddenly, reconnect once.",
      "Voice VPN shows live speeds/traffic while connected so you can see what’s happening in real time.",
    ],
  },
  {
    id: "choose-server",
    q: "Should I use Automatic server selection or pick a location?",
    a: [
      "Automatic is best for most people. It picks a good default quickly.",
      "Pick a location if you need a specific region, or if a certain network works better with certain servers.",
      "If you’re unsure, start with Automatic and only switch when you have a reason.",
    ],
  },
  {
    id: "streaming",
    q: "Will it work with streaming apps?",
    a: [
      "Streaming services often try to block VPNs. That means streaming compatibility can change over time.",
      "Voice VPN is designed for reliable access and censorship resistance. If streaming is your top goal, test your specific service and region, because results vary.",
      "If something stops working, switching servers/regions can sometimes help.",
    ],
  },
  {
    id: "gaming",
    q: "Is Voice VPN good for gaming?",
    a: [
      "It can help on unstable or restricted networks, but it may add latency because your traffic goes through an extra server.",
      "For gaming, the best result is usually a nearby server. If ping matters, compare with and without the VPN and choose what feels best.",
      "Some games also have anti-cheat/network rules—always follow the game’s terms.",
    ],
  },
  {
    id: "battery-data",
    q: "Does using a VPN drain battery or use more data?",
    a: [
      "A VPN can use a bit more battery because it encrypts traffic and keeps a connection alive.",
      "It can also add a small amount of data overhead (encryption and tunneling). Usually it’s modest, but on very limited plans you may notice it.",
      "If battery is critical, use the VPN when you need it most (public Wi‑Fi, travel, restricted networks).",
    ],
  },
  {
    id: "credits-how-it-works",
    q: "How do credits work?",
    a: [
      "Credits buy time. A simple mental model is: 1 credit ≈ 30 minutes.",
      "When you connect, a small fixed cost can apply immediately. After that, additional charges apply as time passes. This is meant to be predictable and easy to understand.",
      "The goal is “no mystery billing”: you can see your usage and decide how you want to spend it.",
    ],
  },
  {
    id: "avoid-double-charging",
    q: "Can I be charged twice if I tap connect/disconnect quickly?",
    a: [
      "Accidental double-charging is frustrating, so the app aims to deduplicate rapid actions and avoid charging twice for the same moment.",
      "If you think something looks wrong, send an in-app report with details (time, network, what you tapped). That helps diagnose and fix issues.",
    ],
  },
  {
    id: "out-of-credits",
    q: "What happens when I run out of credits?",
    a: [
      "The VPN stops automatically so you don’t keep consuming time you don’t have.",
      "You can then earn more credits, top up with a pack, or use a subscription option (if available).",
    ],
  },
  {
    id: "earn-credits",
    q: "How can I earn credits?",
    a: [
      "Common options include rewarded ads, daily bonuses via in-app activities, and achievements.",
      "Availability can vary by region and device, so what you see in the app is the most accurate source of truth.",
    ],
  },
  {
    id: "buy-credits",
    q: "Can I buy credits instead of watching ads?",
    a: [
      "Yes. Credit packs are designed as one-time top-ups when you want more time without waiting.",
      "If you prefer predictable unlimited use, a subscription option may also exist depending on region.",
    ],
  },
  {
    id: "subscription",
    q: "Do you offer a subscription for unlimited use?",
    a: [
      "If subscription is available in your region, it unlocks unlimited connection time while it’s active (credits aren’t charged).",
      "If you don’t see it in the app, it may not be available in your region yet.",
    ],
  },
  {
    id: "referrals",
    q: "What are referral links/IDs?",
    a: [
      "A referral link or ID is a shareable invite you can send to friends.",
      "If a friend installs using it, it helps track the invite and may enable rewards depending on the current referral rules.",
      "You can find your referral options inside the app and share them like a normal link.",
    ],
  },
  {
    id: "support-and-bugs",
    q: "How do I report a bug or send feedback?",
    a: [
      "Use the in-app support/feedback screens. That’s the fastest path to the team.",
      "Helpful details include: your country/region, what network you were on (home Wi‑Fi / mobile / public Wi‑Fi), what you tapped, and what you expected to happen.",
    ],
  },
  {
    id: "is-it-legal",
    q: "Is using a VPN legal?",
    a: [
      "Laws vary by country and situation. In many places VPNs are legal, but some regions restrict them or regulate how they can be used.",
      "You are responsible for following local laws and any service rules that apply to you.",
    ],
  },
];

