# Year-Round Corporate Gifting Implementation Plan (PRD v3.0)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Make a Wish website from seasonal festive gifting into a 365-day B2B Corporate Gifting Flagship featuring the 5 Scalable B2B Pillars (H-Series Joining Kits & Combos, Executive Diaries & Desk Tech, Bags & Drinkware, PATRA Pure Copperware & Artisanal Brassware, and Gourmet/Lifestyle Hampers) with instant SKU search, per-product WhatsApp deep-linking, and zero-price B2B quoting.

**Architecture:** A zero-backend, statically-rendered Next.js 16 (App Router) + TypeScript + Tailwind CSS application. All product data is centralized into an extensible, typed catalog module (`lib/catalog-data.ts`) with helper functions for live instant filtering, SKU lookup, and WhatsApp quote message generation (`wa.me/919773411805`). Form submissions provide both direct WhatsApp generation and optional serverless webhook relay (`makeawishevents@gmail.com`).

**Tech Stack:** Next.js 16 (App Router with Turbopack), React 18, TypeScript (strict), Tailwind CSS 3, Node.js built-in test runner (`node:test`).

**Spec:** `make_a_wish_corporate_gifting_prd_and_architecture.md`

## Global Constraints

- **Strictly Price-Free:** No Rupee (`₹`), `Rs.`, or numeric currency values in UI, metadata, or generated messages. All items display `"Request B2B Volume Quote"`.
- **Primary WhatsApp Desk:** `+91 97734 11805` (digits `919773411805`).
- **Primary Corporate Email:** `makeawishevents@gmail.com`.
- **No Heavy Backend:** No SQL databases or custom servers; runs 100% serverless/static on Vercel.
- **Service Hubs:** Navi Mumbai (Panvel, Kharghar, Belapur, Nerul, Vashi, Airoli), Thane, and Greater Mumbai.

---

### Task 1: Update Core Site Metadata & Contact Configuration

**Files:**
- Modify: `lib/site.ts:1-85`
- Test: `tests/site-config.test.mjs`

**Interfaces:**
- Consumes: Environment variables (optional) and PRD contact information.
- Produces: `contact` object (`display: "+91 97734 11805"`, `whatsappNumber: "919773411805"`, `email: "makeawishevents@gmail.com"`), `announcement` object, `navLinks` representing the 5 B2B Pillars.

- [ ] **Step 1: Write test for site contact & navigation configuration**

Create `tests/site-config.test.mjs`:
```javascript
import test from "node:test";
import assert from "node:assert/strict";
import { contact, announcement, navLinks } from "../lib/site.ts";

test("site configuration uses PRD v3.0 contact details", () => {
  assert.equal(contact.display, "+91 97734 11805");
  assert.match(contact.whatsapp, /wa\.me\/919773411805/);
  assert.equal(contact.emailLabel, "makeawishevents@gmail.com");
});

test("announcement bar reflects year-round B2B corporate gifting", () => {
  assert.match(announcement.text, /Joining Kits|Combos|PATRA Copper/i);
});

test("navLinks contains links to corporate pillars and RFQ", () => {
  const names = navLinks.map((l) => l.name);
  assert.ok(names.some((n) => n.includes("Joining Kits") || n.includes("Combos")));
  assert.ok(names.some((n) => n.includes("PATRA") || n.includes("Copper")));
});
```

- [ ] **Step 2: Run test to verify it fails**

Run:
```bash
node --loader ts-node/esm tests/site-config.test.mjs
```
*(or run with tsx / node test)*
Expected: FAIL due to existing older phone number and announcement text.

- [ ] **Step 3: Update `lib/site.ts` with PRD v3.0 specs**

