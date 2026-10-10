import type { Metadata } from "next";
import { SectionBar } from "../../components/SectionBar";
import { ContactLinks } from "../../components/ContactLinks";
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
      <section className="px-5 pb-[50px] pt-10 md:pt-[67px]">
        <h1 className="t-display font-normal">Contact</h1>
        <p className="t-body mt-[50px] max-w-[34ch] md:ml-[10%]">
          The quickest way to reach us is a message or a call.
        </p>
      </section>

      <section aria-labelledby="reach-us">
        <SectionBar label="Reach us" />
        <div className="px-5 py-[50px]">
          <h2 id="reach-us" className="sr-only">
            Reach us
          </h2>
          {hasDirectContact ? (
            <>
              <ContactLinks />
              {contact.email && (
                <p className="t-heading-lg mt-[10px]">
                  <a href={contact.email} className="t-link break-all">
                    {contact.emailLabel}
                  </a>
                </p>
              )}
            </>
          ) : (
            <p className="t-heading max-w-[20ch]">
              Phone and WhatsApp details will be listed here shortly.
            </p>
          )}
        </div>
      </section>

      <section aria-labelledby="share">
        <SectionBar label="Helpful to tell us" />
        <h2 id="share" className="sr-only">
          What to include in your message
        </h2>
        <ul className="flex flex-col gap-[10px] px-5 py-[50px]">
          {toShare.map((item) => (
            <li key={item} className="t-heading">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
