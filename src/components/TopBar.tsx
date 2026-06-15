import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { useLang, buildLangPath, useT } from "@/i18n";

export default function TopBar() {
  const lang = useLang();
  const t = useT();
  const { pathname } = useLocation();

  const enHref = buildLangPath(pathname, "en");
  const zhHref = buildLangPath(pathname, "zh");

  return (
    <div className="w-full bg-primary text-primary-foreground text-xs">
      <div className="section-padding flex h-9 items-center justify-between">
        <a
          href="tel:+16046182449"
          className="flex items-center gap-2 font-medium hover:opacity-90 transition-opacity"
          aria-label={t("topbar.phoneLabel")}
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          <span>(604) 618-2449</span>
        </a>

        <nav
          className="flex items-center gap-1 font-medium"
          aria-label={t("topbar.switchAria")}
        >
          <Link
            to={enHref}
            className={`px-2 py-0.5 rounded transition-colors ${
              lang === "en"
                ? "bg-white/15"
                : "opacity-75 hover:opacity-100"
            }`}
            hrefLang="en"
            aria-current={lang === "en" ? "true" : undefined}
          >
            {t("topbar.langEn")}
          </Link>
          <span aria-hidden="true" className="opacity-50">|</span>
          <Link
            to={zhHref}
            className={`px-2 py-0.5 rounded transition-colors ${
              lang === "zh"
                ? "bg-white/15"
                : "opacity-75 hover:opacity-100"
            }`}
            hrefLang="zh-Hant"
            aria-current={lang === "zh" ? "true" : undefined}
          >
            {t("topbar.langZh")}
          </Link>
        </nav>
      </div>
    </div>
  );
}
