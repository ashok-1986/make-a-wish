import { Reveal } from "../Reveal";
import { StarField } from "../Star";
import { ContactLinks } from "../ContactLinks";

export function ClosingSection() {
  return (
    <section
      aria-labelledby="closing-title"
      className="on-dark relative overflow-hidden bg-plum px-5 py-20 text-paper md:px-10 md:py-28"
    >
      <StarField
        spots={[
          { top: "14%", right: "10%", size: 70, color: "#f8e23a", kind: "twinkle", dur: 5, delay: 0 },
          { top: "62%", right: "26%", size: 34, color: "#7ed2ea", kind: "drift", dur: 9, delay: 1, mobileHidden: true },
          { top: "20%", right: "36%", size: 22, color: "#fff9b0", kind: "twinkle", dur: 4, delay: 2, mobileHidden: true },
          { top: "78%", right: "6%", size: 44, color: "#fdc32e", kind: "drift", dur: 12, delay: 0.5 },
        ]}
      />
      <Reveal className="relative mx-auto max-w-6xl">
        <h2 id="closing-title" className="display-xl text-sun">
          Make a wish.
        </h2>
        <p className="lede mt-6 text-paper">
          Tell us the occasion, the date and the city. We will reply with the catalogue, ideas
          and a proposal.
        </p>
        <div className="mt-10">
          <ContactLinks tone="sun" />
        </div>
      </Reveal>
    </section>
  );
}
