/**
 * Landing page content and configuration data for Make a Wish.
 *
 * Centralizes trust signals, process steps, turnkey benefits, year-round gifting
 * pillars, and service bucket styling rules for clear separation of concerns.
 */

export interface ProcessStep {
  name: string;
  text: string;
}

export interface YearRoundHighlight {
  name: string;
  text: string;
}

export interface TurnkeyFeature {
  name: string;
  text: string;
}

export interface BucketStyle {
  span: string;
  tone: string;
  star: string;
  link: string;
}

/**
 * Trust signals displayed in the top trust strip beneath the Hero.
 */
export const trustHighlights: string[] = [
  "5 B2B Pillars · 49+ Signature SKUs",
  "Low 25 Unit MOQ · Custom Logo Branding",
  "GST Invoicing for Corporate Orders",
  "Navi Mumbai, Mumbai & Pan-India Dispatch",
];

/**
 * 4-step ordering process from shortlist building to dispatch and installation.
 */
export const pillarSteps: ProcessStep[] = [
  {
    name: "Build your shortlist",
    text: "Add the categories, hamper models or a turnkey decor + gifting configuration that suit the brief.",
  },
  {
    name: "Request the catalogue",
    text: "Share your work email and WhatsApp number. The corporate desk sends the 2026 catalogue and the relevant rate card.",
  },
  {
    name: "Review the proposal",
    text: "Quantities, editions, delivery schedule and GST invoicing come back in one consolidated proposal.",
  },
  {
    name: "Dispatch and install",
    text: "Hampers are packed to the agreed schedule, with decor installed by the same team where the brief includes it.",
  },
];

/**
 * Key gifting occasions beyond Diwali for the year-round corporate calendar.
 */
export const yearRoundHighlights: YearRoundHighlight[] = [
  {
    name: "Onboarding & joining kits",
    text: "Leather folders, desk organisers and drinkware that welcome a new team.",
  },
  {
    name: "Client & partner appreciation",
    text: "Perfumes, copperware and 999 silver keepsakes for the relationships that carry the year.",
  },
  {
    name: "Leadership & service awards",
    text: "Heritage silver, brass and German silver for milestone recognition.",
  },
  {
    name: "Wellness & culture days",
    text: "Candles, soaps, millet cookies and copper drinkware for the calendar beyond Diwali.",
  },
];

/**
 * Value propositions for turnkey decor and hamper coordination.
 */
export const turnkeyFeatures: TurnkeyFeature[] = [
  {
    name: "One production schedule",
    text: "Decor installation and hamper delivery are planned against the same office calendar.",
  },
  {
    name: "One consolidated quote",
    text: "Gifting, decor and installation itemised together, with GST invoicing.",
  },
  {
    name: "One point of contact",
    text: "The corporate desk owns the brief from first shortlist to final install.",
  },
];

/**
 * Visual presentation styles for the 5 service bucket panels in 8gnc.io enterprise dark mode.
 */
export const serviceBucketStyles: BucketStyle[] = [
  { span: "md:col-span-4", tone: "border border-white/10 bg-[#131019] text-white hover:border-purple-500/40", star: "rgba(124, 58, 237, 0.2)", link: "text-purple-400 hover:text-purple-300" },
  { span: "md:col-span-2", tone: "border border-white/10 bg-[#161320] text-white hover:border-purple-500/40", star: "rgba(124, 58, 237, 0.2)", link: "text-purple-400 hover:text-purple-300" },
  { span: "md:col-span-2", tone: "border border-white/10 bg-[#161320] text-white hover:border-purple-500/40", star: "rgba(124, 58, 237, 0.2)", link: "text-purple-400 hover:text-purple-300" },
  { span: "md:col-span-4", tone: "border border-white/10 bg-[#131019] text-white hover:border-purple-500/40", star: "rgba(124, 58, 237, 0.2)", link: "text-purple-400 hover:text-purple-300" },
  { span: "md:col-span-6", tone: "border border-white/10 bg-[#131019] text-white hover:border-purple-500/40", star: "rgba(124, 58, 237, 0.2)", link: "text-purple-400 hover:text-purple-300" },
];
