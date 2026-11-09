import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { PILLAR_CATEGORIES, FEATURED_SETS } from "../lib/category-showcase-data.ts";

test("PILLAR_CATEGORIES covers exactly the 5 stable B2B corporate pillars", () => {
  assert.equal(PILLAR_CATEGORIES.length, 5, "Must have exactly 5 strategic pillars");

  const expectedPillars = [
    "Joining Kits & Executive Combos",
    "Pure Copper & Heritage Brassware",
    "Executive Tech Diaries & Desk Utility",
    "Gourmet Hampers & Festive Boxes",
    "Turnkey Event Decor + Gifting",
  ];

  for (let i = 0; i < expectedPillars.length; i++) {
    assert.equal(
      PILLAR_CATEGORIES[i].name,
      expectedPillars[i],
      `Pillar ${i + 1} must be '${expectedPillars[i]}'`
    );
    assert.ok(
      PILLAR_CATEGORIES[i].representativeItems.length >= 2 &&
        PILLAR_CATEGORIES[i].representativeItems.length <= 4,
      `Pillar ${PILLAR_CATEGORIES[i].name} must have 2-4 representative items`
    );
    assert.ok(
      PILLAR_CATEGORIES[i].image && PILLAR_CATEGORIES[i].image.startsWith("/images/"),
      `Pillar ${PILLAR_CATEGORIES[i].name} must reference real imagery`
    );
  }
});

test("FEATURED_SETS defines 4 high-intent corporate bundles", () => {
  assert.equal(FEATURED_SETS.length, 4, "Must define exactly 4 featured sets");

  const validPillarIds = PILLAR_CATEGORIES.map((p) => p.id);

  for (const set of FEATURED_SETS) {
    assert.ok(validPillarIds.includes(set.pillarId), `Set ${set.name} must belong to a valid pillar`);
    assert.ok(set.inclusions.length >= 3, `Set ${set.name} must specify at least 3 inclusions`);
    assert.ok(set.moq, `Set ${set.name} must specify MOQ`);
    assert.ok(set.leadTime, `Set ${set.name} must specify lead time`);
    assert.ok(set.whatsappPrefill.startsWith("https://wa.me/"), `Set ${set.name} must provide WhatsApp link`);
  }
});

test("Strictly Price-Free Rule: lib/category-showcase-data.ts contains ZERO ₹ or Rs. symbols", () => {
  const filePath = path.join(process.cwd(), "lib", "category-showcase-data.ts");
  const content = fs.readFileSync(filePath, "utf-8");

  assert.ok(!content.includes("₹"), "Must contain ZERO '₹' currency symbols");
  assert.ok(!content.includes("Rs."), "Must contain ZERO 'Rs.' currency symbols");
});

test("Strictly Wholesaler-Free Rule: lib/category-showcase-data.ts contains zero third-party wholesaler names", () => {
  const filePath = path.join(process.cwd(), "lib", "category-showcase-data.ts");
  const content = fs.readFileSync(filePath, "utf-8");

  assert.ok(!content.includes("PATRA"), "Must contain zero wholesaler references");
});

test("Homepage page flow embeds CategoryShowcaseSection and FeaturedSetsSection", () => {
  const pagePath = path.join(process.cwd(), "app", "page.tsx");
  const content = fs.readFileSync(pagePath, "utf-8");

  assert.ok(content.includes("<CategoryShowcaseSection"), "Must embed CategoryShowcaseSection");
  assert.ok(content.includes("<FeaturedSetsSection"), "Must embed FeaturedSetsSection");
});

