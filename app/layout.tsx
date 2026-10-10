import "../styles/global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

/* Inter is DESIGN.md's named open-source substitute for PP Neue Montreal. Weight 400 only. */
const sans = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Make a Wish | Event decor and management in Navi Mumbai",
    template: "%s | Make a Wish",
  },
  description:
    "Make a Wish is an event management and decor firm in Navi Mumbai: mandap and wedding decor, real and paper flowers, festivals, exhibitions, balloons and event supplies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
