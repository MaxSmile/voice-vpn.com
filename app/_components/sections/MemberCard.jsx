// app/_components/sections/MemberCard.jsx
export default function MemberCard({ avatarUrl, alias, badges = [], quote }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white">
      <div className="flex items-center gap-3">
        {avatarUrl && <img src={avatarUrl} alt={alias} width={48} height={48} className="rounded-xl ring-1 ring-white/10" />}
        <div>
          <div className="text-sm text-gray-300">Recommended by</div>
          <div className="text-base font-semibold">{alias}</div>
        </div>
      </div>

      {quote && <p className="mt-3 text-sm text-gray-300 italic">“{quote}”</p>}

      {badges?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <li key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
