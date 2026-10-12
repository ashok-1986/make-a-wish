import type { Metadata } from "next";
import { Bands } from "../../components/Bands";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { buckets } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Corporate events, festive and cultural installations, weddings and social milestones, florals, decor and event supplies in Navi Mumbai and Mumbai.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        tone="amber"
        intro="Corporate experiences, festive installations, weddings and the decor, florals and supplies behind them, from one team."
      />

      {buckets.map((bucket) => (
        <section key={bucket.id} id={bucket.id} aria-labelledby={`${bucket.id}-title`} className="scroll-mt-36">
          <div className="on-dark bg-plum px-5 py-10 text-paper md:px-10 md:py-14">
            <Reveal className="mx-auto max-w-6xl">
              <h2 id={`${bucket.id}-title`} className="display-lg text-sun">
                {bucket.name}
              </h2>
              <p className="lede mt-3">{bucket.focus}</p>
            </Reveal>
          </div>
          <Bands
            level={3}
            enquire
            items={bucket.services.map((s) => ({
              id: s.slug,
              name: s.name,
              text: s.description,
            }))}
          />
        </section>
      ))}

      <section className="on-dark bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
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
