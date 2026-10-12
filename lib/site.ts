/* Single source of truth for site content and contact details.
   Env vars (set in Vercel / .env.local) override the defaults below. */

export const SITE_NAME = "Make a Wish";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919769864175"; // digits only, with country code
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919769864175";
const email = process.env.NEXT_PUBLIC_EMAIL;

export const DEFAULT_MESSAGE = "Hello Make a Wish, I would like to plan an event.";

/* WhatsApp click-to-chat link with a pre-filled message */
export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  /* Human-readable form for showing the number as text */
  display: "+91 97698 64175",
  whatsapp: whatsappLink(),
  phone: `tel:${phoneNumber}`,
  phoneLabel: phoneNumber,
  email: email ? `mailto:${email}` : null,
  emailLabel: email ?? null,
};

/* Message shown in the top booking bar. Edit or remove when the season ends. */
export const announcement = {
  text: "Festive season: corporate gifting and festive decor bookings are open.",
  cta: "Enquire on WhatsApp",
  message: "Hello Make a Wish, I would like to enquire about corporate gifting and festive decor for this season.",
};

export const navLinks = [
  { name: "Work", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export type Service = { slug: string; name: string; description: string };
export type Bucket = {
  id: string;
  name: string;
  focus: string;
  services: Service[];
};

/* Services grouped into four buckets. Corporate Gifting comes from the Make a Wish gifting brochure. */
export const buckets: Bucket[] = [
  {
    id: "corporate",
    name: "Corporate & B2B Events",
    focus:
      "End-to-end event management, professional staging and brand experiences for companies, institutions and administrative teams.",
    services: [
      {
        slug: "public-events",
        name: "Public Events",
        description:
          "Large-scale conferences, town halls, annual general meetings, product launches and seminars.",
      },
      {
        slug: "exhibitions",
        name: "Exhibitions",
        description:
          "Commercial brand pavilions, trade stalls, gallery setups and expo booth fabrication.",
      },
      {
        slug: "corporate-gifting",
        name: "Corporate Gifting",
        description:
          "Premium custom gifts for partners, clients and teams: utility gifting and edible gifting, personalised with your brand.",
      },
    ],
  },
  {
    id: "festive",
    name: "Festive & Cultural Installations",
    focus:
      "Seasonal celebrations, cultural themes and thematic venue transformations for corporate campuses and community spaces.",
    services: [
      {
        slug: "festivals",
        name: "Festivals",
        description:
          "Turnkey thematic decor for Diwali, Navratri, Durga Puja, Christmas, New Year and corporate office festival days.",
      },
      {
        slug: "craftizner",
        name: "Craftizner",
        description:
          "Handcrafted cultural art, thematic backdrops, traditional props and custom artisanal installations.",
      },
    ],
  },
  {
    id: "weddings",
    name: "Weddings & Social Milestones",
    focus: "Personal and family milestone celebrations with tailored aesthetic design.",
    services: [
      {
        slug: "wedding-decor",
        name: "Wedding Decor",
        description:
          "Comprehensive wedding venue styling, sangeet stages, reception backdrops and theme styling.",
      },
      {
        slug: "mandap-decor",
        name: "Mandap Decor",
        description:
          "Traditional and contemporary ceremonial mandap architecture and floral canopies.",
      },
      {
        slug: "party-organizers",
        name: "Party Organizers",
        description:
          "Full-service hosting and decor for birthdays, anniversaries, private dinners and family gatherings.",
      },
    ],
  },
  {
    id: "decor",
    name: "Bespoke Decor, Florals & Supplies",
    focus: "Creative craft production, floral design and equipment inventory.",
    services: [
      {
        slug: "real-flowers-decor",
        name: "Real Flowers Decor",
        description: "Fresh floral arrangements, stage setups and traditional garlands.",
      },
      {
        slug: "paper-flowers",
        name: "Paper Flowers",
        description: "Sustainable, handcrafted paper floral backdrops and photobooths.",
      },
      {
        slug: "artificial-flowers",
        name: "Artificial Flowers",
        description: "Long-lasting floral installations and reusable architectural elements.",
      },
      {
        slug: "event-supplies",
        name: "Event Supplies",
        description:
          "Technical equipment, staging, lighting, AV setups and furniture rentals.",
      },
      {
        slug: "balloons-supplies",
        name: "Balloons Supplies",
        description:
          "Sculptures, balloon arches, organic installations and branded balloon decor.",
      },
      {
        slug: "collection",
        name: "Collection",
        description:
          "Curated themes, cataloged prop inventory and signature styling pieces.",
      },
    ],
  },
];

/* Flat list, used by the marquee */
export const categories: Service[] = buckets.flatMap((b) => b.services);

export const audiences = [
  { name: "Corporate", line: "Conferences, exhibitions, festive office celebrations and gifting for companies." },
  { name: "Weddings", line: "Mandap and venue decor for families." },
  { name: "Festivals", line: "Themed installations and floral art." },
  { name: "Parties", line: "Balloons, decor and full-service hosting." },
  { name: "Community", line: "Events for NGOs and non-profits." },
];

export const festiveExperiences = [
  {
    name: "Festive campus decor",
    text: "Traditional and contemporary office campus transformations for Diwali, New Year and every festival on your calendar.",
  },
  {
    name: "Annual meets and conferences",
    text: "AV, staging, dais setups and delegate management.",
  },
  {
    name: "Exhibition stalls and showcases",
    text: "Modular, high-impact brand displays.",
  },
];

export const giftingLines = {
  utility: [
    "Home decor",
    "Handicraft",
    "Crockery",
    "Utensils",
    "German silver",
    "Brass items",
    "Stationery",
    "Personalised products",
    "Accessories",
  ],
  edible: ["Snacks", "Cookies", "Chocolate", "Dry fruit", "Seeds"],
};
