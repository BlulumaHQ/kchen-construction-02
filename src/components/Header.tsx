import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-full-color.svg";
import TopBar from "@/components/TopBar";
import { useT, useLocalePath } from "@/i18n";

const links: { to: string; key: string }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/projects", key: "nav.projects" },
  { to: "/recognitions", key: "nav.recognitions" },
  { to: "/contact", key: "nav.contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const t = useT();
  const lp = useLocalePath();

  const isActive = (to: string) => pathname === lp(to);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <TopBar />
      <div className="section-padding flex h-20 items-center justify-between md:h-24">
        <Link to={lp("/")} className="shrink-0" aria-label={t("nav.logoAlt")}>
          <img src={logo} alt="K. Chen Construction Management" className="h-12 w-auto md:h-16" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={lp(l.to)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                isActive(l.to) ? "text-primary" : "text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={t("nav.menu")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          {links.map((l) => (
            <Link
              key={l.to}
              to={lp(l.to)}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                isActive(l.to) ? "text-primary" : "text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
