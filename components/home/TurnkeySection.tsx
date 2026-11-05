import { Reveal } from "../Reveal";
import { StarField } from "../Star";
import { TurnkeyPlanner } from "../gifting/TurnkeyPlanner";
import { contact } from "../../lib/site";
import { turnkeyFeatures } from "../../lib/home-data";

export function TurnkeySection() {
  return (
    <section
      id="turnkey-programme"
      aria-labelledby="turnkey-title"
      className="on-dark relative scroll-mt-24 overflow-hidden bg-plum px-5 py-16 text-paper md:px-10 md:py-24"
    >
      <StarField
        spots={[
          { top: "10%", right: "6%", size: 56, color: "#f8e23a", kind: "twinkle", dur: 5, delay: 0, mobileHidden: true },
          { top: "70%", right: "40%", size: 26, color: "#7ed2ea", kind: "drift", dur: 9, delay: 1, mobileHidden: true },
        ]}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <Reveal>
          <p className="eyebrow text-sun">Turnkey · one window</p>
          <h2 id="turnkey-title" className="display-lg mt-2 text-sun">
            The office, and the gift.
          </h2>
          <p className="lede mt-4 text-paper">
            Reception, atrium and floor-bay installations planned alongside the hamper dispatch,
            so HR, admin and procurement coordinate with one team instead of three.
          </p>

          <ul className="mt-8 grid gap-4">
            {turnkeyFeatures.map((feature) => (
              <li key={feature.name} className="border-t border-paper/20 pt-4">
                <h3 className="font-display text-2xl italic text-paper">{feature.name}</h3>
                <p className="mt-1 max-w-[44ch] text-sm leading-relaxed text-paper/80">{feature.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#rfq-section" className="btn btn-sun">
              Plan decor + hampers <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a href={contact.phone} className="btn btn-ghost text-paper">
              Call {contact.display}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <TurnkeyPlanner />
        </Reveal>
      </div>
    </section>
  );
}
