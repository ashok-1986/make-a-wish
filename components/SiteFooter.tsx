import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, contact, footerLinks } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink px-5 py-14 text-paper md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/logo.webp" alt="" width={919} height={822} sizes="88px" className="h-16 w-auto" />
            <p className="max-w-[24ch] text-sm text-paper/80">
              {SITE_NAME}. Corporate gifting, festive decor and event production in Navi Mumbai.
            </p>
          </div>
          <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-paper/70">
            Fourteen gifting categories and thirteen Diwali 2026 hamper models, backed by a
            turnkey events and decor team.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sun">Explore</h2>
          <ul className="mt-4 grid gap-1">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="link-underline inline-block py-1.5 text-sm text-paper/85">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-sun">Corporate desk</h2>
          <address className="mt-4 grid gap-2 text-sm not-italic text-paper/85">
            <a href={contact.phone} className="link-underline">
              {contact.display}
            </a>
            <a href={contact.secondaryPhone} className="link-underline">
              {contact.secondaryDisplay}
            </a>
            <a href={contact.email} className="link-underline break-all">
              {contact.emailLabel}
            </a>
            <span className="mt-2 text-paper/65">Navi Mumbai &amp; Greater Mumbai</span>
            <span className="text-paper/65">Mon–Sat, 10:00–19:00</span>
          </address>
          <p className="mt-5 max-w-[32ch] text-xs leading-relaxed text-paper/55">
            The 2026 catalogue and commercial details are shared on request by the corporate desk.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-paper/15 pt-5 text-xs text-paper/55">
        <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <p>Diwali 2026 · Year-round corporate gifting · Turnkey decor</p>
      </div>
    </footer>
  );
}
