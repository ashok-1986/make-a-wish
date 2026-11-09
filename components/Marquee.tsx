import { giftingCategories } from "../lib/gifting";

/* Sleek architectural studio ticker echoing 8gnc.io technical minimalism */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden border-b border-zinc-200 bg-[#F9F8F6] py-3 text-zinc-600"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {giftingCategories.map((c) => (
              <li key={`${copy}-${c.id}`} className="flex items-center">
                <span className="whitespace-nowrap px-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-700">
                  {c.name}
                </span>
                <span className="px-3 text-purple-600 font-mono text-xs font-medium">//</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
