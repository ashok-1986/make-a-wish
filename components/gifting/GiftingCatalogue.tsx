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
  "inline-flex min-h-[44px] shrink-0 items-center rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-plum";
const chipOn = "border-plum bg-plum text-paper";
const chipOff = "border-plum/25 bg-paper text-ink hover:border-plum";

/* Filterable directory of all 14 categories. The filter can also be set from the
   header's Year-Round link, either on this page or carried over through session
   storage when arriving from another page. */
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
        className="flex flex-nowrap gap-2 overflow-x-auto rounded-[2rem] border-2 border-plum/15 bg-cream p-4 sm:flex-wrap sm:overflow-visible md:p-5"
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

      <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-plum/80" aria-live="polite">
        Showing {results.length} of {giftingCategories.length} categories
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-[2rem] bg-paper p-8">
          <p className="text-lg">No category matches that filter.</p>
          <button type="button" onClick={() => setFilter("all")} className="btn mt-4 !min-h-[44px]">
            Show all 14 categories
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
