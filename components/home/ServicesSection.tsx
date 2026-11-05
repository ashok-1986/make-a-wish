import Link from "next/link";
import { Reveal } from "../Reveal";
import { Star } from "../Star";
import { buckets } from "../../lib/site";
import { serviceBucketStyles } from "../../lib/home-data";

export function ServicesSection() {
  return (
    <section
      id="service-buckets"
      aria-labelledby="pillars-title"
      className="scroll-mt-24 bg-cream px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <div className="max-w-2xl">
            <p className="eyebrow text-plum/75">Events, decor and gifting</p>
            <h2 id="pillars-title" className="display-lg mt-2 text-plum">
              Five pillars, one production team.
            </h2>
          </div>
          <Link href="/services" className="link-underline font-bold text-plum">
            See every service <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-6">
          {buckets.map((bucket, i) => {
            const style = serviceBucketStyles[i % serviceBucketStyles.length];
            return (
              <li key={bucket.id} className={style.span}>
                <Reveal delay={i * 80} className="h-full">
                  <div className={`panel relative h-full overflow-hidden rounded-[2rem] p-7 ${style.tone}`}>
                    <Star
                      aria-hidden="true"
                      color={style.star}
                      className="panel-star pointer-events-none absolute -right-10 -top-10 h-44 w-44 opacity-80"
                    />
                    <h3 className="display-md relative max-w-[20ch]">{bucket.name}</h3>
                    <p className="relative mt-3 max-w-[44ch] text-base opacity-90">{bucket.focus}</p>
                    <ul className="relative mt-5 flex flex-wrap gap-x-5 gap-y-1">
                      {bucket.services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services#${service.slug}`}
                            className={`link-underline inline-block py-1.5 font-bold ${style.link}`}
                          >
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
