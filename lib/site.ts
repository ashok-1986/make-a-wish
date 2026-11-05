/* Single source of truth for site content and contact details.
   Env vars (set in Vercel / .env.local) override the defaults below. */

export const SITE_NAME = "Make a Wish";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919769864175"; // digits only, with country code
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919769864175";
const secondaryPhoneNumber = process.env.NEXT_PUBLIC_SECONDARY_PHONE_NUMBER || "+919987119558";
const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "makeawishsmita9@gmail.com";

export const DEFAULT_MESSAGE =
  "Hello Make a Wish, I would like to enquire about corporate gifting and festive decor.";

/* WhatsApp click-to-chat link with a pre-filled message */
export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  /* Human-readable forms for showing the numbers as text */
  display: "+91 97698 64175",
  secondaryDisplay: "+91 99871 19558",
  whatsapp: whatsappLink(),
  phone: `tel:${phoneNumber}`,
  phoneLabel: phoneNumber,
  secondaryPhone: `tel:${secondaryPhoneNumber}`,
  secondaryPhoneLabel: secondaryPhoneNumber,
  email: `mailto:${emailAddress}`,
  emailLabel: emailAddress,
};

/* Message shown in the top bar. The catalogue is request-only, so the CTA
   opens the request modal rather than linking to a file. */
export const announcement = {
  text: "Diwali 2026 corporate gifting is open: 14 categories, 13 signature hampers, catalogue on request.",
  cta: "Request catalogue",
};

export type NavLink = {
  name: string;
  href: string;
  /* Optional category filter to apply when the link lands on the homepage */
  filter?: "year-round";
};

/* The five primary links from the refresh brief. */
export const navLinks: NavLink[] = [
  { name: "14 Categories", href: "/#gifting-categories" },
  { name: "Diwali 2026", href: "/#diwali-lookbook" },
  { name: "Year-Round", href: "/#gifting-categories", filter: "year-round" },
  { name: "Decor + Hampers", href: "/#turnkey-programme" },
  { name: "Events & Decor", href: "/#service-buckets" },
];

export const footerLinks = [
  { name: "Corporate gifting", href: "/corporate-gifting" },
  { name: "14 gifting categories", href: "/#gifting-categories" },
  { name: "Diwali 2026 lookbook", href: "/#diwali-lookbook" },
  { name: "Decor + hampers", href: "/#turnkey-programme" },
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

/* Five event and gifting pillars, price-free. */
export const buckets: Bucket[] = [
  {
    id: "gifting",
    name: "Corporate & Festive Gifting Solutions",
    focus:
      "The primary pillar: 14 corporate gifting categories across festive and year-round occasions, plus 13 Diwali 2026 signature hampers in four packaging series.",
    services: [
      {
        slug: "diwali-2026-hampers",
        name: "Diwali 2026 Signature Hampers",
        description:
          "Thirteen curated hamper models in classic cavity, glass jar, heritage keepsake and eco jute packaging.",
      },
      {
        slug: "corporate-gifting-categories",
        name: "14 Gifting Categories",
        description:
          "Dry fruit, leather, crockery, German silver, brassware, copperware, candles, perfumes, lantern and ubtan, soaps, millet cookies, 999 silver, chocolates and bakery.",
      },
      {
        slug: "year-round-gifting",
        name: "Year-Round Corporate Gifting",
        description:
          "Onboarding kits, client appreciation, leadership recognition, wellness drives and milestone gifting outside the festive season.",
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate & B2B Event Production",
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
    ],
  },
  {
    id: "festive",
    name: "Festive & Cultural Campus Installations",
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
          "Handcrafted cultural art, thematic backdrops, traditional props and artisanal installations.",
      },
      {
        slug: "lobby-rangolis",
        name: "Lobby Rangolis",
        description:
          "Entrance, reception and atrium rangoli installations for corporate festive programmes.",
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
    name: "Florals, Paper Craft & Event Supplies",
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
        slug: "signature-props",
        name: "Signature Props",
        description:
          "Curated themes, catalogued prop inventory and signature styling pieces.",
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
