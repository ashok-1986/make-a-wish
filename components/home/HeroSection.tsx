import { Star, StarField } from "../Star";
import { whatsappLink } from "../../lib/site";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function BriefcaseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CopperwareIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h12l1 7a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5L6 3z" />
      <path d="M9 15v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4" />
      <line x1="4" y1="3" x2="20" y2="3" />
    </svg>
  );
}

function TechDiaryIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <polyline points="13 7 11 11 15 11 13 15" stroke="currentColor" fill="none" />
    </svg>
  );
}

function TurnkeyIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13" />
      <path d="M19 12H5" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

interface SpotlightCard {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  href: string;
  icon: (props: { className?: string }) => JSX.Element;
  ctaText: string;
}

const spotlightCards: SpotlightCard[] = [
  {
    id: "joining-kits",
    title: "Joining Kits & Combos",
    badge: "B2B Bulk Ready",
    subtitle: "H989, 5-in-1 & 6-in-1 onboarding kits",
    description: "Welcome sets with laptop bag, A5 diary, stainless bottle, metal pen & mobile stand.",
    href: "#pillar-showcase",
    icon: BriefcaseIcon,
    ctaText: "View kits",
  },
  {
    id: "patra-heritage",
    title: "PATRA Pure Copper & Brassware",
    badge: "Pure Artisanal",
    subtitle: "Artisanal drinkware & heritage sets",
    description: "Ayurveda water bottles, table pots, South Indian brass dabaras & Kalai tin-lined cookware.",
    href: "#pillar-showcase",
    icon: CopperwareIcon,
    ctaText: "View copperware",
  },
  {
    id: "diaries-tech",
    title: "Executive Diaries & Tech",
    badge: "Smart Utility",
    subtitle: "8000mAh Power Bank Diary & Desk Stands",
    description: "Integrated charging cables, 16GB USB pendrive lock diaries & metallic roller pens.",
    href: "#pillar-showcase",
    icon: TechDiaryIcon,
    ctaText: "View diaries & tech",
  },
  {
    id: "turnkey-bundle",
    title: "Turnkey Event Decor + Gifting",
    badge: "5%–10% Bundle Perk",
    subtitle: "Bundled packages with 5%–10% discount",
    description: "Turnkey solution combining campus festive installations with customized bulk employee gifting.",
    href: "#rfq-section",
    icon: TurnkeyIcon,
    ctaText: "Inquire bundle",
  },
];

export function HeroSection() {
  const directWhatsAppHref = whatsappLink(
    "Hello Make a Wish Corporate Desk, I would like to inquire about year-round corporate gifting, onboarding kits, and catalog proposals."
  );

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-paper px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16"
    >
      <StarField
        spots={[
          { top: "8%", right: "46%", size: 30, color: "#f8e23a", kind: "twinkle", dur: 4, delay: 0, mobileHidden: true },
          { top: "72%", right: "4%", size: 44, color: "#7ed2ea", kind: "drift", dur: 10, delay: 1, mobileHidden: true },
          { top: "38%", right: "2%", size: 20, color: "#fdc32e", kind: "twinkle", dur: 5, delay: 2, mobileHidden: true },
        ]}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left Column: Brand Narrative & Primary CTAs */}
        <div>
          <p className="eyebrow text-plum/80">
            365-Day B2B Corporate Gifting Flagship · Navi Mumbai &amp; Mumbai
          </p>

          <h1
            id="hero-title"
            className="mt-4 font-display text-4xl italic font-bold leading-[1.08] tracking-tight text-plum sm:text-5xl lg:text-[3.5rem]"
          >
            Elevate Employee Onboarding, Client Relations &amp; Corporate Milestones.
          </h1>

          <p className="lede mt-6 text-ink/85">
            Curated 2-in-1 to 6-in-1 Joining Kits, Executive Diaries, Laptop Backpacks, PATRA Pure Copper &amp; Brassware, and Luxury Gourmet Hampers. Pre-packaged and customized with your corporate logo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pillar-showcase" className="btn">
              Explore Corporate Pillars &amp; SKUs{" "}
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a
              href={directWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost text-plum"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>

          <p className="mt-4 max-w-[48ch] text-xs sm:text-sm leading-relaxed text-ink/70">
            Customized bulk proposals and tiered pricing shared on request by our corporate desk. No public retail pricing.
          </p>

          <dl
            aria-label="Catalogue summary statistics"
            className="mt-8 grid max-w-md grid-cols-3 gap-3 border-t-2 border-plum/15 pt-5 sm:gap-4 sm:pt-6"
          >
            <div>
              <dt className="text-[0.68rem] sm:text-xs font-black uppercase tracking-[0.14em] text-plum/70">
                B2B Pillars
              </dt>
              <dd className="mt-1 font-display text-3xl sm:text-4xl italic leading-none text-plum">
                5
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] sm:text-xs font-black uppercase tracking-[0.14em] text-plum/70">
                Catalog SKUs
              </dt>
              <dd className="mt-1 font-display text-3xl sm:text-4xl italic leading-none text-plum">
                49+
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] sm:text-xs font-black uppercase tracking-[0.14em] text-plum/70">
                Bundle Perk
              </dt>
              <dd className="mt-1 font-display text-2xl sm:text-3xl italic leading-none text-plum">
                5%–10%
              </dd>
            </div>
          </dl>
        </div>

        {/* Right Column: 4-Card Visual Spotlight Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
            {spotlightCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <a
                  key={card.id}
                  href={card.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-plum/15 bg-paper/95 p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-plum hover:bg-paper hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-plum/20 bg-cream/70 text-plum transition-colors group-hover:bg-plum group-hover:text-paper">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-plum/15 bg-cream/50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-plum">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-lg sm:text-xl italic leading-tight text-plum group-hover:text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-plum/80">
                      {card.subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-ink/75">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-plum transition-transform group-hover:translate-x-1">
                    <span>{card.ctaText}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick Features Strip */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-plum/15 bg-cream/40 px-3.5 py-2.5 text-[0.72rem] sm:text-xs font-bold text-plum/85">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-black">✓</span>
              <span>Low 25 Unit MOQ</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-black">✓</span>
              <span>Custom Logo Branding</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-black">✓</span>
              <span>Pan-India Dispatch</span>
            </div>
          </div>

          <Star
            aria-hidden="true"
            className="anim-spin-slow pointer-events-none absolute -right-3 -top-5 h-12 w-12 text-sun hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
