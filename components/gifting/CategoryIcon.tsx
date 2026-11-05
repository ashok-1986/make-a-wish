import type { CategoryIconName } from "../../lib/gifting";

/* Line icons drawn for the 14 gifting categories. Decorative only: every card
   carries the category name in text next to the artwork. */
export function CategoryIcon({
  name,
  className = "",
}: {
  name: CategoryIconName;
  className?: string;
}) {
  const shared = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    className,
  };

  switch (name) {
    case "leaf":
      return (
        <svg {...shared}>
          <path d="M38 9C27 9 15 14 12 25c-1.6 5.7 1.6 11 7 12 11 2 18-9 19-28Z" />
          <path d="M9 40c5-9 12-15 22-20" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...shared}>
          <rect x="7" y="15" width="34" height="24" rx="4" />
          <path d="M18 15v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
          <path d="M7 24h34" />
          <path d="M21 24v4h6v-4" />
        </svg>
      );
    case "cup":
      return (
        <svg {...shared}>
          <path d="M10 17h24v10a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10V17Z" />
          <path d="M34 20h3a5 5 0 0 1 0 10h-3" />
          <path d="M8 41h30" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...shared}>
          <path d="M8 21h32c0 9-7 16-16 16S8 30 8 21Z" />
          <path d="M17 37h14" />
          <path d="M14 14c2-3 5-4 10-4s8 1 10 4" />
        </svg>
      );
    case "diya":
      return (
        <svg {...shared}>
          <path d="M9 30c0 6 6 9 15 9s15-3 15-9c0-3-2-5-5-5H14c-3 0-5 2-5 5Z" />
          <path d="M24 25c-3-4-2-8 1-12 3 4 4 8 1 12" />
          <path d="M6 40h36" />
        </svg>
      );
    case "bottle":
      return (
        <svg {...shared}>
          <path d="M19 7h10v5l2 4v22a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V16l2-4V7Z" />
          <path d="M17 22h14" />
          <path d="M20 28h8" />
        </svg>
      );
    case "flame":
      return (
        <svg {...shared}>
          <path d="M13 22h22v15a5 5 0 0 1-5 5H18a5 5 0 0 1-5-5V22Z" />
          <path d="M16 22c0-6 3-10 8-14 5 4 8 8 8 14" />
          <path d="M24 17c-2 3-1 5 0 7 1-2 2-4 0-7Z" />
        </svg>
      );
    case "spray":
      return (
        <svg {...shared}>
          <rect x="17" y="18" width="14" height="24" rx="4" />
          <path d="M20 18v-4h8v4" />
          <path d="M24 10V6" />
          <path d="M28 8h5M28 12h5M28 4h5" />
        </svg>
      );
    case "lantern":
      return (
        <svg {...shared}>
          <path d="M24 4v4" />
          <path d="M16 12h16l3 6H13l3-6Z" />
          <path d="M15 18h18v16H15z" />
          <path d="M19 22v8M24 22v8M29 22v8" />
          <path d="M17 34h14l-2 5H19l-2-5Z" />
          <path d="M24 39v4" />
        </svg>
      );
    case "soap":
      return (
        <svg {...shared}>
          <rect x="9" y="23" width="30" height="16" rx="8" />
          <path d="M17 27c3-2 11-2 14 0" />
          <circle cx="33" cy="13" r="4" />
          <circle cx="24" cy="10" r="2.5" />
          <circle cx="16" cy="14" r="2" />
        </svg>
      );
    case "cookie":
      return (
        <svg {...shared}>
          <circle cx="24" cy="24" r="16" />
          <circle cx="19" cy="18" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="29" cy="16" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="30" cy="28" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="19" cy="30" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="24" cy="23" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "coin":
      return (
        <svg {...shared}>
          <circle cx="24" cy="24" r="17" />
          <circle cx="24" cy="24" r="12" />
          <path d="M24 17l2 4.5 5 .5-3.8 3.2 1.2 4.8-4.4-2.6-4.4 2.6 1.2-4.8L17 22l5-.5L24 17Z" />
        </svg>
      );
    case "chocolate":
      return (
        <svg {...shared}>
          <rect x="12" y="8" width="24" height="32" rx="3" />
          <path d="M20 8v32M28 8v32M12 16h24M12 24h24M12 32h24" />
        </svg>
      );
    case "bread":
      return (
        <svg {...shared}>
          <path d="M10 22c0-6 5-11 14-11s14 5 14 11c0 3-2 5-5 5v7a5 5 0 0 1-5 5H20a5 5 0 0 1-5-5v-7c-3 0-5-2-5-5Z" />
          <path d="M20 18v5M26 17v6M32 19v4" />
        </svg>
      );
    default:
      return null;
  }
}
