// app/_components/sections/TrustBar.jsx
// Works with or without props.
export default function TrustBar({
  ratingValue = 4.8,
  ratingCount = 359,
  notes = ["No accounts", "No activity logs", "APK signature verified"],
  className = "",
} = {}) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-2xl p-4 ${className}`}>
      <div className="flex items-center gap-3">
        {/* Star */}
        <svg viewBox="0 0 20 20" className="h-5 w-5 text-yellow-300" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15.7 4.8 17.8l1-5.9-4.3-4.2 5.9-.9L10 1.5z" />
        </svg>
        <div className="text-sm text-white">
          <span className="font-semibold">{ratingValue.toFixed(1)}★</span>{" "}
          <span className="text-gray-300">on Google Play</span>{" "}
          <span className="text-gray-400">· {ratingCount.toLocaleString()} reviews</span>
        </div>
      </div>

      <ul className="mt-3 flex flex-wrap gap-2">
        {notes.map((n, i) => (
          <li key={i} className="text-[11px] px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
