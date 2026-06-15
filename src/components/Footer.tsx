import { Link } from "react-router-dom";
import footerLogo from "@/assets/logo-white-footer.svg";
import { useT, useLocalePath } from "@/i18n";

const navLinks: { to: string; key: string }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/projects", key: "nav.projects" },
  { to: "/recognitions", key: "nav.recognitions" },
  { to: "/contact", key: "nav.contact" },
];

export default function Footer() {
  const t = useT();
  const lp = useLocalePath();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="section-padding py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr_auto_auto] md:gap-0">
          <div className="flex items-start">
            <img src={footerLogo} alt="K. Chen Construction Management" className="h-14 w-auto md:h-20" />
          </div>

          <div className="hidden md:block" aria-hidden="true" />

          <div className="md:pr-16">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("footer.nav")}
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 md:block md:space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={lp(l.to)} className="text-sm text-footer-foreground/80 transition-colors hover:text-primary">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 text-sm text-footer-foreground/80">
              <li>{t("footer.office")}</li>
              <li>
                <a href="mailto:kchen@kchencm.com" className="transition-colors hover:text-primary">
                  kchen@kchencm.com
                </a>
              </li>
              <li>
                <a href="tel:+16046182449" className="transition-colors hover:text-primary">
                  (604) 618-2449
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-foreground/10 section-padding py-5">
        <p className="text-xs text-footer-foreground/50">
          {t("footer.rights")}
          {" | "}
          <span className="text-[0.65rem]">
            {t("footer.webBy")}{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Bluluma Design
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
