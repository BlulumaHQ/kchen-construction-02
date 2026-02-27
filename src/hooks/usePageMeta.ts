import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;
    const setMeta = (attr: string, val: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr.includes("property") ? "property" : "name", val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
  }, [title, description]);
}
