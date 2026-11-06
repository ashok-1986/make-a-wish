import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  CATALOG_PRODUCTS,
  getAllSkus,
  getProductBySku,
  getPillarCount,
  searchCatalog,
  PILLARS,
} from "../lib/catalog-data.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("CATALOG_PRODUCTS contains comprehensive entries (>= 35 products)", () => {
  assert.ok(
    CATALOG_PRODUCTS.length >= 35,
    `Expected at least 35 products, found ${CATALOG_PRODUCTS.length}`
  );
  assert.equal(CATALOG_PRODUCTS.length, 49);
});

test("all 5 B2B gifting pillars are represented with > 4 products each", () => {
  const expectedPillars = [
    "joining-kits",
    "diaries-tech",
    "bags-drinkware",
    "patra-heritage",
    "gourmet-lifestyle",
  ];

  for (const pillarId of expectedPillars) {
    const count = getPillarCount(pillarId);
    assert.ok(
      count > 4,
      `Pillar ${pillarId} should have > 4 products, but found ${count}`
    );
  }

  // Pillar A
  assert.equal(getPillarCount("joining-kits"), 12);
  // Pillar B
  assert.equal(getPillarCount("diaries-tech"), 12);
  // Pillar C
  assert.equal(getPillarCount("bags-drinkware"), 9);
  // Pillar D
  assert.equal(getPillarCount("patra-heritage"), 10);
  // Pillar E
  assert.equal(getPillarCount("gourmet-lifestyle"), 6);

  // 'all' count
  assert.equal(getPillarCount("all"), CATALOG_PRODUCTS.length);
});

test("Strictly Price-Free Rule: Zero rupee symbols or retail price indicators in data objects", () => {
  const priceRegex = /(?:₹|\bRs\.?\b|\bINR\b|\bMRP\b)/i;

  for (const product of CATALOG_PRODUCTS) {
    // Name, categoryName, statusBadge, highlights
    assert.doesNotMatch(product.name, priceRegex, `Product ${product.sku} name contains price`);
    assert.doesNotMatch(product.categoryName, priceRegex, `Product ${product.sku} category contains price`);
    assert.equal(product.statusBadge, "B2B Bulk Ready", `Product ${product.sku} must have statusBadge 'B2B Bulk Ready'`);

    if (product.highlights) {
      assert.doesNotMatch(product.highlights, priceRegex, `Product ${product.sku} highlights contains price`);
    }

    if (product.dimensions) {
      assert.doesNotMatch(product.dimensions, priceRegex, `Product ${product.sku} dimensions contains price`);
    }

    for (const inc of product.inclusions) {
      assert.doesNotMatch(inc, priceRegex, `Product ${product.sku} inclusion contains price`);
    }

    for (const tag of product.occasionTags) {
      assert.doesNotMatch(tag, priceRegex, `Product ${product.sku} tag contains price`);
    }
  }
});

test("Strictly Price-Free Rule: Source file lib/catalog-data.ts contains ZERO ₹ or Rs. symbols", () => {
  const catalogFilePath = path.resolve(__dirname, "../lib/catalog-data.ts");
  const fileContent = fs.readFileSync(catalogFilePath, "utf-8");

  // Check for ₹ (Rupee symbol)
  assert.ok(
    !fileContent.includes("₹"),
    "lib/catalog-data.ts must contain ZERO '₹' rupee symbols"
  );

  // Check for Rs. or Rs followed by space and numbers
  assert.doesNotMatch(
    fileContent,
    /\bRs\.?\s*\d+/i,
    "lib/catalog-data.ts must not contain 'Rs.' price figures"
  );
});

