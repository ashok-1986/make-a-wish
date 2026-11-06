import type { Metadata } from "next";
import Image from "next/image";
import { ContactLinks } from "../../components/ContactLinks";
import { Reveal } from "../../components/Reveal";
import { Star, StarField } from "../../components/Star";
import { YearRoundButton } from "../../components/gifting/GiftingActions";
import { GiftingCatalogue } from "../../components/gifting/GiftingCatalogue";
import { HamperLookbook } from "../../components/gifting/HamperLookbook";
import { PillarShowcase } from "../../components/gifting/PillarShowcase";
import { RFQForm } from "../../components/gifting/RFQForm";
import { TurnkeyPlanner } from "../../components/gifting/TurnkeyPlanner";
import { giftingCategories, hamperSeries, hampers } from "../../lib/gifting";
import { contact, whatsappLink } from "../../lib/site";

export const metadata: Metadata = {
  title: "Corporate Gifting Solutions | Joining Kits, PATRA Copper & Tech Sets | Make a Wish",
  description:
    "365-Day Corporate Gifting in Navi Mumbai & Mumbai: Employee Joining Kits, Executive Combos, PATRA Pure Copper & Brassware, Tech Diaries, and Gourmet Hampers. Tiered B2B quotes on request.",
};

const heroImages = [
  { src: "/images/hampers/5-cavity-gold-floral.jpg", alt: "Gold floral brocade box with five compartments of dry fruits" },
  { src: "/images/hampers/4-glass-jars-peacock.jpg", alt: "Peacock-motif heritage box with four glass jars of dry fruits" },
  { src: "/images/hampers/6-jars-emerald-jaali.jpg", alt: "Emerald and gold box with six glass jars of dry fruits" },
  { src: "/images/hampers/eco-jute-hamper.jpg", alt: "Jute hamper bag with four embroidered potlis" },
];

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

