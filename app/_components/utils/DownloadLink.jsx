"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

function DownloadLinkContent({ 
  href = "https://apk.voicevpn.top/latest.apk", 
  className = "", 
  children,
  target,
  rel,
  ...props
}) {
  const searchParams = useSearchParams();
  const [finalHref, setFinalHref] = useState(href);

  useEffect(() => {
    // Only run on client side after hydration
    if (searchParams && searchParams.toString()) {
      const separator = href.includes("?") ? "&" : "?";
      setFinalHref(`${href}${separator}${searchParams.toString()}`);
    } else {
      setFinalHref(href);
    }
  }, [searchParams, href]);

  return (
    <a 
      href={finalHref} 
      className={className}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  );
}

export default function DownloadLink({ 
  href = "https://apk.voicevpn.top/latest.apk", 
  className = "", 
  children,
  target,
  rel,
  ...props
}) {
  return (
    <Suspense fallback={
      <a 
        href={href}
        className={className}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    }>
      <DownloadLinkContent 
        href={href}
        className={className}
        children={children}
        target={target}
        rel={rel}
        {...props}
      />
    </Suspense>
  );
}
