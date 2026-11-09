import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, contact, footerLinks } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[#111111] px-5 py-14 text-zinc-300 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3.5">
            <Image
              src="/logo.webp"
              alt={`${SITE_NAME} Logo`}
              width={919}
              height={822}
              sizes="88px"
              className="h-12 w-auto"
            />
            <div>
              <p className="font-sans text-base font-medium text-white">
                {SITE_NAME}
              </p>
              <p className="text-xs text-zinc-400">
                Corporate Gifting &amp; Turnkey Production Flagship
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-[38ch] text-xs sm:text-sm leading-relaxed text-zinc-400">
            Employee Joining Kits, Executive Tech Diaries, Pure Copper &amp; Heritage Brassware, and Luxury Hampers with turnkey campus decor in Navi Mumbai and Greater Mumbai.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
            Explore
          </h2>
          <ul className="mt-4 grid gap-1.5">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block py-1 text-xs sm:text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
            Corporate Sales Desk
          </h2>
          <address className="mt-4 grid gap-2 text-xs sm:text-sm not-italic text-zinc-300">
            <a
              href={contact.phone}
              className="font-medium text-white hover:text-purple-300 transition-colors"
            >
              {contact.display}
            </a>
            <a
              href={contact.secondaryPhone}
              className="font-medium text-white hover:text-purple-300 transition-colors"
            >
              {contact.secondaryDisplay}
            </a>
            <a
              href={contact.email}
              className="break-all text-purple-300 hover:text-white transition-colors"
            >
              {contact.emailLabel}
            </a>
            <span className="mt-1 text-zinc-400">Navi Mumbai &amp; Greater Mumbai</span>
            <span className="text-zinc-500">Mon–Sat, 10:00–19:00</span>
          </address>
          <p className="mt-4 max-w-[32ch] text-[0.72rem] leading-relaxed text-zinc-500">
            Full PDF catalog and tiered commercial proposals are shared on request by the corporate sales desk.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <p className="font-mono text-[0.7rem]">
          5 B2B Pillars · Year-Round Corporate Gifting · Single-Window GST Invoicing
        </p>
      </div>
    </footer>
  );
}
