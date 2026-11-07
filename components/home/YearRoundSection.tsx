import Image from "next/image";
import { Reveal } from "../Reveal";
import { YearRoundButton } from "../gifting/GiftingActions";
import { yearRoundHighlights } from "../../lib/home-data";

export function YearRoundSection() {
  return (
    <section
      aria-labelledby="year-round-title"
      className="border-b border-zinc-200 bg-[#F9F8F6] px-5 py-16 text-zinc-900 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Left Column: Real Corporate Corridor & Gifting Photography */}
        <Reveal>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
            <Image
              src="/images/why-corporate.png"
              alt="Modern corporate glass corridor and executive corporate gift sets"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 p-3.5 backdrop-blur-md">
              <p className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-purple-300 font-bold">
                Year-Round Corporate Infrastructure
              </p>
              <p className="text-sm font-bold text-white">
                Employee Welcomes · Milestone Awards · Festive Despatch
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Narrative & Occasion Cards */}
        <Reveal delay={100}>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>365-Day Corporate Gifting Calendar</span>
          </div>

          <h2
            id="year-round-title"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-zinc-900 leading-tight"
          >
            The Corporate Calendar Doesn&rsquo;t Stop After Diwali.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
            Our 5 B2B pillars cover onboarding kits, partner appreciation, quarterly leadership awards, and employee wellness throughout the financial year. Tell us your date and head-count; our desk maps the optimal SKUs and tier rates.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {yearRoundHighlights.map((item) => (
              <li
                key={item.name}
                className="rounded-xl border border-zinc-200/90 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-purple-500/40 hover:-translate-y-1"
              >
                <h3 className="font-sans text-base font-bold text-zinc-900">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <YearRoundButton className="btn">
              <span>See Year-Round Pillars</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </YearRoundButton>
            <a href="#rfq-section" className="btn btn-ghost">
              Plan Corporate Calendar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
