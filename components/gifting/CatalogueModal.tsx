"use client";

import { useEffect, useMemo, useState } from "react";
import { catalogueRequestMessage } from "../../lib/gifting";
import { contact, whatsappLink } from "../../lib/site";
import { useGifting } from "./GiftingProvider";
import { Overlay } from "./Overlay";

const baseInterests = [
  "All 5 B2B Pillars",
  "Employee Joining & Onboarding Kits",
  "PATRA Pure Copper & Brassware",
  "Executive Tech Diaries & Sets",
  "Laptop Bags & Tumbler Combos",
  "Festive Luxury Hampers",
  "Turnkey Office Decor + Hampers",
];

export function CatalogueModal() {
  const { catalogueOpen, catalogueInterest, closeCatalogue } = useGifting();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(catalogueInterest);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setInterest(catalogueInterest);
  }, [catalogueInterest]);

  useEffect(() => {
    if (!catalogueOpen) setSent(false);
  }, [catalogueOpen]);

  const options = useMemo(
    () => Array.from(new Set([...baseInterests, catalogueInterest])),
    [catalogueInterest]
  );

  const message = catalogueRequestMessage({ name, company, email, phone, interest });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <Overlay open={catalogueOpen} onClose={closeCatalogue} labelledBy="catalogue-title">
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-[#131019] px-6 py-5">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            Catalog Request
          </p>
          <h2 id="catalogue-title" className="mt-1 font-sans text-xl font-bold text-white">
            The 2026 Corporate Gifting Catalogue
          </h2>
        </div>
        <button
          type="button"
          onClick={closeCatalogue}
          aria-label="Close catalogue request"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-lg font-bold text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          &times;
        </button>
      </div>

      <div className="px-6 py-6">
        <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
          Share your details and the collection you are interested in. The complete PDF catalogue and tiered rate card will be transmitted by our corporate desk directly on WhatsApp.
        </p>

        <form onSubmit={onSubmit} className="mt-5 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cat-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Full name
              </label>
              <input
                id="cat-name"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="field"
                placeholder="Priya Sharma"
              />
            </div>
            <div>
              <label htmlFor="cat-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Company
              </label>
              <input
                id="cat-company"
                required
                autoComplete="organization"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="field"
                placeholder="Company or organisation"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cat-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Work email
              </label>
              <input
                id="cat-email"
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="field"
                placeholder="priya@company.com"
              />
            </div>
            <div>
              <label htmlFor="cat-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                WhatsApp number
              </label>
              <input
                id="cat-phone"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+\s\-]{8,16}"
                title="Enter a phone number, for example +91 97734 11805"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="field"
                placeholder="+91 97734 11805"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cat-interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Collection of interest
            </label>
            <select
              id="cat-interest"
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="field"
            >
              {options.map((option) => (
                <option key={option} value={option} className="bg-[#131019] text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn w-full justify-center !min-h-[42px] !text-sm mt-2">
            <span>Request Catalogue on WhatsApp</span>
            <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </button>
        </form>

        <p role="status" aria-live="polite" className="mt-3 min-h-[1.5rem] text-xs font-medium text-emerald-400">
          {sent ? "WhatsApp opened with your catalogue request." : ""}
        </p>

        {sent && (
          <p className="mt-1 text-xs text-zinc-300">
            If the new tab did not open,{" "}
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-purple-300 underline"
            >
              open the request on WhatsApp
            </a>
            .
          </p>
        )}

        <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-zinc-500">
          Prefer email? Write directly to{" "}
          <a href={contact.email} className="font-semibold text-purple-300 hover:text-white">
            {contact.emailLabel}
          </a>
          .
        </p>
      </div>
    </Overlay>
  );
}
