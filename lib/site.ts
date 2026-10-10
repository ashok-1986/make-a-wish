/* Single source of truth for site content and contact details.
   Set these in .env.local / Vercel env vars; when unset, contact links fall back gracefully. */

export const SITE_NAME = "Make a Wish";

/* Env vars override these defaults if set in Vercel. */
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919769864175"; // digits only, with country code
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919769864175";
const email = process.env.NEXT_PUBLIC_EMAIL;

export const contact = {
  /* Human-readable form for showing the number as text */
  display: "+91 97698 64175",
  whatsapp: whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello Make a Wish, I would like to plan an event."
      )}`
    : null,
  phone: phoneNumber ? `tel:${phoneNumber}` : null,
  phoneLabel: phoneNumber ?? null,
  email: email ? `mailto:${email}` : null,
  emailLabel: email ?? null,
};

export const navLinks = [
  { name: "Work", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const categories = [
  { slug: "collection", name: "Collection", description: "Curated collections and themed showcases." },
  { slug: "paper-flowers", name: "Paper Flowers", description: "Handmade paper-flower arrangements and installations." },
  { slug: "festivals", name: "Festivals", description: "Thematic installations for cultural celebrations." },
  { slug: "exhibitions", name: "Exhibitions", description: "Art displays and gallery exhibition setups." },
  { slug: "public-events", name: "Public Events", description: "Conferences and public gatherings, managed end to end." },
  { slug: "party-organizers", name: "Party Organizers", description: "Full-service party planning and organization." },
  { slug: "craftizner", name: "Craftizner", description: "Custom craft and handmade decorative pieces." },
  { slug: "real-flowers-decor", name: "Real Flowers Decor", description: "Fresh-flower arrangements and floral decor." },
  { slug: "wedding-decor", name: "Wedding Decor", description: "Decor for wedding venues and ceremonies." },
  { slug: "mandap-decor", name: "Mandap Decor", description: "Traditional mandap setups and structural decoration." },
  { slug: "event-supplies", name: "Event Supplies", description: "Equipment and supplies for your event." },
  { slug: "balloons-supplies", name: "Balloons Supplies", description: "Balloon displays, arches and supplies." },
  { slug: "artificial-flowers", name: "Artificial Flowers", description: "Artificial floral decor that lasts beyond the event." },
];

export const audiences = [
  { name: "Weddings", line: "Mandap and venue decor for families." },
  { name: "Corporate", line: "Conferences and public events for HR and admin teams." },
  { name: "Festivals", line: "Themed installations and floral art." },
  { name: "Parties", line: "Balloons, decor and full-service hosting." },
  { name: "Community", line: "Events for NGOs and non-profits." },
];
