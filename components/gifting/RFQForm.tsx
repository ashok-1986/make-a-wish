"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { QUANTITY_TIERS, QuantityTier } from "../../lib/catalog-types";
import {
  corporateGiftingPurposes,
  rfqEmailBody,
  rfqMessage,
  shortlistKindLabels,
} from "../../lib/gifting";
import { contact, whatsappLink } from "../../lib/site";
import { RFQ_SEED_KEY, useGifting } from "./GiftingProvider";

const fieldClass = "field";

export function RFQForm({ defaultInquiry }: { defaultInquiry?: string }) {
  const { items, removeItem, clearItems, rfqSeed } = useGifting();
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [giftingPurpose, setGiftingPurpose] = useState<string>(
    defaultInquiry ?? corporateGiftingPurposes[0]
  );
  const [quantityTier, setQuantityTier] = useState<QuantityTier>(QUANTITY_TIERS[1]);
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");

  const [submissionState, setSubmissionState] = useState<{
    type: "whatsapp" | "email";
    href: string;
    summary: string;
  } | null>(null);

  /* Sync when rfqSeed from context changes */
  useEffect(() => {
    if (!rfqSeed) return;
    if (rfqSeed.inquiryType) setGiftingPurpose(rfqSeed.inquiryType);
    if (rfqSeed.notes) setRequirements(rfqSeed.notes);
    setSubmissionState(null);
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
      if (stored.inquiryType) setGiftingPurpose(stored.inquiryType);
      if (stored.notes) setRequirements(stored.notes);
      window.sessionStorage.removeItem(RFQ_SEED_KEY);
    } catch {
      /* A corrupted or unavailable store should not block the form. */
    }
  }, []);

  const purposeOptions = useMemo(() => {
    const base = [...corporateGiftingPurposes] as string[];
    const extras = [defaultInquiry, giftingPurpose].filter(
      (item): item is string => typeof item === "string" && item.trim().length > 0 && !base.includes(item)
    );
    return Array.from(new Set([...extras, ...base]));
  }, [defaultInquiry, giftingPurpose]);

  function handleAction(action: "whatsapp" | "email") {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    const details = {
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      giftingPurpose,
      quantityTier,
      location: location.trim(),
      requirements: requirements.trim(),
      items,
    };

    if (action === "whatsapp") {
      const message = rfqMessage(details);
      const href = whatsappLink(message);
      window.open(href, "_blank", "noopener,noreferrer");
      setSubmissionState({
        type: "whatsapp",
        href,
        summary: `WhatsApp inquiry opened for ${details.company} (${details.giftingPurpose}).`,
      });
    } else {
      const subject = `B2B Volume Quote Request - ${details.company} (${details.giftingPurpose})`;
      const body = rfqEmailBody(details);
      const href = `mailto:makeawishevents@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setSubmissionState({
        type: "email",
        href,
        summary: `Email client opened with RFQ for ${details.company} to makeawishevents@gmail.com.`,
      });
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleAction("whatsapp");
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-[#131019] p-5 sm:p-7 md:p-8 shadow-2xl text-white"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400 font-semibold">RFQ &amp; Volume Proposal</span>
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mt-1">
            B2B Corporate Quotation Request
          </h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>B2B Desk Online</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="rfq-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Full name <span aria-hidden="true" className="text-purple-400">*</span>
          </label>
          <input
            id="rfq-name"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            placeholder="e.g. Priya Sharma"
          />
        </div>

        <div>
          <label htmlFor="rfq-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Company name <span aria-hidden="true" className="text-purple-400">*</span>
          </label>
          <input
            id="rfq-company"
            required
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={fieldClass}
            placeholder="e.g. Acme Corporation"
          />
        </div>

        <div>
          <label htmlFor="rfq-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Work email <span aria-hidden="true" className="text-purple-400">*</span>
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
          <label htmlFor="rfq-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            WhatsApp / mobile number <span aria-hidden="true" className="text-purple-400">*</span>
          </label>
          <input
            id="rfq-phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-]{8,16}"
            title="Enter a phone number, for example +91 97734 11805"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={fieldClass}
            placeholder="+91 97734 11805"
          />
        </div>

        <div>
          <label htmlFor="rfq-purpose" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Gifting purpose <span aria-hidden="true" className="text-purple-400">*</span>
          </label>
          <select
            id="rfq-purpose"
            required
            value={giftingPurpose}
            onChange={(event) => setGiftingPurpose(event.target.value)}
            className={fieldClass}
          >
            {purposeOptions.map((option) => (
              <option key={option} value={option} className="bg-[#131019] text-white">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rfq-quantity" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Estimated quantity tier <span aria-hidden="true" className="text-purple-400">*</span>
          </label>
          <select
            id="rfq-quantity"
            required
            value={quantityTier}
            onChange={(event) => setQuantityTier(event.target.value as QuantityTier)}
            className={fieldClass}
          >
            {QUANTITY_TIERS.map((tier) => (
              <option key={tier} value={tier} className="bg-[#131019] text-white">
                {tier} units
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="rfq-location" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Delivery city / office location
          </label>
          <input
            id="rfq-location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className={fieldClass}
            placeholder="e.g. Navi Mumbai, Pan-India, BKC Mumbai…"
          />
        </div>

        {/* Shortlist interactive chip tray */}
        <div className="sm:col-span-2">
          {items.length > 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 font-mono text-[10px] font-bold text-white">
                    {items.length}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-300">
                    Shortlisted SKUs &amp; Items Included ({items.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={clearItems}
                  className="font-mono text-xs text-zinc-400 hover:text-white underline transition-colors"
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item.key}
                    className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/15 px-3 py-1 text-xs font-medium text-purple-200"
                  >
                    <span className="font-mono font-bold text-[10px] uppercase tracking-wider text-purple-300">
                      {shortlistKindLabels[item.kind] || item.kind}
                    </span>
                    <span className="truncate max-w-[200px] sm:max-w-[320px]">
                      {item.name}
                      {item.detail ? ` (${item.detail})` : ""}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full text-purple-300 hover:bg-purple-500/20 hover:text-white focus:outline-none transition-colors"
                      aria-label={`Remove ${item.name} from shortlisted quote items`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <p className="mt-2.5 text-[11px] text-zinc-400 leading-relaxed">
                These shortlisted items will be auto-attached to your WhatsApp inquiry and email request.
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.01] px-4 py-3 text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2">
              <span>
                💡 <strong>Tip:</strong> Items added to your shortlist while exploring the 5 catalogue pillars will automatically attach here.
              </span>
            </div>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="rfq-requirements" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-300">
            Additional specifications &amp; notes
          </label>
          <textarea
            id="rfq-requirements"
            rows={4}
            value={requirements}
            onChange={(event) => setRequirements(event.target.value)}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us about custom logo branding options, specific packaging finishes, expected delivery timeline, or multi-location dispatch needs."
          />
        </div>
      </div>

      {/* Dual Submission Actions */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3.5 border-t border-white/10 pt-5">
        <button
          type="button"
          onClick={() => handleAction("whatsapp")}
          className="btn !bg-white !text-black hover:!bg-zinc-200 font-bold px-6 py-3.5 shadow-md justify-center text-sm"
        >
          <span>Send Instant WhatsApp Inquiry</span>
          <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </button>

        <button
          type="button"
          onClick={() => handleAction("email")}
          className="btn btn-ghost font-bold px-5 py-3.5 justify-center text-sm"
        >
          <svg
            className="h-4 w-4 shrink-0 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Submit via Email to Sales Desk</span>
        </button>
      </div>

      {/* Inline Feedback Card */}
      {submissionState && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-5 rounded-xl border p-4.5 transition-all ${
            submissionState.type === "whatsapp"
              ? "border-emerald-500/30 bg-emerald-950/40 text-emerald-200"
              : "border-purple-500/30 bg-purple-950/40 text-purple-200"
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                submissionState.type === "whatsapp"
                  ? "bg-emerald-600 text-white"
                  : "bg-purple-600 text-white"
              }`}
            >
              {submissionState.type === "whatsapp" ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.127-.518-1.748-.723-2.884-2.502-2.973-2.617-.088-.116-.714-.951-.714-1.815 0-.865.45-1.29.61-1.464.16-.175.349-.219.465-.219.117 0 .233.002.335.007.106.005.249-.04.39.299.144.35.494 1.204.538 1.292.044.088.073.19.015.306-.059.117-.088.19-.175.292-.088.102-.185.228-.264.306-.088.088-.18.184-.078.36.102.175.454.749.974 1.213.67.597 1.235.782 1.41.87.175.088.277.073.38-.044.102-.117.437-.51.554-.685.117-.175.234-.146.393-.088.16.058 1.018.48 1.193.568.175.088.291.131.335.204.044.073.044.423-.1.828z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <div className="flex-1 text-sm">
              <p className="font-bold text-white">
                {submissionState.type === "whatsapp"
                  ? "WhatsApp Inquiry Initiated"
                  : "Email Drafted to Sales Desk"}
              </p>
              <p className="mt-1 text-xs opacity-90 leading-relaxed text-zinc-300">
                {submissionState.type === "whatsapp" ? (
                  <>
                    A direct WhatsApp chat with our B2B desk (<strong>{contact.display}</strong>) has been opened with your details. If the tab did not open,{" "}
                    <a
                      href={submissionState.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      click here to open WhatsApp directly
                    </a>
                    .
                  </>
                ) : (
                  <>
                    Your mail client has been opened with your proposal request for <strong>{contact.emailLabel}</strong>. If your email client did not launch,{" "}
                    <a
                      href={submissionState.href}
                      className="underline font-bold text-purple-300 hover:text-white"
                    >
                      click here to launch your email draft
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PRD Section 5.3 Direct Desk Footer Bar */}
      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center text-xs text-zinc-400">
        <span className="font-mono font-bold uppercase tracking-wider text-purple-400">Direct B2B Desk:</span>{" "}
        <a href={contact.phone} className="font-semibold text-white hover:text-purple-300 hover:underline">
          {contact.display}
        </a>{" "}
        |{" "}
        <a href={contact.email} className="font-semibold text-purple-300 hover:text-white hover:underline">
          {contact.emailLabel}
        </a>{" "}
        | <span>Panvel, Navi Mumbai &amp; Greater Mumbai</span>
      </div>
    </form>
  );
}
