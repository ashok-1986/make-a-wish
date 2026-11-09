import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Register GSAP plugins safely on client-side environments.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Motion design tokens matching the Motion System Specification.
 */
export const MOTION_TOKENS = {
  duration: {
    fast: 0.22,
    ui: 0.65,
    hero: 0.85,
  },
  ease: {
    out: "power2.out",
    outStrong: "power3.out",
    inOut: "power2.inOut",
  },
  stagger: {
    card: 0.11,
    header: 0.08,
  },
  y: {
    enter: 28,
    hero: 40,
    header: 24,
    card: 48,
  },
} as const;

/**
 * Safe client-side check for user's accessibility motion preference.
 * Defaults to false in SSR / server contexts.
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };

