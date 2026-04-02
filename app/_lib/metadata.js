export const BASE_URL = "https://voice-vpn.com";
export const SITE_NAME = "Voice VPN";

function sanitizeOgKey(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "-")
    .replace(/-+/g, "-");
}

function normalizePath(pathOrUrl) {
  let pathname = pathOrUrl;

  if (/^https?:\/\//i.test(pathOrUrl)) {
    pathname = new URL(pathOrUrl).pathname;
  }

  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getPageUrl(pathOrUrl) {
  const pathname = normalizePath(pathOrUrl);
  return new URL(pathname, BASE_URL).toString();
}

export function getOgImageUrlByPath(pathOrUrl) {
  const normalizedPath = normalizePath(pathOrUrl);
  const segments = normalizedPath.split("/").filter(Boolean);
  const baseName = segments.length > 0 ? segments.join(".") : "home";
  const fileName = `${sanitizeOgKey(baseName)}.jpg`;

  return `${BASE_URL}/og-images/${fileName}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  imageAlt,
  type = "website",
}) {
  const pageUrl = getPageUrl(path);
  const imageUrl = getOgImageUrlByPath(path);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
