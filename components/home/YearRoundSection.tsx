import Image from "next/image";
import { Reveal } from "../Reveal";
import { YearRoundButton } from "../gifting/GiftingActions";
import { yearRoundHighlights } from "../../lib/home-data";

export function YearRoundSection() {
  return (
    <section aria-labelledby="year-round-title" className="bg-sky px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream shadow-lg">
            <Image
              src="/images/hero-year-round.jpg"
              alt="A hammered copper water bottle on a sunlit cream cloth with leaf shadows"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow text-plum/75">Year-round corporate gifting</p>
          <h2 id="year-round-title" className="display-lg mt-2 text-plum">
            The calendar does not stop after Diwali.
          </h2>
          <p className="lede mt-4">
            The same fourteen categories cover onboarding, recognition, wellness and client
            appreciation through the year. Start with the occasion, and we will map the
            categories and volumes to it.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {yearRoundHighlights.map((item) => (
              <li key={item.name} className="rounded-2xl border-2 border-plum/15 bg-paper p-4">
                <h3 className="font-bold leading-snug text-plum">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <YearRoundButton className="btn text-paper">
              See year-round categories <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </YearRoundButton>
            <a href="#rfq-section" className="btn btn-ghost text-plum">
              Plan a year-round programme
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
