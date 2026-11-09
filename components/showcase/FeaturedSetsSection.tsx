"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURED_SETS, type FeaturedSet } from "../../lib/category-showcase-data";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { useGifting } from "../gifting/GiftingProvider";
import {
  staggerContainerVariants,
  cardRevealVariants,
  cardHoverTransition,
  defaultViewportConfig,
} from "../../lib/motion-tokens";

function FeaturedSetCard({ set }: { set: FeaturedSet }) {
  const shouldReduceMotion = useReducedMotion();
  const { openCatalogue, seedRFQ } = useGifting();

  function handleInquire() {
    seedRFQ({
      inquiryType: set.name,
      notes: `Inquiry for Featured Set: ${set.name} (${set.badge}). MOQ: ${set.moq}. Lead Time: ${set.leadTime}. Inclusions: ${set.inclusions.join(", ")}.`,
    });
    openCatalogue(set.name);
  }

  return (
    <motion.article
      variants={cardRevealVariants}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      transition={cardHoverTransition}
      className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-purple-500/40 hover:shadow-xl"
    >
      <div>
        {/* Visual Box */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
          <Image
            src={set.image}
            alt={set.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="pointer-events-none absolute left-3 top-3 z-10">
            <span className="rounded-full border border-purple-400/40 bg-purple-900/80 px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider text-purple-200 backdrop-blur-md">
              {set.badge}
            </span>
          </div>

          {/* MOQ Tag */}
          <div className="pointer-events-none absolute bottom-3 right-3 z-10">
            <span className="rounded-md border border-white/20 bg-white/95 px-2 py-0.5 text-[0.68rem] font-medium text-zinc-900 backdrop-blur-md shadow-xs">
              MOQ: {set.moq}
            </span>
          </div>
        </div>

        {/* Set Details */}
        <div className="mt-5">
          <h3 className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-medium text-zinc-900 leading-[1.15] tracking-tight">
            {set.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-purple-700">
            {set.tagline}
          </p>

          <p className="mt-2 text-xs leading-relaxed text-zinc-600 font-normal">
            {set.description}
          </p>

          {/* Inclusions Checklist */}
          <div className="mt-4 border-t border-zinc-100 pt-3">
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-500 mb-2">
              Curated Inclusions:
            </p>
            <ul className="space-y-1.5">
              {set.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-zinc-700 font-normal">
                  <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[0.6rem] font-medium text-emerald-700">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="mt-6 border-t border-zinc-100 pt-4">
        <div className="flex items-center justify-between text-[0.7rem] text-zinc-500 mb-3">
          <span>Lead Time: <strong className="text-zinc-800 font-medium">{set.leadTime}</strong></span>
          <span>GST Invoicing: <strong className="text-zinc-800 font-medium">Itemized</strong></span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleInquire}
            className="btn flex-1 justify-center !min-h-[40px] !text-xs font-medium"
          >
            <span>Inquire About Set</span>
            <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </button>

          <a
            href={set.whatsappPrefill}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp for ${set.name}`}
            className="btn btn-ghost !min-h-[40px] !px-3 !text-xs font-medium text-zinc-800 border-zinc-300 hover:bg-zinc-100"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-600" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedSetsSection() {
  return (
    <section
      id="featured-sets"
      aria-labelledby="featured-sets-heading"
      className="scroll-mt-20 border-b border-zinc-200 bg-white py-16 text-zinc-900 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-purple-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>High-Intent Corporate Bundles</span>
          </div>

          <h2
            id="featured-sets-heading"
            className="mt-5 font-sans text-4xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] text-zinc-900 leading-[1.06] text-balance"
          >
            Signature Curated Sets for Instant Turnaround.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto font-normal">
            Pre-configured combinations of our most-requested onboarding kits, heritage copper sets, and festive chests. Fully customized with your corporate logo branding and delivered to agreed timelines.
          </p>
        </div>

        {/* 4-Card Grid with Framer Motion Stagger */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportConfig}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURED_SETS.map((set) => (
            <FeaturedSetCard key={set.id} set={set} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
