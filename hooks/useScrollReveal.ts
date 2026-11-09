"use client";

import { useEffect, useRef } from "react";
import { gsap, isReducedMotion, MOTION_TOKENS } from "../lib/motion";

export interface ScrollRevealOptions {
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  stagger?: number;
  start?: string;
  duration?: number;
  ease?: string;
  once?: boolean;
}

/**
 * React hook to bind performant, GPU-composited scroll entrance animations.
 * Automatically respects user's prefers-reduced-motion settings.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isReducedMotion()) {
      return;
    }

    const {
      fromVars = { y: MOTION_TOKENS.y.enter, opacity: 0 },
      toVars = { y: 0, opacity: 1 },
      stagger = 0,
      start = "top 85%",
      duration = MOTION_TOKENS.duration.ui,
      ease = MOTION_TOKENS.ease.out,
      once = true,
    } = options;

    const targets = stagger > 0 && el.children.length > 0 ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, fromVars, {
        ...toVars,
        duration,
        ease,
        stagger: stagger > 0 ? stagger : undefined,
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [options.stagger, options.start, options.duration, options.ease, options.once]);

  return ref;
}
