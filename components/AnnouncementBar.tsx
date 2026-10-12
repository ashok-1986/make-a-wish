import { Star } from "./Star";
import { announcement, whatsappLink } from "../lib/site";

/* Top booking bar. Copy lives in lib/site.ts (`announcement`); edit it there as the season changes. */
export function AnnouncementBar() {
  return (
    <div className="on-dark bg-plum px-5 py-2.5 text-center text-sm text-paper md:px-10 md:text-base">
      <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <Star className="h-4 w-4 shrink-0 text-sun" />
        <span>{announcement.text}</span>
        <a
          href={whatsappLink(announcement.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-bold text-sun"
        >
          {announcement.cta} &rarr;
        </a>
      </p>
    </div>
  );
}
