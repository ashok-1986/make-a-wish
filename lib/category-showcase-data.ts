/**
 * Category-Led B2B Showcase Data (v2.0)
 *
 * Implements the core architecture decision of v2:
 * Make a Wish is a B2B category-led showcase, not an e-commerce catalogue.
 * The primary content objects are the 5 stable Corporate Pillars, with
 * representative examples rather than full inventory listings.
 */

import { whatsappLink } from "./site.ts";

export interface RepresentativeItem {
  name: string;
  tag: string;
}

export interface PillarCategory {
  id: string;
  pillarNumber: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  representativeItems: RepresentativeItem[];
  moq: string;
  brandingOptions: string;
  catalogueSlug: string;
  whatsappPrefill: string;
}

export interface FeaturedSet {
  id: string;
  pillarId: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  inclusions: string[];
  moq: string;
  leadTime: string;
  whatsappPrefill: string;
}

/**
 * The Five Strategic Corporate Pillars for Make a Wish
 */
export const PILLAR_CATEGORIES: PillarCategory[] = [
  {
    id: "joining-kits",
    pillarNumber: "01",
    name: "Joining Kits & Executive Combos",
    eyebrow: "Pillar 01 · HR & Talent Welcomes",
    tagline: "First-day impressions engineered for team longevity.",
    description:
      "Curated 2-in-1 to 6-in-1 employee onboarding sets featuring power bank organizers, vacuum sippers, metal pens, and anti-theft backpacks. Pre-packaged in custom branded presentation boxes under a single GST invoice.",
    image: "/images/why-corporate.png",
    imageAlt: "Executive employee onboarding gift boxes and premium accessories",
    representativeItems: [
      { name: "4-in-1 Executive Onboarding Box", tag: "Best Seller" },
      { name: "Anti-Theft Laptop Commuter Backpack", tag: "USB Charging" },
      { name: "Executive Vacuum Sipper & Roller Pen Set", tag: "Logo Engraved" },
    ],
    moq: "25 Units",
    brandingOptions: "Laser engraving, screen printing & custom box sleeves",
    catalogueSlug: "joining-kits",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about Pillar 01: Joining Kits & Executive Combos.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date:",
        "• Company Name:",
        "",
        "Please share the Joining Kits catalogue and custom mockup options.",
      ].join("\n")
    ),
  },
  {
    id: "pure-copper-heritage",
    pillarNumber: "02",
    name: "Pure Copper & Heritage Brassware",
    eyebrow: "Pillar 02 · Artisanal & Wellness Keepsakes",
    tagline: "Timeless handcrafted metalware that stays on executive desks.",
    description:
      "Artisanal pure copper bottles, hand-hammered water carafes, traditional South Indian brass coffee dabaras, and 999 pure silver commemorative coins. Designed for milestone appreciation, wellness initiatives, and VIP partners.",
    image: "/images/categories/copperware.jpg",
    imageAlt: "Handcrafted pure copper bottles and hammered water drinkware",
    representativeItems: [
      { name: "Hand-Hammered Pure Copper Water Bottle (950ml)", tag: "99.8% Pure" },
      { name: "Traditional South Indian Brass Dabara Set", tag: "Heritage Craft" },
      { name: "Pure Silver 999 Commemorative Keepsake Coin", tag: "Certified Hallmarked" },
    ],
    moq: "25 Units",
    brandingOptions: "Precision laser etching & velvet-lined presentation chests",
    catalogueSlug: "copper-brass",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about Pillar 02: Pure Copper & Heritage Brassware.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date / Occasion:",
        "• Company Name:",
        "",
        "Please share the Copper & Heritage Brassware rate card and packaging options.",
      ].join("\n")
    ),
  },
  {
    id: "tech-diaries-desk",
    pillarNumber: "03",
    name: "Executive Tech Diaries & Desk Utility",
    eyebrow: "Pillar 03 · Modern Workplace Utility",
    tagline: "Smart functional tools designed for daily executive productivity.",
    description:
      "Wireless charging power bank organizers, smart LED temperature flasks, magnetic perpetual desk calendars, and leatherette multi-compartment folders. Practical daily utility carrying your brand across conference rooms.",
    image: "/images/hero-corporate.png",
    imageAlt: "Executive boardroom tech organizers, smart flasks, and leatherette portfolios",
    representativeItems: [
      { name: "10,000mAh Power Bank Planner with Wireless Pad", tag: "Tech Utility" },
      { name: "Smart LED Temperature Touch Flask (500ml)", tag: "Digital Display" },
      { name: "Magnetic Perpetual Calendar & Desk Organizer", tag: "Perennial Use" },
    ],
    moq: "25 Units",
    brandingOptions: "UV embossed logos, debossed leatherette & metal crest engraving",
    catalogueSlug: "tech-desk",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about Pillar 03: Executive Tech Diaries & Desk Utility.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date:",
        "• Company Name:",
        "",
        "Please share your Tech & Desk Utility catalogue and sample options.",
      ].join("\n")
    ),
  },
  {
    id: "gourmet-hampers",
    pillarNumber: "04",
    name: "Gourmet Hampers & Festive Boxes",
    eyebrow: "Pillar 04 · Festive & Celebration Packaging",
    tagline: "Celebration chests crafted in brocade, emerald jaali, and jute.",
    description:
      "Handcrafted 3-to-6 cavity rigid boxes, floral brocade hampers, emerald jaali chests, and embroidered jute potlis filled with California dry fruits, artisanal confections, and festive brass keepsakes.",
    image: "/images/hampers/5-cavity-gold-floral.jpg",
    imageAlt: "Luxury gold floral brocade dry fruit box with partitioned compartments",
    representativeItems: [
      { name: "5-Cavity Brocade Royal Dry Fruit Box", tag: "Festive Flagship" },
      { name: "Emerald Jaali 6-Glass Jar Brass Chest", tag: "Luxury Keepsake" },
      { name: "Handcrafted Embroidered Jute Potli Hamper", tag: "Eco-Conscious" },
    ],
    moq: "25 Units",
    brandingOptions: "Custom foiled ribbons, corporate greeting inlays & badge tags",
    catalogueSlug: "gourmet-hampers",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about Pillar 04: Gourmet Hampers & Festive Boxes.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date / Festive Date:",
        "• Company Name:",
        "",
        "Please share the Festive Hampers lookbook and sample box details.",
      ].join("\n")
    ),
  },
  {
    id: "turnkey-decor-gifting",
    pillarNumber: "05",
    name: "Turnkey Event Decor + Gifting",
    eyebrow: "Pillar 05 · Single-Window Corporate Production",
    tagline: "Your office campus transformed, and your hampers delivered.",
    description:
      "One consolidated production window combining reception, atrium, and town hall festive installations with synchronized bulk hamper delivery. HR and admin teams manage one schedule and one GST tax invoice.",
    image: "/images/cta-corporate.png",
    imageAlt: "Executive corporate boardroom and decorated celebration event space",
    representativeItems: [
      { name: "Campus Reception & Atrium Thematic Installation", tag: "Turnkey Decor" },
      { name: "Executive Town Hall Stage & Backdrop Styling", tag: "Full-Stack Setup" },
      { name: "Coordinated 100+ Hamper Bundle (5%–10% Perk)", tag: "Single Invoice" },
    ],
    moq: "Custom Scope",
    brandingOptions: "Integrated corporate theme, entrance branding & gift harmonization",
    catalogueSlug: "turnkey-production",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about Pillar 05: Turnkey Event Decor + Gifting.",
        "",
        "• Office Location / Campus:",
        "• Occasion / Celebration Date:",
        "• Expected Attendee Count / Hampers Required:",
        "• Company Name:",
        "",
        "Please connect me with your Turnkey Production lead.",
      ].join("\n")
    ),
  },
];

