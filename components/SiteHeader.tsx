"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_NAME, contact, navLinks } from "../lib/site";
import { CatalogueButton, ShortlistButton } from "./gifting/GiftingActions";
import { applyGiftingFilter } from "./gifting/filterNavigation";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onGiftingPage = pathname === "/corporate-gifting";

  /* On the dedicated gifting page, keep hub links on that page so the buyer does
     not lose their place; everything else points at the homepage sections. */
  function navHref(link: (typeof navLinks)[number]) {
    if (onGiftingPage && link.href.startsWith("/#")) {
      return link.href.slice(1);
    }
    return link.href;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B090E]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${SITE_NAME}, home`}
          onClick={closeMenu}
        >
          <Image
            src="/logo.webp"
            alt=""
            width={919}
            height={822}
            sizes="52px"
            className="h-10 w-auto"
            priority
          />
          <span className="font-sans text-lg font-black tracking-tight text-white hidden sm:inline">{SITE_NAME}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name} className="shrink-0">
                {link.filter ? (
                  <button
                    type="button"
                    onClick={() => {
                      applyGiftingFilter(link.filter as string);
                      closeMenu();
                    }}
                    className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={navHref(link)}
                    onClick={closeMenu}
                    className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ShortlistButton className="btn btn-ghost whitespace-nowrap !min-h-[38px] !px-3 !py-1.5 !text-xs text-white" />
          <CatalogueButton className="btn !hidden !min-h-[38px] !whitespace-nowrap !px-4 !py-1.5 !text-xs xl:!inline-flex">
            Request catalogue
          </CatalogueButton>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-xs font-bold text-white hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#131019] px-5 pb-5 pt-3 lg:hidden">
          <nav aria-label="Mobile primary">
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.filter ? (
                    <button
                      type="button"
                      onClick={() => {
                        applyGiftingFilter(link.filter as string);
                        closeMenu();
                      }}
                      className="block min-h-[44px] w-full rounded-xl px-3 py-2 text-left font-bold text-ink hover:bg-cream"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={navHref(link)}
                      onClick={closeMenu}
                      className="block min-h-[44px] rounded-xl px-3 py-2 font-bold text-ink hover:bg-cream"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-3 grid gap-2 border-t border-plum/15 pt-3">
            <CatalogueButton className="btn w-full !min-h-[44px] !text-base">
              Request catalogue
            </CatalogueButton>
            <a href={contact.phone} className="btn btn-ghost w-full !min-h-[44px] !text-base text-plum">
              Call {contact.display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
