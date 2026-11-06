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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131019] shadow-lg transition-all hover:border-purple-500/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1624]">
        <Image
          src={hamper.image}
          alt={hamper.imageAlt}
          fill
          sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <span className="absolute left-3.5 top-3.5 rounded-full border border-purple-500/40 bg-purple-500/20 px-2.5 py-0.5 text-xs font-mono font-bold text-purple-300 backdrop-blur-sm">
          {series.shortName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-purple-400">
          {hamper.packaging}
        </p>
        <h3 className="mt-1.5 font-sans text-xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-300">
          {hamper.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
          {hamper.description}
        </p>

        {hamper.editions.length > 1 ? (
          <fieldset className="mt-4">
            <legend className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-zinc-400">
              Select Edition &amp; Net Weight
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {hamper.editions.map((entry) => {
                const active = entry.id === edition.id;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setEditionId(entry.id)}
                    className={`min-h-[40px] rounded-xl border px-3 py-1.5 text-left text-xs font-semibold transition-all ${
                      active
                        ? "border-purple-500 bg-purple-500/20 text-white font-bold"
                        : "border-white/10 bg-[#1A1624] text-zinc-300 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span className="block font-bold">{entry.name}</span>
                    <span className={active ? "text-purple-200" : "text-zinc-400"}>
                      {formatWeight(entry.netWeightG)} net
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ) : (
          <p className="mt-4 rounded-xl border border-white/10 bg-[#1A1624] px-3 py-2 text-xs font-semibold text-zinc-300">
            {edition.name} · {formatWeight(edition.netWeightG)} net
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {edition.contents.map((content) => (
            <li
              key={content}
              className="rounded-md border border-white/10 bg-[#1A1624] px-2 py-0.5 text-[0.72rem] font-medium text-zinc-300"
            >
              {content}
            </li>
          ))}
        </ul>
        {edition.note && (
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            {edition.note}
          </p>
        )}

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
              onClick={() => openCatalogue(`${hamper.name} — ${edition.name}`)}
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
            {added ? `${hamper.name}, ${edition.name}, added to your shortlist.` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}
