import type { Metadata } from "next";
import Image from "next/image";
import { ContactLinks } from "../../components/ContactLinks";
import { Reveal } from "../../components/Reveal";
import { YearRoundButton } from "../../components/gifting/GiftingActions";
import { GiftingCatalogue } from "../../components/gifting/GiftingCatalogue";
import { HamperLookbook } from "../../components/gifting/HamperLookbook";
import { PillarShowcase } from "../../components/gifting/PillarShowcase";
import { RFQForm } from "../../components/gifting/RFQForm";
import { TurnkeyPlanner } from "../../components/gifting/TurnkeyPlanner";
import { WhatsAppIcon } from "../../components/icons/WhatsAppIcon";
import { contact, whatsappLink } from "../../lib/site";

export const metadata: Metadata = {
  title: "Corporate Gifting Solutions | Joining Kits, Pure Copper & Tech Sets | Make a Wish",
  description:
    "365-Day Corporate Gifting in Navi Mumbai & Mumbai: Employee Joining Kits, Executive Combos, Pure Copper & Heritage Brassware, Tech Diaries, and Gourmet Hampers. Tiered B2B quotes on request.",
};

const heroImages = [
  { src: "/images/hampers/5-cavity-gold-floral.jpg", alt: "Gold floral brocade box with five compartments of dry fruits" },
  { src: "/images/hampers/4-glass-jars-peacock.jpg", alt: "Peacock-motif heritage box with four glass jars of dry fruits" },
  { src: "/images/hampers/6-jars-emerald-jaali.jpg", alt: "Emerald and gold box with six glass jars of dry fruits" },
  { src: "/images/hampers/eco-jute-hamper.jpg", alt: "Jute hamper bag with four embroidered potlis" },
];

const reasons = [
  {
    name: "Employee onboarding kits & utility sets",
    tag: "Pillars A, B & C",
    text: "From 2-in-1 to 6-in-1 curated joining boxes with tech power-bank diaries, vacuum sippers, metal pens, and laptop backpacks. Custom logo screen printing, laser engraving, and scheduled monthly batch dispatches for your new hires.",
  },
  {
    name: "Executive keepsakes & client appreciation",
    tag: "Pillars D & E",
    text: "Pure copper bottles, table pots, authentic South Indian brass coffee dabaras, 999 pure silver, and luxury gourmet hampers. Meaningful, lasting recognition for board members, VIP clients, and long-service milestones.",
  },
  {
    name: "Turnkey single invoice & managed dispatch",
    tag: "Pillar E & Beyond",
    text: "One single procurement window for campus event decor and bulk gift hampers. 100% compliant B2B GST tax invoices, physical sample review boxes for HR teams, and door-to-door multi-branch delivery across Mumbai and pan-India.",
  },
];

const yearRoundOccasions = [
  "Employee onboarding kits",
  "Client and partner appreciation",
  "Leadership recognition",
  "Long-service awards",
  "Women's Day",
  "World Health Day",
  "Town halls and conferences",
  "New Year & annual celebrations",
];

