"use client";

import Image from "next/image";
import { useState } from "react";
import {
  formatWeight,
  hamperSeriesById,
  type Hamper,
} from "../../lib/gifting";
import { useGifting } from "./GiftingProvider";

export function HamperCard({ hamper }: { hamper: Hamper }) {
  const { addItem, openCatalogue, items } = useGifting();
  const [editionId, setEditionId] = useState(hamper.editions[0].id);
  const [added, setAdded] = useState(false);

  const edition = hamper.editions.find((entry) => entry.id === editionId) ?? hamper.editions[0];
  const series = hamperSeriesById(hamper.series);
  const shortlistKey = `hamper:${hamper.id}`;
  const detail = `${edition.name} · ${formatWeight(edition.netWeightG)} · ${hamper.packaging}`;
  const inShortlist = items.some((item) => item.key === shortlistKey);

  function addToShortlist() {
    addItem({
      key: shortlistKey,
      kind: "hamper",
      name: hamper.name,
      detail,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 4000);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-plum/15 bg-paper shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={hamper.image}
          alt={hamper.imageAlt}
          fill
          sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-plum px-3 py-1 text-xs font-bold text-paper">
          {series.shortName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-plum/75">{hamper.packaging}</p>
        <h3 className="mt-1.5 font-display text-2xl italic leading-tight text-plum">{hamper.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/90">{hamper.description}</p>

        {hamper.editions.length > 1 ? (
          <fieldset className="mt-4">
            <legend className="eyebrow text-plum/75">Edition and net weight</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {hamper.editions.map((entry) => {
                const active = entry.id === edition.id;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setEditionId(entry.id)}
                    className={`min-h-[44px] rounded-xl border-2 px-3 py-2 text-left text-xs font-bold transition-colors ${
                      active
                        ? "border-plum bg-plum text-paper"
                        : "border-plum/25 bg-paper text-ink hover:border-plum"
                    }`}
                  >
                    <span className="block">{entry.name}</span>
                    <span className={active ? "text-paper/80" : "text-ink/70"}>
                      {formatWeight(entry.netWeightG)} net
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : (
          <p className="mt-4 rounded-xl bg-cream px-3 py-2 text-sm font-bold text-ink">
            {edition.name} · {formatWeight(edition.netWeightG)} net
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {edition.contents.map((content) => (
            <li
              key={content}
              className="rounded-full border border-plum/25 px-2.5 py-1 text-xs font-semibold text-ink/85"
            >
              {content}
            </li>
          ))}
        </ul>
        {edition.note && <p className="mt-2 text-xs italic leading-relaxed text-ink/75">{edition.note}</p>}

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
              onClick={() => openCatalogue(`${hamper.name} — ${edition.name}`)}
              className="btn btn-ghost !min-h-[44px] !px-4 !py-2.5 !text-sm text-plum"
            >
              Request catalogue
            </button>
          </div>

          <p role="status" aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs font-bold text-plum">
            {added ? `${hamper.name}, ${edition.name}, added to your shortlist.` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
