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
    <header className="sticky top-0 z-40 border-b border-zinc-200/90 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-10">
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
          <span className="font-sans text-lg font-medium tracking-tight text-zinc-900 hidden sm:inline">{SITE_NAME}</span>
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
                    className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={navHref(link)}
                    onClick={closeMenu}
                    className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ShortlistButton className="btn btn-ghost whitespace-nowrap !min-h-[38px] !px-3 !py-1.5 !text-xs text-zinc-900 border-zinc-300 hover:bg-zinc-100 font-medium" />
          <CatalogueButton className="btn !hidden !min-h-[38px] !whitespace-nowrap !px-4 !py-1.5 !text-xs font-medium xl:!inline-flex">
            Request catalogue
          </CatalogueButton>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-zinc-300 text-xs font-medium text-zinc-800 hover:bg-zinc-100 lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-zinc-200 bg-white px-5 pb-5 pt-3 lg:hidden">
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
                      className="block min-h-[44px] w-full rounded-xl px-3 py-2 text-left font-medium text-zinc-800 hover:bg-zinc-100"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={navHref(link)}
                      onClick={closeMenu}
                      className="block min-h-[44px] rounded-xl px-3 py-2 font-medium text-zinc-800 hover:bg-zinc-100"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-3 grid gap-2 border-t border-zinc-200 pt-3">
            <CatalogueButton className="btn w-full !min-h-[44px] !text-base">
              Request catalogue
            </CatalogueButton>
            <a href={contact.phone} className="btn btn-ghost w-full !min-h-[44px] !text-base text-zinc-900">
              Call {contact.display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
