"use client";

import { useState } from "react";
import Image from "next/image";
import {
  type CatalogProduct,
  type QuantityTier,
  QUANTITY_TIERS,
  buildProductWhatsAppLink,
} from "../../lib/catalog-types";
import { useGifting } from "./GiftingProvider";

export interface ProductCardProps {
  product: CatalogProduct;
  className?: string;
}

function WhatsAppIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
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

function PillarFallbackGraphic({
  pillarId,
  sku,
}: {
  pillarId: CatalogProduct["pillarId"];
  sku: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-plum/20 bg-cream/70 text-plum shadow-inner">
        {pillarId === "joining-kits" && (
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        )}
        {pillarId === "diaries-tech" && (
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="12" y1="6" x2="16" y2="6" />
            <line x1="12" y1="10" x2="16" y2="10" />
          </svg>
        )}
        {pillarId === "bags-drinkware" && (
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
        )}
        {pillarId === "patra-heritage" && (
          <svg className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
        {pillarId === "gourmet-lifestyle" && (
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12v10H4V12" />
            <path d="M2 7h20v5H2z" />
            <path d="M12 22V7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        )}
      </div>
      <p className="mt-3 font-mono text-xs font-bold tracking-widest text-plum/80 uppercase">
        {sku}
      </p>
      <p className="mt-0.5 text-[0.7rem] font-semibold text-ink/70">
        B2B Catalogue Sample
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
    if (isShortlisted) {
      addItem({
        key: shortlistKey,
        kind: "product",
        name: `${product.sku} · ${product.name}`,
        detail: `${product.categoryName} · Tier: ${tier}`,
      });
    }
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
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-plum/15 bg-paper p-5 shadow-sm transition-all duration-300 hover:border-plum/40 hover:shadow-lg ${className}`}
    >
      {/* Aspect Ratio Card Header with Badges & Fallback Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-plum/10 bg-gradient-to-br from-paper via-cream to-amber/20">
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

        {/* Top Badges */}
        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-1.5 z-10">
          <span className="rounded-full bg-plum/90 px-3 py-1 font-mono text-xs font-black tracking-wider text-paper shadow-sm backdrop-blur-sm">
            SKU: {product.sku}
          </span>
        </div>

        <div className="pointer-events-none absolute right-3 top-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-plum/20 bg-paper/95 px-2.5 py-1 text-[0.7rem] font-bold text-ink shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {product.statusBadge || "B2B Bulk Ready"}
          </span>
        </div>

        {/* Bottom Category Badge */}
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 max-w-[85%]">
          <span className="inline-block truncate rounded-lg border border-plum/15 bg-paper/95 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-plum shadow-sm backdrop-blur-sm">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="font-display text-xl sm:text-2xl italic leading-tight text-plum transition-colors group-hover:text-ink">
          {product.name}
        </h3>

        {product.highlights && (
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/85 line-clamp-2">
            {product.highlights}
          </p>
        )}

        {/* Specifications / Dimensions / Finishes */}
        {(product.dimensions || product.capacities || product.colors || product.finishes) && (
          <div className="mt-3 flex flex-wrap gap-1.5 text-[0.72rem] text-ink/75">
            {product.dimensions && (
              <span className="rounded-md border border-plum/15 bg-cream/40 px-2 py-0.5 font-medium">
                📐 {product.dimensions}
              </span>
            )}
            {product.capacities && product.capacities.length > 0 && (
              <span className="rounded-md border border-plum/15 bg-cream/40 px-2 py-0.5 font-medium">
                ⚡ {product.capacities.join(" · ")}
              </span>
            )}
            {product.colors && product.colors.length > 0 && (
              <span className="rounded-md border border-plum/15 bg-cream/40 px-2 py-0.5 font-medium">
                🎨 {product.colors.slice(0, 2).join(", ")}
                {product.colors.length > 2 ? ` +${product.colors.length - 2}` : ""}
              </span>
            )}
          </div>
        )}

        {/* Kit Inclusions List */}
        {product.inclusions && product.inclusions.length > 0 && (
          <div className="mt-3.5 rounded-xl border border-plum/10 bg-cream/50 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[0.68rem] font-black uppercase tracking-wider text-plum/80">
                Kit Inclusions
              </p>
              <span className="text-[0.68rem] font-bold text-ink/60">
                {product.inclusions.length} {product.inclusions.length === 1 ? "item" : "items"}
              </span>
            </div>
            <ul className="mt-1.5 space-y-1 text-xs text-ink/90">
              {product.inclusions.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="mt-0.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-plum/15 text-[9px] font-black text-plum">
                    ✓
                  </span>
                  <span className="truncate leading-tight">{item}</span>
                </li>
              ))}
              {product.inclusions.length > 4 && (
                <li className="pt-0.5 text-[0.72rem] font-bold text-plum">
                  +{product.inclusions.length - 4} more items included
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Controls: Volume Tier & CTAs */}
      <div className="mt-auto pt-4 border-t border-plum/15">
        {/* Volume Tier Dropdown */}
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <label
              htmlFor={`tier-${product.sku}`}
              className="text-xs font-bold text-ink/80"
            >
              Volume Tier:
            </label>
            <span className="text-[0.68rem] font-semibold text-plum/70">
              {selectedTier.includes("Bundle Perk")
                ? "⭐ 5%–10% Bundle Perk"
                : "MOQ: 25 units"}
            </span>
          </div>

          <div className="relative mt-1">
            <select
              id={`tier-${product.sku}`}
              value={selectedTier}
              onChange={(e) => handleTierChange(e.target.value as QuantityTier)}
              className="w-full appearance-none rounded-xl border-2 border-plum/25 bg-paper px-3 py-2 pr-8 text-xs font-bold text-ink transition-colors hover:border-plum focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/20"
            >
              {QUANTITY_TIERS.map((tier) => (
                <option key={tier} value={tier}>
                  {tier} units
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-plum">
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
            className={`btn !min-h-[44px] !px-3 !py-2.5 !text-xs font-bold transition-all flex-1 justify-center ${
              isShortlisted
                ? "!bg-plum !text-paper border-2 border-plum shadow-sm"
                : "btn-ghost !text-plum !shadow-none border-2 border-plum/30 hover:!border-plum"
            }`}
          >
            {isShortlisted ? (
              <>
                <span className="text-amber">✓</span> Shortlisted
              </>
            ) : (
              <>+ Shortlist</>
            )}
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sun !min-h-[44px] !px-3 !py-2.5 !text-xs font-bold flex-1 justify-center transition-all hover:brightness-105 shadow-sm"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 fill-current" />
            <span>WhatsApp Quote</span>
          </a>
        </div>

        {/* Shortlist Feedback Status */}
        <p
          role="status"
          aria-live="polite"
          className="mt-2 min-h-[1rem] text-[0.7rem] font-bold text-plum transition-opacity text-center"
        >
          {addedFeedback ? `${product.sku} added to your proposal shortlist.` : ""}
        </p>
      </div>
    </article>
  );
}
