import type { Metadata } from "next";
import Image from "next/image";
import { ContactLinks } from "../../components/ContactLinks";
import { Reveal } from "../../components/Reveal";
import { Star, StarField } from "../../components/Star";
import { CatalogueButton, YearRoundButton } from "../../components/gifting/GiftingActions";
import { GiftingCatalogue } from "../../components/gifting/GiftingCatalogue";
import { HamperLookbook } from "../../components/gifting/HamperLookbook";
import { RFQForm } from "../../components/gifting/RFQForm";
import { TurnkeyPlanner } from "../../components/gifting/TurnkeyPlanner";
import { giftingCategories, hamperSeries, hampers } from "../../lib/gifting";
import { contact, whatsappLink } from "../../lib/site";

export const metadata: Metadata = {
  title: "Corporate Gifting | Diwali 2026 & year-round",
  description:
    "Corporate gifting in Navi Mumbai and Mumbai: 14 categories from dry fruit and gourmet edibles to brassware, 999 silver and leather, plus 13 Diwali 2026 hampers. Catalogue and proposals on request.",
};

const heroImages = [
  { src: "/images/hampers/5-cavity-gold-floral.jpg", alt: "Gold floral brocade box with five compartments of dry fruits" },
  { src: "/images/hampers/4-glass-jars-peacock.jpg", alt: "Peacock-motif heritage box with four glass jars of dry fruits" },
  { src: "/images/hampers/6-jars-emerald-jaali.jpg", alt: "Emerald and gold box with six glass jars of dry fruits" },
  { src: "/images/hampers/eco-jute-hamper.jpg", alt: "Jute hamper bag with four embroidered potlis" },
];

