"use client";

import { useEffect, useRef } from "react";

const focusableSelector =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

type OverlayProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  variant?: "modal" | "tray";
  children: React.ReactNode;
};

/* Accessible overlay: focus moves into the panel, Tab stays inside, Escape closes,
   the page behind stops scrolling and focus returns to the trigger on close. */
export function Overlay({ open, onClose, labelledBy, variant = "modal", children }: OverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;

    const focusTimer = window.setTimeout(() => {
      const nodes = panel?.querySelectorAll<HTMLElement>(focusableSelector);
      nodes?.[0]?.focus();
    }, 40);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (node) => node.offsetParent !== null || node === document.activeElement
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex ${
        variant === "tray" ? "justify-end" : "items-end justify-center sm:items-center"
      }`}
    >
      <button
        type="button"
        aria-label="Close dialog"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-md"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={
          variant === "tray"
            ? "tray-panel relative flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0E0C14] text-white shadow-2xl"
            : "modal-panel relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-white/10 bg-[#131019] text-white shadow-2xl sm:rounded-2xl"
        }
      >
        {children}
      </div>
    </div>
  );
}
