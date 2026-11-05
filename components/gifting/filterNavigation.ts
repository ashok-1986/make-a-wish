export const GIFTING_FILTER_EVENT = "maw:set-gifting-filter";
export const GIFTING_FILTER_STORAGE_KEY = "maw-category-filter";

/* Applies a category filter and moves the buyer to the category hub. When the hub
   is not on the current page, the choice is carried over through session storage. */
export function applyGiftingFilter(filter: string) {
  if (typeof window === "undefined") return;

  if (document.getElementById("gifting-categories")) {
    window.dispatchEvent(new CustomEvent(GIFTING_FILTER_EVENT, { detail: filter }));
    document.getElementById("gifting-categories")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", "/#gifting-categories");
    return;
  }

  try {
    window.sessionStorage.setItem(GIFTING_FILTER_STORAGE_KEY, filter);
  } catch {
    /* Storage can be unavailable in private modes. */
  }
  window.location.href = "/#gifting-categories";
}
