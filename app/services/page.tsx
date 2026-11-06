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
          <div className="border-b border-white/10 bg-[#0E0C14] px-5 py-10 text-white md:px-10 md:py-14">
            <Reveal className="mx-auto max-w-6xl">
              <h2 id={`${bucket.id}-title`} className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {bucket.name}
              </h2>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-300">{bucket.focus}</p>
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

      <section className="border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Start with a Message</h2>
          <div className="mt-8">
            <ContactLinks tone="sun" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
