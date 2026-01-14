export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://voice-vpn.com/sitemap.xml",
    host: "https://voice-vpn.com",
  };
}

