"use client";

import { useEffect, useMemo, useState } from "react";
import {
  categoryFilters,
  categoryMatchesFilter,
  giftingCategories,
  type CategoryFilterId,
} from "../../lib/gifting";
import { CategoryCard } from "./CategoryCard";
import { GIFTING_FILTER_EVENT, GIFTING_FILTER_STORAGE_KEY } from "./filterNavigation";

const chipBase =
  "inline-flex min-h-[40px] shrink-0 items-center rounded-full border px-4 py-1.5 text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500";
const chipOn = "border-purple-500 bg-purple-500/20 text-white shadow-sm font-bold";
const chipOff = "border-white/10 bg-[#1A1624] text-zinc-300 hover:border-white/25 hover:text-white";

/* Filterable directory of all 14 categories with 8gnc.io dark executive aesthetics */
export function GiftingCatalogue() {
  const [filter, setFilter] = useState<CategoryFilterId>("all");

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(GIFTING_FILTER_STORAGE_KEY);
      if (stored && categoryFilters.some((entry) => entry.id === stored)) {
        setFilter(stored as CategoryFilterId);
        window.sessionStorage.removeItem(GIFTING_FILTER_STORAGE_KEY);
      }
    } catch {
      /* Storage can be unavailable in private modes. */
    }

    function onFilter(event: Event) {
      const next = (event as CustomEvent<string>).detail;
      if (categoryFilters.some((entry) => entry.id === next)) {
        setFilter(next as CategoryFilterId);
      }
    }

    window.addEventListener(GIFTING_FILTER_EVENT, onFilter);
    return () => window.removeEventListener(GIFTING_FILTER_EVENT, onFilter);
  }, []);

  const results = useMemo(
    () => giftingCategories.filter((category) => categoryMatchesFilter(category, filter)),
    [filter]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter the 14 gifting categories"
        className="flex flex-nowrap gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-[#131019] p-3.5 sm:flex-wrap sm:overflow-visible"
      >
        {categoryFilters.map((entry) => {
          const active = filter === entry.id;
          return (
            <button
              key={entry.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(entry.id)}
              className={`${chipBase} ${active ? chipOn : chipOff}`}
            >
              {entry.label}
            </button>
          );
        })}
      </div>

      <p
        className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400"
        aria-live="polite"
      >
        Showing {results.length} of {giftingCategories.length} Categories
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#131019] p-8 text-center">
          <p className="text-base text-zinc-300">No categories match that filter.</p>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="btn mt-4 !min-h-[40px] !text-xs"
          >
            Show All 14 Categories
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {results.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
