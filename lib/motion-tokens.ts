/**
 * Motion System Design Tokens & Framer Motion Variants (v2.0)
 *
 * Implements Section 4 of Category-Led B2B Showcase Design Specification v2.0:
 * - Declarative Framer Motion variants
 * - Spring physics for tactile card hovers
 * - Staggered viewport triggers
 * - Automatic prefers-reduced-motion safety
 */

import type { Variants, Transition } from "framer-motion";

export const MOTION_V2_TOKENS = {
  duration: {
    fast: 0.22,
    ui: 0.6,
    hero: 0.85,
  },
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
  },
  spring: {
    hover: {
      type: "spring",
      stiffness: 350,
      damping: 22,
    } as const,
    tap: {
      type: "spring",
      stiffness: 450,
      damping: 25,
    } as const,
  },
  stagger: {
    cards: 0.11,
    fast: 0.08,
  },
  y: {
    enter: 32,
    hero: 40,
    subtle: 16,
  },
};

/**
 * Container variant with child stagger
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: MOTION_V2_TOKENS.stagger.cards,
      delayChildren: 0.05,
    },
  },
};

/**
 * Standard card & section item reveal variant
 */
export const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: MOTION_V2_TOKENS.y.enter,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_V2_TOKENS.duration.ui,
      ease: MOTION_V2_TOKENS.ease.out,
    },
  },
};

/**
 * Spring hover effect for editorial category cards
 */
export const cardHoverTransition: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 22,
};

/**
 * Standard whileInView configuration for scroll reveals
 */
export const defaultViewportConfig = {
  once: true,
  amount: 0.15,
};
