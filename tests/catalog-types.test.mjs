import test from "node:test";
import assert from "node:assert/strict";
import {
  PILLARS,
  QUANTITY_TIERS,
  buildProductWhatsAppLink,
} from "../lib/catalog-types.ts";

test("PILLARS metadata covers all 5 B2B corporate gifting pillars", () => {
  assert.equal(PILLARS.length, 5);
  const pillarIds = PILLARS.map((p) => p.id);
  assert.deepEqual(pillarIds, [
    "joining-kits",
    "diaries-tech",
    "bags-drinkware",
    "patra-heritage",
    "gourmet-lifestyle",
  ]);

  for (const pillar of PILLARS) {
    assert.ok(pillar.name.length > 0, `Pillar ${pillar.id} has name`);
    assert.ok(pillar.shortName.length > 0, `Pillar ${pillar.id} has shortName`);
    assert.ok(pillar.description.length > 0, `Pillar ${pillar.id} has description`);
    assert.ok(pillar.brochureSource.length > 0, `Pillar ${pillar.id} has brochureSource`);
    assert.ok(pillar.iconName.length > 0, `Pillar ${pillar.id} has iconName`);
  }
});

test("QUANTITY_TIERS covers standard B2B volume bands", () => {
  assert.deepEqual(QUANTITY_TIERS, [
    "25–49",
    "50–99",
    "100–249 (Bundle Perk)",
    "250+ Units",
  ]);
});

test("sample CatalogProduct structure and buildProductWhatsAppLink with custom tier", () => {
  /** @type {import("../lib/catalog-types.ts").CatalogProduct} */
  const sampleProduct = {
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
    dimensions: "36 x 28 x 10 cm",
    colors: ["Black", "Charcoal Grey"],
    finishes: ["Matte", "Leatherette"],
    capacities: ["900ml"],
    occasionTags: ["Employee Onboarding", "Year-Round Corporate"],
    image: "/images/catalog/h989-joining-kit.webp",
    imageAlt: "5 in 1 Premium Corporate Joining Kit",
    statusBadge: "B2B Bulk Ready",
    highlights: "Complete onboarding kit in customized presentation packaging",
  };

  assert.equal(sampleProduct.sku, "H989");
  assert.equal(sampleProduct.pillarId, "joining-kits");
  assert.equal(sampleProduct.inclusions.length, 5);

  const url = buildProductWhatsAppLink(sampleProduct, "100–249 (Bundle Perk)");
  assert.ok(url.startsWith("https://wa.me/919773411805?text="));

  const textParam = new URL(url).searchParams.get("text") ?? "";
  assert.ok(textParam.includes("Hi Make A Wish, we would like a B2B volume quote:"));
  assert.ok(textParam.includes("• Product: 5 in 1 Premium Corporate Joining Kit"));
  assert.ok(textParam.includes("• SKU: H989"));
  assert.ok(textParam.includes("• Pillar: 5-in-1 Combo Gift Sets"));
  assert.ok(textParam.includes("• Estimated Quantity Tier: 100–249 (Bundle Perk)"));
  assert.ok(textParam.includes("Please share the catalogue sheet, branding options, and lead times."));
});

test("buildProductWhatsAppLink falls back to default quantity tier and phone number", () => {
  const sampleProduct = {
    sku: "PATRA-BOT-01",
    name: "PATRA Pure Copper Hammered Water Bottle",
    pillarId: "patra-heritage",
    categoryName: "Copper Drinkware",
    inclusions: ["Hammered Copper Bottle (950ml)", "Care Guide Booklet"],
    occasionTags: ["Executive Wellness", "Festive Gifting"],
    image: "/images/catalog/patra-bottle.webp",
    statusBadge: "Heritage Artisan",
  };

  const url = buildProductWhatsAppLink(sampleProduct);
  assert.ok(url.startsWith("https://wa.me/919773411805?text="));

  const textParam = new URL(url).searchParams.get("text") ?? "";
  assert.ok(textParam.includes("• Product: PATRA Pure Copper Hammered Water Bottle"));
  assert.ok(textParam.includes("• SKU: PATRA-BOT-01"));
  assert.ok(textParam.includes("• Pillar: Copper Drinkware"));
  assert.ok(textParam.includes("• Estimated Quantity Tier: 50–99"));
});

test("buildProductWhatsAppLink supports custom phone number override", () => {
  const sampleProduct = {
    sku: "TECH-PB-02",
    name: "Wireless Charging Power Bank Diary",
    pillarId: "diaries-tech",
    categoryName: "Smart Desk Tech",
    inclusions: ["5000mAh Power Bank Diary", "Stylus Pen"],
    occasionTags: ["Leadership Summit"],
    image: "/images/catalog/tech-diary.webp",
    statusBadge: "Tech Innovation",
  };

  const customPhone = "919987119558";
  const url = buildProductWhatsAppLink(sampleProduct, "250+ Units", customPhone);
  assert.ok(url.startsWith(`https://wa.me/${customPhone}?text=`));

  const textParam = new URL(url).searchParams.get("text") ?? "";
  assert.ok(textParam.includes("• Estimated Quantity Tier: 250+ Units"));
});
