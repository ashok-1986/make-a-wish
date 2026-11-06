import { Reveal } from "../Reveal";
import { RFQForm } from "../gifting/RFQForm";
import { contact } from "../../lib/site";

export function RFQSection() {
  return (
    <section
      id="rfq-section"
      aria-labelledby="rfq-title"
      className="scroll-mt-24 border-b border-white/10 bg-[#0E0C14] px-5 py-16 text-white md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>B2B Corporate Sales Desk</span>
          </div>

          <h2
            id="rfq-title"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight"
          >
            Request a B2B Volume Quote &amp; Digital Presentation.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
            Dedicated corporate desk for HR, procurement, and leadership teams. Rapid turnaround for samples, custom corporate logo mockups, and tiered volume proposals.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#131019] p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Direct Sales Lines
            </p>
            <address className="mt-4 grid gap-2 not-italic text-sm text-zinc-300">
              <a
                href={contact.phone}
                aria-label={`Call primary phone ${contact.display}`}
                className="font-bold text-white hover:text-purple-300 transition-colors"
              >
                {contact.display}
              </a>
              <a
                href={contact.secondaryPhone}
                aria-label={`Call secondary phone ${contact.secondaryDisplay}`}
                className="font-bold text-white hover:text-purple-300 transition-colors"
              >
                {contact.secondaryDisplay}
              </a>
              <a
                href={contact.email}
                aria-label={`Email corporate desk at ${contact.emailLabel}`}
                className="break-all font-semibold text-purple-300 hover:text-white transition-colors"
              >
                {contact.emailLabel}
              </a>
            </address>
            <div className="mt-5 border-t border-white/10 pt-4 text-xs text-zinc-400 space-y-1">
              <p>Operational Hours: Monday to Saturday, 10:00–19:00</p>
              <p>Delivery Region: Navi Mumbai, Thane &amp; Greater Mumbai (Pan-India bulk dispatch)</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-400 leading-relaxed">
            Prefer to send your shortlist directly? Add items as you browse and transmit the list directly over WhatsApp from the shortlist tray.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <RFQForm />
        </Reveal>
      </div>
    </section>
  );
}
