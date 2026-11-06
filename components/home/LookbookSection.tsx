import { Reveal } from "../Reveal";
import { HamperLookbook } from "../gifting/HamperLookbook";
import { hamperSeries, hamperSeriesCount } from "../../lib/gifting";

export function LookbookSection() {
  return (
    <section
      id="diwali-lookbook"
      aria-labelledby="lookbook-title"
      className="scroll-mt-24 border-b border-white/10 bg-[#0E0C14] px-5 py-16 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Festive Luxury Hampers · 13 Signature Models</span>
            </div>

            <h2
              id="lookbook-title"
              className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              The Festive Season, in Thirteen Signature Boxes.
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              Every model is a curated, boardroom-ready edition. Compare net weight and gourmet inclusions, then shortlist models for custom sleeve embossing and delivery scheduling.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131019] p-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Packaging Architectures
            </p>
            <ul className="mt-3 grid gap-2 text-xs sm:text-sm font-semibold">
              {hamperSeries.map((series) => (
                <li
                  key={series.id}
                  className="flex items-center justify-between gap-3 border-b border-white/5 pb-2 text-zinc-300"
                >
                  <span>{series.name}</span>
                  <span className="font-mono font-bold text-purple-300">
                    {hamperSeriesCount(series.id)} models
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-10">
          <HamperLookbook />
        </div>
      </div>
    </section>
  );
}
