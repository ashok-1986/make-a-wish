import type { Metadata } from "next";
import { Bands } from "../../components/Bands";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Make a Wish is a Navi Mumbai event decor and management firm: creativity with responsibility, local legacy with global standards.",
};

const values = [
  {
    id: "creativity",
    name: "Creativity with responsibility",
    text: "We care about the materials we use and what is left behind after the celebration.",
  },
  {
    id: "legacy",
    name: "Local legacy, global standards",
    text: "Rooted in Navi Mumbai, and held to the standard of the best events anywhere.",
  },
  {
    id: "collaboration",
    name: "Built with the client",
    text: "We plan, decorate and run events working closely with you, so the result feels like yours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        tone="sun"
        intro="Make a Wish is an event decor and management firm rooted in Navi Mumbai."
      />
      <Bands items={values} />
      <section className="on-dark bg-plum px-5 py-16 text-paper md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="display-lg text-sun">Say hello</h2>
          <div className="mt-8">
            <ContactLinks tone="sun" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
