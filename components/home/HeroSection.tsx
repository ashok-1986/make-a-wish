"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, isReducedMotion } from "../../lib/motion";
import { whatsappLink } from "../../lib/site";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

const spotlightCards = [
  {
    id: "joining-kits",
    number: "01",
    title: "Joining Kits & Executive Combos",
    badge: "B2B BULK READY",
    subtitle: "H989, 5-in-1 & 6-in-1 Employee Welcome Sets",
    description: "Executive boxes with laptop bag, A5 diary, stainless bottle, metal pen & mobile stand.",
    href: "#pillar-showcase",
  },
  {
    id: "patra-heritage",
    number: "02",
    title: "Pure Copper & Heritage Brassware",
    badge: "PURE ARTISANAL",
    subtitle: "PT-C & PT-B Authentic Ayurvedic Sets",
    description: "Ayurveda water bottles, table pots, South Indian brass dabaras & Kalai tin-lined cookware.",
    href: "#pillar-showcase",
  },
  {
    id: "diaries-tech",
    number: "03",
    title: "Executive Tech Diaries & Desk Utility",
    badge: "SMART TECH",
    subtitle: "8000mAh Power Bank Diary & Desk Stands",
    description: "Integrated charging cables, 16GB USB pendrive lock diaries & metallic roller pens.",
    href: "#pillar-showcase",
  },
  {
    id: "turnkey-bundle",
    number: "04",
    title: "Turnkey Event Decor + Gifting",
    badge: "5%–10% BUNDLE PERK",
    subtitle: "Campus Installations + 100+ Gift Sets",
    description: "Single-window procurement combining corporate event decor with bulk gifting under one GST invoice.",
    href: "#rfq-section",
  },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const directWhatsAppHref = whatsappLink(
    "Hello Make a Wish Corporate Desk, I would like to inquire about year-round corporate gifting, onboarding kits, and catalog proposals."
  );

  useEffect(() => {
    if (isReducedMotion()) return;
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        ".hero-h1",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85 }
      )
        .fromTo(
          ".hero-subcopy",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          "-=0.7" // delayed +0.15s relative to H1
        )
        .fromTo(
          ".hero-cta-primary",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.57" // delayed +0.28s
        )
        .fromTo(
          ".hero-cta-secondary",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.47" // delayed +0.38s
        )
        .fromTo(
          ".hero-showcase",
          { scale: 0.96, y: 15, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.9 },
          0.2 // delayed +0.2s from timeline start
        );

      // Stats row triggered when 20% in view
      gsap.fromTo(
        ".hero-stats > div",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero-stats",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Spotlight cards staggered reveal
      gsap.fromTo(
        ".hero-spotlight-card",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-spotlights",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-title"
      className="dark-section relative overflow-hidden bg-[#0B090E] border-b border-white/10 px-5 pb-16 pt-12 md:px-10 md:pb-24 md:pt-16"
    >
      {/* Background architectural glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full bg-purple-900/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-10 h-[400px] w-[500px] rounded-full bg-purple-950/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Top Split Hero Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Bold Architectural Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-[0.7rem] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>B2B Corporate Flagship · Navi Mumbai &amp; Mumbai</span>
            </div>

            <h1
              id="hero-title"
              className="hero-h1 mt-5 font-sans text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white"
            >
              Corporate Gifting &amp; Turnkey Production. Built for Enterprise Teams.
            </h1>

            <p className="hero-subcopy mt-6 text-base sm:text-lg leading-relaxed text-zinc-300 max-w-[58ch]">
              Curated 2-in-1 to 6-in-1 Employee Joining Kits, Executive Power Bank Diaries, Pure Copperware, and Luxury Gourmet Hampers. Pre-packaged and customized with your corporate logo under a single GST invoice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href="#pillar-showcase" className="hero-cta-primary btn btn-dark-section">
                <span>Explore 5 Corporate Pillars</span>
                <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a
                href={directWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary btn btn-ghost"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>Direct WhatsApp Desk</span>
              </a>
            </div>

            <p className="mt-4 text-xs font-medium text-zinc-400 tracking-wide">
              Price-free B2B showcase. Tiered rate cards and custom mockups shared on request by our corporate sales desk.
            </p>
          </div>

          {/* Right Column: Real Cinematic Boardroom Photography */}
          <div className="hero-showcase relative">
            <div className="group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl border border-white/15 bg-[#131019] shadow-2xl shadow-purple-950/30">
              <Image
                src="/images/hero-corporate.png"
                alt="Executive luxury gift boxes and corporate hampers on a boardroom table with glass walls"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Sleek Gradient Overlay & Floating Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/60 p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-purple-300 font-bold">
                      Executive Showcase
                    </p>
                    <p className="text-sm font-bold text-white">
                      Boardroom Ready Hampers &amp; Joining Kits
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 text-[0.65rem] font-bold text-emerald-300">
                    25 MOQ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Metric Blocks (8gnc.io grid style) */}
        <div className="hero-stats mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-y border-white/10 py-6">
          <div className="border-l-2 border-purple-500/40 pl-4">
            <p className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-zinc-400">01 / Scope</p>
            <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">5 B2B Pillars</p>
            <p className="text-xs text-zinc-400">Joining Kits to Pure Copper</p>
          </div>
          <div className="border-l-2 border-purple-500/40 pl-4">
            <p className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-zinc-400">02 / Portfolio</p>
            <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">49+ SKUs</p>
            <p className="text-xs text-zinc-400">H-Series, PT-C &amp; PT-B</p>
          </div>
          <div className="border-l-2 border-purple-500/40 pl-4">
            <p className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-zinc-400">03 / Customization</p>
            <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">100% Branded</p>
            <p className="text-xs text-zinc-400">Laser, UV &amp; Embossing</p>
          </div>
          <div className="border-l-2 border-purple-500/40 pl-4">
            <p className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-zinc-400">04 / Turnkey Perk</p>
            <p className="mt-1 text-xl sm:text-2xl font-extrabold text-white">5%–10% Off</p>
            <p className="text-xs text-zinc-400">Decor + Gifting Bundles</p>
          </div>
        </div>

        {/* 4 Spotlight Focus Cards */}
        <div className="mt-8">
          <h2 className="sr-only">Core Corporate Gifting Pillars</h2>
          <div className="hero-spotlights grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {spotlightCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className="hero-spotlight-card group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#131019] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-[#1a1624] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>{card.number}</span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[0.65rem] font-bold text-purple-300">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-zinc-400">
                    {card.subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-2">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-purple-400 transition-transform group-hover:translate-x-1">
                  <span>Explore items</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
