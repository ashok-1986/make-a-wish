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
  const [scopes, setScopes] = useState<string[]>([
    "Diwali 2026 hampers",
    "Dry fruit & gourmet",
  ]);
  const [decor, setDecor] = useState(true);
  const [added, setAdded] = useState(false);

  const scopeLabel = scopes.length > 0 ? scopes.join(", ") : "Corporate hampers";
  const detail = `${scopeLabel}${decor ? " · Office festive decor" : ""}`;

  function toggleScope(scope: string) {
    setScopes((current) =>
      current.includes(scope)
        ? current.filter((entry) => entry !== scope)
        : [...current, scope]
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
    <div className="rounded-2xl border border-white/10 bg-[#131019] p-6 text-white md:p-8">
      <fieldset>
        <legend className="flex items-center gap-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-purple-500/40 bg-purple-500/20 font-mono text-xs font-bold text-purple-300">
            01
          </span>
          <span className="font-sans text-lg font-bold text-white">
            Choose Gifting Scope
          </span>
        </legend>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {scopeOptions.map((scope) => {
            const isSelected = scopes.includes(scope);
            return (
              <label
                key={scope}
                className={`flex min-h-[46px] cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "border-purple-500 bg-purple-500/15 text-white"
                    : "border-white/10 bg-[#1A1624] text-zinc-300 hover:border-white/25"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleScope(scope)}
                  className="h-4 w-4 rounded accent-purple-600"
                />
                <span>{scope}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6 border-t border-white/10 pt-6">
        <legend className="flex items-center gap-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-purple-500/40 bg-purple-500/20 font-mono text-xs font-bold text-purple-300">
            02
          </span>
          <span className="font-sans text-lg font-bold text-white">
            Workplace Campus Decor Programme
          </span>
        </legend>
        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-[#1A1624] p-4 transition-colors hover:border-purple-500/30">
          <input
            type="checkbox"
            checked={decor}
            onChange={(event) => {
              setDecor(event.target.checked);
              setAdded(false);
            }}
            className="mt-1 h-5 w-5 shrink-0 rounded accent-purple-600"
          />
          <span>
            <span className="block font-bold text-white">
              Pair with office festive campus decor
            </span>
            <span className="mt-1 block text-xs sm:text-sm leading-relaxed text-zinc-400">
              Reception, atrium, and floor-bay installations planned around the same delivery schedule as your hampers.
            </span>
          </span>
        </label>
      </fieldset>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
          Selected Configuration
        </p>
        <dl className="mt-3 grid gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap justify-between gap-2 border-b border-white/5 pb-2">
            <dt className="text-zinc-400">Gifting Scope</dt>
            <dd className="font-semibold text-white">{scopeLabel}</dd>
          </div>
          <div className="flex flex-wrap justify-between gap-2 border-b border-white/5 pb-2">
            <dt className="text-zinc-400">Workplace Decor</dt>
            <dd className="font-semibold text-white">
              {decor ? "Included · Turnkey Bundle" : "Not included"}
            </dd>
          </div>
        </dl>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium text-zinc-400">
          <li className="flex items-center gap-1.5">
            <span className="text-purple-400">✓</span> Single-window GST invoice
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-purple-400">✓</span> Coordinated delivery schedule
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-purple-400">✓</span> One dedicated point of contact
          </li>
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={addConfiguration}
          className="btn !min-h-[42px] !text-xs sm:!text-sm"
        >
          Add to Shortlist
        </button>
        <button
          type="button"
          onClick={requestProposal}
          className="btn btn-ghost !min-h-[42px] !text-xs sm:!text-sm"
        >
          Request Proposal
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-2 min-h-[1.25rem] text-xs font-medium text-emerald-400"
      >
        {added ? "Configuration added to your shortlist tray." : ""}
      </p>
    </div>
  );
}
