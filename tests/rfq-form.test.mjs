import test from "node:test";
import assert from "node:assert/strict";
import {
  corporateGiftingPurposes,
  rfqMessage,
  rfqEmailBody,
} from "../lib/gifting.ts";
import { QUANTITY_TIERS } from "../lib/catalog-types.ts";

test("corporateGiftingPurposes includes all PRD v3.0 purpose options", () => {
  const expectedPurposes = [
    "Employee Joining Kits & Onboarding",
    "Annual Town Hall & Conference Giveaways",
    "Client Appreciation & Executive Keepsakes",
    "New Year 2027 Diaries, Calendars & Desk Tech",
    "Pure Copper & Artisanal Brassware Sourcing",
    "Turnkey Event Decor + Bulk Gifting Bundle (5%–10% Off)",
    "Other Corporate Requirement",
  ];

  assert.equal(corporateGiftingPurposes.length, 7);
  assert.deepEqual([...corporateGiftingPurposes], expectedPurposes);
});

test("QUANTITY_TIERS matches PRD Section 2.3 and 5.3 specifications", () => {
  assert.deepEqual(QUANTITY_TIERS, [
    "25–49",
    "50–99",
    "100–249 (Bundle Perk)",
    "250+ Units",
  ]);
});

test("rfqMessage generates clean WhatsApp formatting with all details and shortlisted SKUs", () => {
  const msg = rfqMessage({
    name: "Priya Sharma",
    company: "Tech Mahindra",
    email: "priya.s@techm.com",
    phone: "+91 98765 43210",
    giftingPurpose: "Employee Joining Kits & Onboarding",
    quantityTier: "100–249 (Bundle Perk)",
    location: "Airoli, Navi Mumbai",
    requirements: "Need laser engraved company logo on bottles and custom foiled presentation box.",
    items: [
      { key: "h989", kind: "product", name: "5 in 1 Premium Corporate Joining Kit", detail: "SKU: H989" },
      { key: "patra-matka", kind: "product", name: "PATRA Hammered Copper Matka Pot", detail: "SKU: P-COP-102" },
    ],
  });

  assert.ok(msg.includes("Priya Sharma"));
  assert.ok(msg.includes("Tech Mahindra"));
  assert.ok(msg.includes("priya.s@techm.com"));
  assert.ok(msg.includes("+91 98765 43210"));
  assert.ok(msg.includes("Employee Joining Kits & Onboarding"));
  assert.ok(msg.includes("100–249 (Bundle Perk)"));
  assert.ok(msg.includes("Airoli, Navi Mumbai"));
  assert.ok(msg.includes("H989"));
  assert.ok(msg.includes("PATRA Hammered Copper Matka Pot"));
  assert.ok(msg.includes("laser engraved company logo"));
});

test("rfqEmailBody generates structured sales desk email format", () => {
  const email = rfqEmailBody({
    name: "Rahul Mehta",
    company: "Reliance Jio",
    email: "rahul.m@ril.com",
    phone: "+91 97734 11805",
    giftingPurpose: "Annual Town Hall & Conference Giveaways",
    quantityTier: "250+ Units",
    location: "Ghansoli, Navi Mumbai",
    requirements: "Requires samples before board sign-off by next Friday.",
    items: [
      { key: "cw204", kind: "product", name: "Copper Bedside Carafe Set", detail: "SKU: CW204" },
    ],
  });

  assert.ok(email.includes("Hello Make A Wish B2B Sales Desk,"));
  assert.ok(email.includes("Company: Reliance Jio"));
  assert.ok(email.includes("Contact Name: Rahul Mehta"));
  assert.ok(email.includes("Work Email: rahul.m@ril.com"));
  assert.ok(email.includes("Annual Town Hall & Conference Giveaways"));
  assert.ok(email.includes("250+ Units"));
  assert.ok(email.includes("Delivery Location: Ghansoli, Navi Mumbai"));
  assert.ok(email.includes("Copper Bedside Carafe Set"));
  assert.ok(email.includes("Requires samples before board sign-off"));
});
