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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <CategoryArt category={category} />
        <span className="absolute left-3.5 top-3.5 rounded-full border border-purple-500/40 bg-white/90 px-2.5 py-0.5 text-xs font-mono font-medium text-purple-700 backdrop-blur-sm shadow-xs">
          {category.number}
        </span>
        <span className="absolute bottom-3.5 left-3.5 rounded-full border border-zinc-200 bg-white/90 px-2.5 py-0.5 text-[0.7rem] font-medium text-zinc-700 backdrop-blur-sm shadow-xs">
          {category.seasonLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-sans text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-purple-700">
          {category.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600">
          {category.description}
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {category.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[0.72rem] font-medium text-zinc-700"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-500">
          <span className="font-medium text-zinc-800">Recommended for:</span> {category.useCase}
        </p>

        <div className="mt-auto pt-5 border-t border-zinc-200">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={addToShortlist}
              className="btn !min-h-[40px] !px-4 !py-2 !text-xs !bg-zinc-900 !text-white hover:!bg-zinc-800"
            >
              {inShortlist ? "Update Shortlist" : "Add to Shortlist"}
            </button>
            <button
              type="button"
              onClick={() => openCatalogue(category.name)}
              className="btn btn-ghost !min-h-[40px] !px-4 !py-2 !text-xs border-zinc-300 text-zinc-800 hover:bg-zinc-100"
            >
              Request Specs
            </button>
          </div>

          <p
            role="status"
            aria-live="polite"
            className="mt-2 min-h-[1.25rem] text-xs font-medium text-emerald-600"
          >
            {added ? `${category.name} added to your shortlist.` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