Update `lib/site.ts`:
```typescript
/* Single source of truth for site content and contact details.
   Env vars (set in Vercel / .env.local) override the defaults below. */

export const SITE_NAME = "Make a Wish";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919773411805"; // digits only, with country code
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919773411805";
const secondaryPhoneNumber = process.env.NEXT_PUBLIC_SECONDARY_PHONE_NUMBER || "+919987119558";
const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "makeawishevents@gmail.com";

export const DEFAULT_MESSAGE =
  "Hello Make a Wish, I would like to enquire about Year-Round Corporate Gifting, Employee Joining Kits and Turnkey Solutions.";

/* WhatsApp click-to-chat link with a pre-filled message */
export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  display: "+91 97734 11805",
  secondaryDisplay: "+91 99871 19558",
  whatsapp: whatsappLink(),
  phone: `tel:${phoneNumber}`,
  phoneLabel: "+91 97734 11805",
  secondaryPhone: `tel:${secondaryPhoneNumber}`,
  secondaryPhoneLabel: "+91 99871 19558",
  email: `mailto:${emailAddress}`,
  emailLabel: emailAddress,
  locations: "Navi Mumbai (Panvel, Kharghar, Belapur, Nerul, Vashi, Airoli), Thane & Mumbai",
};

/* Top Bar Announcement */
export const announcement = {
  text: "Corporate Gifting Solutions | Employee Joining Kits • Executive Combos • PATRA Copper & Brassware • Bulk Event + Gifting Bundles (5%–10% Off)",
  cta: "Request B2B Quote",
};

export type NavLink = {
  name: string;
  href: string;
  pillarId?: string;
};

export const navLinks: NavLink[] = [
  { name: "Joining Kits & Combos", href: "/#pillar-showcase", pillarId: "joining-kits" },
  { name: "Diaries & Tech", href: "/#pillar-showcase", pillarId: "diaries-tech" },
  { name: "Bags & Drinkware", href: "/#pillar-showcase", pillarId: "bags-drinkware" },
  { name: "PATRA Copper & Brass", href: "/#pillar-showcase", pillarId: "patra-heritage" },
  { name: "Gourmet Hampers", href: "/#pillar-showcase", pillarId: "gourmet-lifestyle" },
  { name: "Inquire / WhatsApp", href: "/#rfq-section" },
];
```

- [ ] **Step 4: Run test to verify it passes**

Run:
```bash
npx tsc --noEmit
```
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add lib/site.ts
git commit -m "feat: update site contact and top announcement for PRD v3.0"
```

---

### Task 2: Define the Unified 5-Pillar Catalog Schema

**Files:**
- Create: `lib/catalog-types.ts`
- Test: `tests/catalog-types.test.ts`

**Interfaces:**
- Consumes: None.
- Produces: `CatalogPillarId`, `CatalogProduct`, `PillarMeta`, `QuantityTier`, helper type definitions.

- [ ] **Step 1: Write test for catalog types and schema validation**

Create `tests/catalog-types.test.ts`:
```typescript
import { CatalogProduct, CatalogPillarId, buildProductWhatsAppLink } from "../lib/catalog-types";

const sampleProduct: CatalogProduct = {
  sku: "H989",
  name: "5 in 1 Premium Corporate Joining Kit",
  pillarId: "joining-kits",
  categoryName: "5-in-1 Combo Gift Sets",
  inclusions: [
    "A5 Size Diary",
    "900ml Steel Water Bottle",
    "Metal Ball Pen",
    "Foldable Mobile Stand",
    "Office Laptop Bag",
  ],
  colors: ["Black", "Charcoal Grey"],
  occasionTags: ["Employee Onboarding", "Year-Round Corporate"],
  image: "/images/catalog/h989-joining-kit.webp",
  statusBadge: "B2B Bulk Ready",
  highlights: "Complete onboarding kit in customized presentation packaging",
};

const link = buildProductWhatsAppLink(sampleProduct, "100–249");
if (!link.includes("H989") || !link.includes("100%E2%80%93249")) {
  throw new Error("Invalid WhatsApp link generation");
}
console.log("Catalog types test passed successfully.");
```

- [ ] **Step 2: Implement `lib/catalog-types.ts`**

Create `lib/catalog-types.ts`:
```typescript
export type CatalogPillarId =
  | "all"
  | "joining-kits"
  | "diaries-tech"
  | "bags-drinkware"
  | "patra-heritage"
  | "gourmet-lifestyle";

