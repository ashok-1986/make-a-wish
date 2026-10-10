import type { Metadata } from "next";
import { SectionBar } from "../../components/SectionBar";
import { ContactLinks } from "../../components/ContactLinks";
import { categories } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mandap and wedding decor, real and paper flowers, festivals, exhibitions, public events, party organizing, balloons and event supplies in Navi Mumbai.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-5 pb-[50px] pt-10 md:pt-[67px]">
        <h1 className="t-display font-normal">Services</h1>
        <p className="t-body mt-[50px] max-w-[34ch] md:ml-[10%]">
          Everything an event needs, from the flowers on the mandap to the
          balloons at the party.
        </p>
      </section>

      <section aria-labelledby="all-services">
        <SectionBar label="All services" />
        <h2 id="all-services" className="sr-only">
          All services
        </h2>
        <ul className="flex flex-col gap-[50px] px-5 py-[50px]">
          {categories.map((category) => (
            <li key={category.slug} id={category.slug} className="scroll-mt-24">
              <h3 className="t-heading-lg font-normal">{category.name}</h3>
              <p className="t-body mt-[10px] max-w-[34ch]">
                {category.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="start">
        <SectionBar label="Start with a message" />
        <div className="px-5 pt-[50px]">
          <h2 id="start" className="sr-only">
            Get in touch
          </h2>
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
