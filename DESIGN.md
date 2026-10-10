# Make a Wish — Design System
> a festival banner: drenched fields of the logo's own colours, with a script voice and stars that move

**Theme:** light, colour-drenched. Every section is a full-width field of one brand colour.

This replaces the earlier typographic-only "gallery wall on cream paper" reference. The palette, type and motion below are derived from the Make a Wish logo (`public/logo.webp`): a plum script wordmark in a ring of stars on a cream star, wrapped in a yellow-to-blue swirl of fine lines.

## Colour (sampled from the logo)

| Name | Value | Token | Role |
|------|-------|-------|------|
| Plum | `#5c2f7f` | `plum` | Lettering and stars in the logo. Headlines on light fields, buttons, the closing CTA field. |
| Ink | `#2b1442` | `ink` | Plum deepened for body text. Footer ground. |
| Sun | `#f8e23a` | `sun` | Swirl yellow. Hero field, secondary buttons on plum, marquee text. |
| Amber | `#fdc32e` | `amber` | Warm swirl yellow. Alternate fields and panels. |
| Sky | `#7ed2ea` | `sky` | Swirl blue. "What we do" field, alternate bands. |
| Cream | `#fff9b0` | `cream` | The star. Soft panels and decorative stars. |
| Paper | `#fffce3` | `paper` | Lightened star. Page ground and text on plum. |

Colour commits at page scale: fields own whole regions, and sections change colour as you scroll. Text is Ink or Plum on Sun, Amber, Sky and Cream, and Paper on Plum or Ink. No gradients, no gradient text.

## Typography

- **Display:** Lobster Two, 700 italic (`font-display`). A heavy script that echoes the logo lettering. Used for headlines and names only. Classes: `display-xl` (clamp 3rem to 6rem), `display-lg` (2.25 to 4rem), `display-md` (1.75 to 2.75rem).
- **Body:** Figtree (`font-body`), 400 to 700. Body 18px, `lede` up to 22px, line-height 1.5, measure capped at 60ch.

## Shapes and components

- Buttons are pill-shaped. Primary: Plum with Paper text. On Plum or Ink fields use `btn-sun`. `btn-ghost` is a 2px outline. Arrow nudges right on hover.
- Occasion panels are large rounded rectangles (2rem) of different sizes in a six-column grid, each holding one oversized star as ornament. No icons, no same-size card grid.
- Category list rows are full-width with hairline Plum rules; hovering fills the row Sun and slides the name.
- Inner-page content uses full-width colour bands that cycle Sun, Sky, Amber, Cream, Plum.
- Stars are drawn SVG (five-point polygon), decorative and `aria-hidden`.

## Motion

Expressive, authored once per area, exponential ease-out.

- Hero headline: words arrive one after another (blur, rise, slight rotate).
- Logo floats slowly (translate and tilt, 9s loop).
- Floating stars twinkle and drift; stars that would cross text on small screens are hidden.
- Marquee of category names in the Plum band; pauses on hover.
- Scroll reveals below the fold. Content is visible by default; JS hides and then releases below-fold items.
- Hover: category row star spins in, panel star rotates, button lifts.
- `prefers-reduced-motion`: all animation and transitions off, reveals disabled, marquee becomes scrollable.

## Do's and Don'ts

**Do**
- Keep every section a field of one brand colour; change colour between sections.
- Use Plum for headlines on light fields, and Paper or Sun on Plum and Ink.
- Keep the logo on a colour field, never on a busy background.
- Keep the primary action (WhatsApp, or a call) visible in the header, hero and close.

**Don't**
- Don't introduce colours outside the palette above.
- Don't use gradient text, glass effects as decoration, or hard offset shadows.
- Don't set body copy in the display face.
- Don't invent testimonials, team members, prices or client names (see PRODUCT.md).

## Assets

- `public/logo.webp`: the logo as supplied (919 by 822, transparent background).
- `app/icon.png`: 256px square favicon made from the logo.
- Event photography: none yet. The Work page says so; add photos there when available.
