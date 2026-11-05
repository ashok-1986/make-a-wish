"use client";

import { useState } from "react";
import type { GiftingCategory } from "../../lib/gifting";
import { CategoryArt } from "./CategoryArt";
import { useGifting } from "./GiftingProvider";

export function CategoryCard({ category }: { category: GiftingCategory }) {
  const { addItem, openCatalogue, items } = useGifting();
  const [added, setAdded] = useState(false);

  const shortlistKey = `category:${category.id}`;
  const inShortlist = items.some((item) => item.key === shortlistKey);

  function addToShortlist() {
    addItem({
      key: shortlistKey,
      kind: "category",
      name: category.name,
      detail: category.seasonLabel,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 4000);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-plum/15 bg-paper shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden bg-cream">
        <CategoryArt category={category} />
        <span className="absolute left-4 top-4 rounded-full bg-plum px-3 py-1 text-xs font-black tracking-[0.18em] text-paper">
          {category.number}
        </span>
        <span className="absolute bottom-4 left-4 rounded-full bg-paper/95 px-3 py-1 text-xs font-bold text-plum shadow-sm">
          {category.seasonLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-2xl italic leading-tight text-plum">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/90">{category.description}</p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {category.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-plum/25 px-2.5 py-1 text-xs font-semibold text-ink/85"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          <span className="font-bold text-plum">Best for:</span> {category.useCase}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={addToShortlist}
              className="btn !min-h-[44px] !px-4 !py-2.5 !text-sm"
            >
              {inShortlist ? "Update shortlist" : "Add to shortlist"}
            </button>
            <button
              type="button"
              onClick={() => openCatalogue(category.name)}
              className="btn btn-ghost !min-h-[44px] !px-4 !py-2.5 !text-sm text-plum"
            >
              Request catalogue
            </button>
          </div>

          <p role="status" aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs font-bold text-plum">
            {added ? `${category.name} added to your shortlist.` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
