import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, contact, navLinks } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-plum/10 bg-paper/95 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 md:px-10"
      >
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE_NAME}, home`}>
          <Image
            src="/logo.webp"
            alt=""
            width={919}
            height={822}
            sizes="64px"
            className="h-12 w-auto"
            priority
          />
          <span className="display-md hidden text-plum sm:inline">{SITE_NAME}</span>
        </Link>

        <ul className="order-3 flex w-full flex-wrap gap-x-6 md:order-none md:w-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-underline inline-block min-w-[48px] py-3.5 text-center font-semibold text-ink"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {contact.phone && (
            <a
              href={contact.phone}
              className="btn btn-ghost !min-h-0 !px-5 !py-2.5 !text-base text-plum"
              aria-label={`Call ${contact.display}`}
            >
              Call
            </a>
          )}
          {contact.whatsapp ? (
            <a
              href={contact.whatsapp}
              className="btn !min-h-0 !px-5 !py-2.5 !text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          ) : (
            <Link href="/contact" className="btn !min-h-0 !px-5 !py-2.5 !text-base">
              Get in touch
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
