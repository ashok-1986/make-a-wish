import test from "node:test";
import assert from "node:assert/strict";
import {
  PILLARS,
  QUANTITY_TIERS,
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