const reasons = [
  {
    name: "Employee onboarding kits & utility sets",
    tag: "Pillars A, B & C",
    text: "From 2-in-1 to 6-in-1 curated joining boxes with tech power-bank diaries, vacuum sippers, metal pens, and laptop backpacks. Custom logo screen printing, laser engraving, and scheduled monthly batch dispatches for your new hires.",
  },
  {
    name: "Executive keepsakes & client appreciation",
    tag: "Pillars D & E",
    text: "PATRA certified pure copper bottles, table pots, authentic South Indian brass coffee dabaras, 999 pure silver, and luxury gourmet hampers. Meaningful, lasting recognition for board members, VIP clients, and long-service milestones.",
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
        className="relative overflow-hidden bg-plum px-5 pb-16 pt-12 text-paper md:px-10 md:pb-24 md:pt-16"
      >
        <StarField
          spots={[
            { top: "10%", right: "8%", size: 44, color: "#f8e23a", kind: "twinkle", dur: 4, delay: 0, mobileHidden: true },
            { top: "72%", right: "44%", size: 24, color: "#7ed2ea", kind: "drift", dur: 10, delay: 1, mobileHidden: true },
            { top: "30%", right: "38%", size: 18, color: "#fff9b0", kind: "twinkle", dur: 5, delay: 2, mobileHidden: true },
          ]}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <p className="eyebrow text-sun">
              365-Day B2B Corporate Gifting Solutions · Navi Mumbai, Thane &amp; Mumbai
            </p>
            <h1 id="gifting-hero-title" className="display-xl mt-4 text-sun">
              Corporate Gifting, Tailored for Your Team.
            </h1>
            <p className="lede mt-6 text-paper">
              From new-hire joining kits and conference giveaways to PATRA heritage copperware, executive tech diaries, and festive hampers. Direct corporate sales desk with custom logo branding and volume discounts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pillar-showcase" className="btn btn-sun">
                Explore 5 Corporate Pillars <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-paper"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Direct WhatsApp Desk</span>
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-paper/25 pt-6">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-paper/60">
                  B2B Pillars
                </dt>
                <dd className="mt-1 font-display text-4xl italic leading-none text-sun">
                  5
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-paper/60">
                  Signature SKUs
                </dt>
                <dd className="mt-1 font-display text-4xl italic leading-none text-sun">
                  49+
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-paper/60">
                  Min MOQ
                </dt>
                <dd className="mt-1 font-display text-4xl italic leading-none text-sun">
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
                  className={`relative overflow-hidden rounded-2xl bg-paper/10 ${
                    i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={i < 2}
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-paper/60">
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
        className="on-dark relative overflow-hidden scroll-mt-24 bg-ink px-5 py-16 text-paper md:px-10 md:py-24"
      >
        <StarField
          spots={[
            { top: "12%", right: "8%", size: 50, color: "#f8e23a", kind: "twinkle", dur: 5, delay: 0, mobileHidden: true },
            { top: "76%", right: "42%", size: 24, color: "#7ed2ea", kind: "drift", dur: 9, delay: 1, mobileHidden: true },
            { top: "25%", left: "6%", size: 22, color: "#fdc32e", kind: "twinkle", dur: 4, delay: 1.5, mobileHidden: true },
          ]}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border-2 border-sun/30 bg-gradient-to-br from-plum/60 via-ink to-ink p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-sun/40 bg-sun/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-sun">
                  ★ PRD Pillar E Bundled Perk
                </span>
                <h2 id="turnkey-title" className="display-lg mt-3 text-sun">
                  Decor and hampers, one schedule.
                </h2>
                <div className="mt-4 rounded-2xl border border-sun/25 bg-sun/10 p-4 sm:p-5">
                  <p className="font-semibold text-sun text-base sm:text-lg leading-snug">
                    Turnkey Office Decor + 100+ Hamper Bundle: Book your office celebration or corporate event decor with 100+ gift sets to unlock a 5%–10% package discount or complimentary entrance floral styling.
                  </p>
                </div>
                <p className="lede mt-5 text-paper">
                  Pair the corporate gifting programme with reception, atrium and floor-bay festive installations. One team, one production calendar and one consolidated GST proposal.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-paper/85">
                  <li className="flex gap-3 border-t border-paper/20 pt-3">
                    <Star className="mt-1 h-4 w-4 shrink-0 text-sun" />
                    <span><strong>5%–10% Package Discount:</strong> Unlocked on qualifying bulk 100+ gift sets paired with workplace or ballroom event decor.</span>
                  </li>
                  <li className="flex gap-3 border-t border-paper/20 pt-3">
                    <Star className="mt-1 h-4 w-4 shrink-0 text-sun" />
                    <span><strong>Complimentary Entrance Floral Styling:</strong> Bespoke fresh floral welcome installation for your corporate reception or atrium.</span>
                  </li>
                  <li className="flex gap-3 border-t border-paper/20 pt-3">
                    <Star className="mt-1 h-4 w-4 shrink-0 text-sun" />
                    <span><strong>Single Window &amp; GST Invoicing:</strong> Gifting, custom branding, and event decor itemised under one 100% compliant B2B tax invoice.</span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#rfq-section" className="btn btn-sun">
                    Plan the programme <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href={whatsappLink(
                      "Hello Make a Wish, I would like to inquire about the Turnkey Office Decor + 100+ Hamper Bundle (5%–10% discount / complimentary entrance floral styling)."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost text-paper"
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
      <section aria-labelledby="desk-title" className="bg-paper px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum/75">Why buy through one desk</p>
            <h2 id="desk-title" className="display-lg mt-2 text-plum">
              Breadth, craft, one invoice.
            </h2>
            <p className="lede mt-3 text-ink/80">
              Three reasons why corporate procurement, HR leads, and founders choose Make a Wish as their 365-day gifting partner.
            </p>
          </Reveal>
          <ul className="mt-9 grid gap-6 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <li key={reason.name}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="flex h-full flex-col rounded-[2rem] border-2 border-plum/15 bg-cream p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-plum font-black text-paper">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-plum/70">
                        {reason.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl italic leading-tight text-plum">{reason.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{reason.text}</p>
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
        className="scroll-mt-24 bg-cream px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="eyebrow text-plum/75">Complementary catalog options</p>
              <h2 id="categories-title" className="display-lg mt-2 text-plum">
                Fourteen categories, one standard.
              </h2>
              <p className="lede mt-4">
                From graded dry fruit and bakery to leather, copperware and 999 silver. Filter the
                directory and add what fits to your shortlist.
              </p>
            </div>
            <div className="rounded-2xl bg-paper/80 p-4 text-sm leading-relaxed text-ink/80">
              <p className="font-bold text-plum">Catalogue on request</p>
              <p className="mt-1">
                Photography and specifications for every category are shared by the corporate desk,
                together with the tiered rate card for your requirement.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <GiftingCatalogue />
          </div>
        </div>
      </section>

      {/* Section 4b: Complementary Catalog - Diwali Lookbook */}
      <section
        id="diwali-lookbook"
        aria-labelledby="lookbook-title"
        className="scroll-mt-24 bg-paper px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum/75">Festive hampers &amp; signature editions</p>
            <h2 id="lookbook-title" className="display-lg mt-2 text-plum">
              Thirteen models, four series.
            </h2>
            <p className="lede mt-4">
              Classic cavity boxes, luxury glass jars, heritage keepsakes and the eco jute hamper.
              Every model is a curated edition: choose the edition, note the net weight, and
              shortlist the ones your team is considering.
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
        className="scroll-mt-24 bg-sky px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow text-plum/75">Beyond the festival</p>
            <h2 id="year-round-title" className="display-lg mt-2 text-plum">
              A gifting calendar, not a season.
            </h2>
            <p className="lede mt-4">
              The calendar changes through the year; the desk does not. Build a programme around the
              moments your organisation already marks.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {yearRoundOccasions.map((occasion) => (
                <li
                  key={occasion}
                  className="rounded-full border-2 border-plum/25 bg-paper px-3.5 py-1.5 text-sm font-bold text-ink"
                >
                  {occasion}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <YearRoundButton className="btn text-paper">
                See year-round categories <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </YearRoundButton>
              <a href="#rfq-section" className="btn btn-ghost text-plum">
                Plan a programme
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream shadow-lg">
              <Image
                src="/images/hero-year-round.jpg"
                alt="A hammered copper water bottle on a sunlit cream cloth with leaf shadows"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-paper/95 p-4">
                <p className="eyebrow text-plum/70">One example</p>
                <p className="mt-1 font-display text-2xl italic leading-tight text-plum">
                  Copperware for a wellness drive
                </p>
                <p className="mt-1 text-sm text-ink/75">
                  Hammered bottles, carafe sets and mugs, planned for a single office or a
                  multi-location rollout.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 5: FAQs with PRD Details */}
      <section aria-labelledby="faq-title" className="bg-cream px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow text-plum/75">Before you ask</p>
            <h2 id="faq-title" className="display-lg mt-2 text-plum">
              Questions from the corporate desk.
            </h2>
            <p className="lede mt-4">
              Still unsure about custom branding, MOQ, delivery or sample boxes? Send your question on WhatsApp
              and the desk will answer directly.
            </p>
            <a
              href={whatsappLink(
                "Hello Make a Wish, I have a question regarding corporate gifting options and custom branding."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6"
            >
              Ask on WhatsApp <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <dl className="grid gap-3">
              {faqs.map((entry) => (
                <div key={entry.q} className="rounded-2xl border-2 border-plum/15 bg-paper p-5">
                  <dt className="font-bold leading-snug text-plum">{entry.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink/85">{entry.a}</dd>
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
        className="scroll-mt-24 bg-amber px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow text-plum/75">Request a B2B volume proposal</p>
            <h2 id="rfq-title" className="display-lg mt-2 text-plum">
              Tell us what your team needs.
            </h2>
            <p className="lede mt-4">
              Submit your corporate requirement for employee joining kits, executive hampers,
              PATRA copperware, or a turnkey decor bundle. Receive an itemized quote, branding
              mockups, and tiered rate card via WhatsApp or Email.
            </p>

            <div className="mt-8 rounded-2xl bg-paper/80 p-5">
              <p className="eyebrow text-plum/70">Corporate Sales Desk</p>
              <address className="mt-3 grid gap-1.5 not-italic">
                <a href={contact.phone} className="link-underline font-bold text-plum">
                  {contact.display}
                </a>
                <a href={contact.secondaryPhone} className="link-underline font-bold text-plum">
                  {contact.secondaryDisplay}
                </a>
                <a href={contact.email} className="link-underline break-all text-sm font-bold text-plum">
                  {contact.emailLabel}
                </a>
              </address>
              <p className="mt-3 text-sm text-ink/75">Monday to Saturday, 10:00–19:00 IST.</p>
              <p className="mt-1 text-xs text-ink/60">Serving Navi Mumbai, Thane, Mumbai &amp; Bulk Pan-India.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <RFQForm defaultInquiry="Employee Joining Kits & Onboarding" />
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="closing-title" className="bg-paper px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
          <Reveal>
            <p className="eyebrow text-plum/75">Make a Wish</p>
            <h2 id="closing-title" className="display-lg mt-2 max-w-[18ch] text-plum">
              One desk for the gift and the celebration.
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
