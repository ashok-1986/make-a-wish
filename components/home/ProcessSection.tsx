import { Reveal } from "../Reveal";
import { pillarSteps } from "../../lib/home-data";

export function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="bg-paper px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-plum/75">How it works</p>
          <h2 id="process-title" className="display-lg mt-2 text-plum">
            From shortlist to dispatch.
          </h2>
          <p className="lede mt-4">
            There is no cart and no published rate card. You tell us the shape of the order, and
            the corporate desk returns the catalogue, the rate card and a delivery plan.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillarSteps.map((step, i) => (
            <li
              key={step.name}
              className="relative flex h-full flex-col rounded-[2rem] border-2 border-plum/15 bg-cream p-6"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-full bg-plum font-black text-paper"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl italic leading-tight text-plum">
                <span className="sr-only">Step {i + 1}: </span>
                {step.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
