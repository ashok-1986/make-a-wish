# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Corporate buyers in Navi Mumbai and Greater Mumbai: HR and people teams, procurement and admin heads, founders' offices and executive assistants. They are planning Diwali 2026 gifting or year-round programmes such as onboarding kits, client appreciation and recognition, usually for 25–500+ recipients. They need to judge range and quality quickly, shortlist without committing, and get a rate card from a person.

Secondary audiences are wedding families, festival organisers and community teams looking for decor and event production. They arrive through the services, about and work pages.

## Product Purpose

A price-free corporate gifting catalogue and lead-generation hub. It presents the full range — 14 categories, 13 Diwali 2026 hamper models, four packaging series — and turns interest into a conversation rather than a transaction. There is no cart or checkout. Success is a catalogue request, a shortlist sent for proposal, an RFQ, or a WhatsApp/call to the corporate desk.

## Positioning

One corporate desk for festive and year-round gifting, backed by an events and decor team that can dress the same office. Range without the runaround: dry fruit and gourmet edibles through brassware, 999 silver, leather and wellness, plus turnkey festive installations if the brief needs them. Navi Mumbai-rooted, working across Mumbai.

## Operating Context

Local, relationship-driven service business. Buyers shortlist online, then negotiate rates and delivery directly with the corporate desk. Quantities and editions are published; rates, proposals and the catalogue itself are shared on request. The site is a static Next.js build with no backend, CMS or database.

## Capabilities and Constraints

- Next.js 14 App Router, React 18, TypeScript strict mode, Tailwind CSS. Deployed as a standard Next.js app.
- No Sanity CMS, Calendly, SendGrid or GA4 integration. Enquiry forms compose a WhatsApp message; there is no server-side submission.
- Catalogue data lives in `lib/gifting.ts`: 14 categories, 13 hampers across classic cavity, glass jar, heritage keepsake and eco jute series, each with editions and net weights; four volume tiers from 25–49 to 250–500+ units.
- Site content and contacts live in `lib/site.ts`.
- **No public pricing.** No currency symbols, rates, MRP, price filters or price-bearing messages. Catalogues must be requested; no direct PDF download.
- **No website customisation.** No logo stamping, centre-cavity swaps, dietary swaps, "build your own" or personalisation flows. The catalogue is pre-curated.
- **No promotions.** No bundle discounts, complimentary decor, free add-ons or high-volume perks.
- Contact details in use: +91 97698 64175 (primary/WhatsApp), +91 99871 19558 (secondary), makeawishsmita9@gmail.com. The email is from the old brochure and still needs the owner's final confirmation.
- Photography exists for five categories. The other nine use illustrated brand plates rather than borrowed or fabricated product shots.
- Event photography is still missing from the Work page. Do not fill the gap with stock or invented case studies.

## Brand Commitments

Brand name is "Make a Wish" (rebranded from Prabhav Pratishthan; do not reintroduce the old name). The logo — a plum script wordmark in a ring of stars on a cream star, inside a yellow-to-blue line-art swirl — is `public/logo.webp`. Palette: plum `#5c2f7f`, ink `#2b1442`, sun `#f8e23a`, amber `#fdc32e`, sky `#7ed2ea`, cream `#fff9b0`, paper `#fffce3`. See `DESIGN.md`.

Voice: professional and warm, clarity first, no hyperbole. Prefer concrete descriptors ("a six-cavity chevron box with anjeer and walnut") over grand claims. Sustainability and collaboration remain themes across events and packaging.

## Confirmed by the owner

- More than 50 corporate events managed (shown as "50+").
- Decor is eco-friendly and low-waste; fresh florals; service area Navi Mumbai and Mumbai.
- Corporate gifting is a core offering, not a seasonal add-on, and the current push is Diwali 2026 plus year-round programmes.
- Do not name clients on the site for now.
- Do not publish rates or promotions; proposals are shared by the desk.
- Do not offer product customisation through the website.

## Evidence on Hand

- 13 hamper photographs cropped from `Make A Wish 2026 Hampers Catelogue 1.pdf`.
- Brassware and copperware photography from `PATRA BRASS CATALOGUE (5).pdf` and `PATRA CATALOGUE.pdf`.
- Category photography for dry fruit, crockery, lantern & ubtan, plus the brass and copper shots.
- `public/logo.webp` and `app/icon.png`.
- No real testimonials, client names, case studies or event photography in the repo. Do not invent them.
- No rate card in the repo. Rates stay with the corporate desk.

## Product Principles

1. Contact is the point: catalogue, shortlist and RFQ actions are reachable from every gifting page.
2. Publish what is stable — range, contents, editions, weights, quantity tiers — and keep negotiable rates with the desk.
3. Show real product photography where it exists; use clearly illustrated plates where it does not.
4. Respect the buyer's context: mobile-first, Indian festive calendar, multi-location offices, procurement-grade clarity.
5. Warm and professional, never hyperbolic.

## Accessibility & Inclusion

Target WCAG 2.1 AA: contrast ratios, keyboard-navigable menus, filters and overlays, visible focus states, 44px touch targets, alt text on meaningful imagery, reduced-motion support, and responsive layouts from 320px to 1440px and beyond.
