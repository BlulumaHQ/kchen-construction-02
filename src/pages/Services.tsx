import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Home, HardHat, ClipboardList, PenTool } from "lucide-react";
import heroImage from "@/assets/hero/07-t-go-tea.webp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useT, useLocalePath } from "@/i18n";

export default function Services() {
  const t = useT();
  const lp = useLocalePath();
  usePageMeta({ title: t("services.metaTitle"), description: t("services.metaDesc") });

  const ref = useScrollReveal<HTMLElement>();
  const typeRef = useScrollReveal<HTMLElement>();

  const services = [
    { icon: HardHat, key: "Construction Management", title: t("services.cm.title"), tagline: t("services.cm.tag"), desc: t("services.cm.desc") },
    { icon: PenTool, key: "Design-Build", title: t("services.db.title"), tagline: t("services.db.tag"), desc: t("services.db.desc") },
    { icon: ClipboardList, key: "Project Management", title: t("services.pm.title"), tagline: t("services.pm.tag"), desc: t("services.pm.desc") },
  ];

  const categories = [
    { icon: Home, title: t("services.res.title"), tagline: t("services.res.tag"), desc: t("services.res.desc") },
    { icon: Building2, title: t("services.com.title"), tagline: t("services.com.tag"), desc: t("services.com.desc") },
  ];

  return (
    <>
      <section className="page-hero">
        <img src={heroImage} alt={t("services.pageTitle")} className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay page-title-overlay" />
        <h1 className="page-hero-title">{t("services.pageTitle")}</h1>
      </section>

      <section ref={ref} className="section-padding section-major">
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up">{t("services.kicker")}</p>
          <h2 className="section-title mb-12 reveal-up">{t("services.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={`${lp("/projects")}?service=${encodeURIComponent(s.key)}`}
                className="group reveal-up block architectural-card transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="linear-icon">
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium leading-snug">{s.title}</h3>
                <p className="mt-1 text-sm font-medium italic text-primary">{s.tagline}</p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("projects.viewServiceProjects")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-[3px] motion-reduce:transform-none" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={typeRef}
        className="section-padding section-standard bg-secondary relative"
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up">{t("services.forKicker")}</p>
          <h2 className="section-title mb-12 reveal-up">{t("services.forTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((c, i) => (
              <div
                key={c.title}
                className="reveal-up architectural-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="linear-icon">
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-medium">{c.title}</h3>
                <p className="mt-1 text-sm font-medium italic text-primary">{c.tagline}</p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
