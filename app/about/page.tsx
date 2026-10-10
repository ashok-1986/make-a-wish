import type { Metadata } from "next";
import { SectionBar } from "../../components/SectionBar";
import { ContactLinks } from "../../components/ContactLinks";

export const metadata: Metadata = {
  title: "About",
  description:
    "Make a Wish is a Navi Mumbai event decor and management firm: creativity with responsibility, local legacy with global standards.",
};

const values = [
  "Creativity with responsibility.",
  "Local legacy, global standards.",
  "Built with the client, not for them.",
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-[50px] pt-10 md:pt-[67px]">
        <h1 className="t-display font-normal">About</h1>
        <p className="t-sub mt-[50px] max-w-[24ch] md:ml-[10%]">
          Make a Wish is an event decor and management firm rooted in Navi
          Mumbai.
        </p>
        <p className="t-body mt-[36px] max-w-[34ch] md:ml-[10%]">
          We plan, decorate and run events, working closely with each client so
          the result feels like theirs. We care about the materials we use and
          what is left behind after the celebration.
        </p>
      </section>

      <section aria-labelledby="values">
        <SectionBar label="What we hold to" />
        <h2 id="values" className="sr-only">
          Values
        </h2>
        <ul className="flex flex-col gap-[10px] px-5 py-[50px]">
          {values.map((value) => (
            <li key={value} className="t-heading">
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="talk">
        <SectionBar label="Say hello" />
        <div className="px-5 pt-[50px]">
          <h2 id="talk" className="sr-only">
            Get in touch
          </h2>
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
