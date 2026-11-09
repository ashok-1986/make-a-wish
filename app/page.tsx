import { Marquee } from "../components/Marquee";
import {
  HeroSection,
  TrustStrip,
  TurnkeySection,
  YearRoundSection,
  ProcessSection,
  ServicesSection,
  RFQSection,
  ClosingSection,
} from "../components/home";
import { CategoryShowcaseSection } from "../components/showcase/CategoryShowcaseSection";
import { FeaturedSetsSection } from "../components/showcase/FeaturedSetsSection";

/**
 * Main landing page for Make a Wish (v2 Category-Led B2B Showcase).
 *
 * Implements the v2 Category-Led B2B Showcase page flow:
 * Hero → Stats / Trust Strip → 5 Pillar Category Grid → Featured Sets →
 * Turnkey Decor & Gifting → Year-Round Calendar → Process → Services → RFQ → Closing.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <Marquee />
      <CategoryShowcaseSection />
      <FeaturedSetsSection />
      <TurnkeySection />
      <YearRoundSection />
      <ProcessSection />
      <ServicesSection />
      <RFQSection />
      <ClosingSection />
    </>
  );
}
