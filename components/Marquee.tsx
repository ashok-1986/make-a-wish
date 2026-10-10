import { Star } from "./Star";
import { categories } from "../lib/site";

/* Decorative band of category names; the same information is in the list below, so it is hidden from
   assistive tech. Pauses on hover; static and scrollable under reduced motion. */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee on-dark overflow-hidden bg-plum py-5 text-sun"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {categories.map((c) => (
              <li key={`${copy}-${c.slug}`} className="flex items-center">
                <span className="display-md whitespace-nowrap px-6">{c.name}</span>
                <Star className="h-5 w-5 shrink-0 text-cream" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
