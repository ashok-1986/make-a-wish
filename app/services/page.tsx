import type { Metadata } from "next";
import { Bands } from "../../components/Bands";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { categories } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mandap and wedding decor, real and paper flowers, festivals, exhibitions, public events, party organizing, balloons and event supplies in Navi Mumbai.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        tone="amber"
        intro="Everything an event needs, from the flowers on the mandap to the balloons at the party."
      />
      <Bands
        items={categories.map((c) => ({
          id: c.slug,
          name: c.name,
          text: c.description,
        }))}
      />
      <section className="on-dark bg-plum px-5 py-16 text-paper md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="display-lg text-sun">Start with a message</h2>
          <div className="mt-8">
            <ContactLinks tone="sun" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
