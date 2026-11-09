"use client";

import { motion } from "framer-motion";
import { PILLAR_CATEGORIES } from "../../lib/category-showcase-data";
import { PillarCategoryCard } from "./PillarCategoryCard";
import {
  staggerContainerVariants,
  defaultViewportConfig,
} from "../../lib/motion-tokens";

export function CategoryShowcaseSection() {
  const standardPillars = PILLAR_CATEGORIES.slice(0, 4);
  const flagshipPillar = PILLAR_CATEGORIES[4];

  return (
    <section
      id="pillar-showcase"
      aria-labelledby="category-showcase-heading"
      className="scroll-mt-20 border-b border-zinc-200 bg-[#F9F8F6] py-16 text-zinc-900 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-purple-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>5 Core Corporate Pillars</span>
          </div>

          <h2
            id="category-showcase-heading"
            className="mt-5 font-sans text-4xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] text-zinc-900 leading-[1.06] text-balance"
          >
            Five Core Disciplines, One Unified Production Partner.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto font-normal">
            No consumer retail noise or unmaintained product lists. Each pillar represents an end-to-end B2B production capability tailored for HR, administration, and procurement teams under a single GST invoice.
          </p>
        </div>

        {/* 2-Column Editorial Category Grid with Framer Motion Stagger */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportConfig}
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {standardPillars.map((pillar) => (
            <PillarCategoryCard key={pillar.id} pillar={pillar} />
          ))}

          {/* Flagship 5th Pillar: Turnkey Decor + Gifting (Spans Full Width) */}
          {flagshipPillar && (
            <div className="lg:col-span-2">
              <PillarCategoryCard pillar={flagshipPillar} isFlagship={true} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

