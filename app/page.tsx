import { Marquee } from "../components/Marquee";
import {
  HeroSection,
  TrustStrip,
  CategoriesSection,
  LookbookSection,
  TurnkeySection,
  YearRoundSection,
  ProcessSection,
  ServicesSection,
  RFQSection,
  ClosingSection,
} from "../components/home";

/**
 * Main landing page for Make a Wish.
 *
 * Composes the primary corporate gifting hero, trust banner, marquee, 14-category hub,
 * Diwali 2026 signature lookbook, turnkey decor planner, year-round gifting spotlight,
 * 4-step ordering process, five service pillars, corporate desk RFQ, and closing contact CTA.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <Marquee />
      <CategoriesSection />
      <LookbookSection />
      <TurnkeySection />
      <YearRoundSection />
      <ProcessSection />
      <ServicesSection />
      <RFQSection />
      <ClosingSection />
    </>
  );
}
