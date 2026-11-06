import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("corporate-gifting page metadata and structure conforms to PRD v3.0 specification", () => {
  const filePath = path.resolve("app/corporate-gifting/page.tsx");
  const content = fs.readFileSync(filePath, "utf-8");

  // Metadata
  assert.ok(
    content.includes(
      'title: "Corporate Gifting Solutions | Joining Kits, PATRA Copper & Tech Sets | Make a Wish"'
    ),
    "Metadata title must match PRD specification"
  );
  assert.ok(
    content.includes(
      'description:\n    "365-Day Corporate Gifting in Navi Mumbai & Mumbai: Employee Joining Kits, Executive Combos, PATRA Pure Copper & Brassware, Tech Diaries, and Gourmet Hampers. Tiered B2B quotes on request."'
    ) ||
    content.includes(
      "365-Day Corporate Gifting in Navi Mumbai & Mumbai: Employee Joining Kits, Executive Combos, PATRA Pure Copper & Brassware, Tech Diaries, and Gourmet Hampers. Tiered B2B quotes on request."
    ),
    "Metadata description must match PRD specification"
  );

  // Hero Section Elements
  assert.ok(
    content.includes("365-Day B2B Corporate Gifting Solutions · Navi Mumbai, Thane &amp; Mumbai") ||
    content.includes("365-Day B2B Corporate Gifting Solutions · Navi Mumbai, Thane & Mumbai"),
    "Hero eyebrow must match PRD"
  );
  assert.ok(
    content.includes("Corporate Gifting, Tailored for Your Team."),
    "Hero H1 must match PRD"
  );
  assert.ok(
    content.includes(
      "From new-hire joining kits and conference giveaways to PATRA heritage copperware, executive tech diaries, and festive hampers. Direct corporate sales desk with custom logo branding and volume discounts."
    ),
    "Hero subhead must match PRD"
  );

  // CTAs
  assert.ok(
    content.includes("Explore 5 Corporate Pillars"),
    "Hero must have primary CTA to 5 pillars"
  );
  assert.ok(
    content.includes('href="#pillar-showcase"'),
    "Primary CTA must link to #pillar-showcase"
  );
  assert.ok(
    content.includes("Direct WhatsApp Desk"),
    "Hero must have secondary WhatsApp desk CTA"
  );
  assert.ok(
    content.includes("contact.whatsapp"),
    "WhatsApp desk CTA must reference contact.whatsapp"
  );

  // Stats DL
  assert.ok(
    content.includes("B2B Pillars") && content.includes(">5<") || content.includes("\n                  5\n"),
    "Stats dl must include 5 B2B Pillars"
  );
  assert.ok(
    content.includes("Signature SKUs") && (content.includes(">49+<") || content.includes("\n                  49+\n")),
    "Stats dl must include 49+ Signature SKUs"
  );
  assert.ok(
    content.includes("Min MOQ") && (content.includes("25 Units")),
    "Stats dl must include 25 Unit Min MOQ"
  );

  // Section 1: PillarShowcase
  assert.ok(
    content.includes("<PillarShowcase />") || content.includes("<PillarShowcase"),
    "Must embed PillarShowcase component right after Hero section"
  );

  // Section 2: Turnkey Bundled Package Callout (PRD Section 2.1 Pillar E)
  assert.ok(
    content.includes(
      "Turnkey Office Decor + 100+ Hamper Bundle: Book your office celebration or corporate event decor with 100+ gift sets to unlock a 5%–10% package discount or complimentary entrance floral styling."
    ),
    "Must include turnkey bundled package callout"
  );

  // Section 3: 3 Buyer Reasons
  assert.ok(
    content.includes("Employee onboarding kits"),
    "Must retain employee onboarding kits reason"
  );
  assert.ok(
    content.includes("Executive keepsakes"),
    "Must retain executive keepsakes reason"
  );
  assert.ok(
    content.includes("Turnkey single invoice"),
    "Must retain turnkey single invoice reason"
  );

  // Section 4: Complementary Catalog references
  assert.ok(content.includes("<GiftingCatalogue />"), "Must include GiftingCatalogue");
  assert.ok(content.includes("<HamperLookbook />"), "Must include HamperLookbook");

  // Section 5: FAQs with PRD details
  assert.ok(
    content.includes("screen printing") || content.includes("Screen printing"),
    "FAQs must detail screen printing"
  );
  assert.ok(
    content.includes("UV printing"),
    "FAQs must detail UV printing"
  );
  assert.ok(
    content.includes("laser engraving"),
    "FAQs must detail laser engraving"
  );
  assert.ok(
    content.includes("embossing"),
    "FAQs must detail embossing"
  );
  assert.ok(
    content.includes("25 units"),
    "FAQs must state 25 units MOQ"
  );
  assert.ok(
    content.includes("Navi Mumbai") &&
    content.includes("Thane") &&
    content.includes("Mumbai") &&
    content.includes("pan-India"),
    "FAQs must detail delivery coverage"
  );
  assert.ok(
    content.includes("sample") || content.includes("Sample"),
    "FAQs must detail executive sample boxes"
  );
  assert.ok(
    content.includes("GST"),
    "FAQs must confirm compliant B2B GST invoices"
  );

  // Section 6: RFQForm connected with corporate purpose
  assert.ok(
    content.includes('<RFQForm defaultInquiry="Employee Joining Kits & Onboarding" />'),
    "Must connect RFQForm with default corporate gifting inquiry"
  );
});
