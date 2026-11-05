import Image from "next/image";
import { Star, StarField } from "../Star";
import { CatalogueButton } from "../gifting/GiftingActions";
import { giftingCategories, hamperSeries, hampers } from "../../lib/gifting";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-paper px-5 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16"
    >
      <StarField
        spots={[
          { top: "8%", right: "46%", size: 30, color: "#f8e23a", kind: "twinkle", dur: 4, delay: 0, mobileHidden: true },
          { top: "72%", right: "4%", size: 44, color: "#7ed2ea", kind: "drift", dur: 10, delay: 1, mobileHidden: true },
          { top: "38%", right: "2%", size: 20, color: "#fdc32e", kind: "twinkle", dur: 5, delay: 2, mobileHidden: true },
        ]}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <p className="eyebrow text-plum/80">Corporate gifting · Diwali 2026 &amp; year-round</p>
          <h1 id="hero-title" className="display-xl mt-4 text-plum">
            Diwali, and every day after.
          </h1>
          <p className="lede mt-6">
            Fourteen curated gifting categories and thirteen Diwali 2026 hamper models, from
            graded dry fruit and gourmet edibles to brassware, 999 silver and leather. One
            corporate desk for your festive, executive and year-round gifting.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CatalogueButton className="btn">
              Request the 2026 catalogue <span className="btn-arrow" aria-hidden="true">&rarr;</span>
            </CatalogueButton>
            <a href="#gifting-categories" className="btn btn-ghost text-plum">
              Explore 14 categories
            </a>
          </div>

          <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink/70">
            Catalogue and commercial details are shared on request by the corporate desk. No
            cart, no checkout.
          </p>

          <dl
            aria-label="Catalogue summary statistics"
            className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t-2 border-plum/15 pt-6"
          >
            <div>
              <dt className="text-xs font-black uppercase tracking-[0.16em] text-plum/70">Categories</dt>
              <dd className="mt-1 font-display text-4xl italic leading-none text-plum">
                {giftingCategories.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-[0.16em] text-plum/70">Hamper models</dt>
              <dd className="mt-1 font-display text-4xl italic leading-none text-plum">
                {hampers.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-[0.16em] text-plum/70">Series</dt>
              <dd className="mt-1 font-display text-4xl italic leading-none text-plum">
                {hamperSeries.length}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-cream shadow-xl sm:aspect-[5/4]">
            <Image
              src="/images/hero-diwali.jpg"
              alt="An open deep-green Diwali gift box with six compartments of cashews, almonds, walnuts, raisins, pistachios and dates, tied with gold ribbon"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="object-cover"
            />
          </div>

          <aside
            aria-label="Diwali 2026 signature hamper overview"
            className="relative z-10 -mt-10 ml-4 max-w-[21rem] rounded-2xl bg-paper p-4 shadow-lg sm:ml-8"
          >
            <p className="eyebrow text-plum/70">Diwali 2026</p>
            <p className="mt-1 font-display text-2xl italic leading-tight text-plum">
              Thirteen signature hampers
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/75">
              Four packaging series, from classic cavity boxes to heritage keepsakes and the eco
              jute hamper.
            </p>
            <a
              href="#diwali-lookbook"
              className="link-underline mt-2 inline-block py-1 text-sm font-bold text-plum"
            >
              See the lookbook <span aria-hidden="true">&rarr;</span>
            </a>
          </aside>

          <Star
            aria-hidden="true"
            className="anim-spin-slow pointer-events-none absolute -right-2 -top-5 h-14 w-14 text-sun"
          />
        </div>
      </div>
    </section>
  );
}
