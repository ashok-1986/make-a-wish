"use client";

import { announcement } from "../lib/site";
import { CatalogueButton } from "./gifting/GiftingActions";

/* Top bar: architectural enterprise dark ticker */
export function AnnouncementBar() {
  return (
    <div className="bg-[#0B090E] border-b border-white/10 px-5 py-2 text-center text-xs text-zinc-300 md:px-10">
      <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="flex items-center gap-1.5 font-mono uppercase tracking-[0.16em] text-purple-400 font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>B2B Portal</span>
        </span>
        <span className="text-zinc-500 hidden sm:inline">•</span>
        <span className="sm:hidden font-medium">
          Corporate Gifting &amp; Joining Kits. B2B Quote on request.
        </span>
        <span className="hidden sm:inline font-medium text-zinc-200">{announcement.text}</span>
        <span className="text-zinc-500 hidden sm:inline">•</span>
        <CatalogueButton className="link-underline inline-flex min-h-[36px] items-center py-1 font-bold text-amber-300 hover:text-white transition-colors">
          {announcement.cta} <span aria-hidden="true" className="ml-1">&rarr;</span>
        </CatalogueButton>
      </p>
    </div>
  );
}