export type QuantityTier = "25–49" | "50–99" | "100–249 (Bundle Perk)" | "250+ Units";

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
    description: "Curated 2-in-1 to 6-in-1 executive gift sets and new-hire onboarding packages with custom logo branding.",
    brochureSource: "Make A Wish Brochure, Pages 2–10",
    iconName: "briefcase",
  },
  {
    id: "diaries-tech",
    name: "Office Diaries, Stationery, Desk Tech & New Year Essentials",
    shortName: "Diaries, Pens & Tech",
    description: "Power bank diaries, lifetime calendars, metal roller pens, USB pendrives, and rotating desktop mobile stands.",
    brochureSource: "Make A Wish Brochure, Pages 11–35, 46–54",
    iconName: "calendar",
  },
  {
    id: "bags-drinkware",
    name: "Corporate Bags, Travel Organizers, Drinkware & Lunchware",
    shortName: "Backpacks & Drinkware",
    description: "Anti-theft laptop backpacks, double-layer cable organizers, vacuum flasks, and SUS304 insulated tiffin sets.",
    brochureSource: "Make A Wish Brochure, Pages 36–45, 55",
    iconName: "cup",
  },
  {
    id: "patra-heritage",
    name: "PATRA Pure Copperware & Artisanal Brassware Collections",
    shortName: "PATRA Copper & Brass",
    description: "Handcrafted copper water bottles, table pots, matkas, South Indian brass coffee dabara sets, and Kalai cookware.",
    brochureSource: "PATRA Copper & Brass Catalogues",
    iconName: "sparkles",
  },
  {
    id: "gourmet-lifestyle",
    name: "Gourmet Edibles, Precious Metals & Lifestyle Hampers",
    shortName: "Gourmet, Silver & Lifestyle",
    description: "Airtight luxury glass jar hampers, 999 pure silver coins, scented candles, perfumes, and bundled event decor.",
    brochureSource: "Hampers Catalogue + Extended Portfolio",
    iconName: "gift",
  },
];

