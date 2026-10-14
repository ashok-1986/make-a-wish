import type { Metadata } from "next";
import BrandSculptureHero from "../../components/BrandSculptureHero";

/* Preview of the liquid sculpture hero in brand colours. Not linked from the site and kept out of search results. */
export const metadata: Metadata = {
  title: "Hero preview",
  robots: { index: false, follow: false },
};

export default function HeroPreviewPage() {
  return <BrandSculptureHero />;
}
