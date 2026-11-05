import { Reveal } from "../Reveal";
import { HamperLookbook } from "../gifting/HamperLookbook";
import { hamperSeries, hamperSeriesCount } from "../../lib/gifting";

export function LookbookSection() {
  return (
    <section
      id="diwali-lookbook"
      aria-labelledby="lookbook-title"
      className="scroll-mt-24 bg-sun px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="eyebrow text-plum/75">Diwali 2026 · 13 models</p>
            <h2 id="lookbook-title" className="display-lg mt-2 text-plum">
              The season, in thirteen boxes.
            </h2>
            <p className="lede mt-4">
              Every model is a curated, ready-to-order edition. Switch between Edition 1 and
              Edition 2 to compare net weight and contents, then shortlist the models that fit
              your list.
            </p>
          </div>
          <div className="rounded-2xl bg-paper/80 p-4 shadow-sm">
            <p className="eyebrow text-plum/70">Four packaging series</p>
            <ul className="mt-3 grid gap-1.5 text-sm font-semibold">
              {hamperSeries.map((series) => (
                <li key={series.id} className="flex items-baseline justify-between gap-3">
                  <span>{series.name}</span>
                  <span className="tnum shrink-0 font-black text-plum">
                    {hamperSeriesCount(series.id)}
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
