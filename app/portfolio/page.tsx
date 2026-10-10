import type { Metadata } from "next";
import { SectionBar } from "../../components/SectionBar";
import { ContactLinks } from "../../components/ContactLinks";
import { audiences } from "../../lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "The kinds of events Make a Wish designs and runs: weddings, corporate events, festivals, parties and community events.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="px-5 pb-[50px] pt-10 md:pt-[67px]">
        <h1 className="t-display font-normal">Work</h1>
        <p className="t-body mt-[50px] max-w-[34ch] md:ml-[10%]">
          Event photography is being added to this page. Until then, message us
          and we will share photographs of work close to what you have in mind.
        </p>
      </section>

      <section aria-labelledby="events-we-do">
        <SectionBar label="Events we do" href="/services" action="All services" />
        <h2 id="events-we-do" className="sr-only">
          Events we do
        </h2>
        <ul className="flex flex-col gap-[50px] px-5 py-[50px]">
          {audiences.map((audience) => (
            <li key={audience.name}>
              <p className="t-heading-lg">{audience.name}</p>
              <p className="t-body mt-[10px] max-w-[34ch]">{audience.line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="see-more">
        <SectionBar label="See work close to your event" />
        <div className="px-5 pt-[50px]">
          <h2 id="see-more" className="sr-only">
            Ask for photographs
          </h2>
          <ContactLinks />
        </div>
      </section>
    </>
  );
}
