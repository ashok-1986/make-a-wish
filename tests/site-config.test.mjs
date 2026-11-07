import test from "node:test";
import assert from "node:assert/strict";
import { contact, announcement, navLinks } from "../lib/site.ts";

test("site configuration uses PRD v3.0 contact details", () => {
  assert.equal(contact.display, "+91 97734 11805");
  assert.match(contact.whatsapp, /wa\.me\/919773411805/);
  assert.equal(contact.emailLabel, "makeawishevents@gmail.com");
});

test("announcement bar reflects year-round B2B corporate gifting", () => {
  assert.match(announcement.text, /Joining Kits|Combos|Pure Copper/i);
});

test("navLinks contains links to corporate pillars and RFQ", () => {
  const names = navLinks.map((l) => l.name);
  assert.ok(names.some((n) => n.includes("Joining Kits") || n.includes("Combos")));
  assert.ok(names.some((n) => n.includes("Pure Copper") || n.includes("Copper")));
});
