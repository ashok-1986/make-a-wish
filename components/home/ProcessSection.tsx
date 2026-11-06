import { Reveal } from "../Reveal";
import { pillarSteps } from "../../lib/home-data";

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-title"
      className="border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Operational Workflow</span>
          </div>

          <h2
            id="process-title"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
          >
            From Shortlist to Executive Desk Dispatch.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
            Zero public retail pricing or consumer carts. You specify the tier and SKUs, and our corporate desk returns custom digital mockups, tiered rate cards, and an exact delivery schedule.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillarSteps.map((step, i) => (
            <li
              key={step.name}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#131019] p-6 transition-all hover:border-purple-500/40"
            >
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-full border border-purple-500/40 bg-purple-500/20 font-mono text-xs font-bold text-purple-300"
              >
                0{i + 1}
              </span>

              <h3 className="mt-5 font-sans text-lg font-bold text-white">
                <span className="sr-only">Step {i + 1}: </span>
                {step.name}
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
