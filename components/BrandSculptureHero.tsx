"use client";

import SculptureHero from "./ui/liquid-sculpture-hero";
import { SITE_NAME, contact, whatsappLink } from "../lib/site";

/* The liquid sculpture hero dressed in the Make a Wish brand, using the generated marigold ring. */
const IMAGE = "/images/floral-ring-hero.jpg";

export default function BrandSculptureHero() {
  return (
    <SculptureHero
      src={IMAGE}
      darkSrc={IMAGE}
      mobileSrc={IMAGE}
      mobileDarkSrc={IMAGE}
      imageAlt="A hanging ring of marigold and jasmine garlands with plum ribbons and small brass bells"
      imageBackground="#E2E0DA"
      brand={SITE_NAME}
      showNav={false}
      themeToggle={false}
      showCredit={false}
      loadFonts={false}
      backdropText="wish"
      eyebrow="Corporate and festive décor, Navi Mumbai"
      headline={"Experiences\nworth remembering."}
      headlineAccent="worth remembering."
      body="Corporate events, festive installations and gifting, planned and produced end to end."
      primaryCta={{ label: "Plan on WhatsApp", href: whatsappLink("Hi, I'd like to plan a corporate or festive event.") }}
      secondaryCta={{ label: `Call ${contact.display}`, href: contact.phone }}
      hint="Move across the garland"
      hintTouch=""
      background="#fffce3"
      textColor="#2b1442"
      accentColor="#5c2f7f"
      headingFont="var(--font-body), 'Helvetica Neue', Arial, sans-serif"
      accentFont="var(--font-display), cursive"
      bodyFont="var(--font-body), 'Helvetica Neue', Arial, sans-serif"
      height="max(560px, calc(100svh - 150px))"
    />
  );
}
