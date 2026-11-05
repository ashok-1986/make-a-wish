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
      <div className="flex items-start justify-between gap-4 border-b border-plum/15 px-5 py-5">
        <div>
          <p className="eyebrow text-plum/75">For your proposal</p>
          <h2 id="shortlist-title" className="mt-1 font-display text-3xl italic leading-tight text-plum">
            Your shortlist
          </h2>
          <p className="mt-1 text-sm text-ink/75">
            {items.length === 0
              ? "Nothing added yet."
              : `${items.length} ${items.length === 1 ? "item" : "items"} ready to send.`}
          </p>
        </div>
        <button
          type="button"
          onClick={closeTray}
          aria-label="Close shortlist"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-plum/20 text-xl font-bold text-plum transition-colors hover:bg-plum hover:text-paper"
        >
          &times;
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        {items.length === 0 ? (
          <div className="rounded-2xl bg-cream p-5">
            <p className="font-bold text-plum">Build a shortlist as you browse.</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              Add the categories and hamper models you like, and we will turn the list into a
              proposal for your team.
            </p>
            <button type="button" onClick={closeTray} className="btn mt-4 !min-h-[44px] !text-sm">
              Browse the catalogue
            </button>
          </div>
        ) : (
          <ul className="grid gap-3">
            {items.map((item) => {
              return (
                <li key={item.key} className="rounded-2xl border-2 border-plum/15 bg-paper p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-plum/70">
                        {shortlistKindLabels[item.kind]}
                      </p>
                      <h3 className="mt-1 font-bold leading-snug text-ink">{item.name}</h3>
                      {item.detail && (
                        <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.detail}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="link-underline shrink-0 text-sm font-bold text-plum"
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

      <div className="border-t border-plum/15 px-5 py-5">
        <p className="text-sm leading-relaxed text-ink/75">
          Your shortlist is shared with the corporate desk so we can send the catalogue and a
          tailored proposal.
        </p>
        <button
          type="button"
          disabled={items.length === 0}
          onClick={() => seedRFQ({ notes: shortlistNotes(items) })}
          className="btn mt-4 w-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          Request a proposal <span className="btn-arrow" aria-hidden="true">&rarr;</span>
        </button>
        <a
          href={items.length === 0 ? undefined : whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={items.length === 0}
          className={`btn btn-ghost mt-2 w-full !min-h-[44px] !text-base text-plum ${
            items.length === 0 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          Send shortlist on WhatsApp
        </a>
        {items.length > 0 && (
          <button
            type="button"
            onClick={clearItems}
            className="link-underline mt-3 block w-full py-2 text-center text-sm font-bold text-ink/70"
          >
            Clear shortlist
          </button>
        )}
      </div>
    </Overlay>
  );
}
