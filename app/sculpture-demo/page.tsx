import type { Metadata } from "next";
import Demo from "../../components/ui/liquid-sculpture-hero-demo";

/* Showcase of the liquid sculpture hero. Not linked from the site and kept out of search results. */
export const metadata: Metadata = {
  title: "Sculpture hero demo",
  robots: { index: false, follow: false },
};

export default function SculptureDemoPage() {
  return <Demo />;
}
