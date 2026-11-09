import { Reveal } from "../Reveal";
import { HamperLookbook } from "../gifting/HamperLookbook";
import { hamperSeries, hamperSeriesCount } from "../../lib/gifting";

export function LookbookSection() {
  return (
    <section
      id="diwali-lookbook"
      aria-labelledby="lookbook-title"
      className="scroll-mt-24 border-b border-zinc-200 bg-white px-5 py-16 text-zinc-900 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-purple-700">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Festive Luxury Hampers · 13 Signature Models</span>
            </div>

            <h2
              id="lookbook-title"
              className="mt-5 font-sans text-4xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] text-zinc-900 leading-[1.06] text-balance"
            >
              The Festive Season, in Thirteen Signature Boxes.
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              Every model is a curated, boardroom-ready edition. Compare net weight and gourmet inclusions, then shortlist models for custom sleeve embossing and delivery scheduling.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/90 bg-[#F9F8F6] p-5 shadow-sm">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-purple-700">
              Packaging Architectures
            </p>
            <ul className="mt-3 grid gap-2 text-xs sm:text-sm font-medium">
              {hamperSeries.map((series) => (
                <li
                  key={series.id}
                  className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-2 text-zinc-700"
                >
                  <span>{series.name}</span>
                  <span className="font-mono font-medium text-purple-700">
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
