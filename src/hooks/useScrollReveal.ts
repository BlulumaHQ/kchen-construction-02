import { useCallback, useRef } from "react";

// Scroll-reveal that works with asynchronously-rendered content.
//
// The old version observed `.reveal-up` elements once on mount. Content that
// loads later (e.g. CMS data from Supabase) appeared after that single scan,
// so those elements never got the `revealed` class and stayed at opacity 0.
//
// This version uses a callback ref (re-runs whenever the element mounts or
// remounts) plus a MutationObserver (catches `.reveal-up` nodes added later),
// so both synchronous and async content reveal correctly. The public API is
// unchanged: callers still do `const ref = useScrollReveal<T>()` then
// `<el ref={ref} />`.
export function useScrollReveal<T extends HTMLElement>() {
  const cleanupRef = useRef<(() => void) | null>(null);

  const setRef = useCallback((el: T | null) => {
    // Tear down previous observers (handles remounts / filter changes).
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const observe = (node: Element) => {
      if (node.classList.contains("reveal-up") && !node.classList.contains("revealed")) {
        io.observe(node);
      }
    };

    // Container itself + any reveal-up elements already in the DOM.
    observe(el);
    el.querySelectorAll(".reveal-up").forEach(observe);

    // Anything added later (async-loaded cards, filtered results, etc.).
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          const elem = n as Element;
          observe(elem);
          elem.querySelectorAll?.(".reveal-up").forEach(observe);
        });
      }
    });
    mo.observe(el, { childList: true, subtree: true });

    cleanupRef.current = () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return setRef;
}
