import { Reveal } from "../Reveal";
import { GiftingCatalogue } from "../gifting/GiftingCatalogue";

export function CategoriesSection() {
  return (
    <section
      id="gifting-categories"
      aria-labelledby="categories-title"
      className="scroll-mt-24 bg-paper px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-plum/75">The 2026 catalogue</p>
          <h2 id="categories-title" className="display-lg mt-2 text-plum">
            One desk, fourteen categories.
          </h2>
          <p className="lede mt-4">
            Festive dry fruit and gourmet edibles sit alongside the year-round executive range:
            leather, crockery, copperware, perfumes and 999 silver. Filter by season, shortlist a
            category, and request the catalogue for the full range.
          </p>
        </Reveal>

        <div className="mt-10">
          <GiftingCatalogue />
        </div>
      </div>
    </section>
  );
}
