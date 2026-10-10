import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "../components/ContactLinks";
import { Marquee } from "../components/Marquee";
import { Reveal } from "../components/Reveal";
import { Star, StarField } from "../components/Star";
import { audiences, categories } from "../lib/site";

const headline = ["Celebrate", "every", "moment."];

const panels = [
  { span: "md:col-span-3", tone: "bg-sun text-ink", star: "#fdc32e" },
  { span: "md:col-span-3", tone: "bg-sky text-ink", star: "#fff9b0" },
  { span: "md:col-span-2", tone: "bg-plum text-paper", star: "#7ed2ea" },
  { span: "md:col-span-2", tone: "bg-amber text-ink", star: "#fff9b0" },
  { span: "md:col-span-2", tone: "bg-cream text-ink", star: "#f8e23a" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero: sunshine field, the logo floating beside a headline whose words arrive one by one */}
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
              Make a Wish designs and runs events in Navi Mumbai: weddings and
              mandaps, festivals, exhibitions, parties and public events. Fresh
              flowers, paper flowers, balloons and supplies, from one team.
            </p>
            <div className="mt-10">
              <ContactLinks />
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

      <Marquee />

      {/* What we do: a wall of names; hovering a row slides the name and spins in a star */}
      <section aria-labelledby="what-we-do" className="bg-sky px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
            <h2 id="what-we-do" className="display-lg text-plum">
              What we do
            </h2>
            <Link href="/services" className="link-underline font-bold text-ink">
              See all services &rarr;
            </Link>
          </Reveal>
          <ul className="mt-10 border-t-2 border-plum/30">
            {categories.map((category) => (
              <li key={category.slug} className="border-b-2 border-plum/30">
                <Link
                  href={`/services#${category.slug}`}
                  className="row-hover group grid items-center gap-x-8 gap-y-1 px-1 py-5 transition-colors duration-300 hover:bg-sun focus-visible:bg-sun md:grid-cols-[1.1fr_1fr] md:px-4"
                >
                  <span className="flex items-center gap-4">
                    <Star className="row-star hidden h-7 w-7 shrink-0 text-plum md:block" />
                    <span className="row-name display-md text-ink">{category.name}</span>
                  </span>
                  <span className="text-base text-ink/85 md:text-lg">{category.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Occasions: five colour panels of different sizes, each with a star that turns on hover */}
      <section aria-labelledby="occasions" className="bg-paper px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 id="occasions" className="display-lg text-plum">
              Whatever you are celebrating
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-6">
            {audiences.map((audience, i) => {
              const panel = panels[i % panels.length];
              return (
                <li key={audience.name} className={panel.span}>
                  <Reveal delay={i * 90} className="h-full">
                    <div
                      className={`panel relative flex min-h-[15rem] h-full flex-col justify-end overflow-hidden rounded-[2rem] p-7 md:p-8 ${panel.tone}`}
                    >
                      <Star
                        color={panel.star}
                        className="panel-star absolute -right-8 -top-8 h-44 w-44 opacity-90"
                      />
                      <h3 className="display-md relative">{audience.name}</h3>
                      <p className="relative mt-2 max-w-[28ch]">{audience.line}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Close: drenched plum, the primary action at full size */}
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
