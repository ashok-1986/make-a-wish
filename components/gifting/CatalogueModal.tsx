"use client";

import { useEffect, useMemo, useState } from "react";
import { catalogueRequestMessage } from "../../lib/gifting";
import { contact, whatsappLink } from "../../lib/site";
import { useGifting } from "./GiftingProvider";
import { Overlay } from "./Overlay";

const baseInterests = [
  "All 14 categories",
  "Diwali 2026 signature hampers",
  "Year-round corporate gifting",
  "Dry fruit & gourmet edibles",
  "Precious metals & heritage",
  "Leather & executive accessories",
  "Wellness, candles & artisanal",
  "Turnkey decor + hampers",
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
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-plum/15 bg-paper px-6 py-5">
        <div>
          <p className="eyebrow text-plum/75">Catalogue request</p>
          <h2 id="catalogue-title" className="mt-1 font-display text-3xl italic leading-tight text-plum">
            The 2026 corporate gifting catalogue
          </h2>
        </div>
        <button
          type="button"
          onClick={closeCatalogue}
          aria-label="Close catalogue request"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-plum/20 text-xl font-bold text-plum transition-colors hover:bg-plum hover:text-paper"
        >
          &times;
        </button>
      </div>

      <div className="px-6 py-6">
        <p className="text-sm leading-relaxed text-ink/85">
          Share your details and the collection you are interested in. The catalogue and commercial
          details are sent by our corporate desk on WhatsApp.
        </p>

        <form onSubmit={onSubmit} className="mt-5 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cat-name" className="mb-1.5 block text-sm font-bold">
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
              <label htmlFor="cat-company" className="mb-1.5 block text-sm font-bold">
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
              <label htmlFor="cat-email" className="mb-1.5 block text-sm font-bold">
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
              <label htmlFor="cat-phone" className="mb-1.5 block text-sm font-bold">
                WhatsApp number
              </label>
              <input
                id="cat-phone"
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                pattern="[0-9+\s\-]{8,16}"
                title="Enter a phone number, for example +91 98765 43210"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="field"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cat-interest" className="mb-1.5 block text-sm font-bold">
              Collection of interest
            </label>
            <select
              id="cat-interest"
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="field"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn w-full">
            Request catalogue on WhatsApp <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </button>
        </form>

        <p role="status" aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm font-bold text-plum">
          {sent ? "WhatsApp opened with your catalogue request." : ""}
        </p>

        {sent && (
          <p className="mt-1 text-sm">
            If the new tab did not open,{" "}
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-bold text-plum"
            >
              open the request on WhatsApp
            </a>
            .
          </p>
        )}

        <p className="mt-4 border-t border-plum/15 pt-4 text-xs leading-relaxed text-ink/75">
          Prefer email? Write to{" "}
          <a href={contact.email} className="link-underline font-bold text-plum">
            {contact.emailLabel}
          </a>
          .
        </p>
      </div>
    </Overlay>
  );
}
