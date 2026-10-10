import Link from "next/link";
import { SITE_NAME, navLinks } from "../lib/site";

/* Sticky text nav: no logo mark, no hamburger, no container. Sits directly on Paper. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper">
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-baseline justify-between gap-x-6 px-5 py-2 md:py-3"
      >
        <Link href="/" className="t-link t-body inline-block py-2">
          {SITE_NAME}
        </Link>
        <ul className="flex flex-wrap gap-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="t-link t-body inline-block py-2">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
