import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "../components/ContactLinks";
import { Marquee } from "../components/Marquee";
import { QuoteForm } from "../components/QuoteForm";
import { Reveal } from "../components/Reveal";
import { Star, StarField } from "../components/Star";
import { buckets, festiveExperiences, giftingLines } from "../lib/site";

const headline = ["Experiences", "worth", "remembering."];

/* Bucket panels: one brand colour each, wide and narrow alternating */
const bucketStyle = [
  { span: "md:col-span-4", tone: "bg-plum text-paper", star: "#f8e23a", link: "text-sun" },
  { span: "md:col-span-2", tone: "bg-sun text-ink", star: "#fdc32e", link: "text-plum" },
  { span: "md:col-span-2", tone: "bg-cream text-ink", star: "#7ed2ea", link: "text-plum" },
  { span: "md:col-span-4", tone: "bg-amber text-ink", star: "#fff9b0", link: "text-plum" },
];

const trust = [
  "50+ corporate events managed",
  "Eco-friendly, low-waste decor",
  "Turnkey production across Navi Mumbai and Mumbai",
];

export default function HomePage() {
  return (
    <>
      {/* Hero: experience-led message for corporate buyers, the logo floating beside it */}
      <section className="relative overflow-hidden bg-sun px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">
        <StarField
          spots={[
            { top: "8%", left: "46%", size: 40, color: "#5c2f7f", kind: "twinkle", dur: 4, delay: 0, mobileHidden: true },
            { top: "70%", left: "4%", size: 30, color: "#fff9b0", kind: "drift", dur: 10, delay: 1 },
            { top: "18%", left: "3%", size: 22, color: "#7ed2ea", kind: "twinkle", dur: 5, delay: 2, mobileHidden: true },
            { top: "84%", left: "48%", size: 54, color: "#fdc32e", kind: "drift", dur: 12, delay: 0.5 },
            { top: "4%", right: "4%", size: 26, color: "#5c2f7f", kind: "twinkle", dur: 6, delay: 1.5 },
          ]}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 className="display-xl text-plum">
              {headline.map((word, i) => (
                <span
                  key={word}
                  className="word mr-[0.25em]"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="lede mt-8">
              Corporate events, festive celebrations and premium gifting across
              Navi Mumbai and Mumbai. We design, produce and manage every detail,
              with eco-conscious materials and fresh florals.
            </p>
            <div className="mt-10">
              <ContactLinks
                label="Plan a corporate experience"
                message="Hello Make a Wish, I would like to plan a corporate event or experience."
              />
              <p className="mt-5">
                <Link href="/services" className="link-underline font-bold text-plum">
                  View all services &rarr;
                </Link>
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[26rem] md:max-w-none">
            <Image
              src="/logo.webp"
              alt="Make a Wish logo: the words in plum script inside a ring of stars on a cream star, wrapped in a yellow-to-blue swirl of fine lines"
              width={919}
              height={822}
              priority
              sizes="(min-width: 768px) 42vw, 90vw"
              className="anim-float-logo h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Trust strip: three plain statements, no stat cards */}
      <section aria-label="Why Make a Wish" className="bg-cream px-5 py-6 md:px-10">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center font-bold">
          {trust.map((item, i) => (
            <li key={item} className="flex items-center gap-8">
              {i > 0 && <Star className="hidden h-4 w-4 shrink-0 text-plum md:block" />}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <Marquee />

      {/* Festive season spotlight: corporate gifting leads, with the real brochure as a printed plate */}
      <section aria-labelledby="festive" className="bg-amber px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <h2 id="festive" className="display-lg text-plum">
                Festive corporate gifting
              </h2>
              <p className="lede mt-4">
                Premium custom gifts for premium partnerships. Thank your clients,
                partners and teams this festive season with gifts chosen and
                personalised for them.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="display-md text-plum">Utility gifting</h3>
                  <p className="mt-2">{giftingLines.utility.join(", ")}.</p>
                </div>
                <div>
                  <h3 className="display-md text-plum">Edible gifting</h3>
                  <p className="mt-2">{giftingLines.edible.join(", ")}.</p>
                </div>
              </div>

              <div className="mt-10">
                <ContactLinks
                  label="Enquire about gifting"
                  message="Hello Make a Wish, I would like to enquire about corporate gifting for this festive season."
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <a
                href="/images/corporate-gifting-brochure.jpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the Make a Wish corporate gifting brochure in full size"
                className="mx-auto block max-w-sm rotate-1 transition-transform duration-500 hover:rotate-0"
              >
                <Image
                  src="/images/corporate-gifting-brochure.jpg"
                  alt="Make a Wish corporate gifting brochure. Utility gifting: home decor, handicraft, crockery, utensils, German silver, brass items, stationery, personalised products and accessories. Edible gifting: snacks, cookies, chocolate, dry fruit and seeds."
                  width={1128}
                  height={1600}
                  sizes="(min-width: 768px) 28vw, 80vw"
                  className="h-auto w-full rounded-3xl shadow-xl"
                />
              </a>
            </Reveal>
          </div>

          {/* Seasonal experiences: three plain columns, no cards */}
          <ul className="mt-16 grid gap-10 border-t-2 border-plum/30 pt-10 md:grid-cols-3">
            {festiveExperiences.map((item, i) => (
              <li key={item.name}>
                <Reveal delay={i * 100}>
                  <h3 className="display-md text-plum">{item.name}</h3>
                  <p className="mt-2">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services by category: four colour panels */}
      <section aria-labelledby="what-we-do" className="bg-sky px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h2 id="what-we-do" className="display-lg text-plum">
              Our services by category
            </h2>
            <Link href="/services" className="link-underline font-bold text-ink">
              See every service &rarr;
            </Link>
          </Reveal>

          <ul className="mt-10 grid gap-5 md:grid-cols-6">
            {buckets.map((bucket, i) => {
              const style = bucketStyle[i % bucketStyle.length];
              return (
                <li key={bucket.id} className={style.span}>
                  <Reveal delay={i * 90} className="h-full">
                    <div
                      className={`panel relative h-full overflow-hidden rounded-[2rem] p-7 md:p-9 ${style.tone}`}
                    >
                      <Star
                        color={style.star}
                        className="panel-star absolute -right-10 -top-10 h-44 w-44 opacity-80"
                      />
                      <h3 className="display-md relative max-w-[18ch]">{bucket.name}</h3>
                      <p className="relative mt-3 max-w-[40ch] text-base opacity-90">
                        {bucket.focus}
                      </p>
                      <ul className="relative mt-6 flex flex-wrap gap-x-5 gap-y-1">
                        {bucket.services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services#${s.slug}`}
                              className={`link-underline inline-block py-1.5 font-bold ${style.link}`}
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Quote request */}
      <section aria-labelledby="quote" className="bg-sun px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 id="quote" className="display-lg text-plum">
            Request a quote
          </h2>
          <p className="lede mt-4">
            Corporate, festive or a wedding: tell us the type, the date and the
            guest count, and we will reply with ideas.
          </p>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </Reveal>
      </section>

      {/* Close */}
      <section
        aria-labelledby="make-a-wish"
        className="on-dark relative overflow-hidden bg-plum px-5 py-20 text-paper md:px-10 md:py-28"
      >
        <StarField
          spots={[
            { top: "14%", right: "10%", size: 70, color: "#f8e23a", kind: "twinkle", dur: 5, delay: 0 },
            { top: "62%", right: "26%", size: 34, color: "#7ed2ea", kind: "drift", dur: 9, delay: 1 },
            { top: "20%", right: "36%", size: 22, color: "#fff9b0", kind: "twinkle", dur: 4, delay: 2 },
            { top: "78%", right: "6%", size: 44, color: "#fdc32e", kind: "drift", dur: 12, delay: 0.5 },
          ]}
        />
        <Reveal className="relative mx-auto max-w-6xl">
          <h2 id="make-a-wish" className="display-xl text-sun">
            Make a wish.
          </h2>
          <p className="lede mt-6 text-paper">
            Tell us the occasion, the date and the city. We will reply with
            ideas and a quote.
          </p>
          <div className="mt-10">
            <ContactLinks tone="sun" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
