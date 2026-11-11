import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-full-color.svg";
import lightLogo from "@/assets/logo-white-footer.svg";
import { Button } from "@/components/ui/button";
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
  const home = pathname === "/" || pathname === "/zh" || pathname === "/zh/";
  const [scrolled, setScrolled] = useState(() => window.scrollY > 48);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);
  const overlay = home && !scrolled && !open;

  const isActive = (to: string) => pathname === lp(to);

  return (
    <header className={`site-header top-0 z-40 w-full border-b ${home ? "site-header-home" : ""} ${overlay ? "site-header-overlay" : ""}`}>
      <TopBar />
      <div className="section-padding flex h-20 items-center justify-between md:h-24">
        <Link to={lp("/")} className="shrink-0" aria-label={t("nav.logoAlt")}>
          <img src={overlay ? lightLogo : logo} alt="K. Chen Construction Management" className="h-12 w-auto md:h-16" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={lp(l.to)}
              className={`desktop-nav-link text-sm font-medium transition-colors hover:text-primary ${
                isActive(l.to) ? "text-primary" : "text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={t("nav.menu")}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
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
