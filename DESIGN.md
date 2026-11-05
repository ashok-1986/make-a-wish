# Make a Wish — Design System

> A festival banner: drenched fields of the logo's own colours, a script voice, and stars that move.

**Theme:** light and colour-drenched. Sections are full-width fields of a single brand colour, with cream/paper panels carrying dense gifting content. Product photography and packaging colour do the luxury work; the interface stays warm and legible.

The palette, type and motion derive from the Make a Wish logo (`public/logo.webp`): a plum script wordmark in a ring of stars on a cream star, wrapped in a yellow-to-blue swirl of fine lines.

## Colour (sampled from the logo)

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Plum | `#5c2f7f` | `plum` | Wordmark and stars. Headlines, buttons, the closing CTA field, dark section ground. |
| Ink | `#2b1442` | `ink` | Plum deepened for body text and the footer. |
| Sun | `#f8e23a` | `sun` | Swirl yellow. Announcement bar accents, shortlist count, secondary buttons on plum, marquee text. |
| Amber | `#fdc32e` | `amber` | Warm swirl yellow. Alternate fields and panels. |
| Sky | `#7ed2ea` | `sky` | Swirl blue. Alternate fields and section bands. |
| Cream | `#fff9b0` | `cream` | The star. Soft panels, filter bars, decorative stars. |
| Paper | `#fffce3` | `paper` | Lightened star. Page ground and text on plum/ink. |

Colour commits at page scale: a section is one field, and the page changes colour as it scrolls. Text is Ink or Plum on Sun, Amber, Sky and Cream, and Paper on Plum or Ink. `on-dark` marks dark fields. No gradients and no gradient text.

## Typography

- **Display:** Lobster Two, 700 italic (`font-display`). A heavy script echoing the logo lettering. Used for headlines and names only: `display-xl` (clamp 3rem–6rem), `display-lg` (2.25–4rem), `display-md` (1.75–2.75rem).
- **Body:** Figtree (`font-body`), 400–700. Body 18px, `lede` up to 22px, line-height 1.5, measure capped near 60ch.
- **Eyebrow:** `.eyebrow`, 11–12px, 900 weight, uppercase, wide tracking. Labels every section and every form group; set in Plum at 70–80% or Sun on dark.

## Layout and surfaces

- Page content sits in `max-w-6xl` with `px-5` on mobile and `md:px-10` above.
- Gifting-heavy areas use rounded panels (`2rem`), 2px Plum-tinted borders and Cream fill. Photography sits in rounded `1.25–1.5rem` frames.
- The gifting landing hero is a mosaic: one tall image beside a stack of two, with the headline in a Plum panel. The homepage hero is a split text/image field on Sun.
- Cards are never the only structure: category and hamper sections keep heading, count, filters and a results grid in one composition.
- Category and hamper filter chips scroll horizontally below `sm` and wrap from `sm` upward. Chips are 44px tall with `aria-pressed` state.

## Components

- **Buttons:** pill-shaped. Primary Plum with Paper text; `btn-sun` on Plum/Ink fields; `btn-ghost` is a 2px outline. Arrows nudge right on hover. Minimum 44px tall.
- **Header:** announcement bar above; sticky Paper header with logo, five 13px bold nav links (`whitespace-nowrap`) and a Shortlist button. The catalogue CTA appears from `xl` so the nav never wraps; on smaller screens it lives in the menu and page bodies.
- **Announcement bar:** full sentence on `sm` and up; a shorter "catalogue on request" line on mobile. The catalogue CTA is a modal trigger, never a file link.
- **Category card:** photograph when available, otherwise a `CategoryArt` illustrated plate with icon, number and accent colours. Name, season label, description, highlights and use case. Footer holds a quantity tier select and "Add to shortlist".
- **Hamper card:** 4:3 product photo, series label, packaging descriptor, edition radio group with net weight, then add-to-shortlist. Two editions per model where the catalogue provides them.
- **Quantity tier select:** 25–49, 50–99, 100–249, 250–500+ units. Labels are neutral commercial bands, never perks.
- **Shortlist tray:** right-side overlay listing categories, hampers and turnkey configurations. Each row has a tier select and remove action; footer has "Request a proposal", "Send on WhatsApp" and clear.
- **Catalogue modal:** centred panel explaining that the catalogue and rate card are sent by the desk. Captures name, company, email, phone, interest and quantity, then opens WhatsApp.
- **RFQ form:** two-column on desktop. Fields use `.field` (Paper ground, 2px Plum/20 border, Plum focus ring). Includes inquiry type, quantity, target date, location and requirements. Submission opens WhatsApp; a confirmation panel offers the same link again.
- **Turnkey planner:** configuration panel for office programme, recipient count, installation scope and hamper pairing, with a live brief preview and add-to-shortlist.
- **Footer:** Ink field with logo, positioning line, footer navigation, contact lines and service area.

## Motion

Expressive, authored once per area, exponential ease-out.

- Hero headline words arrive in sequence (blur, rise, slight rotation).
- Logo floats slowly (translate and tilt, 9s loop).
- Floating stars twinkle and drift; stars that would cross text on small screens are hidden.
- Marquee of category names in the Plum band; pauses on hover.
- Scroll reveals below the fold. Content is visible by default; JS hides and releases below-fold items.
- Hover: category row star spins in, panel star rotates, button lifts, cards raise slightly.
- Overlays: `panel-up` for the catalogue modal, `tray-in` from the right for the shortlist.
- `prefers-reduced-motion`: animation and transitions off, reveals disabled, marquee becomes scrollable.

## Do's and Don'ts

**Do**

- Keep each section a field of one brand colour and change colour between sections.
- Use Plum for headlines on light fields; Paper or Sun on Plum and Ink.
- Keep the logo on a colour field, never on a busy photograph.
- Keep a conversion action (catalogue, shortlist, proposal, WhatsApp) within reach in every gifting section.
- Let product photography carry the luxury; keep chrome quiet around it.
- Use the illustrated category plates honestly — never dress them up as product photos.

**Don't**

- Don't publish prices, currency symbols, rate cards, discounts or promotional claims anywhere.
- Don't offer logo stamping, cavity swaps, dietary swaps, "build your own" or personalisation UI.
- Don't introduce colours outside the palette.
- Don't use gradient text, decorative glass effects or hard offset shadows.
- Don't set body copy in the display face.
- Don't invent testimonials, team members, clients or event photography.

## Assets

- `public/logo.webp` — the logo as supplied (919 × 822, transparent).
- `app/icon.png` — 256px square favicon made from the logo.
- `public/images/hampers/` — product photography cropped from the 2026 hamper catalogue.
- `public/images/categories/` — category photography (dry fruit, crockery, brassware, copperware, lantern & ubtan).
- `public/images/hero-diwali.jpg`, `hero-year-round.jpg` — homepage hero images.
- Source catalogues live outside the repo in `D:\STARTUP PROJECTS\Prabhav Pratishthan\Make a Wish Assets`. Never publish them or expose their embedded prices.
