import { PLAY_STORE_URL } from "./constants";

export default function PlayStoreButton({ className = "", imgClass = "h-16", href }) {
  return (
    <a
      href={href || PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-opacity hover:opacity-80 inline-block ${className}`}
    >
      <img
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        className={`w-auto ${imgClass}`}
      />
    </a>
  );
}
