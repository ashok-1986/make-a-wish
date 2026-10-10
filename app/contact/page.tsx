import type { Metadata } from "next";
import { ContactLinks } from "../../components/ContactLinks";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { Star } from "../../components/Star";
import { contact } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message Make a Wish on WhatsApp or call to plan your event in Navi Mumbai.",
};

const toShare = [
  "The occasion",
  "The date",
  "The city and venue",
  "Roughly how many guests",
];

export default function ContactPage() {
  const hasDirectContact = Boolean(
    contact.whatsapp || contact.phone || contact.email
  );

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
            {hasDirectContact ? (
              <>
                <ContactLinks />
                {contact.email && (
                  <p className="mt-6 text-xl">
                    <a href={contact.email} className="link-underline break-all font-bold text-plum">
                      {contact.emailLabel}
                    </a>
                  </p>
                )}
              </>
            ) : (
              <p className="lede">
                Phone and WhatsApp details will be listed here shortly.
              </p>
            )}
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="share" className="bg-sun px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 id="share" className="display-lg text-plum">
              Helpful to tell us
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {toShare.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 80} className="flex items-center gap-4">
                  <Star className="h-8 w-8 shrink-0 text-plum" />
                  <span className="display-md">{item}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