/**
 * 4 High-Intent Featured Sets for procurement and leadership teams
 */
export const FEATURED_SETS: FeaturedSet[] = [
  {
    id: "executive-welcome-suite",
    pillarId: "joining-kits",
    name: "The Executive Welcome Suite (4-in-1)",
    badge: "Flagship Onboarding",
    tagline: "Complete day-one welcome experience in a custom presentation box.",
    description:
      "Designed for seamless corporate onboarding. Includes a premium hardbound diary, matching matte metal roller pen, double-wall stainless steel vacuum sipper, and laser-engraved metal keychain, all housed in custom die-cut foam packaging.",
    image: "/images/why-corporate.png",
    imageAlt: "Executive 4-in-1 joining kit with diary, sipper, pen, and keychain",
    inclusions: [
      "Hardbound A5 Corporate Diary with Ribbon Bookmark",
      "Double-Wall Vacuum Insulated Sipper (500ml)",
      "Matte Black Roller Ball Pen with Metal Clip",
      "Heavy-Duty Metal Keyring with Leather Accent",
    ],
    moq: "25 Units",
    leadTime: "3–5 Business Days",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about 'The Executive Welcome Suite (4-in-1)'.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date:",
        "• Company Name:",
        "",
        "Please provide an itemized B2B quote and sample lead time.",
      ].join("\n")
    ),
  },
  {
    id: "boardroom-copper-brass-trio",
    pillarId: "pure-copper-heritage",
    name: "The Boardroom Pure Copper & Brassware Trio",
    badge: "Heritage Wellness",
    tagline: "Authentic artisanal craftsmanship for executive leadership and VIPs.",
    description:
      "A revered wellness and keepsake bundle featuring a 950ml hand-hammered 99.8% pure copper bottle paired with two matching copper tumblers and traditional South Indian brass coffee dabaras.",
    image: "/images/categories/copperware.jpg",
    imageAlt: "Pure copper water bottle and matching copper glasses set",
    inclusions: [
      "Hand-Hammered Pure Copper Water Carafe (950ml)",
      "2 Matching Hammered Pure Copper Drinking Tumblers",
      "Solid Brass Filter Coffee Dabara Set with Traditional Rim",
      "Handcrafted Velvet-Lined Storage Presentation Box",
    ],
    moq: "25 Units",
    leadTime: "4–7 Business Days",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about 'The Boardroom Pure Copper & Brassware Trio'.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date / Milestone:",
        "• Company Name:",
        "",
        "Please provide pricing tiers and sample box availability.",
      ].join("\n")
    ),
  },
  {
    id: "smart-tech-desk-suite",
    pillarId: "tech-diaries-desk",
    name: "The Smart Tech Desk Suite",
    badge: "Smart Utility",
    tagline: "High-productivity essentials powered for modern hybrid teams.",
    description:
      "A forward-looking executive combo engineered with a 10,000mAh wireless charging organizer notebook, intelligent LED temperature touch bottle, and perennial magnetic calendar.",
    image: "/images/hero-corporate.png",
    imageAlt: "Power bank planner with smart temperature flask on boardroom desk",
    inclusions: [
      "10,000mAh Power Bank Organizer with Qi Wireless Charging",
      "Intelligent LED Digital Temperature Flask (500ml)",
      "Perennial Magnetic Desktop Calendar with Slider Dials",
      "Premium Gift Box with Custom Corporate Logo Branding",
    ],
    moq: "25 Units",
    leadTime: "3–5 Business Days",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about 'The Smart Tech Desk Suite'.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date:",
        "• Company Name:",
        "",
        "Please provide volume tiers and branding mockups.",
      ].join("\n")
    ),
  },
  {
    id: "imperial-brocade-royal-chest",
    pillarId: "gourmet-hampers",
    name: "The Imperial Brocade Royal Dry Fruit Chest",
    badge: "Festive Grandeur",
    tagline: "Regal 5-compartment brocade presentation for festive celebrations.",
    description:
      "The gold standard for corporate Diwali and festive celebrations. Sturdy rigid box cloaked in gold floral brocade fabric, holding 5 airtight compartments of jumbo California almonds, cashews, pistachios, Afghan raisins, and an artisanal brass diya.",
    image: "/images/hampers/5-cavity-gold-floral.jpg",
    imageAlt: "Gold brocade five-cavity dry fruit hamper box with partition lids",
    inclusions: [
      "Rigid Partitioned Gold Brocade Chest with Magnetic Flap",
      "Jumbo California Almonds & W240 Cashews (400g total)",
      "Select Iranian Pistachios & Afghan Green Raisins (350g total)",
      "Handcrafted Pure Brass Diwali Diya & Corporate Greeting Card",
    ],
    moq: "25 Units",
    leadTime: "3–5 Business Days",
    whatsappPrefill: whatsappLink(
      [
        "Hello Make a Wish, I would like to inquire about 'The Imperial Brocade Royal Dry Fruit Chest'.",
        "",
        "• Estimated Quantity (25+ units):",
        "• Target Delivery Date:",
        "• Company Name:",
        "",
        "Please provide festive rate cards and tasting sample delivery details.",
      ].join("\n")
    ),
  },
];
