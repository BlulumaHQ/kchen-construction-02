import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const children = el.querySelectorAll(".reveal-up");
    children.forEach((c) => observer.observe(c));
    if (el.classList.contains("reveal-up")) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}
