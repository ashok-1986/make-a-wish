"use client";

import { useState } from "react";
import { useGifting } from "./GiftingProvider";

const scopeOptions = [
  "Diwali 2026 hampers",
  "Dry fruit & gourmet",
  "Precious metals & heritage",
  "Leather & executive",
  "Wellness & artisanal",
  "Crockery & serveware",
];

export function TurnkeyPlanner() {
  const { addItem, seedRFQ } = useGifting();
  const [scopes, setScopes] = useState<string[]>(["Diwali 2026 hampers", "Dry fruit & gourmet"]);
  const [decor, setDecor] = useState(true);
  const [added, setAdded] = useState(false);

  const scopeLabel = scopes.length > 0 ? scopes.join(", ") : "Corporate hampers";
  const detail = `${scopeLabel}${decor ? " · Office festive decor" : ""}`;

  function toggleScope(scope: string) {
    setScopes((current) =>
      current.includes(scope) ? current.filter((entry) => entry !== scope) : [...current, scope]
    );
    setAdded(false);
  }

  function addConfiguration() {
    addItem({
      key: "turnkey:office",
      kind: "turnkey",
      name: "Turnkey decor + corporate hampers",
      detail,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 4000);
  }

  function requestProposal() {
    seedRFQ({
      inquiryType: "Turnkey decor + corporate gifting",
      notes: [
        "Turnkey decor + corporate hampers",
        `Gifting scope: ${scopeLabel}`,
        `Office festive decor: ${decor ? "Included" : "Not included"}`,
      ].join("\n"),
    });
  }

  return (
    <div className="rounded-[2rem] bg-paper p-5 text-ink md:p-7">
      <fieldset>
        <legend className="flex items-baseline gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum text-sm font-black text-paper">
            1
          </span>
          <span className="font-display text-2xl italic text-plum">Choose the gifting scope</span>
        </legend>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {scopeOptions.map((scope) => (
            <label
              key={scope}
              className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-colors ${
                scopes.includes(scope)
                  ? "border-plum bg-cream text-ink"
                  : "border-plum/20 bg-paper text-ink/80 hover:border-plum/50"
              }`}
            >
              <input
                type="checkbox"
                checked={scopes.includes(scope)}
                onChange={() => toggleScope(scope)}
                className="h-4 w-4 accent-[#5c2f7f]"
              />
              {scope}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="flex items-baseline gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum text-sm font-black text-paper">
            2
          </span>
          <span className="font-display text-2xl italic text-plum">Add the office programme</span>
        </legend>
        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border-2 border-plum/20 bg-paper p-4">
          <input
            type="checkbox"
            checked={decor}
            onChange={(event) => {
              setDecor(event.target.checked);
              setAdded(false);
            }}
            className="mt-1 h-5 w-5 shrink-0 accent-[#5c2f7f]"
          />
          <span>
            <span className="block font-bold text-ink">
              Pair with office festive campus decor
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-ink/75">
              Reception, atrium and floor-bay installations planned around the same delivery
              schedule as the hampers.
            </span>
          </span>
        </label>
      </fieldset>

      <div className="mt-6 rounded-2xl bg-cream p-4">
        <p className="eyebrow text-plum/75">Your configuration</p>
        <dl className="mt-3 grid gap-2 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="font-bold text-ink/70">Gifting scope</dt>
            <dd className="text-right font-semibold text-ink">{scopeLabel}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="font-bold text-ink/70">Office decor</dt>
            <dd className="text-right font-semibold text-ink">{decor ? "Included" : "Not included"}</dd>
          </div>
        </dl>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-plum/15 pt-3 text-xs font-semibold text-plum">
          <li>Single-window GST invoice</li>
          <li>One coordinated delivery schedule</li>
          <li>One point of contact</li>
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={addConfiguration} className="btn !min-h-[44px] !text-sm">
          Add configuration to shortlist
        </button>
        <button
          type="button"
          onClick={requestProposal}
          className="btn btn-ghost !min-h-[44px] !text-sm text-plum"
        >
          Request a proposal
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs font-bold text-plum">
        {added ? "Configuration added to your shortlist." : ""}
      </p>
    </div>
  );
}
