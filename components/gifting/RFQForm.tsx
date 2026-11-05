"use client";

import { useEffect, useMemo, useState } from "react";
import {
  inquiryTypes,
  rfqMessage,
  shortlistNotes,
} from "../../lib/gifting";
import { whatsappLink } from "../../lib/site";
import { useGifting, RFQ_SEED_KEY } from "./GiftingProvider";

const fieldClass = "field";

export function RFQForm({ defaultInquiry }: { defaultInquiry?: string }) {
  const { items, rfqSeed } = useGifting();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState(defaultInquiry ?? inquiryTypes[0]);
  const [quantity, setQuantity] = useState("");
  const [target, setTarget] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [sentHref, setSentHref] = useState<string | null>(null);

  useEffect(() => {
    if (!rfqSeed) return;
    if (rfqSeed.inquiryType) setInquiryType(rfqSeed.inquiryType);
    if (rfqSeed.notes) setRequirements(rfqSeed.notes);
    setSentHref(null);
    try {
      window.sessionStorage.removeItem(RFQ_SEED_KEY);
    } catch {
      /* Storage can be unavailable in private modes. */
    }
  }, [rfqSeed]);

  /* A shortlist sent from a page without an enquiry form is carried here through
     session storage. Read it once, then clear it so it does not reappear later. */
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(RFQ_SEED_KEY);
      if (!raw) return;
      const stored = JSON.parse(raw) as { inquiryType?: string; notes?: string };
      if (stored.inquiryType) setInquiryType(stored.inquiryType);
      if (stored.notes) setRequirements(stored.notes);
      window.sessionStorage.removeItem(RFQ_SEED_KEY);
    } catch {
      /* A corrupted or unavailable store should not block the form. */
    }
  }, []);

  const inquiryOptions = useMemo(
    () => Array.from(new Set([defaultInquiry, ...inquiryTypes].filter(Boolean) as string[])),
    [defaultInquiry]
  );

  function useShortlist() {
    const notes = shortlistNotes(items);
    if (!notes) return;
    setRequirements((current) => (current.includes(notes) ? current : [current, notes].filter(Boolean).join("\n\n")));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const href = whatsappLink(
      rfqMessage({
        name,
        company,
        email,
        phone,
        inquiryType,
        quantity,
        target,
        location,
        requirements,
      })
    );
    window.open(href, "_blank", "noopener,noreferrer");
    setSentHref(href);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border-2 border-plum/15 bg-paper p-5 md:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="rfq-name" className="mb-1.5 block text-sm font-bold">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="rfq-name"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            placeholder="Priya Sharma"
          />
        </div>
        <div>
          <label htmlFor="rfq-company" className="mb-1.5 block text-sm font-bold">
            Company / organisation <span aria-hidden="true">*</span>
          </label>
          <input
            id="rfq-company"
            required
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={fieldClass}
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="rfq-email" className="mb-1.5 block text-sm font-bold">
            Work email <span aria-hidden="true">*</span>
          </label>
          <input
            id="rfq-email"
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
            placeholder="priya@company.com"
          />
        </div>
        <div>
          <label htmlFor="rfq-phone" className="mb-1.5 block text-sm font-bold">
            WhatsApp / phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="rfq-phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-]{8,16}"
            title="Enter a phone number, for example +91 98765 43210"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={fieldClass}
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="rfq-type" className="mb-1.5 block text-sm font-bold">
            Primary enquiry <span aria-hidden="true">*</span>
          </label>
          <select
            id="rfq-type"
            required
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            className={fieldClass}
          >
            {inquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="rfq-quantity" className="mb-1.5 block text-sm font-bold">
            Approximate quantity <span className="font-normal text-ink/60">(optional)</span>
          </label>
          <input
            id="rfq-quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            className={fieldClass}
            placeholder="e.g. 120 recipients"
          />
        </div>

        <div>
          <label htmlFor="rfq-target" className="mb-1.5 block text-sm font-bold">
            Target delivery / event date
          </label>
          <input
            id="rfq-target"
            type="date"
            value={target}
            onChange={(event) => setTarget(event.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="rfq-location" className="mb-1.5 block text-sm font-bold">
            Delivery location
          </label>
          <input
            id="rfq-location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className={fieldClass}
            placeholder="Vashi, Belapur, Kharghar, Panvel, Mumbai…"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label htmlFor="rfq-requirements" className="block text-sm font-bold">
              Shortlisted categories and requirements
            </label>
            {items.length > 0 && (
              <button
                type="button"
                onClick={useShortlist}
                className="link-underline text-sm font-bold text-plum"
              >
                Use my shortlist ({items.length})
              </button>
            )}
          </div>
          <textarea
            id="rfq-requirements"
            rows={5}
            value={requirements}
            onChange={(event) => setRequirements(event.target.value)}
            className={`${fieldClass} mt-1.5 resize-y`}
            placeholder="Tell us the occasion, the recipient groups, the categories you are considering, and anything the corporate desk should know."
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn">
          Send enquiry on WhatsApp <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </button>
        <p className="max-w-[42ch] text-xs leading-relaxed text-ink/70">
          This opens WhatsApp with your details already typed in. No payment or checkout is
          involved.
        </p>
      </div>

      <p role="status" aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm font-bold text-plum">
        {sentHref ? "WhatsApp opened with your enquiry." : ""}
      </p>
      {sentHref && (
        <p className="mt-1 text-sm">
          If the new tab did not open,{" "}
          <a href={sentHref} target="_blank" rel="noopener noreferrer" className="link-underline font-bold text-plum">
            open your enquiry on WhatsApp
          </a>
          .
        </p>
      )}
    </form>
  );
}
