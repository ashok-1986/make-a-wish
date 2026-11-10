export type CatalogPillarId =
  | "all"
  | "joining-kits"
  | "diaries-tech"
  | "bags-drinkware"
  | "patra-heritage"
  | "gourmet-lifestyle";

export type QuantityTier =
  | "25–49"
  | "50–99"
  | "100–249 (Bundle Perk)"
  | "250+ Units";

export const QUANTITY_TIERS: QuantityTier[] = [
  "25–49",
  "50–99",
  "100–249 (Bundle Perk)",
  "250+ Units",
];

export interface CatalogProduct {
  sku: string;
  name: string;
  pillarId: Exclude<CatalogPillarId, "all">;
  categoryName: string;
  inclusions: string[];
  dimensions?: string;
  colors?: string[];
  finishes?: string[];
  capacities?: string[];
  occasionTags: string[];
  image: string;
  imageAlt?: string;
  statusBadge: string;
  highlights?: string;
}

export interface PillarMeta {
  id: Exclude<CatalogPillarId, "all">;
  name: string;
  shortName: string;
  description: string;
  brochureSource: string;
  iconName: string;
}

export const PILLARS: PillarMeta[] = [
  {
    id: "joining-kits",
    name: "Corporate Joining Kits & Multi-Item Combos",
    shortName: "Joining Kits & Combos",
    description:
      "Curated 2-in-1 to 6-in-1 executive gift sets and new-hire onboarding packages with custom logo branding.",
    brochureSource: "Make A Wish Brochure, Pages 2–10",
    iconName: "briefcase",
  },
  {
    id: "diaries-tech",
    name: "Office Diaries, Stationery, Desk Tech & New Year Essentials",
    shortName: "Diaries, Pens & Tech",
    description:
      "Power bank diaries, lifetime calendars, metal roller pens, USB pendrives, and rotating desktop mobile stands.",
    brochureSource: "Make A Wish Brochure, Pages 11–35, 46–54",
    iconName: "calendar",
  },
  {
    id: "bags-drinkware",
    name: "Corporate Bags, Travel Organizers, Drinkware & Lunchware",
    shortName: "Backpacks & Drinkware",
    description:
      "Anti-theft laptop backpacks, double-layer cable organizers, vacuum flasks, and SUS304 insulated tiffin sets.",
    brochureSource: "Make A Wish Brochure, Pages 36–45, 55",
    iconName: "cup",
  },
  {
    id: "patra-heritage",
    name: "Pure Copper & Heritage Brassware Collections",
    shortName: "Pure Copperware & Brass",
    description:
      "Handcrafted pure copper water bottles, table pots, matkas, South Indian brass coffee dabara sets, and Kalai cookware.",
    brochureSource: "Make a Wish Heritage Metalcraft Collection",
    iconName: "sparkles",
  },
  {
    id: "gourmet-lifestyle",
    name: "Gourmet Edibles, Precious Metals & Lifestyle Hampers",
    shortName: "Gourmet, Silver & Lifestyle",
    description:
      "Airtight luxury glass jar hampers, 999 pure silver coins, scented candles, perfumes, and bundled event decor.",
    brochureSource: "Hampers Catalogue + Extended Portfolio",
    iconName: "gift",
  },
];
