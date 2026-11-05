import { Star } from "../Star";
import { trustHighlights } from "../../lib/home-data";

export function TrustStrip() {
  return (
    <section aria-label="Key trust highlights" className="border-y border-plum/10 bg-cream px-5 py-5 md:px-10">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-2 text-center text-sm font-bold md:text-base">
        {trustHighlights.map((item, i) => (
          <li key={item} className="flex items-center gap-7">
            {i > 0 && (
              <Star
                aria-hidden="true"
                className="hidden h-3.5 w-3.5 shrink-0 text-plum md:block"
              />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
