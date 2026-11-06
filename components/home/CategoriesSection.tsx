import { Reveal } from "../Reveal";
import { GiftingCatalogue } from "../gifting/GiftingCatalogue";

export function CategoriesSection() {
  return (
    <section
      id="gifting-categories"
      aria-labelledby="categories-title"
      className="scroll-mt-24 border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Enterprise Catalog Directory</span>
          </div>

          <h2
            id="categories-title"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
          >
            One Desk, Fourteen Categories.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
            Festive dry fruit and gourmet edibles alongside our executive year-round range: genuine leather folders, crockery, pure copperware, luxury perfumes, and 999 silver tokens. Filter by occasion, shortlist any collection, and request tiered rate cards.
          </p>
        </Reveal>

        <div className="mt-10">
          <GiftingCatalogue />
        </div>
      </div>
    </section>
  );
}
