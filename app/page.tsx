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
import { PillarShowcase } from "../components/gifting/PillarShowcase";

/**
 * Main landing page for Make a Wish.
 *
 * Composes the primary corporate gifting hero, trust banner, marquee, 5 core B2B gifting
 * pillars showcase, 14-category hub, Diwali 2026 signature lookbook, turnkey decor planner,
 * year-round gifting spotlight, 4-step ordering process, service pillars, corporate desk RFQ,
 * and closing contact CTA.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <Marquee />
      <PillarShowcase />
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
