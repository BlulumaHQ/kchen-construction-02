import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang, buildLangPath } from "@/i18n";

interface PageMeta {
  title: string;
  description: string;
}

const SITE_URL = "https://kchen-construction-02.lovable.app";

export function usePageMeta({ title, description }: PageMeta) {
  const lang = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

    const setMeta = (attr: "name" | "property", val: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        if (hreflang) el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:locale", lang === "zh" ? "zh_TW" : "en_US");
    setMeta("property", "og:url", `${SITE_URL}${pathname}`);

    // Canonical + hreflang for the current route
    setLink("canonical", `${SITE_URL}${pathname}`);
    setLink("alternate", `${SITE_URL}${buildLangPath(pathname, "en")}`, "en");
    setLink("alternate", `${SITE_URL}${buildLangPath(pathname, "zh")}`, "zh-Hant");
    setLink("alternate", `${SITE_URL}${buildLangPath(pathname, "en")}`, "x-default");
  }, [title, description, lang, pathname]);
}
