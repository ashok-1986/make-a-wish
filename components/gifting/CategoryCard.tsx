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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131019] shadow-lg transition-all hover:border-purple-500/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1624]">
        <CategoryArt category={category} />
        <span className="absolute left-3.5 top-3.5 rounded-full border border-purple-500/40 bg-purple-500/20 px-2.5 py-0.5 text-xs font-mono font-bold text-purple-300 backdrop-blur-sm">
          {category.number}
        </span>
        <span className="absolute bottom-3.5 left-3.5 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 text-[0.7rem] font-medium text-zinc-300 backdrop-blur-sm">
          {category.seasonLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-300">
          {category.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
          {category.description}
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {category.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-md border border-white/10 bg-[#1A1624] px-2 py-0.5 text-[0.72rem] font-medium text-zinc-300"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
          <span className="font-bold text-zinc-200">Recommended for:</span> {category.useCase}
        </p>

        <div className="mt-auto pt-5 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={addToShortlist}
              className="btn !min-h-[40px] !px-4 !py-2 !text-xs"
            >
              {inShortlist ? "Update Shortlist" : "Add to Shortlist"}
            </button>
            <button
              type="button"
              onClick={() => openCatalogue(category.name)}
              className="btn btn-ghost !min-h-[40px] !px-4 !py-2 !text-xs"
            >
              Request Specs
            </button>
          </div>

          <p
            role="status"
            aria-live="polite"
            className="mt-2 min-h-[1.25rem] text-xs font-medium text-emerald-400"
          >
            {added ? `${category.name} added to your shortlist.` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
