import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, contact, navLinks } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink px-5 py-14 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.webp" alt="" width={919} height={822} className="h-16 w-auto" />
          <p className="max-w-[28ch] text-sm text-paper/80">
            {SITE_NAME}. Event decor and management, Navi Mumbai.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-underline inline-block py-2 text-paper">
                {link.name}
              </Link>
            </li>
          ))}
          {contact.whatsapp && (
            <li>
              <a
                href={contact.whatsapp}
                className="link-underline inline-block py-2 text-sun"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
