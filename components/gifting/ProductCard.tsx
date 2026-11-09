"use client";

import { useState } from "react";
import Image from "next/image";
import {
  type CatalogProduct,
  type QuantityTier,
  QUANTITY_TIERS,
  buildProductWhatsAppLink,
} from "../../lib/catalog-types";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import { useGifting } from "./GiftingProvider";

export interface ProductCardProps {
  product: CatalogProduct;
  className?: string;
}

function PillarFallbackGraphic({
  pillarId,
  sku,
}: {
  pillarId: CatalogProduct["pillarId"];
  sku: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-zinc-100 text-zinc-800">
      <div className="grid h-14 w-14 place-items-center rounded-xl border border-zinc-200 bg-white text-purple-600 shadow-xs">
        {pillarId === "joining-kits" && (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        )}
        {pillarId === "diaries-tech" && (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="12" y1="6" x2="16" y2="6" />
            <line x1="12" y1="10" x2="16" y2="10" />
          </svg>
        )}
        {pillarId === "bags-drinkware" && (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
        )}
        {pillarId === "patra-heritage" && (
          <svg className="h-7 w-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
        {pillarId === "gourmet-lifestyle" && (
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12v10H4V12" />
            <path d="M2 7h20v5H2z" />
            <path d="M12 22V7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        )}
      </div>
      <p className="mt-3 font-mono text-xs font-medium tracking-widest text-purple-700 uppercase">
        {sku}
      </p>
      <p className="mt-0.5 text-[0.7rem] font-medium text-zinc-500">
        B2B Enterprise Sample
      </p>
    </div>
  );
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const [selectedTier, setSelectedTier] = useState<QuantityTier>("50–99");
  const [imgError, setImgError] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const { items, addItem, removeItem } = useGifting();
  const shortlistKey = `product:${product.sku}`;
  const isShortlisted = items.some((item) => item.key === shortlistKey);

  const whatsappHref = buildProductWhatsAppLink(product, selectedTier);

  function handleTierChange(tier: QuantityTier) {
    setSelectedTier(tier);
  }

  function handleToggleShortlist() {
    if (isShortlisted) {
      removeItem(shortlistKey);
      setAddedFeedback(false);
    } else {
      addItem({
        key: shortlistKey,
        kind: "product",
        name: `${product.sku} · ${product.name}`,
        detail: `${product.categoryName} · Tier: ${selectedTier}`,
      });
      setAddedFeedback(true);
      window.setTimeout(() => setAddedFeedback(false), 3500);
    }
  }

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:-translate-y-1.5 ${className}`}
    >
      {/* Aspect Ratio Card Header with Badges & Fallback Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        {!imgError && product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt || product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <PillarFallbackGraphic pillarId={product.pillarId} sku={product.sku} />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-1.5 z-10">
          <span className="rounded-full border border-purple-500/30 bg-purple-50/90 px-2.5 py-0.5 font-mono text-[0.7rem] font-medium tracking-wider text-purple-700 backdrop-blur-md">
            SKU: {product.sku}
          </span>
        </div>

        <div className="pointer-events-none absolute right-3 top-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/90 px-2.5 py-0.5 text-[0.68rem] font-medium text-zinc-800 backdrop-blur-md shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {product.statusBadge || "B2B Bulk Ready"}
          </span>
        </div>

        {/* Bottom Category Badge */}
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[85%]">
          <span className="inline-block truncate rounded-md border border-zinc-200 bg-white/95 px-2 py-0.5 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-zinc-800 backdrop-blur-md shadow-xs">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-sans text-lg sm:text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-purple-700">
          {product.name}
        </h3>

        {product.highlights && (
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 line-clamp-2">
            {product.highlights}
          </p>
        )}

        {/* Specifications / Dimensions / Finishes */}
        {(product.dimensions || product.capacities || product.colors || product.finishes) && (
          <div className="mt-3 flex flex-wrap gap-1.5 text-[0.72rem] text-zinc-700">
            {product.dimensions && (
              <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-medium">
                📐 {product.dimensions}
              </span>
            )}
            {product.capacities && product.capacities.length > 0 && (
              <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-medium">
                ⚡ {product.capacities.join(" · ")}
              </span>
            )}
            {product.colors && product.colors.length > 0 && (
              <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-medium">
                🎨 {product.colors.slice(0, 2).join(", ")}
                {product.colors.length > 2 ? ` +${product.colors.length - 2}` : ""}
              </span>
            )}
          </div>
        )}

        {/* Kit Inclusions List */}
        {product.inclusions && product.inclusions.length > 0 && (
          <div className="mt-3.5 rounded-xl border border-zinc-200/90 bg-zinc-50/70 p-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.68rem] font-medium uppercase tracking-wider text-purple-700">
                Kit Inclusions
              </p>
              <span className="font-mono text-[0.68rem] font-medium text-zinc-500">
                {product.inclusions.length} {product.inclusions.length === 1 ? "item" : "items"}
              </span>
            </div>
            <ul className="mt-1.5 space-y-1 text-xs text-zinc-700">
              {product.inclusions.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="mt-0.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-purple-100 text-[9px] font-medium text-purple-700">
                    ✓
                  </span>
                  <span className="truncate leading-tight">{item}</span>
                </li>
              ))}
              {product.inclusions.length > 4 && (
                <li className="pt-0.5 text-[0.72rem] font-medium text-purple-700">
                  +{product.inclusions.length - 4} more items included
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Controls: Volume Tier & CTAs */}
      <div className="mt-auto pt-4 border-t border-zinc-100">
        {/* Volume Tier Dropdown */}
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <label
              htmlFor={`tier-${product.sku}`}
              className="text-xs font-medium text-zinc-700"
            >
              Volume Tier:
            </label>
            <span className="text-[0.68rem] font-mono text-purple-700 font-medium">
              {selectedTier.includes("Bundle Perk")
                ? "5%–10% Bundle Perk"
                : "MOQ: 25 units"}
            </span>
          </div>

          <div className="relative mt-1.5">
            <select
              id={`tier-${product.sku}`}
              value={selectedTier}
              onChange={(e) => handleTierChange(e.target.value as QuantityTier)}
              className="w-full appearance-none rounded-xl border border-zinc-300 bg-zinc-50/80 px-3 py-2 pr-8 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-400 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
            >
              {QUANTITY_TIERS.map((tier) => (
                <option key={tier} value={tier} className="bg-white text-zinc-900">
                  {tier} units
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleToggleShortlist}
            aria-pressed={isShortlisted}
            className={`btn !min-h-[40px] !px-3 !py-2 !text-xs font-medium transition-all flex-1 justify-center ${
              addedFeedback ? "animate-badge-pop" : ""
            } ${
              isShortlisted
                ? "!bg-purple-600 !text-white border border-purple-600 shadow-sm"
                : "btn-ghost !text-zinc-800 border-zinc-300 hover:!bg-zinc-100"
            }`}
          >
            {isShortlisted ? (
              <>
                <span className="text-white">✓</span> Shortlisted
              </>
            ) : (
              <>+ Shortlist</>
            )}
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !min-h-[40px] !px-3 !py-2 !text-xs font-medium flex-1 justify-center !bg-zinc-900 !text-white hover:!bg-zinc-800 transition-all shadow-sm"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 fill-current text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Shortlist Feedback Status */}
        <p
          role="status"
          aria-live="polite"
          className="mt-2 min-h-[1rem] text-[0.7rem] font-medium text-emerald-600 transition-opacity text-center"
        >
          {addedFeedback ? `${product.sku} added to your proposal shortlist.` : ""}
        </p>
      </div>
    </article>
  );
}
