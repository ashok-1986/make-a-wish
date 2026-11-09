"use client";

import React, { useRef, useEffect } from "react";
import { gsap, isReducedMotion, MOTION_TOKENS } from "../lib/motion";

type AllowedTag =
  | "div"
  | "section"
  | "ul"
  | "ol"
  | "li"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "nav"
  | "main"
  | "p"
  | "h1"
  | "h2"
  | "h3";

interface AnimateOnViewProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  as?: AllowedTag;
}

export function AnimateOnView({
  children,
  className = "",
  stagger = 0,
  y = MOTION_TOKENS.y.enter,
  duration = MOTION_TOKENS.duration.ui,
  delay = 0,
  start = "top 85%",
  as = "div",
}: AnimateOnViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (isReducedMotion()) return;

    const targets = stagger > 0 && el.children.length > 0 ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: MOTION_TOKENS.ease.out,
          stagger: stagger > 0 ? stagger : undefined,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [y, duration, delay, stagger, start]);

  const Tag = as as React.ElementType;

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  );
}
