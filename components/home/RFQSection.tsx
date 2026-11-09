import { AnimateOnView } from "../AnimateOnView";
import { RFQForm } from "../gifting/RFQForm";
import { contact } from "../../lib/site";

export function RFQSection() {
  return (
    <section
      id="rfq-section"
      aria-labelledby="rfq-title"
      className="scroll-mt-24 border-b border-zinc-200 bg-[#F9F8F6] px-5 py-16 text-zinc-900 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <AnimateOnView>
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <span>B2B Corporate Sales Desk</span>
          </div>

          <h2
            id="rfq-title"
            className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-zinc-900 leading-tight"
          >
            Request a B2B Volume Quote &amp; Digital Presentation.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
            Dedicated corporate desk for HR, procurement, and leadership teams. Rapid turnaround for samples, custom corporate logo mockups, and tiered volume proposals.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-700">
              Direct Sales Lines
            </p>
            <address className="mt-4 grid gap-2 not-italic text-sm text-zinc-700">
              <a
                href={contact.phone}
                aria-label={`Call primary phone ${contact.display}`}
                className="font-bold text-zinc-900 hover:text-purple-700 transition-colors"
              >
                {contact.display}
              </a>
              <a
                href={contact.secondaryPhone}
                aria-label={`Call secondary phone ${contact.secondaryDisplay}`}
                className="font-bold text-zinc-900 hover:text-purple-700 transition-colors"
              >
                {contact.secondaryDisplay}
              </a>
              <a
                href={contact.email}
                aria-label={`Email corporate desk at ${contact.emailLabel}`}
                className="break-all font-semibold text-purple-700 hover:text-purple-900 transition-colors"
              >
                {contact.emailLabel}
              </a>
            </address>
            <div className="mt-5 border-t border-zinc-200 pt-4 text-xs text-zinc-500 space-y-1">
              <p>Operational Hours: Monday to Saturday, 10:00–19:00</p>
              <p>Delivery Region: Navi Mumbai, Thane &amp; Greater Mumbai (Pan-India bulk dispatch)</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-500 leading-relaxed">
            Prefer to send your shortlist directly? Add items as you browse and transmit the list directly over WhatsApp from the shortlist tray.
          </p>
        </AnimateOnView>

        <AnimateOnView delay={0.12}>
          <RFQForm />
        </AnimateOnView>
      </div>
    </section>
  );
}
