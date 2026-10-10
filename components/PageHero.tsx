import { StarField } from "./Star";

const tones = {
  sun: { bg: "bg-sun", star: ["#5c2f7f", "#fff9b0", "#7ed2ea"] },
  sky: { bg: "bg-sky", star: ["#5c2f7f", "#fff9b0", "#f8e23a"] },
  amber: { bg: "bg-amber", star: ["#5c2f7f", "#fff9b0", "#7ed2ea"] },
} as const;

/* Inner-page hero: a field of brand colour, script title, a few floating stars. */
export function PageHero({
  title,
  intro,
  tone = "sun",
}: {
  title: string;
  intro: string;
  tone?: keyof typeof tones;
}) {
  const t = tones[tone];
  return (
    <section className={`relative overflow-hidden ${t.bg} px-5 pb-20 pt-14 text-ink md:px-10 md:pb-28 md:pt-20`}>
      <StarField
        spots={[
          { top: "12%", right: "8%", size: 56, color: t.star[0], kind: "twinkle", dur: 4, delay: 0 },
          { top: "58%", right: "20%", size: 34, color: t.star[1], kind: "drift", dur: 9, delay: 1, mobileHidden: true },
          { top: "30%", right: "34%", size: 22, color: t.star[2], kind: "twinkle", dur: 5, delay: 2, mobileHidden: true },
          { top: "72%", right: "6%", size: 26, color: t.star[0], kind: "drift", dur: 11, delay: 0.5 },
        ]}
      />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="display-xl text-plum">{title}</h1>
        <p className="lede mt-6">{intro}</p>
      </div>
    </section>
  );
}
