"use client";

import { useState } from "react";
import { whatsappLink } from "../lib/site";

const eventTypes = [
  "Corporate event",
  "Festive celebration",
  "Corporate gifting",
  "Wedding or social event",
];

const field =
  "w-full rounded-2xl border-2 border-plum/40 bg-paper px-4 py-3 text-ink placeholder:text-ink/50 focus:border-plum focus:outline-none focus-visible:ring-2 focus-visible:ring-plum";

/* Four-field quote request. No backend: submitting opens WhatsApp with the details pre-typed. */
export function QuoteForm() {
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [phone, setPhone] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      "Hello Make a Wish, I would like a quote.",
      `Event type: ${eventType}`,
      date && `Tentative date: ${date}`,
      guests && `Guests: ${guests}`,
      `My number: ${phone}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="q-type" className="mb-2 block font-bold">
          Event type
        </label>
        <select
          id="q-type"
          required
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className={field}
        >
          <option value="" disabled>
            Choose one
          </option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="q-date" className="mb-2 block font-bold">
          Tentative date
        </label>
        <input
          id="q-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="q-guests" className="mb-2 block font-bold">
          Guest count
        </label>
        <input
          id="q-guests"
          type="number"
          inputMode="numeric"
          min={1}
          placeholder="For example 150"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="q-phone" className="mb-2 block font-bold">
          Your contact number
        </label>
        <input
          id="q-phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\s\-]{8,16}"
          title="Enter a phone number, for example +91 98765 43210"
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={field}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn">
          Request a quote <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </button>
        <p className="text-sm">This opens WhatsApp with your details already typed in.</p>
      </div>
    </form>
  );
}
