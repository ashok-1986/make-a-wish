"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { PillarCategory } from "../../lib/category-showcase-data";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { useGifting } from "../gifting/GiftingProvider";
import {
  cardRevealVariants,
  cardHoverTransition,
} from "../../lib/motion-tokens";

export interface PillarCategoryCardProps {
  pillar: PillarCategory;
  isFlagship?: boolean;
}

export function PillarCategoryCard({
  pillar,
  isFlagship = false,
}: PillarCategoryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const { openCatalogue, seedRFQ } = useGifting();

  function handleRequestCatalogue() {
    seedRFQ({
      notes: `Inquiry for ${pillar.name} (${pillar.eyebrow}). Please share catalogue and tiered volume rate cards.`,
    });
    openCatalogue(pillar.name);
  }

  return (
    <motion.article
      variants={cardRevealVariants}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      transition={cardHoverTransition}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-sm transition-shadow duration-300 hover:border-purple-500/40 hover:shadow-xl ${
        isFlagship ? "lg:flex-row lg:items-center lg:gap-10" : ""
      }`}
    >
      {/* Top / Left: Visual Presentation */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 ${
          isFlagship
            ? "aspect-[16/9] w-full lg:w-[48%] shrink-0"
            : "aspect-[16/10] w-full"
        }`}
      >
        <Image
          src={pillar.image}
          alt={pillar.imageAlt}
          fill
          sizes={
            isFlagship
              ? "(min-width: 1024px) 45vw, 92vw"
              : "(min-width: 1024px) 45vw, 92vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Pillar Eyebrow Tag */}
        <div className="pointer-events-none absolute left-3.5 top-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-3 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>{pillar.eyebrow}</span>
          </span>
        </div>

        {/* MOQ & Branding Badges */}
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 z-10">
          <span className="rounded-lg border border-white/20 bg-white/95 px-2.5 py-1 text-[0.68rem] font-semibold text-zinc-900 backdrop-blur-md shadow-xs">
            MOQ: {pillar.moq}
          </span>
          <span className="rounded-lg border border-white/20 bg-purple-900/80 px-2.5 py-1 text-[0.68rem] font-mono font-medium text-purple-100 backdrop-blur-md shadow-xs hidden sm:inline-block">
            {pillar.brandingOptions.split("&")[0].trim()}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className={`mt-6 flex flex-1 flex-col justify-between ${isFlagship ? "lg:mt-0" : ""}`}>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-700">
              Discipline {pillar.pillarNumber}
            </span>
          </div>

          <h3 className="mt-2 font-sans text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-snug">
            {pillar.name}
          </h3>

          <p className="mt-2 font-sans text-sm font-semibold text-purple-800">
            {pillar.tagline}
          </p>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600">
            {pillar.description}
          </p>

          {/* 2–4 Representative Highlights */}
          <div className="mt-5 border-t border-zinc-100 pt-4">
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-zinc-500 mb-2">
              Representative Inclusions:
            </p>
            <ul className="flex flex-wrap gap-2">
              {pillar.representativeItems.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50/90 px-2.5 py-1 text-xs text-zinc-700 transition-colors group-hover:border-purple-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  <span className="font-medium">{item.name}</span>
                  {item.tag && (
                    <span className="rounded bg-purple-100 px-1.5 py-0.2 text-[0.65rem] font-mono font-bold text-purple-700">
                      {item.tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions / Conversion Triggers */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-zinc-100 pt-5">
          <button
            type="button"
            onClick={handleRequestCatalogue}
            className="btn flex-1 justify-center !min-h-[44px] !text-xs font-bold shadow-sm"
          >
            <span>Request {pillar.name.split("&")[0].trim()} Catalogue</span>
            <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </button>

          <a
            href={pillar.whatsappPrefill}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp desk for ${pillar.name}`}
            className="btn btn-ghost !min-h-[44px] !px-3.5 !text-xs font-bold text-zinc-800 border-zinc-300 hover:bg-zinc-100"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

