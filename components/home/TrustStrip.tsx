import { trustHighlights } from "../../lib/home-data";

export function TrustStrip() {
  return (
    <section
      aria-label="Key trust highlights"
      className="border-y border-white/10 bg-[#0E0C14] px-5 py-4 text-zinc-300 md:px-10"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-center text-xs sm:text-sm font-semibold tracking-wide">
        {trustHighlights.map((item, i) => (
          <li key={item} className="flex items-center gap-8">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400 md:block"
              />
            )}
            <span className="text-zinc-200">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
