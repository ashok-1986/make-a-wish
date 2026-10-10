# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective clients of an event-management firm in Navi Mumbai, India. Five personas from the PRD: corporate HR planners (conferences, public events), wedding families (mandap and decor), festival organizers (thematic installations, art flowers), party hosts (balloon displays, full-service organization), and NGOs/non-profits (community events). They are comparing decorators and want to see past work, judge fit, and get in touch quickly.

## Product Purpose

Digital catalog and lead-generation hub for Make a Wish. It bridges the firm's offline expertise with online discoverability so visitors can browse offerings, see credibility, and start a conversation. Success: visitors contact the firm. The primary conversion is a WhatsApp message or phone call. The PRD also lists a quote request form, quote calculator, and Calendly scheduling as secondary paths.

## Positioning

Navi Mumbai-rooted creativity with end-to-end execution across a wide range of event categories, from fresh-flower mandap decor to paper flowers, balloons, exhibitions, and supplies, all from one firm.

## Operating Context

Local, relationship-driven service business. Prospects often decide by seeing photos of comparable past events and then talk directly with the team. Content is expected to be managed in Sanity.io per the PRD; hosting on Vercel.

## Capabilities and Constraints

- Stack in place: Next.js 14 (App Router), React, TypeScript, Tailwind CSS.
- Planned per PRD: Sanity CMS, Calendly, SendGrid for inquiry confirmation, GA4. Pages: Home, Portfolio, About, Services, Contact.
- Category list: Collection, Paper Flowers, Festivals, Exhibitions, Public Events, Party Organizers, Craftizner, Real Flowers Decor, Wedding Decor, Mandap Decor, Event Supplies, Balloons Supplies, Artificial Flowers. Open decision: the PRD and site copy say "12 categories" but list 13. Reconcile before publishing counts.
- Open decision: the Calendly link in the CTA still uses the old name (`prabhav-pratishthan`). Confirm the correct URL.
- Open decision: real phone number and WhatsApp number are not yet in the repo.
- Open decision: pricing tiers for the quote calculator are not confirmed.

## Brand Commitments

Brand name is "Make a Wish" (rebranded from Prabhav Pratishthan; do not reintroduce the old name). The logo (plum script wordmark in a ring of stars on a cream star, inside a yellow-to-blue line-art swirl) is in `public/logo.webp`. Brand colours sampled from it: plum `#5c2f7f`, sun yellow `#f8e23a`, amber `#fdc32e`, sky blue `#7ed2ea`, star cream `#fff9b0`. Use them as the site palette (see DESIGN.md). Messaging themes from the PRD: "celebrate every moment," "creativity with responsibility," "local legacy, global standards." Tone: professional yet warm, clarity-first, no hyperbole, concrete descriptors (for example, "mandap decor with fresh-water blooms"). Emphasize sustainability and client collaboration. The PRD's design notes call for ample white space, earthy tones with festival accents, and a serif display face with a sans body.

## Evidence on Hand

- Logo and brand assets exist with the owner but are not yet added to the repo.
- No real testimonials: the three on the homepage (TechCorp India, Royal Weddings, Navi Mumbai Festival Committee) are placeholders. Do not present them as real, and do not invent others.
- No confirmed event photography, client names, case studies, or pricing in the repo. Do not fabricate them.

## Product Principles

1. Contact is the point: a WhatsApp or call action is reachable from every page.
2. Show real work over claiming it; where evidence is missing, leave it visibly pending rather than inventing it.
3. Concrete over grand: name the actual decor, flowers, and event types.
4. Respect local context: Navi Mumbai, Indian celebrations (weddings, mandaps, festivals), mobile-first browsing.
5. Warm and professional, never hyperbolic.

## Accessibility & Inclusion

Target WCAG 2.1 AA: contrast ratios, keyboard-navigable menus, alt text on all imagery, responsive from 320px to 1440px.
