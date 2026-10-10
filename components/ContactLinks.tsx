import Link from "next/link";
import { contact } from "../lib/site";

/* Primary conversion: WhatsApp (or a call) as a real button. If no number is configured yet,
   fall back to the contact page rather than a dead link. */
export function ContactLinks({ tone = "plum" }: { tone?: "plum" | "sun" }) {
  const primary = tone === "sun" ? "btn btn-sun" : "btn";
  const secondary = tone === "sun" ? "btn btn-ghost" : "btn btn-ghost text-plum";
  return (
    <div className="flex flex-wrap items-center gap-4">
      {contact.whatsapp ? (
        <a
          href={contact.whatsapp}
          className={primary}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp us <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </a>
      ) : (
        <Link href="/contact" className={primary}>
          Tell us about your event <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </Link>
      )}
      {contact.phone && (
        <a href={contact.phone} className={secondary}>
          Call us
        </a>
      )}
    </div>
  );
}
