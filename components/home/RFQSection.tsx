import { Reveal } from "../Reveal";
import { RFQForm } from "../gifting/RFQForm";
import { contact } from "../../lib/site";

export function RFQSection() {
  return (
    <section
      id="rfq-section"
      aria-labelledby="rfq-title"
      className="scroll-mt-24 bg-amber px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow text-plum/75">Corporate desk</p>
          <h2 id="rfq-title" className="display-lg mt-2 text-plum">
            Request the catalogue and a proposal.
          </h2>
          <p className="lede mt-4">
            Tell us the occasion, the quantity and the delivery city. The corporate desk replies
            with the catalogue, the rate card for your requirement and the next steps.
          </p>

          <div className="mt-8 rounded-2xl bg-paper/80 p-5 shadow-sm">
            <p className="eyebrow text-plum/70">Direct lines</p>
            <address className="mt-3 grid gap-1.5 not-italic">
              <a
                href={contact.phone}
                aria-label={`Call primary phone ${contact.display}`}
                className="link-underline font-bold text-plum"
              >
                {contact.display}
              </a>
              <a
                href={contact.secondaryPhone}
                aria-label={`Call secondary phone ${contact.secondaryDisplay}`}
                className="link-underline font-bold text-plum"
              >
                {contact.secondaryDisplay}
              </a>
              <a
                href={contact.email}
                aria-label={`Email corporate desk at ${contact.emailLabel}`}
                className="link-underline break-all text-sm font-bold text-plum"
              >
                {contact.emailLabel}
              </a>
            </address>
            <p className="mt-3 text-sm text-ink/75">Monday to Saturday, 10:00–19:00.</p>
            <p className="mt-1 text-sm text-ink/75">Navi Mumbai &amp; Greater Mumbai.</p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Prefer to send the shortlist directly? Add items as you browse and send the list on
            WhatsApp from the shortlist tray.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <RFQForm />
        </Reveal>
      </div>
    </section>
  );
}
