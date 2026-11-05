"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ShortlistItem } from "../../lib/gifting";

const STORAGE_KEY = "maw-corporate-shortlist-v1";
export const RFQ_SEED_KEY = "maw-rfq-seed-v1";

export type RFQSeed = {
  inquiryType?: string;
  notes?: string;
  nonce: number;
};

type GiftingContextValue = {
  items: ShortlistItem[];
  addItem: (item: ShortlistItem) => void;
  removeItem: (key: string) => void;
  clearItems: () => void;
  trayOpen: boolean;
  openTray: () => void;
  closeTray: () => void;
  catalogueOpen: boolean;
  catalogueInterest: string;
  openCatalogue: (interest?: string) => void;
  closeCatalogue: () => void;
  rfqSeed: RFQSeed | null;
  seedRFQ: (seed?: { inquiryType?: string; notes?: string }) => void;
};

const GiftingContext = createContext<GiftingContextValue | null>(null);

export function GiftingProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ShortlistItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [trayOpen, setTrayOpen] = useState(false);
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  const [catalogueInterest, setCatalogueInterest] = useState("All 14 categories");
  const [rfqSeed, setRfqSeed] = useState<RFQSeed | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed as ShortlistItem[]);
      }
    } catch {
      /* A corrupted or unavailable store should not block the page. */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* Storage can be unavailable in private modes. */
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: ShortlistItem) => {
    setItems((current) => {
      const existing = current.findIndex((entry) => entry.key === item.key);
      if (existing === -1) return [...current, item];
      const next = [...current];
      next[existing] = item;
      return next;
    });
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const clearItems = useCallback(() => setItems([]), []);

  const openTray = useCallback(() => setTrayOpen(true), []);
  const closeTray = useCallback(() => setTrayOpen(false), []);

  const openCatalogue = useCallback((interest?: string) => {
    if (interest) setCatalogueInterest(interest);
    setCatalogueOpen(true);
  }, []);

  const closeCatalogue = useCallback(() => setCatalogueOpen(false), []);

  const seedRFQ = useCallback((seed?: { inquiryType?: string; notes?: string }) => {
    const nextSeed = {
      inquiryType: seed?.inquiryType,
      notes: seed?.notes,
      nonce: Date.now(),
    };
    setRfqSeed(nextSeed);
    setTrayOpen(false);
    setCatalogueOpen(false);

    if (typeof window === "undefined") return;

    /* Keep the seed if the enquiry form lives on another page, so the buyer's
       shortlist is still waiting for them after the navigation. */
    try {
      window.sessionStorage.setItem(RFQ_SEED_KEY, JSON.stringify(nextSeed));
    } catch {
      /* Storage can be unavailable in private modes. */
    }

    window.setTimeout(() => {
      const form = document.getElementById("rfq-section");
      if (form) {
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "/contact#rfq-section";
      }
    }, 80);
  }, []);

  const value = useMemo<GiftingContextValue>(
    () => ({
      items,
      addItem,
      removeItem,
      clearItems,
      trayOpen,
      openTray,
      closeTray,
      catalogueOpen,
      catalogueInterest,
      openCatalogue,
      closeCatalogue,
      rfqSeed,
      seedRFQ,
    }),
    [
      items,
      addItem,
      removeItem,
      clearItems,
      trayOpen,
      openTray,
      closeTray,
      catalogueOpen,
      catalogueInterest,
      openCatalogue,
      closeCatalogue,
      rfqSeed,
      seedRFQ,
    ]
  );

  return <GiftingContext.Provider value={value}>{children}</GiftingContext.Provider>;
}

export function useGifting(): GiftingContextValue {
  const context = useContext(GiftingContext);
  if (!context) {
    throw new Error("useGifting must be used inside GiftingProvider");
  }
  return context;
}
