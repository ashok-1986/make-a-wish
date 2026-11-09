"use client";

import { useEffect, useRef, useState } from "react";
import { useGifting } from "./GiftingProvider";
import { applyGiftingFilter } from "./filterNavigation";

export function CatalogueButton({
  interest,
  className = "btn",
  children,
}: {
  interest?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { openCatalogue } = useGifting();
  return (
    <button type="button" onClick={() => openCatalogue(interest)} className={className}>
      {children}
    </button>
  );
}

export function ShortlistButton({ className = "btn btn-ghost text-plum" }: { className?: string }) {
  const { openTray, items } = useGifting();
  const [popped, setPopped] = useState(false);
  const prevCount = useRef(items.length);

  useEffect(() => {
    if (items.length !== prevCount.current) {
      prevCount.current = items.length;
      setPopped(true);
      const timer = setTimeout(() => setPopped(false), 350);
      return () => clearTimeout(timer);
    }
  }, [items.length]);

  return (
    <button
      type="button"
      onClick={openTray}
      className={className}
      aria-label={`Open shortlist, ${items.length} ${items.length === 1 ? "item" : "items"}`}
    >
      Shortlist
      <span
        className={`inline-grid h-6 min-w-6 place-items-center rounded-full bg-sun px-1.5 text-xs font-black text-ink transition-transform ${
          popped ? "animate-badge-pop" : ""
        }`}
      >
        {items.length}
      </span>
    </button>
  );
}

export function YearRoundButton({
  className = "btn btn-ghost text-plum",
  children = "See year-round categories",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => applyGiftingFilter("year-round")} className={className}>
      {children}
    </button>
  );
}
