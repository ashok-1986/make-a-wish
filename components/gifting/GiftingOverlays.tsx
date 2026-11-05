import { CatalogueModal } from "./CatalogueModal";
import { ShortlistTray } from "./ShortlistTray";

/* Global overlays, mounted once in the root layout. */
export function GiftingOverlays() {
  return (
    <>
      <ShortlistTray />
      <CatalogueModal />
    </>
  );
}
