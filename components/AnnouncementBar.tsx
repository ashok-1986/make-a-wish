"use client";

import { announcement } from "../lib/site";
import { CatalogueButton } from "./gifting/GiftingActions";
import { Star } from "./Star";

/* Top bar. The catalogue is request-only, so the action opens the request modal. */
export function AnnouncementBar() {
  return (
    <div className="on-dark bg-plum px-5 py-2.5 text-center text-sm text-paper md:px-10 md:text-base">
      <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Star className="h-4 w-4 shrink-0 text-sun" />
        <span className="sm:hidden">
          Diwali 2026 corporate gifting is open. Catalogue on request.
        </span>
        <span className="hidden sm:inline">{announcement.text}</span>
        <CatalogueButton className="link-underline inline-flex min-h-[44px] items-center py-2 font-bold text-sun">
          {announcement.cta} <span aria-hidden="true" className="ml-1">&rarr;</span>
        </CatalogueButton>
      </p>
    </div>
  );
}
