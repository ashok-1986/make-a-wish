import Link from "next/link";
import { AnimateOnView } from "../AnimateOnView";
import { buckets } from "../../lib/site";
import { serviceBucketStyles } from "../../lib/home-data";

export function ServicesSection() {
  return (
    <section
      id="service-buckets"
      aria-labelledby="pillars-title"
      className="scroll-mt-24 border-b border-zinc-200 bg-[#F9F8F6] px-5 py-16 text-zinc-900 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <AnimateOnView className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-purple-700">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Full-Stack Corporate Production</span>
            </div>
            <h2
              id="pillars-title"
              className="mt-5 font-sans text-4xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.035em] text-zinc-900 leading-[1.06] text-balance"
            >
              Five Disciplines, One Unified Production Team.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-purple-700 hover:text-purple-900 font-medium"
          >
            <span>See Every Service</span>
            <span
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </AnimateOnView>

        <AnimateOnView
          as="ul"
          stagger={0.1}
          y={36}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5"
        >
          {buckets.map((bucket, i) => {
            const style = serviceBucketStyles[i % serviceBucketStyles.length];
            return (
              <li key={bucket.id} className={`h-full ${style.span}`}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all ${style.tone}`}
                >
                  {/* Subtle corner glow */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-500/5 blur-2xl transition-all group-hover:bg-purple-500/15"
                    aria-hidden="true"
                  />

                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-700 font-medium">
                      0{i + 1} · Pillar
                    </span>

                    <h3 className="relative mt-2 font-sans text-xl sm:text-2xl lg:text-[32px] font-medium text-zinc-900 leading-snug tracking-tight">
                      {bucket.name}
                    </h3>

                    <p className="relative mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {bucket.focus}
                    </p>
                  </div>

                  <ul className="relative mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-zinc-100 pt-4">
                    {bucket.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services#${service.slug}`}
                          className="inline-block text-xs font-medium text-zinc-700 hover:text-purple-700 transition-colors"
                        >
                          <span className="text-purple-600 mr-1">•</span>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </AnimateOnView>
      </div>
    </section>
  );
}
