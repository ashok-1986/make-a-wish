import "../styles/global.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { GiftingProvider } from "../components/gifting/GiftingProvider";
import { GiftingOverlays } from "../components/gifting/GiftingOverlays";

/* High-contrast architectural grotesque sans echoing 8gnc.io enterprise aesthetic */
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Make a Wish | 365-Day Corporate Gifting, Joining Kits & Turnkey Decor in Navi Mumbai",
    template: "%s | Make a Wish",
  },
  description:
    "B2B corporate gifting portal in Navi Mumbai & Mumbai: Employee Joining Kits, Executive Combos, PATRA Pure Copper & Brassware, Tech Diaries, and Luxury Gourmet Hampers. Tiered B2B proposals on request.",
  keywords: [
    "corporate gifting Navi Mumbai",
    "employee onboarding joining kits Mumbai",
    "PATRA pure copper water bottles bulk",
    "executive power bank diary corporate gift",
    "corporate gift vendors Navi Mumbai Mumbai",
    "999 silver corporate gifts",
    "office event decor and corporate hampers",
    "year-round corporate gifting",
  ],
  applicationName: "Make a Wish",
  authors: [{ name: "Make a Wish" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Make a Wish",
    title: "Make a Wish | 365-Day B2B Corporate Gifting Flagship",
    description:
      "Curated 2-in-1 to 6-in-1 Joining Kits, Executive Diaries, PATRA Copperware, and Luxury Gourmet Hampers with turnkey office decor in Navi Mumbai and Mumbai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make a Wish | 365-Day B2B Corporate Gifting Flagship",
    description:
      "Curated 2-in-1 to 6-in-1 Joining Kits, Executive Diaries, PATRA Copperware, and Luxury Gourmet Hampers with turnkey office decor in Navi Mumbai and Mumbai.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b090e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} dark`}>
      <body className="min-h-screen bg-[#0b090e] font-sans text-zinc-100 antialiased selection:bg-purple-600 selection:text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-50 focus:rounded-full focus:bg-purple-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <GiftingProvider>
          <AnnouncementBar />
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <GiftingOverlays />
        </GiftingProvider>
      </body>
    </html>
  );
}