export function buildProductWhatsAppLink(
  product: CatalogProduct,
  quantityTier: string = "50–99",
  phoneNumber: string = "919773411805"
): string {
  const message = [
    `Hi Make A Wish, we would like a B2B volume quote:`,
    `• Product: ${product.name}`,
    `• SKU: ${product.sku}`,
    `• Pillar: ${product.categoryName}`,
    `• Estimated Quantity Tier: ${quantityTier}`,
    `Please share the catalogue sheet, branding options, and lead times.`,
  ].join("\n");

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 3: Run TypeScript compiler to verify types**

Run:
```bash
npx tsc --noEmit
```
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add lib/catalog-types.ts
git commit -m "feat: define extensible 5-pillar catalog schema and WhatsApp message builder"
```

---

### Task 3: Build the Centralized Catalog Data Repository

**Files:**
- Create: `lib/catalog-data.ts`
- Test: `tests/catalog-data.test.ts`

**Interfaces:**
- Consumes: `lib/catalog-types.ts`.
- Produces: `CATALOG_PRODUCTS: CatalogProduct[]`, `searchCatalog(query, pillarId)` function, `getAllSkus()` function.

- [ ] **Step 1: Write unit test to verify complete catalog coverage and price-free compliance**

Create `tests/catalog-data.test.ts`:
```typescript
import { CATALOG_PRODUCTS, searchCatalog } from "../lib/catalog-data";

// 1. Total product count check
if (CATALOG_PRODUCTS.length < 25) {
  throw new Error(`Expected at least 25 core SKUs, found ${CATALOG_PRODUCTS.length}`);
}

// 2. Check each pillar is represented
const pillars = new Set(CATALOG_PRODUCTS.map((p) => p.pillarId));
const requiredPillars = ["joining-kits", "diaries-tech", "bags-drinkware", "patra-heritage", "gourmet-lifestyle"];
for (const req of requiredPillars) {
  if (!pillars.has(req as any)) {
    throw new Error(`Missing pillar in catalog: ${req}`);
  }
}

// 3. Price-free rule check: ensure NO rupee or numeric price strings
for (const p of CATALOG_PRODUCTS) {
  const json = JSON.stringify(p);
  if (json.includes("₹") || json.includes("Rs.") || json.includes("MRP")) {
    throw new Error(`Price found in product ${p.sku}! All items must be price-free.`);
  }
}

// 4. Test instant search function
const searchResults = searchCatalog("H989", "all");
if (!searchResults.some((p) => p.sku === "H989")) {
  throw new Error("Instant search for SKU H989 failed.");
}

const copperResults = searchCatalog("Copper", "all");
if (copperResults.length === 0) {
  throw new Error("Search for 'Copper' yielded no results.");
}

console.log("Catalog data test passed successfully.");
```

- [ ] **Step 2: Implement `lib/catalog-data.ts`**

Create `lib/catalog-data.ts` containing:
- **Pillar A (Joining Kits & Combos):** `H989` (5-in-1 Joining Kit), `H930` (6-in-1 Executive Combo), `H934` (6-in-1 with Pendrive), `H935` (6-in-1 Luxury), `H903` (4-in-1 Diary/Bottle/Pen/Keychain), `H979` (4-in-1 Passport/Wallet Combo), `H971` (3-in-1 Electric/Vacuum Kettle Mug Set), `H975` (3-in-1 360° Stand/Pen/Key Combo), `H913` (2-in-1 Diary & Pen), `H931` (2-in-1 Lunch Box & Bottle).
- **Pillar B (Diaries, Stationery & Tech):** `H1024` (8000mAh Power Bank Diary with Wireless/Cable Charging), `H1021` (Planner Diary with Card Slots), `H1049` (A5 Diary with Mobile Holder), `H124` (Steel Lifetime Desktop Calendar with Clock), `H1301` (Rotating Month Plate Lifetime Calendar), `H246` (Executive Metal Roller Pen), `H280` (Stylus Touch Metal Pen), `H010` (4-in-1 Multi-Utility Screwdriver/Ruler Pen), `H1407` (360° Rotating Aluminum Mobile/Tablet Stand), `H1081` (Swivel Metal USB Pendrive 32GB/64GB), `H1709` (7-in-1 Earbuds & Tech Cleaner).
- **Pillar C (Bags, Organizers & Drinkware):** `H1543` (Anti-Theft Laptop Backpack with USB Port), `H1508` (Large-Capacity Air-Vacuum Travel Backpack), `H1502` (Double-Layer Travel Cable & Tech Organizer), `H1510` (RFID Travel Passport & Card Wallet), `H055` (Stainless Steel 900ml Ergonomic Sipper Bottle), `H047` (Double-Wall Hot & Cold Vacuum Flask 750ml), `H701` (Insulated Steel Desk Mug with Wooden Handle), `H2601` (SUS304 3-Compartment Insulated Lunch Box with Cutlery).
- **Pillar D (PATRA Copper & Brassware):** `PT-C-FTH` (PATRA Feather Pure Copper Water Bottle 1000ml), `PT-C-PARI` (PATRA Pari Copper Bottle with Hammer Finish), `PT-C-MEGH` (PATRA Megh Copper Bottle with Inbuilt Glass Tumbler), `PT-C-ZR` (PATRA Zarna Designer Printed Copper Bottle), `PT-C-RJW-POT` (PATRA Rajwadi Pure Copper Table Pot 1500ml), `PT-C-MTK-08` (PATRA Heritage Copper Matka Dispenser 8L with Brass Tap), `PT-B-CFF-SET` (PATRA Authentic South Indian Brass Coffee Dabara & Filter Set), `PT-B-TMB-04` (PATRA Mandala Royal Brass Tumblers Set of 4), `PT-B-KL-POT` (PATRA Traditional A2 Ghee Pot with Kalai Coating), `PT-B-SM-12` (PATRA Kerala Heritage Samai Brass Lamp).
- **Pillar E (Gourmet, Precious Metals & Lifestyle):** `HMP-6J-EMR` (Emerald Jaali 6 Luxury Glass Jars Gourmet Hamper), `HMP-4C-GLD` (Gold Palace 4-Cavity Gourmet Dry-Fruit Box), `HMP-ECO-JUTE` (Artisanal Eco-Jute Corporate Hamper Bag), `SLV-999-COIN` (999 Purity Certified Silver Corporate Coin in Velvet Case), `LFS-SCNT-CND` (Hand-Poured Soy Wax Scented Aromatherapy Candles Set), `TRN-EVT-BNDL` (Turnkey Corporate Event Decor + 100 Hamper B2B Bundle Package with 10% Bundle Discount).

Include search utility:
```typescript
export function searchCatalog(query: string, pillarId: CatalogPillarId = "all"): CatalogProduct[] {
  const q = query.trim().toLowerCase();
  return CATALOG_PRODUCTS.filter((product) => {
    const matchesPillar = pillarId === "all" || product.pillarId === pillarId;
    if (!matchesPillar) return false;
    if (!q) return true;

    return (
      product.sku.toLowerCase().includes(q) ||
      product.name.toLowerCase().includes(q) ||
      product.categoryName.toLowerCase().includes(q) ||
      product.inclusions.some((inc) => inc.toLowerCase().includes(q)) ||
      product.occasionTags.some((tag) => tag.toLowerCase().includes(q)) ||
      (product.highlights && product.highlights.toLowerCase().includes(q))
    );
  });
}
```

- [ ] **Step 3: Run TypeScript compiler to verify code**

Run:
```bash
npx tsc --noEmit
```
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add lib/catalog-data.ts
git commit -m "feat: populate comprehensive 5-pillar catalog data repository with zero-price model"
```

---

### Task 4: Create the Interactive 5-Pillar Showcase Component with Live Search

**Files:**
- Create: `components/gifting/PillarShowcase.tsx`
- Create: `components/gifting/ProductCard.tsx`
- Test: Build and visual check via `npm run build`

**Interfaces:**
- Consumes: `lib/catalog-types.ts`, `lib/catalog-data.ts`, `GiftingProvider` shortlist context.
- Produces: An interactive Client Component with:
  - Sticky/responsive 5-pillar filter tab buttons with counts.
  - Live instant SKU & keyword search box (`"Search by SKU (H989, PT-C), Diary, Copper, Backpack..."`).
  - Product cards with SKU badge, bulleted inclusions, quantity tier dropdown (`25–49`, `50–99`, `100–249`, `250+`), `"Shortlist"` button, and 1-tap `"Inquire on WhatsApp"` button.
  - Empty state with reset search button.

- [ ] **Step 1: Implement `components/gifting/ProductCard.tsx`**

Create `components/gifting/ProductCard.tsx`:
```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { CatalogProduct, QuantityTier, buildProductWhatsAppLink } from "@/lib/catalog-types";
import { useGifting } from "./GiftingProvider";

interface ProductCardProps {
  product: CatalogProduct;
}

const QUANTITY_TIERS: QuantityTier[] = [
  "25–49",
  "50–99",
  "100–249 (Bundle Perk)",
  "250+ Units",
];

export function ProductCard({ product }: ProductCardProps) {
  const [selectedTier, setSelectedTier] = useState<QuantityTier>("50–99");
  const { toggleShortlist, isShortlisted } = useGifting();
  const shortlisted = isShortlisted(`sku:${product.sku}`);

  const whatsappHref = buildProductWhatsAppLink(product, selectedTier);

  return (
    <article className="group relative flex flex-col rounded-2xl border border-plum/15 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-plum/40">
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-paper">
        <Image
          src={product.image}
          alt={product.imageAlt || product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-ink/90 px-2.5 py-1 text-xs font-bold tracking-wider text-white">
            SKU: {product.sku}
          </span>
          <span className="rounded-md bg-amber/90 px-2 py-1 text-xs font-semibold text-ink">
            {product.statusBadge}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-plum">
          {product.categoryName}
        </p>
        <h3 className="mt-1 text-base font-bold text-ink group-hover:text-plum">
          {product.name}
        </h3>
        {product.highlights && (
          <p className="mt-1 text-xs text-ink/70 line-clamp-2">{product.highlights}</p>
        )}

        {product.inclusions && product.inclusions.length > 0 && (
          <div className="mt-3 rounded-lg bg-paper/60 p-2.5">
            <p className="text-[11px] font-bold uppercase text-ink/60">Kit Inclusions:</p>
            <ul className="mt-1 space-y-0.5 text-xs text-ink/80">
              {product.inclusions.slice(0, 4).map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-plum" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
              {product.inclusions.length > 4 && (
                <li className="text-[11px] font-medium text-plum">
                  +{product.inclusions.length - 4} more inclusions
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-plum/10">
        <div className="mb-3 flex items-center justify-between text-xs">
          <label htmlFor={`tier-${product.sku}`} className="font-semibold text-ink/80">
            Est. Volume:
          </label>
          <select
            id={`tier-${product.sku}`}
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value as QuantityTier)}
            className="rounded-lg border border-plum/20 bg-white px-2 py-1 text-xs font-medium text-ink focus:border-plum focus:outline-none"
          >
            {QUANTITY_TIERS.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() =>
              toggleShortlist({
                key: `sku:${product.sku}`,
                kind: "hamper",
                name: `${product.sku} - ${product.name}`,
                detail: `${product.categoryName} (${selectedTier})`,
              })
            }
            className={`flex-1 rounded-lg border py-2 text-xs font-bold transition ${
              shortlisted
                ? "border-plum bg-plum text-white"
                : "border-plum/30 bg-white text-plum hover:bg-paper"
            }`}
          >
            {shortlisted ? "✓ Shortlisted" : "+ Shortlist"}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-emerald-600 py-2 text-center text-xs font-bold text-white transition hover:bg-emerald-700"
          >
            WhatsApp Quote
          </a>
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Implement `components/gifting/PillarShowcase.tsx`**

Create `components/gifting/PillarShowcase.tsx` with:
- Top pillar tabs (All, Joining Kits, Diaries & Tech, Bags & Drinkware, PATRA Copper & Brass, Gourmet & Lifestyle).
- Live search input filter with clear button.
- Grid of `ProductCard` items.
- Active item count and empty search state.

- [ ] **Step 3: Run TypeScript compiler to verify imports and props**

Run:
```bash
npx tsc --noEmit
```
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add components/gifting/ProductCard.tsx components/gifting/PillarShowcase.tsx
git commit -m "feat: implement interactive 5-pillar showcase and product card with live SKU search"
```

---

### Task 5: Upgrade Home Page Hero & Sections to Year-Round Corporate Narrative

**Files:**
- Modify: `components/home/HeroSection.tsx`
- Modify: `components/AnnouncementBar.tsx`
- Modify: `app/page.tsx`
- Test: Build verification with `npm run build`

**Interfaces:**
- Consumes: `lib/site.ts`, `components/gifting/PillarShowcase.tsx`.
- Produces: Homepage leading with Year-Round Corporate B2B narrative, 4-card spotlight, and embedded 5-Pillar Showcase.

- [ ] **Step 1: Update `components/home/HeroSection.tsx`**

Update the hero text to reflect PRD v3.0:
- **Headline (H1):** `"Elevate Employee Onboarding, Client Relations & Corporate Milestones."`
- **Subhead:** `"Curated 2-in-1 to 6-in-1 Joining Kits, Executive Diaries, Laptop Backpacks, PATRA Pure Copper & Brassware, and Luxury Gourmet Hampers. Customized with your brand identity."`
- **CTAs:**
  - Primary: `"Explore Corporate Catalogue"` (`href="#pillar-showcase"`)
  - Secondary: `"Direct WhatsApp Desk"` (`href="https://wa.me/919773411805?text=..."`)
- **4-Card Visual Spotlight:**
  1. Employee Joining Kits (`H989` 5-in-1)
  2. PATRA Copper & Artisanal Brassware
  3. Executive Tech Diaries & Backpacks
  4. Turnkey Corporate Event + Hamper Bundles (5%–10% Off)

- [ ] **Step 2: Integrate `PillarShowcase` into `app/page.tsx`**

Add `<section id="pillar-showcase">` with `<PillarShowcase />` right after the HeroSection. Keep the festive lookbook as a secondary section for Diwali/festival reference while making the 5-Pillar Showcase the primary product interaction.

- [ ] **Step 3: Test build with Turbopack**

Run:
```bash
npm run build
```
Expected: PASS with all routes compiled.

- [ ] **Step 4: Commit**

```bash
git add components/home/HeroSection.tsx app/page.tsx
git commit -m "feat: update homepage hero and embed 5-pillar showcase for year-round corporate narrative"
```

---

### Task 6: Upgrade Corporate RFQ Form & Dual Lead Engine

**Files:**
- Modify: `components/gifting/RFQForm.tsx`
- Modify: `components/home/RFQSection.tsx`
- Test: Manual testing of form submission and WhatsApp link building.

**Interfaces:**
- Consumes: Shortlisted items from `GiftingProvider`, contact configuration.
- Produces: Form capturing Name, Company, Work Email, Phone/WhatsApp, Gifting Requirement Purpose dropdown, Quantity Tier, and Shortlist items; offers both Direct WhatsApp submission and Form relay.

- [ ] **Step 1: Update RFQ Form fields according to PRD v3.0 Section 5.3**

Fields to include:
- `fullName` (text)
- `company` (text)
- `workEmail` (email)
- `phone` (tel / WhatsApp)
- `giftingPurpose` (select):
  - Employee Joining Kits & Onboarding
  - Annual Town Hall & Conference Giveaways
  - Client Appreciation & Executive Keepsakes
  - New Year 2027 Diaries, Calendars & Desk Tech
  - Turnkey Event Decor + Bulk Gifting Bundle (5%–10% Off)
  - Other Corporate Requirement
- `estimatedQuantity` (select):
  - `25–49 Units`
  - `50–99 Units`
  - `100–249 Units (Bundle Perk)`
  - `250+ Units (Enterprise Pricing)`
- `shortlistedItems` (auto-populated with selected SKU badges and delete chips)
- `message` (optional notes)

Dual Submit Options:
1. `"Send Instant WhatsApp Inquiry ->"` (opens formatted `wa.me` message).
2. `"Submit to Sales Desk"` (POST to form endpoint or mailto fallback to `makeawishevents@gmail.com`).

- [ ] **Step 2: Update `components/gifting/RFQForm.tsx` and `components/home/RFQSection.tsx`**

Implement the updated inputs and clean WhatsApp message generator.

- [ ] **Step 3: Run TypeScript and build verification**

Run:
```bash
npx tsc --noEmit && npm run build
```
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add components/gifting/RFQForm.tsx components/home/RFQSection.tsx
git commit -m "feat: enhance RFQ form with corporate purpose selector and dual WhatsApp relay"
```

---

### Task 7: Update Dedicated Corporate Gifting Page (`/corporate-gifting`)

**Files:**
- Modify: `app/corporate-gifting/page.tsx`
- Test: Build verification via `npm run build`

**Interfaces:**
- Consumes: `components/gifting/PillarShowcase.tsx`, `components/gifting/RFQForm.tsx`.
- Produces: Complete corporate gifting landing page aligning with PRD v3.0 (B2B value proposition, 5 pillars, turnkey bundling, FAQ, RFQ).

- [ ] **Step 1: Update `app/corporate-gifting/page.tsx`**

- Update page metadata: Title `"Corporate Gifting Solutions | Joining Kits, PATRA Copper & Tech Sets | Make a Wish"`.
- Insert the 5-Pillar Showcase with filter tabs.
- Add the Turnkey Bundled Perk callout: *"Combine your corporate event decor with 100+ hampers for a 5%–10% package benefit or complimentary entrance floral styling."*
- Update FAQ section for custom logo printing, volume tiers, and sample kits.

- [ ] **Step 2: Test production build**

Run:
```bash
npm run build
```
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add app/corporate-gifting/page.tsx
git commit -m "feat: align corporate gifting page with PRD v3.0 pillars and turnkey perks"
```

---

### Task 8: Verification, Mobile Responsiveness & Git Push

**Files:**
- Test: Full site build & typecheck.
- Git: Branch integration & push to `origin main`.

- [ ] **Step 1: Run comprehensive TypeScript verification**

```bash
npx tsc --noEmit
```
Expected: PASS with 0 errors.

- [ ] **Step 2: Run production build with Turbopack**

```bash
npm run build
```
Expected:
```text
✓ Compiled successfully
✓ Generating static pages (9/9)
```

- [ ] **Step 3: Check git status and commit any lingering files**

```bash
git status
```

- [ ] **Step 4: Push to GitHub**

```bash
git push origin main
```
Expected: Successful push to trigger automatic Vercel deployment.

