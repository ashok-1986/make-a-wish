"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  categoryFilters,
  categoryMatchesFilter,
  giftingCategories,
  type CategoryFilterId,
} from "../../lib/gifting";
import { gsap, ScrollTrigger, isReducedMotion, MOTION_TOKENS } from "../../lib/motion";
import { CategoryCard } from "./CategoryCard";
import { GIFTING_FILTER_EVENT, GIFTING_FILTER_STORAGE_KEY } from "./filterNavigation";

const chipBase =
  "inline-flex min-h-[40px] shrink-0 items-center rounded-full border px-4 py-1.5 text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500";
const chipOn = "border-purple-600 bg-purple-600 text-white shadow-sm font-medium";
const chipOff = "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900";

/* Filterable directory of all 14 categories with 8gnc.io light studio aesthetics */
export function GiftingCatalogue() {
  const [filter, setFilter] = useState<CategoryFilterId>("all");
  const gridRef = useRef<HTMLUListElement>(null);

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

  useEffect(() => {
    const el = gridRef.current;
    if (!el || isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = el.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          Array.from(cards),
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: MOTION_TOKENS.ease.out,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, el);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [results]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter the 14 gifting categories"
        className="flex flex-nowrap gap-2 overflow-x-auto rounded-2xl border border-zinc-200/90 bg-white p-3.5 shadow-sm sm:flex-wrap sm:overflow-visible"
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
        className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-purple-700"
        aria-live="polite"
      >
        Showing {results.length} of {giftingCategories.length} Categories
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-zinc-200/90 bg-white p-8 text-center shadow-sm">
          <p className="text-base text-zinc-600">No categories match that filter.</p>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="btn mt-4 !min-h-[40px] !text-xs"
          >
            Show All 14 Categories
          </button>
        </div>
      ) : (
        <ul ref={gridRef} className="mt-6 grid gap-6 sm:grid-cols-2">
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
