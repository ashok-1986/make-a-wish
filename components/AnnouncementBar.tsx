"use client";

import { announcement } from "../lib/site";
import { CatalogueButton } from "./gifting/GiftingActions";

/* Top bar: architectural studio warm paper ticker */
export function AnnouncementBar() {
  return (
    <div className="bg-[#F4EFE6] border-b border-zinc-200/90 px-5 py-2 text-center text-xs text-zinc-700 md:px-10">
      <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1.5 font-mono uppercase tracking-[0.16em] text-purple-700 font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>B2B Portal</span>
        </span>
        <span className="text-zinc-400 hidden sm:inline">•</span>
        <span className="sm:hidden font-medium text-zinc-800">
          Corporate Gifting &amp; Joining Kits. B2B Quote on request.
        </span>
        <span className="hidden sm:inline font-medium text-zinc-800">{announcement.text}</span>
        <span className="text-zinc-400 hidden sm:inline">•</span>
        <CatalogueButton className="link-underline inline-flex min-h-[36px] items-center py-1 font-medium text-purple-800 hover:text-purple-950 transition-colors">
          {announcement.cta} <span aria-hidden="true" className="ml-1">&rarr;</span>
        </CatalogueButton>
      </p>
    </div>
  );
}
