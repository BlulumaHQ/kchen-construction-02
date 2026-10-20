import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Home, HardHat, ClipboardList, PenTool } from "lucide-react";
import heroImage from "@/assets/hero/t-go-tea_06.webp";
import blueprintBg from "@/assets/backgrounds/kchen-background.webp";
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
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">{t("services.pageTitle")}</h1>
      </section>

      <section ref={ref} className="section-padding py-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up">{t("services.kicker")}</p>
          <h2 className="section-title mb-12 reveal-up">{t("services.title")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={`${lp("/projects")}?service=${encodeURIComponent(s.key)}`}
                className="group reveal-up block rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1 text-sm font-medium italic text-primary">{s.tagline}</p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("projects.viewServiceProjects")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={typeRef}
        className="section-padding py-20 bg-secondary relative"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.78), hsl(0 0% 100% / 0.78)), url(${blueprintBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up">{t("services.forKicker")}</p>
          <h2 className="section-title mb-12 reveal-up">{t("services.forTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((c, i) => (
              <div
                key={c.title}
                className="reveal-up rounded-xl border-l-4 border-primary bg-card p-8 shadow-sm"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold">{c.title}</h3>
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
