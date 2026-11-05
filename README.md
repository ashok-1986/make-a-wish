# Make a Wish — Corporate Gifting Website

Price-free corporate gifting site for **Make a Wish Events & Gifting Solutions**, Navi Mumbai. It covers Diwali 2026 and year-round corporate gifting across 14 categories and 13 signature hamper models, alongside the firm's event and decor services.

The catalogue is **request-only**. Rates, proposals and the catalogue itself are shared by the corporate desk; nothing on the site publishes a price.

## Stack

- Next.js 14 (App Router), React 18, TypeScript (strict), Tailwind CSS 3
- No backend, no database, no CMS. Forms compose a message and open WhatsApp.
- Deploy target: Vercel (or any Node host that runs `next build` / `next start`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

Useful checks:

```bash
npx tsc --noEmit   # strict type check
npm run lint
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage: gifting hero, 14-category hub, Diwali 2026 lookbook, turnkey decor + hampers, year-round spotlight, process, service pillars, RFQ. |
| `/corporate-gifting` | Dedicated corporate gifting landing page: buyer reasons, categories, lookbook, year-round occasions, volume tiers, turnkey planner, FAQ, RFQ. |
| `/contact` | Contact details, hours and coverage, consolidated RFQ form (`#rfq-section`). |
| `/services` | Event and decor service pillars. |
| `/about` | Firm story and values. |
| `/portfolio` | Work page; event photography is pending. |

Primary anchors: `#gifting-categories`, `#diwali-lookbook`, `#turnkey` (gifting page) / `#turnkey-programme` (home), `#service-buckets`, `#rfq-section`.

## Source of truth

- `lib/gifting.ts` — the 14 categories, 13 hampers in four packaging series, editions and net weights, volume tiers, filters, inquiry types, and every WhatsApp/RFQ message builder.
- `lib/site.ts` — site name, contact details, announcement copy, navigation, service pillars and footer links.

Both files are deliberately price-free. Do not add price fields, currency symbols, rate strings, discount copy or price-bearing WhatsApp messages.

## Conversion model

There is no cart or checkout. A buyer can:

1. **Shortlist** a category, hamper or turnkey configuration, with a quantity tier.
2. **Request the catalogue** through a modal that opens WhatsApp with a pre-filled request.
3. **Request a proposal** from the shortlist tray. This seeds the RFQ form with the shortlisted items; if the current page has no form, the buyer is sent to `/contact#rfq-section` and the seed is carried in `sessionStorage`.
4. **Send an RFQ** from the homepage, gifting page or contact page. The form opens WhatsApp with all details pre-filled.

State keys:

- `maw-corporate-shortlist-v1` — shortlist items in `localStorage`.
- `maw-rfq-seed-v1` — one-shot shortlist-to-RFQ seed in `sessionStorage`.
- `maw-category-filter` — category filter carried across pages in `sessionStorage`.

## Content rules

- **No public pricing.** No `₹`, `Rs.`, `INR`, MRP, price filters, price totals or price metadata anywhere.
- **No website customisation.** The catalogue is pre-curated: no logo stamping, cavity swaps, dietary swaps, "build your own" or personalisation flows.
- **No promotions.** No bundle discounts, complimentary decor, free add-ons or "100+ hampers" perks. Volume tiers describe commercial bands only.
- **Request-only catalogue.** Never link directly to a PDF or expose the source catalogues.
- **Use the real contact details** in `lib/site.ts`: +91 97698 64175 (primary), +91 99871 19558 (secondary), makeawishsmita9@gmail.com (pending final confirmation with the owner).
- Do not invent clients, testimonials, case studies or event photography.

## Imagery

Product photography is cropped from the 2026 hamper catalogue and the Patra brass and copper catalogues. Embedded price text must never be visible.

- `public/images/hampers/` — 13 hamper photos plus the close-up used on the homepage.
- `public/images/categories/` — photography for dry fruit, crockery, brassware, copperware and lantern & ubtan.
- The remaining nine categories use the illustrated `CategoryArt` plates, since no matching photography exists.
- `public/images/hero-diwali.jpg` and `hero-year-round.jpg` lead the homepage hero.

## Accessibility

Target WCAG 2.1 AA: keyboard-navigable menus and overlays, visible focus states, 44px minimum touch targets, alt text on meaningful imagery, `aria-pressed` filter chips, reduced-motion handling, and layouts from 320px upward.

## Repository notes

- `README.md` (this file) is the developer guide.
- `PRODUCT.md` records product context, users and confirmed constraints.
- `DESIGN.md` records the palette, type, components and motion rules.
- Source brief: `make_a_wish_events_website_refresh_brief_and_prd.md` (PRD v2.0, price-free direction).
