"use client";

import { useMemo, useState } from "react";
import {
  hampers,
  hamperMatchesBand,
  hamperSeries,
  hamperSeriesCount,
  weightBands,
  type SeriesId,
  type WeightBandId,
} from "../../lib/gifting";
import { HamperCard } from "./HamperCard";

const chipBase =
  "inline-flex min-h-[44px] shrink-0 items-center rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-plum";
const chipOn = "border-plum bg-plum text-paper";
const chipOff = "border-plum/25 bg-paper text-ink hover:border-plum";

export function HamperLookbook() {
  const [series, setSeries] = useState<SeriesId | "all">("all");
  const [band, setBand] = useState<WeightBandId>("all");

  const results = useMemo(
    () =>
      hampers.filter(
        (hamper) =>
          (series === "all" || hamper.series === series) && hamperMatchesBand(hamper, band)
      ),
    [series, band]
  );

  return (
    <div>
      <div className="grid gap-5 rounded-[2rem] border-2 border-plum/15 bg-cream p-4 md:p-5">
        <div className="min-w-0">
          <p className="eyebrow mb-2 text-plum/75">Packaging series</p>
          <div role="group" aria-label="Filter hampers by packaging series" className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
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

        <div className="min-w-0">
          <p className="eyebrow mb-2 text-plum/75">Net weight</p>
          <div role="group" aria-label="Filter hampers by net weight" className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
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

      <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-plum/80" aria-live="polite">
        Showing {results.length} of {hampers.length} hamper models
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-[2rem] bg-paper p-8">
          <p className="text-lg">No hamper matches that combination.</p>
          <button
            type="button"
            onClick={() => {
              setSeries("all");
              setBand("all");
            }}
            className="btn mt-4 !min-h-[44px]"
          >
            Show all 13 models
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
