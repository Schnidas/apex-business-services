import { useEffect } from "react";

/**
 * Adds `.is-in` to every `.reveal` element as it scrolls into view.
 * One IntersectionObserver for the whole page, re-scanning when the DOM grows.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-in");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    const scan = () =>
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-in)")
        .forEach((el) => io.observe(el));

    scan();
    // Re-scan after lazy sections mount.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
