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
        className="scroll-mt-24 border-b border-white/10 bg-[#0B090E] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <h2 id="reach-us" className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Reach Our Corporate Desk
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              Tell us your occasion, head-count, and city. For bulk corporate gifting, include the 5 B2B pillar items or hamper models you are considering.
            </p>

            <div className="mt-8">
              <ContactLinks
                tone="sun"
                label="Start on WhatsApp"
                message="Hello Make a Wish, I would like to discuss corporate gifting and festive decor."
              />
            </div>

            <address className="mt-8 grid gap-2 not-italic text-sm">
              <a href={contact.phone} className="font-bold text-white hover:text-purple-300 transition-colors">
                {contact.display}
              </a>
              <a href={contact.secondaryPhone} className="font-bold text-white hover:text-purple-300 transition-colors">
                {contact.secondaryDisplay}
              </a>
              <a href={contact.email} className="break-all font-bold text-purple-300 hover:text-white transition-colors">
                {contact.emailLabel}
              </a>
            </address>

            <dl className="mt-8 grid gap-3 border-t border-white/10 pt-5 text-xs sm:text-sm text-zinc-400">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-zinc-500">Operational Hours</dt>
                <dd className="font-semibold text-white">Monday to Saturday, 10:00–19:00</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-zinc-500">Regional Coverage</dt>
                <dd className="font-semibold text-white">Navi Mumbai, Thane, Greater Mumbai &amp; Bulk Pan-India</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-zinc-500">Official Catalog</dt>
                <dd className="font-semibold text-white">Itemized rate card shared on request</dd>
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
        className="border-b border-white/10 bg-[#0E0C14] px-5 py-14 text-white md:px-10 md:py-20"
      >
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <div>
            <h2 id="contact-programme" className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Planning Corporate Gifting or Events?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-300">
              Request the 2026 catalogue and tiered commercial proposals for your team before production calendars fill.
            </p>
          </div>
          <ContactLinks
            tone="sun"
            label="Request on WhatsApp"
            message="Hello Make a Wish, please share the 2026 corporate gifting catalogue and the rate card for our requirement."
          />
        </Reveal>
      </section>
    </>
  );
}