const faqs = [
  {
    q: "Can we customize items and gift packaging with our company logo?",
    a: "Yes. Screen printing, UV printing, laser engraving, and embossing are available across all corporate gift sets, tech diaries, water bottles, and presentation boxes.",
  },
  {
    q: "What is the minimum order quantity (MOQ) for corporate orders?",
    a: "Our minimum order quantity starts from 25 units for standard corporate sets, employee joining kits, and curated hampers. Tiered volume quotes are available for 50–99, 100–249, and 250+ units.",
  },
  {
    q: "Which regions do you deliver to, and can you handle multi-office dispatch?",
    a: "We provide direct doorstep delivery across Navi Mumbai, Thane, and Mumbai. For multi-location corporate clients, we coordinate bulk pan-India courier dispatch to regional branch offices or remote employees.",
  },
  {
    q: "Can we inspect sample kits before placing our bulk corporate order?",
    a: "Yes. Executive sample boxes and physical product samples are available for HR and procurement review to verify material finish, branding precision, and packaging aesthetics prior to bulk production.",
  },
  {
    q: "Do you provide compliant B2B GST tax invoices?",
    a: "Yes. Full 100% compliant B2B GST invoices are provided for every corporate order, with input tax credit (ITC) clearly itemized across gifting products, branding, and any bundled decor services.",
  },
  {
    q: "How does the Turnkey Office Decor + 100+ Hamper Bundle perk work?",
    a: "Book your office celebration or corporate event decor with 100+ gift sets to unlock a 5%–10% package discount or complimentary entrance floral styling under a single consolidated purchase order.",
  },
  {
    q: "Why are prices not listed directly on the website?",
    a: "Corporate gifting rates depend on order volume (25–49, 50–99, 100–249, 250+ units), custom branding methods, and packaging specifications. The corporate sales desk sends itemized rate cards with the official catalogue.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((entry) => ({
    "@type": "Question",
    name: entry.q,
    acceptedAnswer: { "@type": "Answer", text: entry.a },
  })),
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Make a Wish",
  description:
    "Corporate gifting, festive decor and event production in Navi Mumbai, Thane and Greater Mumbai.",
  telephone: contact.phoneLabel,
  email: contact.emailLabel,
  areaServed: ["Navi Mumbai", "Mumbai", "Thane", "Panvel"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function CorporateGiftingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Structured data mirrors the visible FAQ and contact details on this page.
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, organisationJsonLd]) }}
      />

      {/* Hero */}
      <section
        aria-labelledby="gifting-hero-title"
        className="dark-section relative overflow-hidden border-b border-white/10 bg-[#0B090E] px-5 pb-16 pt-12 text-white md:px-10 md:pb-24 md:pt-16"
      >
        <div
          className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full bg-purple-900/20 blur-[130px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>365-Day B2B Corporate Gifting Solutions · Navi Mumbai, Thane &amp; Mumbai</span>
            </div>

            <h1
              id="gifting-hero-title"
              className="mt-5 font-sans text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white leading-[1.08]"
            >
              Corporate Gifting, Tailored for Your Team.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-300">
              From new-hire joining kits and conference giveaways to pure heritage copperware, executive tech diaries, and festive hampers. Direct corporate sales desk with custom logo branding and volume discounts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pillar-showcase" className="btn btn-dark-section">
                <span>Explore 5 Corporate Pillars</span>
                <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>Direct WhatsApp Desk</span>
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                  B2B Pillars
                </dt>
                <dd className="mt-1 font-sans text-3xl font-extrabold text-white">
                  5
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                  Signature SKUs
                </dt>
                <dd className="mt-1 font-sans text-3xl font-extrabold text-white">
                  49+
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                  Min MOQ
                </dt>
                <dd className="mt-1 font-sans text-3xl font-extrabold text-white">
                  25 Units
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <ul className="grid grid-cols-2 gap-3">
              {heroImages.map((image, i) => (
                <li
                  key={image.src}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#131019] shadow-lg ${
                    i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={i < 2}
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
              365-Day Corporate Gifting · Custom Branded Collections
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: 5 Core B2B Gifting Pillars Showcase */}
      <PillarShowcase />

      {/* Section 2: Turnkey Bundled Package Callout (PRD Section 2.1 Pillar E) */}
      <section
        id="turnkey-bundle"
        aria-labelledby="turnkey-title"
        className="relative overflow-hidden scroll-mt-24 border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-[#161320] via-[#131019] to-[#0E0C14] p-8 md:p-12 shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/15 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.16em] text-purple-300">
                  ★ PRD Pillar E Bundled Perk
                </span>

                <h2
                  id="turnkey-title"
                  className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
                >
                  Workplace Decor and Hampers, One Schedule.
                </h2>

                <div className="mt-4 rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 sm:p-5">
                  <p className="font-semibold text-white text-base leading-snug">
                    Turnkey Office Decor + 100+ Hamper Bundle: Book your office celebration or corporate event decor with 100+ gift sets to unlock a 5%–10% package discount or complimentary entrance floral styling.
                  </p>
                </div>

                <p className="mt-4 text-base leading-relaxed text-zinc-300">
                  Pair the corporate gifting programme with reception, atrium, and floor-bay festive installations. One team, one production calendar, and one consolidated GST proposal.
                </p>

                <ul className="mt-6 grid gap-3 text-sm text-zinc-300">
                  <li className="flex gap-3 border-t border-white/10 pt-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span><strong>5%–10% Package Discount:</strong> Unlocked on qualifying bulk 100+ gift sets paired with workplace or ballroom event decor.</span>
                  </li>
                  <li className="flex gap-3 border-t border-white/10 pt-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span><strong>Complimentary Entrance Floral Styling:</strong> Bespoke fresh floral welcome installation for your corporate reception or atrium.</span>
                  </li>
                  <li className="flex gap-3 border-t border-white/10 pt-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span><strong>Single Window &amp; GST Invoicing:</strong> Gifting, custom branding, and event decor itemised under one 100% compliant B2B tax invoice.</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#rfq-section" className="btn">
                    <span>Plan the Programme</span>
                    <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href={whatsappLink(
                      "Hello Make a Wish, I would like to inquire about the Turnkey Office Decor + 100+ Hamper Bundle (5%–10% discount / complimentary entrance floral styling)."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <TurnkeyPlanner />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Value Proposition & Why Buy Through One Desk */}
      <section aria-labelledby="desk-title" className="border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Enterprise Single Window</span>
            </div>
            <h2
              id="desk-title"
              className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              Breadth, Craftsmanship, One Invoice.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              Three reasons why corporate procurement, HR leads, and founders choose Make a Wish as their 365-day gifting partner.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <li key={reason.name}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#131019] p-6 shadow-lg transition-all hover:border-purple-500/40">
                    <div className="flex items-center justify-between">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-purple-500/40 bg-purple-500/20 font-mono text-xs font-bold text-purple-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
                        {reason.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-sans text-xl font-bold text-white leading-snug">
                      {reason.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                      {reason.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 4: Complementary Catalog - 14 Categories */}
      <section
        id="gifting-categories"
        aria-labelledby="categories-title"
        className="scroll-mt-24 border-b border-white/10 bg-[#0E0C14] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Complementary Catalog Options</span>
              </div>
              <h2
                id="categories-title"
                className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
              >
                Fourteen Categories, One Standard.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
                From graded dry fruit and bakery to leather, copperware, and 999 silver. Filter the directory and add what fits to your shortlist.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#131019] p-5 text-sm leading-relaxed text-zinc-300">
              <p className="font-sans font-bold text-white">Full Catalogue on Request</p>
              <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                Photography and specifications for every category are shared by the corporate desk, together with the tiered rate card for your requirement.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <GiftingCatalogue />
          </div>
        </div>
      </section>

      {/* Section 4b: Complementary Catalog - Festive Lookbook */}
      <section
        id="diwali-lookbook"
        aria-labelledby="lookbook-title"
        className="scroll-mt-24 border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Festive Hampers &amp; Signature Editions</span>
            </div>
            <h2
              id="lookbook-title"
              className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              Thirteen Models, Four Packaging Series.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              Classic cavity boxes, luxury glass jars, heritage keepsakes, and the eco jute hamper. Every model is a curated edition: choose the edition, note the net weight, and shortlist the ones your team is considering.
            </p>
          </Reveal>

          <div className="mt-10">
            <HamperLookbook />
          </div>
        </div>
      </section>

      {/* Section 4c: Complementary Catalog - Year-Round Calendar */}
      <section
        id="year-round"
        aria-labelledby="year-round-title"
        className="scroll-mt-24 border-b border-white/10 bg-[#0E0C14] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Beyond the Festival</span>
            </div>
            <h2
              id="year-round-title"
              className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              A Continuous Gifting Calendar, Not a Season.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              The calendar changes through the year; the desk does not. Build a corporate gifting programme around the key milestones your organisation marks.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {yearRoundOccasions.map((occasion) => (
                <li
                  key={occasion}
                  className="rounded-full border border-white/10 bg-[#131019] px-3.5 py-1.5 text-xs font-semibold text-zinc-300"
                >
                  {occasion}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <YearRoundButton className="btn">
                <span>See Year-Round Categories</span>
                <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </YearRoundButton>
              <a href="#rfq-section" className="btn btn-ghost">
                Plan a Programme
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#131019] shadow-2xl">
              <Image
                src="/images/why-corporate.png"
                alt="Modern corporate glass corridor and executive corporate gift sets"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/70 p-4 backdrop-blur-md">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-purple-300">
                  Pillar In Focus
                </p>
                <p className="mt-1 font-sans text-base font-bold text-white">
                  Pure Ayurvedic Copperware &amp; Tech Suites
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Hammered bottles, carafe sets, power bank diaries, and mugs for single offices or nationwide corporate rollouts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 5: FAQs with PRD Details */}
      <section aria-labelledby="faq-title" className="border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Procurement &amp; FAQ</span>
            </div>
            <h2
              id="faq-title"
              className="mt-4 font-sans text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              Direct Questions Answered by the Sales Desk.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              Still unsure about custom branding, MOQ, delivery schedules, or physical sample boxes? Send your query directly over WhatsApp.
            </p>
            <a
              href={whatsappLink(
                "Hello Make a Wish, I have a question regarding corporate gifting options and custom branding."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark-section mt-6"
            >
              <span>Ask on WhatsApp</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <dl className="grid gap-3">
              {faqs.map((entry) => (
                <div key={entry.q} className="rounded-xl border border-white/10 bg-[#131019] p-5">
                  <dt className="font-sans text-base font-bold text-white">{entry.q}</dt>
                  <dd className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">{entry.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Section 6: RFQ with Corporate Gifting Purpose & Dual Actions */}
      <section
        id="rfq-section"
        aria-labelledby="rfq-title"
        className="scroll-mt-24 border-b border-white/10 bg-[#0E0C14] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Volume Quote Request</span>
            </div>
            <h2
              id="rfq-title"
              className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              Tell Us What Your Team Needs.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              Submit your corporate requirement for employee joining kits, executive hampers,
              pure copperware, or a turnkey decor bundle. Receive an itemized quote, branding
              mockups, and tiered rate card via WhatsApp or Email.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#131019] p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
                Corporate Sales Desk
              </p>
              <address className="mt-3 grid gap-1.5 not-italic text-sm text-zinc-300">
                <a href={contact.phone} className="font-bold text-white hover:text-purple-300 transition-colors">
                  {contact.display}
                </a>
                <a href={contact.secondaryPhone} className="font-bold text-white hover:text-purple-300 transition-colors">
                  {contact.secondaryDisplay}
                </a>
                <a href={contact.email} className="break-all text-purple-300 hover:text-white transition-colors">
                  {contact.emailLabel}
                </a>
              </address>
              <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-500 space-y-1">
                <p>Monday to Saturday, 10:00–19:00 IST</p>
                <p>Navi Mumbai, Thane, Greater Mumbai &amp; Bulk Pan-India</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <RFQForm defaultInquiry="Employee Joining Kits & Onboarding" />
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="closing-title" className="bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Make a Wish</span>
            </div>
            <h2
              id="closing-title"
              className="mt-3 font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-[20ch]"
            >
              One Desk for the Gift and the Workplace Celebration.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ContactLinks
              label="Start on WhatsApp"
              message="Hello Make a Wish, I would like to discuss corporate gifting for my organisation."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
