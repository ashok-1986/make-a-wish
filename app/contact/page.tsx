import type { Metadata } from "next";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { RFQForm } from "../../components/gifting/RFQForm";
import { contact } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message Make a Wish on WhatsApp or call the corporate desk to plan gifting, festive decor or an event in Navi Mumbai.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        tone="sky"
        intro="Gifting, festive decor or a full event: the quickest way to reach the corporate desk is a message or a call."
      />

      <section
        id="rfq-section"
        aria-labelledby="reach-us"
        className="scroll-mt-24 bg-paper px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <h2 id="reach-us" className="display-lg text-plum">
              Reach us
            </h2>
            <p className="lede mt-4">
              Tell us the occasion and the city. For gifting, include the categories or hamper
              models you are considering and the quantity you have in mind.
            </p>

            <div className="mt-8">
              <ContactLinks
                label="Start on WhatsApp"
                message="Hello Make a Wish, I would like to discuss corporate gifting and festive decor."
              />
            </div>

            <address className="mt-8 grid gap-2 not-italic">
              <a href={contact.phone} className="link-underline font-bold text-plum">
                {contact.display}
              </a>
              <a href={contact.secondaryPhone} className="link-underline font-bold text-plum">
                {contact.secondaryDisplay}
              </a>
              <a href={contact.email} className="link-underline break-all font-bold text-plum">
                {contact.emailLabel}
              </a>
            </address>

            <dl className="mt-8 grid gap-3 border-t-2 border-plum/15 pt-5 text-sm">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="font-bold text-ink/65">Hours</dt>
                <dd className="font-semibold">Monday to Saturday, 10:00–19:00</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="font-bold text-ink/65">Coverage</dt>
                <dd className="font-semibold">Navi Mumbai &amp; Greater Mumbai</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="font-bold text-ink/65">Catalogue</dt>
                <dd className="font-semibold">Shared on request by the corporate desk</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <RFQForm />
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="contact-programme"
        className="bg-sun px-5 py-14 md:px-10 md:py-20"
      >
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div>
            <h2 id="contact-programme" className="display-lg text-plum">
              Planning Diwali already?
            </h2>
            <p className="lede mt-3">
              Request the 2026 catalogue and the rate card for your requirement before the festive
              dispatch calendar fills.
            </p>
          </div>
          <ContactLinks
            tone="plum"
            label="Request on WhatsApp"
            message="Hello Make a Wish, please share the 2026 corporate gifting catalogue and the rate card for our requirement."
          />
        </Reveal>
      </section>
    </>
  );
}
