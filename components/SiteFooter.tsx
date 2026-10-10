import Link from "next/link";
import { SITE_NAME, contact, navLinks } from "../lib/site";

/* Footer lockup: smallest type in the system, 50px of air above. */
export function SiteFooter() {
  return (
    <footer className="mt-[50px] px-5 pb-10 pt-[50px] t-caption">
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-3">
        <p>
          {SITE_NAME}. Event decor and management, Navi Mumbai.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="t-link inline-block py-2">
                {link.name}
              </Link>
            </li>
          ))}
          {contact.whatsapp && (
            <li>
              <a href={contact.whatsapp} className="t-link inline-block py-2">
                WhatsApp
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