const reasons = [
  {
    name: "Range without the runaround",
    text: "Fourteen categories and thirteen hamper models under one corporate desk, so festive, executive and wellness gifting do not need separate vendors.",
  },
  {
    name: "A range you can actually see",
    text: "Every category and every hamper model is shown with its packaging, editions and net weights, so the range can be judged before anyone talks rates.",
  },
  {
    name: "One window if you need decor",
    text: "The events team can pair the hamper programme with reception, atrium and floor-bay festive installations on the same schedule.",
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
  "Christmas and New Year",
];

const faqs = [
  {
    q: "Why are rates not published on the website?",
    a: "Corporate gifting rates depend on the category, the edition, the number of recipients and the delivery location. Instead of publishing a single figure that will not hold, the corporate desk sends the rate card with the catalogue.",
  },
  {
    q: "How do I receive the 2026 catalogue?",
    a: "Request it through the catalogue form or WhatsApp. The corporate desk sends the catalogue, along with the relevant rate card, during business hours.",
  },
  {
    q: "Is there a minimum order?",
    a: "Requirements are scoped individually, from a single leadership set to a multi-location rollout. Tell the desk the size of your list and they will confirm what works.",
  },
  {
    q: "Can you deliver to more than one office?",
    a: "Yes. Multi-location delivery can be planned into the proposal, with a dispatch schedule agreed against your office calendar.",
  },
  {
    q: "Do you provide GST invoices?",
    a: "Yes. Corporate orders are quoted and invoiced with GST, itemised across gifting and any decor or installation work in the same brief.",
  },
  {
    q: "Can decor and hampers be handled together?",
    a: "Yes. The turnkey planner below builds a combined decor and gifting brief, and the same team owns the installation and the hamper dispatch.",
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
    "Corporate gifting, festive decor and event production in Navi Mumbai and Greater Mumbai.",
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
      <section aria-labelledby="gifting-hero-title" className="relative overflow-hidden bg-plum px-5 pb-16 pt-12 text-paper md:px-10 md:pb-24 md:pt-16">
        <StarField
          spots={[
            { top: "10%", right: "8%", size: 44, color: "#f8e23a", kind: "twinkle", dur: 4, delay: 0, mobileHidden: true },
            { top: "72%", right: "44%", size: 24, color: "#7ed2ea", kind: "drift", dur: 10, delay: 1, mobileHidden: true },
            { top: "30%", right: "38%", size: 18, color: "#fff9b0", kind: "twinkle", dur: 5, delay: 2, mobileHidden: true },
          ]}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <p className="eyebrow text-sun">Corporate gifting · Navi Mumbai &amp; Mumbai</p>
            <h1 id="gifting-hero-title" className="display-xl mt-4 text-sun">
              Gifting, handled.
            </h1>
            <p className="lede mt-6 text-paper">
              A corporate gifting desk for Diwali 2026 and the rest of the year: fourteen
              categories, thirteen signature hampers and a catalogue that comes to you with the
              right rate card.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CatalogueButton className="btn btn-sun">
                Request the catalogue <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </CatalogueButton>
              <a href="#gifting-categories" className="btn btn-ghost text-paper">
                Browse the categories
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-paper/25 pt-6">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-paper/60">Categories</dt>
                <dd className="mt-1 font-display text-4xl italic leading-none text-sun">
                  {giftingCategories.length}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-paper/60">Hamper models</dt>
                <dd className="mt-1 font-display text-4xl italic leading-none text-sun">{hampers.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.16em] text-paper/60">Packaging series</dt>
                <dd className="mt-1 font-display text-4xl italic leading-none text-sun">
                  {hamperSeries.length}
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
              Diwali 2026 · four of thirteen models
            </p>
          </div>
        </div>
      </section>

      {/* Why the desk */}
      <section aria-labelledby="desk-title" className="bg-paper px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum/75">Why buy through one desk</p>
            <h2 id="desk-title" className="display-lg mt-2 text-plum">
              Breadth, craft, one invoice.
            </h2>
          </Reveal>
          <ul className="mt-9 grid gap-6 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <li key={reason.name}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="flex h-full flex-col rounded-[2rem] border-2 border-plum/15 bg-cream p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-plum font-black text-paper">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-2xl italic leading-tight text-plum">{reason.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/80">{reason.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 14 categories */}
      <section
        id="gifting-categories"
        aria-labelledby="categories-title"
        className="scroll-mt-24 bg-cream px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="eyebrow text-plum/75">The 2026 catalogue</p>
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
                together with the rate card for your requirement.
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <GiftingCatalogue />
          </div>
        </div>
      </section>

      {/* Diwali lookbook */}
      <section
        id="diwali-lookbook"
        aria-labelledby="lookbook-title"
        className="scroll-mt-24 bg-paper px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum/75">Diwali 2026 · signature hampers</p>
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

      {/* Year-round */}
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

      {/* Turnkey */}
      <section
        id="turnkey"
        aria-labelledby="turnkey-title"
        className="on-dark relative overflow-hidden scroll-mt-24 bg-ink px-5 py-16 text-paper md:px-10 md:py-24"
      >
        <StarField
          spots={[
            { top: "12%", right: "8%", size: 50, color: "#f8e23a", kind: "twinkle", dur: 5, delay: 0, mobileHidden: true },
            { top: "76%", right: "42%", size: 24, color: "#7ed2ea", kind: "drift", dur: 9, delay: 1, mobileHidden: true },
          ]}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <Reveal>
            <p className="eyebrow text-sun">Turnkey office programme</p>
            <h2 id="turnkey-title" className="display-lg mt-2 text-sun">
              Decor and hampers, one schedule.
            </h2>
            <p className="lede mt-4 text-paper">
              Pair the gifting programme with reception, atrium and floor-bay festive decor. One
              team, one production calendar and one consolidated proposal.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-paper/85">
              <li className="flex gap-3 border-t border-paper/20 pt-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-sun" />
                <span>Installations planned around the same office dates as the hamper dispatch.</span>
              </li>
              <li className="flex gap-3 border-t border-paper/20 pt-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-sun" />
                <span>Gifting, decor and installation itemised in one GST quote.</span>
              </li>
              <li className="flex gap-3 border-t border-paper/20 pt-3">
                <Star className="mt-1 h-4 w-4 shrink-0 text-sun" />
                <span>The corporate desk stays the single point of contact through delivery.</span>
              </li>
            </ul>
            <a href="#rfq-section" className="btn btn-sun mt-8">
              Plan the programme <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <TurnkeyPlanner />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-cream px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow text-plum/75">Before you ask</p>
            <h2 id="faq-title" className="display-lg mt-2 text-plum">
              Questions from the corporate desk.
            </h2>
            <p className="lede mt-4">
              Still unsure about quantity, delivery or the catalogue? Send the question on WhatsApp
              and the desk will answer directly.
            </p>
            <a
              href={whatsappLink(
                "Hello Make a Wish, I have a question about corporate gifting and the 2026 catalogue."
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

      {/* RFQ */}
      <section
        id="rfq-section"
        aria-labelledby="rfq-title"
        className="scroll-mt-24 bg-amber px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow text-plum/75">Request a proposal</p>
            <h2 id="rfq-title" className="display-lg mt-2 text-plum">
              Tell us what the year looks like.
            </h2>
            <p className="lede mt-4">
              One form for Diwali hampers, year-round gifting, a turnkey decor programme or an
              event. The desk will come back with the catalogue and the next steps.
            </p>

            <div className="mt-8 rounded-2xl bg-paper/80 p-5">
              <p className="eyebrow text-plum/70">Corporate desk</p>
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
              <p className="mt-3 text-sm text-ink/75">Monday to Saturday, 10:00–19:00.</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <RFQForm defaultInquiry="Diwali 2026 corporate gifting catalogue" />
          </Reveal>
        </div>
      </section>

      {/* Close */}
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
