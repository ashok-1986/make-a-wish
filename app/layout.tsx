import "../styles/global.css";
import { Figtree, Lobster_Two } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { GiftingProvider } from "../components/gifting/GiftingProvider";
import { GiftingOverlays } from "../components/gifting/GiftingOverlays";

/* Lobster Two (bold italic) carries the logo's script lettering; Figtree is the readable body voice. */
const display = Lobster_Two({
  subsets: ["latin"],
  weight: "700",
  style: "italic",
  variable: "--font-display",
  display: "swap",
});
const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Make a Wish | Corporate gifting, Diwali 2026 hampers and event decor in Navi Mumbai",
    template: "%s | Make a Wish",
  },
  description:
    "Corporate gifting in Navi Mumbai and Mumbai: 14 gifting categories, 13 Diwali 2026 hamper models and turnkey festive decor. Catalogue and proposals on request.",
  keywords: [
    "corporate gifting Navi Mumbai",
    "Diwali 2026 corporate gift hampers Mumbai",
    "corporate gift vendors Navi Mumbai",
    "999 silver corporate gifts",
    "office Diwali decor and hampers",
    "year-round corporate gifting",
  ],
  applicationName: "Make a Wish",
  authors: [{ name: "Make a Wish" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Make a Wish",
    title: "Make a Wish | Corporate gifting and Diwali 2026 hampers",
    description:
      "14 gifting categories and 13 Diwali 2026 hamper models, with turnkey festive decor across Navi Mumbai and Mumbai. Catalogue on request.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make a Wish | Corporate gifting and Diwali 2026 hampers",
    description:
      "14 gifting categories and 13 Diwali 2026 hamper models, with turnkey festive decor across Navi Mumbai and Mumbai.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5c2f7f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-paper font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-50 focus:rounded-full focus:bg-plum focus:px-4 focus:py-2 focus:text-paper"
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
