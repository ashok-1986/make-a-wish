import type { Metadata } from "next";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { QuoteForm } from "../../components/QuoteForm";
import { Reveal } from "../../components/Reveal";
import { contact } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message Make a Wish on WhatsApp or call to plan your event in Navi Mumbai.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        tone="sky"
        intro="The quickest way to reach us is a message or a call."
      />

      <section aria-labelledby="reach-us" className="bg-paper px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <h2 id="reach-us" className="display-lg text-plum">
            Reach us
          </h2>
          <div className="mt-8">
            <ContactLinks />
            {contact.email && (
              <p className="mt-6 text-xl">
                <a href={contact.email} className="link-underline break-all font-bold text-plum">
                  {contact.emailLabel}
                </a>
              </p>
            )}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="quote" className="bg-sun px-5 py-16 md:px-10 md:py-24">
        <Reveal className="mx-auto max-w-3xl">
          <h2 id="quote" className="display-lg text-plum">
            Request a quote
          </h2>
          <p className="lede mt-4">
            Tell us the event type, the date and roughly how many guests. We will take it from there.
          </p>
          <div className="mt-8">
            <QuoteForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}
