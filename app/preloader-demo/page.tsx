import type { Metadata } from "next";
import Demo from "../../components/ui/rangoli-preloader-demo";

/* Showcase of the Rangoli preloader. Not linked from the site and kept out of search results. */
export const metadata: Metadata = {
  title: "Rangoli preloader demo",
  robots: { index: false, follow: false },
};

export default function PreloaderDemoPage() {
  return <Demo />;
}
