import Image from "next/image";
import { Reveal } from "../Reveal";
import { ContactLinks } from "../ContactLinks";

export function ClosingSection() {
  return (
    <section
      aria-labelledby="closing-title"
      className="relative overflow-hidden border-b border-zinc-800 bg-[#111111] px-5 py-24 text-white md:px-10 md:py-32"
    >
      {/* Background Cinematic Boardroom Photography */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/cta-corporate.png"
          alt="Executive boardroom table with luxury gifts and evening city view"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-[#111111]/75" />
      </div>

      <Reveal className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span>Elevate Your Brand</span>
        </div>

        <h2
          id="closing-title"
          className="mt-5 font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-white leading-[1.08] max-w-[20ch]"
        >
          Elevate Your Next Corporate Gifting Rollout.
        </h2>

        <p className="mt-6 max-w-[60ch] text-base sm:text-xl leading-relaxed text-zinc-300">
          Tell us your head-count, delivery date, and corporate branding preferences. Our sales desk will deliver a comprehensive presentation, sample kit, and GST-compliant proposal within hours.
        </p>

        <div className="mt-10">
          <ContactLinks
            tone="sun"
            label="Inquire via WhatsApp Desk"
            message="Hello Make a Wish Corporate Desk, I would like to inquire about bulk corporate gifting, joining kits, and proposals for our team."
          />
        </div>
      </Reveal>
    </section>
  );
}
