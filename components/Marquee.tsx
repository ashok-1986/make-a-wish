import { giftingCategories } from "../lib/gifting";

/* Sleek dark enterprise ticker echoing 8gnc.io technical minimalism */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden border-b border-white/10 bg-[#0B090E] py-3 text-zinc-400"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {giftingCategories.map((c) => (
              <li key={`${copy}-${c.id}`} className="flex items-center">
                <span className="whitespace-nowrap px-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  {c.name}
                </span>
                <span className="px-3 text-purple-400/60 font-mono text-xs">//</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
