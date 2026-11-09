"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  hampers,
  hamperMatchesBand,
  hamperSeries,
  hamperSeriesCount,
  weightBands,
  type SeriesId,
  type WeightBandId,
} from "../../lib/gifting";
import { gsap, ScrollTrigger, isReducedMotion, MOTION_TOKENS } from "../../lib/motion";
import { HamperCard } from "./HamperCard";

const chipBase =
  "inline-flex min-h-[38px] shrink-0 items-center rounded-full border px-3.5 py-1 text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500";
const chipOn = "border-purple-600 bg-purple-600 text-white font-bold shadow-sm";
const chipOff = "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900";

export function HamperLookbook() {
  const [series, setSeries] = useState<SeriesId | "all">("all");
  const [band, setBand] = useState<WeightBandId>("all");
  const gridRef = useRef<HTMLUListElement>(null);

  const results = useMemo(
    () =>
      hampers.filter(
        (hamper) =>
          (series === "all" || hamper.series === series) && hamperMatchesBand(hamper, band)
      ),
    [series, band]
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
            stagger: 0.08,
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
      <div className="grid gap-5 rounded-2xl border border-zinc-200/90 bg-[#F9F8F6] p-4 md:p-6 shadow-sm">
        <div className="min-w-0">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-700 mb-2.5">
            Packaging Series
          </p>
          <div
            role="group"
            aria-label="Filter hampers by packaging series"
            className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
          >
            <button
              type="button"
              aria-pressed={series === "all"}
              onClick={() => setSeries("all")}
              className={`${chipBase} ${series === "all" ? chipOn : chipOff}`}
            >
              All {hampers.length} models
            </button>
            {hamperSeries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                aria-pressed={series === entry.id}
                onClick={() => setSeries(entry.id)}
                className={`${chipBase} ${series === entry.id ? chipOn : chipOff}`}
              >
                {entry.shortName} ({hamperSeriesCount(entry.id)})
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 border-t border-zinc-200 pt-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-700 mb-2.5">
            Net Weight Category
          </p>
          <div
            role="group"
            aria-label="Filter hampers by net weight"
            className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
          >
            {weightBands.map((entry) => (
              <button
                key={entry.id}
                type="button"
                aria-pressed={band === entry.id}
                onClick={() => setBand(entry.id)}
                className={`${chipBase} ${band === entry.id ? chipOn : chipOff}`}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p
        className="mt-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-700"
        aria-live="polite"
      >
        Showing {results.length} of {hampers.length} Hamper Models
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-zinc-200/90 bg-white p-8 text-center shadow-sm">
          <p className="text-base text-zinc-600">No hamper matches that filter combination.</p>
          <button
            type="button"
            onClick={() => {
              setSeries("all");
              setBand("all");
            }}
            className="btn mt-4 !min-h-[40px] !text-xs"
          >
            Show All 13 Models
          </button>
        </div>
      ) : (
        <ul ref={gridRef} className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((hamper) => (
            <li key={hamper.id}>
              <HamperCard hamper={hamper} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
