"use client";

import { CategoryShowcaseSection } from "../showcase/CategoryShowcaseSection";

export interface PillarShowcaseProps {
  className?: string;
  initialPillar?: string;
  initialQuery?: string;
}

export function PillarShowcase({ className }: PillarShowcaseProps) {
  return <CategoryShowcaseSection />;
}

export { CategoryShowcaseSection };
export default PillarShowcase;
