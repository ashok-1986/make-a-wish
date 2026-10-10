import Link from "next/link";
import { contact } from "../lib/site";

/* Primary conversion: WhatsApp or a call, set as large text links (no buttons).
   If no number is configured yet, fall back to the contact page rather than a dead link. */
export function ContactLinks({ size = "t-heading-lg" }: { size?: string }) {
  return (
    <ul className={`${size} flex flex-col gap-[10px]`}>
      <li>
        {contact.whatsapp ? (
          <a
            href={contact.whatsapp}
            className="t-link inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        ) : (
          <Link href="/contact" className="t-link inline-block">
            Tell us about your event
          </Link>
        )}
      </li>
      {contact.phone && (
        <li>
          <a href={contact.phone} className="t-link inline-block">
            Call us
          </a>
        </li>
      )}
    </ul>
  );
}
