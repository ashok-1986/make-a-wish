import Link from "next/link";
import { SectionBar } from "../components/SectionBar";
import { ContactLinks } from "../components/ContactLinks";
import { categories } from "../lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero: the display headline is the centerpiece. No button, no image, no ornament. */}
      <section className="px-5 pb-[50px] pt-10 md:pt-[67px]">
        <h1 className="t-display max-w-[14ch] font-normal">
          Celebrate every moment.
        </h1>
        <p className="t-body mt-[50px] max-w-[34ch] md:ml-[10%]">
          Make a Wish designs and runs events in Navi Mumbai: weddings and
          mandaps, festivals, exhibitions, parties and public events. Fresh
          flowers, paper flowers, balloons and supplies, from one team.
        </p>
      </section>

      {/* Category wall: a name list at heading scale, the type itself is the graphic */}
      <section aria-labelledby="what-we-do">
        <SectionBar
          label="What we do"
          href="/services"
          action="All services"
        />
        <h2 id="what-we-do" className="sr-only">
          What we do
        </h2>
        <ul className="flex flex-col gap-[10px] px-5 py-[50px]">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/services#${category.slug}`}
                className="t-link t-heading inline-block"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Primary conversion */}
      <section aria-labelledby="say-hello">
        <SectionBar label="Planning something?" />
        <div className="px-5 pt-[50px]">
          <h2 id="say-hello" className="sr-only">
            Get in touch
          </h2>
          <ContactLinks />
          <p className="t-body mt-[50px] max-w-[34ch] md:ml-[10%]">
            Tell us the occasion, the date and the city. We will reply with
            ideas and a quote.
          </p>
        </div>
      </section>
    </>
  );
}
