import "../styles/global.css";
import { Figtree, Lobster_Two } from "next/font/google";
import type { Metadata } from "next";
import { AnnouncementBar } from "../components/AnnouncementBar";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

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
    default: "Make a Wish | Corporate events, festive decor and gifting in Navi Mumbai",
    template: "%s | Make a Wish",
  },
  description:
    "Make a Wish designs and runs corporate events, festive decor, corporate gifting, weddings and mandaps across Navi Mumbai and Mumbai, with eco-conscious materials and fresh florals.",
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
        <AnnouncementBar />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
