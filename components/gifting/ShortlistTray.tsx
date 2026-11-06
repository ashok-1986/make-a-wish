"use client";

import {
  shortlistKindLabels,
  shortlistNotes,
  shortlistWhatsAppMessage,
} from "../../lib/gifting";
import { whatsappLink } from "../../lib/site";
import { useGifting } from "./GiftingProvider";
import { Overlay } from "./Overlay";

export function ShortlistTray() {
  const {
    items,
    trayOpen,
    closeTray,
    removeItem,
    clearItems,
    seedRFQ,
  } = useGifting();

  const message = shortlistWhatsAppMessage(items);

  return (
    <Overlay open={trayOpen} onClose={closeTray} labelledBy="shortlist-title" variant="tray">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            For Your Proposal
          </p>
          <h2 id="shortlist-title" className="mt-1 font-sans text-2xl font-bold text-white">
            Your Shortlist Tray
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            {items.length === 0
              ? "No items added yet."
              : `${items.length} ${items.length === 1 ? "item" : "items"} ready to transmit.`}
          </p>
        </div>
        <button
          type="button"
          onClick={closeTray}
          aria-label="Close shortlist"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-lg font-bold text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          &times;
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        {items.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-[#131019] p-5 text-center">
            <p className="font-sans font-bold text-white">Build a shortlist as you browse.</p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Add the 5 B2B pillar items and hamper models you like, and we will turn the list into an itemized proposal with custom logo mockups.
            </p>
            <button
              type="button"
              onClick={closeTray}
              className="btn mt-4 !min-h-[40px] !text-xs"
            >
              Browse 5 Pillars
            </button>
          </div>
        ) : (
          <ul className="grid gap-3">
            {items.map((item) => {
              return (
                <li key={item.key} className="rounded-xl border border-white/10 bg-[#131019] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-purple-400">
                        {shortlistKindLabels[item.kind] || item.kind}
                      </p>
                      <h3 className="mt-1 font-sans text-sm font-bold text-white leading-snug">
                        {item.name}
                      </h3>
                      {item.detail && (
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                          {item.detail}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="shrink-0 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                      aria-label={`Remove ${item.name} from shortlist`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="border-t border-white/10 px-5 py-5 bg-[#0B090E]">
        <p className="text-xs leading-relaxed text-zinc-400">
          Your shortlist is transmitted to our corporate desk to generate a consolidated rate card and delivery schedule.
        </p>
        <button
          type="button"
          disabled={items.length === 0}
          onClick={() => seedRFQ({ notes: shortlistNotes(items) })}
          className="btn mt-4 w-full justify-center !min-h-[42px] !text-xs disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send to RFQ Form &rarr;
        </button>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost mt-2 w-full justify-center !min-h-[42px] !text-xs"
        >
          Send Directly on WhatsApp &rarr;
        </a>
        {items.length > 0 && (
          <button
            type="button"
            onClick={clearItems}
            className="mt-3 block w-full text-center font-mono text-[0.7rem] uppercase tracking-wider text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Clear Shortlist
          </button>
        )}
      </div>
    </Overlay>
  );
}
