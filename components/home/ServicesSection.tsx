import Link from "next/link";
import { Reveal } from "../Reveal";
import { buckets } from "../../lib/site";
import { serviceBucketStyles } from "../../lib/home-data";

export function ServicesSection() {
  return (
    <section
      id="service-buckets"
      aria-labelledby="pillars-title"
      className="scroll-mt-24 border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Full-Stack Corporate Production</span>
            </div>
            <h2
              id="pillars-title"
              className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
            >
              Five Disciplines, One Unified Production Team.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-purple-400 hover:text-purple-300"
          >
            <span>See Every Service</span>
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-6">
          {buckets.map((bucket, i) => {
            const style = serviceBucketStyles[i % serviceBucketStyles.length];
            return (
              <li key={bucket.id} className={style.span}>
                <Reveal delay={i * 60} className="h-full">
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl p-7 transition-all ${style.tone}`}
                  >
                    {/* Subtle corner glow */}
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-600/10 blur-2xl transition-all group-hover:bg-purple-600/20"
                      aria-hidden="true"
                    />

                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">
                      0{i + 1} · Pillar
                    </span>

                    <h3 className="relative mt-2 font-sans text-xl sm:text-2xl font-bold text-white">
                      {bucket.name}
                    </h3>

                    <p className="relative mt-2 max-w-[44ch] text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {bucket.focus}
                    </p>

                    <ul className="relative mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4">
                      {bucket.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services#${service.slug}`}
                            className="inline-block text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                          >
                            <span className="text-purple-400 mr-1.5">•</span>
                            {service.name}
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
  );
}
