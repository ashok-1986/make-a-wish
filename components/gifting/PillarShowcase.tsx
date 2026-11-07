"use client";

import { useEffect, useId, useMemo, useState } from "react";
import {
  type CatalogPillarId,
  type PillarMeta,
  PILLARS,
} from "../../lib/catalog-types";
import {
  getPillarCount,
  searchCatalog,
} from "../../lib/catalog-data";
import { whatsappLink } from "../../lib/site";
import { useGifting } from "./GiftingProvider";
import { ProductCard } from "./ProductCard";

export interface PillarShowcaseProps {
  initialPillar?: CatalogPillarId;
  initialQuery?: string;
  className?: string;
}

function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function PillarShowcase({
  initialPillar = "all",
  initialQuery = "",
  className = "",
}: PillarShowcaseProps) {
  const [selectedPillar, setSelectedPillar] = useState<CatalogPillarId>(initialPillar);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const searchInputId = useId();

  const { openCatalogue, seedRFQ } = useGifting();

  // Listen for hash-based navigation (e.g. /#pillar-showcase or pillar changes)
  useEffect(() => {
    function handleHashSync() {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      const match = hash.match(/pillar=([a-z-]+)/);
      if (match && match[1]) {
        const pillarCandidate = match[1] as CatalogPillarId;
        if (pillarCandidate === "all" || PILLARS.some((p) => p.id === pillarCandidate)) {
          setSelectedPillar(pillarCandidate);
        }
      }
    }

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  // Filtered products list via memoized catalog search
  const filteredProducts = useMemo(() => {
    return searchCatalog(searchQuery, selectedPillar);
  }, [searchQuery, selectedPillar]);

  // Current active pillar metadata (if a specific pillar is selected)
  const currentPillarMeta: PillarMeta | undefined = useMemo(() => {
    if (selectedPillar === "all") return undefined;
    return PILLARS.find((p) => p.id === selectedPillar);
  }, [selectedPillar]);

  // Reset all search and pillar filters
  function handleResetFilters() {
    setSearchQuery("");
    setSelectedPillar("all");
  }

  const customKitWhatsAppHref = whatsappLink(
    [
      "Hello Make a Wish, I would like to inquire about curating a custom corporate gifting kit combining items across your 5 B2B pillars.",
      "",
      "• Company Name:",
      "• Estimated Quantity (25+ units):",
      "• Target Delivery Date / Occasion:",
      "• Desired Items / Inclusions:",
      "",
      "Please share your B2B rate card, branding options, and proposal.",
    ].join("\n")
  );

  return (
    <section
      id="pillar-showcase"
      className={`relative scroll-mt-20 border-b border-zinc-200 bg-[#F9F8F6] py-16 text-zinc-900 md:py-24 ${className}`}
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Showcase Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>5 Core B2B Gifting Pillars</span>
          </div>

          <h2
            id="showcase-heading"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-zinc-900 leading-tight"
          >
            Year-Round Utility &amp; Executive Combos.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
            Explore 49+ bulk-ready employee onboarding kits, executive tech desk suites, anti-theft backpacks, handcrafted pure copperware, and luxury hampers. Fully customizable with your corporate logo branding under a single GST invoice.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative flex items-center">
            <label htmlFor={searchInputId} className="sr-only">
              Search by SKU or keyword
            </label>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
              <SearchIcon className="h-5 w-5" />
            </div>

            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by SKU (e.g. H989, PT-C), Diary, Copper, Backpack, Tumbler..."
              className="w-full rounded-2xl border border-zinc-300 bg-white py-3.5 pl-11 pr-11 text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 shadow-sm transition-colors focus:border-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-600/20"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 hover:text-zinc-900">
                  ✕
                </span>
              </button>
            )}
          </div>

          {/* Quick SKU Chips */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs text-zinc-500">
            <span className="font-mono text-purple-700 font-semibold">Popular:</span>
            {["H989 (5-in-1)", "H930 (6-in-1)", "D01 (Power Bank)", "PT-C (Copper)", "B901 (Laptop Bag)"].map(
              (chip) => {
                const skuCode = chip.split(" ")[0];
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setSearchQuery(skuCode)}
                    className="rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 font-mono text-[0.72rem] text-zinc-700 transition-colors hover:border-purple-500/40 hover:text-purple-700 shadow-xs"
                  >
                    {chip}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* 5-Pillar Filter Tabs */}
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="5 B2B Gifting Pillars"
            className="flex max-w-full gap-2 overflow-x-auto pb-2 scrollbar-none"
          >
            {/* "All Products" Tab */}
            <button
              type="button"
              role="tab"
              aria-selected={selectedPillar === "all"}
              onClick={() => setSelectedPillar("all")}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                selectedPillar === "all"
                  ? "border-purple-600 bg-purple-600 text-white font-bold shadow-md"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900"
              }`}
            >
              <span>All Products</span>
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[0.7rem] font-bold ${
                  selectedPillar === "all"
                    ? "bg-white/20 text-white"
                    : "bg-zinc-100 text-zinc-600"
                }`}
              >
                {getPillarCount("all")}
              </span>
            </button>

            {/* Individual Pillar Tabs */}
            {PILLARS.map((pillar) => {
              const isActive = selectedPillar === pillar.id;
              const count = getPillarCount(pillar.id);
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "border-purple-600 bg-purple-600 text-white font-bold shadow-md"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900"
                  }`}
                >
                  <span>{pillar.shortName}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[0.7rem] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Citation / Description Banner */}
        {currentPillarMeta && (
          <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-zinc-200/90 bg-white p-5 text-center shadow-sm">
            <h3 className="font-sans text-xl font-bold text-zinc-900">
              {currentPillarMeta.name}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-600">
              {currentPillarMeta.description}
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-50 px-3 py-0.5 text-[0.7rem] font-mono text-purple-700 font-semibold">
              <span>Source:</span>
              <span>{currentPillarMeta.brochureSource}</span>
            </div>
          </div>
        )}

        {/* Active Results Summary Indicator */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <p className="text-xs sm:text-sm font-medium text-zinc-400">
            Showing{" "}
            <span className="font-bold text-white">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}{" "}
            {selectedPillar !== "all"
              ? `in ${currentPillarMeta?.shortName}`
              : "across all 5 pillars"}
            {searchQuery.trim() && (
              <>
                {" "}
                matching &ldquo;
                <span className="font-bold text-purple-300">{searchQuery.trim()}</span>
                &rdquo;
              </>
            )}
          </p>

          {(searchQuery || selectedPillar !== "all") && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
            >
              Reset filters &amp; view all
            </button>
          )}
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        ) : (
          /* Informative Empty State */
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-dashed border-white/20 bg-[#131019] p-8 sm:p-12 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#1A1624] text-purple-400">
              <SearchIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-sans text-xl font-bold text-white">
              No matching products found
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
              We couldn&rsquo;t find any products matching &ldquo;
              <span className="font-bold text-white">{searchQuery}</span>&rdquo;{" "}
              {selectedPillar !== "all" ? `in ${currentPillarMeta?.shortName}` : ""}.
              Try searching with another SKU code (e.g. H989, PT-C, D01) or broader keyword.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn !min-h-[40px] !px-4 !py-2 !text-xs"
              >
                Reset Search &amp; Show All
              </button>
              <a
                href={customKitWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !min-h-[40px] !px-4 !py-2 !text-xs"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Direct WhatsApp Custom Kit Banner */}
        <div className="mt-16 sm:mt-20 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111] p-6 sm:p-10 md:p-12 shadow-2xl text-white">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                Custom Combinations &amp; Bespoke Brand Curation
              </p>
              <h3 className="mt-3 font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Need a Custom Employee Kit or Cross-Pillar Combo?
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                Mix and match items across all 5 pillars into a single custom-branded gift box.
                Pair a pure copper bottle with a power bank diary, metal roller pen, and luxury
                dry fruit jar inside a customized magnetic rigid box with your corporate logo foil-embossed.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Volume Perks: 5%–10% on 100+ units</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>UV, Screen &amp; Laser Logo Engraving</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Low Minimum Order Quantity: 25 units</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Turnkey Doorstep Dispatch Pan-India</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:col-span-4 lg:items-stretch justify-center">
              <a
                href={customKitWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn !min-h-[46px] !px-6 !py-2.5 !text-sm font-bold justify-center"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  seedRFQ({
                    inquiryType: "Custom 5-Pillar Corporate Kit",
                    notes: "Inquiring about custom multi-pillar kit assembly with custom logo branding.",
                  })
                }
                className="btn btn-ghost !min-h-[46px] !px-6 !py-2.5 !text-sm font-bold justify-center"
              >
                Send Request via RFQ
              </button>

              <button
                type="button"
                onClick={() => openCatalogue("5 Core Gifting Pillars")}
                className="text-center text-xs font-mono font-medium text-zinc-400 hover:text-purple-300 underline underline-offset-4 transition-colors pt-1"
              >
                Request Full PDF Catalogue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
