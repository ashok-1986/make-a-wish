"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, isReducedMotion } from "../../lib/motion";

interface MotionContextValue {
  lenis: Lenis | null;
  isReady: boolean;
  isReducedMotion: boolean;
  scrollTo: (
    target: string | HTMLElement,
    options?: { offset?: number; duration?: number; immediate?: boolean }
  ) => void;
}

const MotionContext = createContext<MotionContextValue>({
  lenis: null,
  isReady: false,
  isReducedMotion: false,
  scrollTo: () => {},
});

export function useMotion() {
  return useContext(MotionContext);
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = isReducedMotion();
    setReducedMotion(prefersReduced);

    // If user prefers reduced motion, we do not initialize smooth scroll ticker sync
    if (prefersReduced) {
      setIsReady(true);
      return;
    }

    // Initialize Lenis with smooth exponential easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // Sync Lenis scroll events with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize Lenis raf loop with GSAP ticker for 60fps frame-locked smoothness
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    setIsReady(true);

    // Global anchor link smooth scroll interception
    function handleAnchorClick(event: MouseEvent) {
      const target = (event.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Match hash anchors on current page: "#target" or "/#target"
      let hash = "";
      if (href.startsWith("#")) {
        hash = href;
      } else if (href.startsWith("/#") && (window.location.pathname === "/" || window.location.pathname === "")) {
        hash = href.replace("/", "");
      }

      if (hash && hash.length > 1) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          event.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -84,
            duration: 1.2,
          });
          // Update browser URL hash without jump
          window.history.pushState(null, "", hash);
        }
      }
    }

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollTo = useCallback(
    (
      target: string | HTMLElement,
      options?: { offset?: number; duration?: number; immediate?: boolean }
    ) => {
      if (lenisRef.current && !reducedMotion) {
        lenisRef.current.scrollTo(target, {
          offset: options?.offset ?? -84,
          duration: options?.duration ?? 1.2,
          immediate: options?.immediate ?? false,
        });
      } else {
        const el = typeof target === "string" ? document.querySelector(target) : target;
        el?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      }
    },
    [reducedMotion]
  );

  return (
    <MotionContext.Provider
      value={{
        lenis: lenisRef.current,
        isReady,
        isReducedMotion: reducedMotion,
        scrollTo,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}
