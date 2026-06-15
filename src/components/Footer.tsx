import { Link } from "react-router-dom";
import footerLogo from "@/assets/logo-white-footer.svg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/recognitions", label: "Recognitions" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_auto_auto] md:gap-0">
          {/* Column A: Logo (enlarged) */}
          <div className="flex items-start">
            <img src={footerLogo} alt="K. Chen Construction Management" className="h-20 w-auto" />
          </div>

          {/* Column B: Spacer – hidden on mobile */}
          <div className="hidden md:block" aria-hidden="true" />

          {/* Column C: Navigation */}
          <div className="md:pr-16">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-footer-foreground/80 transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column D: Contact (corrected to client's real details) */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-footer-foreground/80">
              <li>Vancouver, BC</li>
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

      {/* Copyright */}
      <div className="border-t border-footer-foreground/10 section-padding py-5">
        <p className="text-xs text-footer-foreground/50">
          K. Chen Construction Management Inc. Copyright © 2026 All Rights Reserved.
          {" | "}
          <span className="text-[0.65rem]">
            Web Design by{" "}
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