test("getAllSkus returns unique list of all product SKUs", () => {
  const skus = getAllSkus();
  assert.equal(skus.length, CATALOG_PRODUCTS.length);
  const uniqueSkus = new Set(skus);
  assert.equal(uniqueSkus.size, CATALOG_PRODUCTS.length, "All SKUs must be unique");

  // Verify key anchor SKUs from each pillar
  assert.ok(skus.includes("H989"));
  assert.ok(skus.includes("H930"));
  assert.ok(skus.includes("H934"));
  assert.ok(skus.includes("H1024"));
  assert.ok(skus.includes("H124"));
  assert.ok(skus.includes("H246"));
  assert.ok(skus.includes("H1543"));
  assert.ok(skus.includes("H055"));
  assert.ok(skus.includes("PT-C-FTH"));
  assert.ok(skus.includes("PT-B-CFF-SET"));
  assert.ok(skus.includes("HMP-6J-EMR"));
  assert.ok(skus.includes("SLV-999-COIN"));
  assert.ok(skus.includes("TRN-EVT-BNDL"));
});

test("getProductBySku returns expected product with case-insensitivity", () => {
  const productH989 = getProductBySku("H989");
  assert.ok(productH989);
  assert.equal(productH989.name, "5 in 1 Premium Corporate Joining Kit");
  assert.equal(productH989.pillarId, "joining-kits");
  assert.equal(productH989.inclusions.length, 5);

  // Lowercase lookup
  const lowerH989 = getProductBySku("h989");
  assert.deepEqual(lowerH989, productH989);

  // Trim lookup
  const paddedH989 = getProductBySku("  H989  ");
  assert.deepEqual(paddedH989, productH989);

  // Unknown SKU returns undefined
  assert.equal(getProductBySku("NON_EXISTENT_SKU"), undefined);
});

test("searchCatalog handles SKU searches accurately", () => {
  // Search for H989
  const h989Results = searchCatalog("H989");
  assert.equal(h989Results.length, 1);
  assert.equal(h989Results[0].sku, "H989");

  // Prefix search for PT-C (Copperware)
  const ptcResults = searchCatalog("PT-C");
  assert.equal(ptcResults.length, 6);
  for (const item of ptcResults) {
    assert.equal(item.pillarId, "patra-heritage");
    assert.ok(item.sku.startsWith("PT-C"));
  }

  // Prefix search for PT-B (Brassware)
  const ptbResults = searchCatalog("PT-B");
  assert.equal(ptbResults.length, 4);
  for (const item of ptbResults) {
    assert.equal(item.pillarId, "patra-heritage");
    assert.ok(item.sku.startsWith("PT-B"));
  }
});

test("searchCatalog handles keyword and multi-term searches", () => {
  // Keyword 'Copper'
  const copperResults = searchCatalog("Copper");
  assert.ok(copperResults.length >= 6);
  assert.ok(copperResults.some((p) => p.sku === "PT-C-FTH"));

  // Keyword 'Joining Kit'
  const joiningKitResults = searchCatalog("Joining Kit");
  assert.ok(joiningKitResults.length >= 1);
  assert.ok(joiningKitResults.some((p) => p.sku === "H989"));

  // Keyword 'Dabara'
  const dabaraResults = searchCatalog("Dabara");
  assert.equal(dabaraResults.length, 1);
  assert.equal(dabaraResults[0].sku, "PT-B-CFF-SET");

  // Keyword 'Backpack'
  const backpackResults = searchCatalog("Backpack");
  assert.ok(backpackResults.length >= 2);
  assert.ok(backpackResults.some((p) => p.sku === "H1543"));

  // Scoped search with pillarId
  const scopedJoining = searchCatalog("Pen", "joining-kits");
  for (const item of scopedJoining) {
    assert.equal(item.pillarId, "joining-kits");
  }

  // Empty query returns all (or pillar filtered)
  assert.equal(searchCatalog("").length, CATALOG_PRODUCTS.length);
  assert.equal(searchCatalog("", "patra-heritage").length, 10);
});

test("PILLARS export is available and matches catalog-types", () => {
  assert.equal(PILLARS.length, 5);
  const ids = PILLARS.map((p) => p.id);
  assert.ok(ids.includes("joining-kits"));
  assert.ok(ids.includes("gourmet-lifestyle"));
});
