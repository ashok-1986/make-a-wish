import type { Metadata } from "next";
import { Bands } from "../../components/Bands";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { audiences } from "../../lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The kinds of events Make a Wish designs and runs: weddings, corporate events, festivals, parties and community events.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Work"
        tone="sky"
        intro="Event photography is being added to this page. Until then, message us and we will share photographs of work close to what you have in mind."
      />
      <Bands
        items={audiences.map((a) => ({
          id: a.name.toLowerCase(),
          name: a.name,
          text: a.line,
        }))}
      />
      <section className="on-dark bg-plum px-5 py-16 text-paper md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="display-lg text-sun">See work close to your event</h2>
          <div className="mt-8">
            <ContactLinks tone="sun" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
