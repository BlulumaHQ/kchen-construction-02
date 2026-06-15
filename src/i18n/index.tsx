import { createContext, useContext, useMemo, ReactNode } from "react";
import { useLocation, Link, LinkProps } from "react-router-dom";
import { dict, type Lang } from "./dict";

interface Ctx {
  lang: Lang;
  /** Prefix `/zh` onto a base ("/about" -> "/zh/about") when current lang is zh. */
  lp: (path: string) => string;
  /** Lookup translated string by dotted path, e.g. t("nav.home"). */
  t: (key: string) => string;
}

const LanguageCtx = createContext<Ctx | null>(null);

function deriveLang(pathname: string): Lang {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const lang = deriveLang(pathname);

  const value = useMemo<Ctx>(() => {
    const lp = (path: string) => {
      if (lang !== "zh") return path;
      if (path === "/") return "/zh";
      return `/zh${path.startsWith("/") ? path : `/${path}`}`;
    };

    const t = (key: string) => {
      const parts = key.split(".");
      let node: any = dict;
      for (const p of parts) {
        if (node && typeof node === "object" && p in node) node = node[p];
        else return key;
      }
      if (node && typeof node === "object" && "en" in node && "zh" in node) {
        return (node as any)[lang] ?? (node as any).en ?? key;
      }
      return typeof node === "string" ? node : key;
    };

    return { lang, lp, t };
  }, [lang]);

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}

export function useI18n(): Ctx {
  const v = useContext(LanguageCtx);
  if (!v) throw new Error("useI18n must be used within LanguageProvider");
  return v;
}

export function useT() {
  return useI18n().t;
}

export function useLang() {
  return useI18n().lang;
}

export function useLocalePath() {
  return useI18n().lp;
}

/** Returns the equivalent of the current pathname in the requested language. */
export function buildLangPath(pathname: string, target: Lang): string {
  // Strip /zh prefix to get the canonical English path
  let base = pathname;
  if (base === "/zh") base = "/";
  else if (base.startsWith("/zh/")) base = base.slice(3); // "/zh/about" -> "/about"
  if (target === "en") return base || "/";
  return base === "/" ? "/zh" : `/zh${base}`;
}

/** Convenience <Link> that auto-prefixes /zh when in Chinese. */
export function LLink({ to, ...rest }: Omit<LinkProps, "to"> & { to: string }) {
  const lp = useLocalePath();
  return <Link to={lp(to)} {...rest} />;
}
