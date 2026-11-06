import { Reveal } from "../Reveal";
import { TurnkeyPlanner } from "../gifting/TurnkeyPlanner";
import { contact } from "../../lib/site";
import { turnkeyFeatures } from "../../lib/home-data";

export function TurnkeySection() {
  return (
    <section
      id="turnkey-programme"
      aria-labelledby="turnkey-title"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[450px] w-[500px] rounded-full bg-purple-950/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Turnkey Production · One Window</span>
          </div>

          <h2
            id="turnkey-title"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
          >
            The Office Venue, and the Gift.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
            Reception, atrium, and floor-bay installations scheduled simultaneously with your bulk hamper delivery. HR, admin, and leadership coordinate with one dedicated team under a single GST invoice.
          </p>

          <ul className="mt-8 grid gap-4">
            {turnkeyFeatures.map((feature) => (
              <li
                key={feature.name}
                className="rounded-xl border border-white/10 bg-[#131019] p-4 transition-colors hover:border-purple-500/30"
              >
                <h3 className="font-sans text-base font-bold text-white">
                  {feature.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {feature.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#rfq-section" className="btn">
              <span>Plan Decor + Hampers</span>
              <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a href={contact.phone} className="btn btn-ghost">
              Call {contact.display}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <TurnkeyPlanner />
        </Reveal>
      </div>
    </section>
  );
}
