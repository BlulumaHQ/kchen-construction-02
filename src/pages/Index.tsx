import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HowWeWork from "@/components/HowWeWork";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/data/projects";
import hero1 from "@/assets/hero/01-tian-jin-temple.webp";
import hero2 from "@/assets/hero/02-avery.webp";
import hero3 from "@/assets/hero/03-dunns.webp";
import hero4 from "@/assets/hero/04-sukis.webp";
import hero5 from "@/assets/hero/05-no2-rd.webp";
import hero6 from "@/assets/hero/06-residential-kitchen.webp";
import hero7 from "@/assets/hero/07-t-go-tea.webp";
import hero8 from "@/assets/hero/08-ballatree.webp";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import { Button } from "@/components/ui/button";
import { HERO_SLIDE_INTERVAL_MS, nextHeroSlide } from "@/lib/heroMotion";
import { toast } from "sonner";
import { useT, useLocalePath } from "@/i18n";

function HeroContactForm() {
  const t = useT();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("home.formThanks"));
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card/35 backdrop-blur-sm rounded p-6 md:p-8 ring-1 ring-primary-foreground/20 space-y-4 w-full max-w-md">
      <h3 className="text-lg font-semibold text-primary-foreground">{t("home.formTitle")}</h3>
      <input
        type="text"
        placeholder={t("home.formName")}
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full rounded border border-primary-foreground/30 bg-primary-foreground/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="email"
        placeholder={t("home.formEmail")}
        required
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className="w-full rounded border border-primary-foreground/30 bg-primary-foreground/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="tel"
        placeholder={t("home.formPhone")}
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full rounded border border-primary-foreground/30 bg-primary-foreground/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <textarea
        placeholder={t("home.formMsg")}
        rows={3}
        required
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className="w-full rounded border border-primary-foreground/30 bg-primary-foreground/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
      />
      <Button
        type="submit"
        disabled={submitting}
        className="w-full h-auto px-6 py-2.5"
      >
        {submitting ? t("home.formSubmitting") : t("home.formSubmit")}
      </Button>
    </form>
  );
}

const certs = [
  { src: cert2510, alt: "2-5-10 Year Warranty", className: "h-24 md:h-32" },
  { src: certNHW, alt: "National Home Warranty", className: "h-40 md:h-56" },
  { src: certGVHBA, alt: "Greater Vancouver Home Builders' Association Member", className: "h-24 md:h-32" },
  { src: certGeorgie, alt: "Georgie Awards", className: "h-28 md:h-36" },
];

export default function Index() {
  const t = useT();
  const lp = useLocalePath();
  usePageMeta({ title: t("home.metaTitle"), description: t("home.metaDesc") });

  const { projects, loading } = useProjects();

  const introRef = useScrollReveal<HTMLElement>();
  const certRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();
  const testimonialRef = useScrollReveal<HTMLElement>();
  const featuredRef = useScrollReveal<HTMLElement>();

  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];
  const [slideIdx, setSlideIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlideIdx((i) => nextHeroSlide(i, heroImages.length)), HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const featuredProjects = useMemo(() => {
    if (projects.length === 0) return [];
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [projects]);

  return (
    <>
      <section className="home-hero relative flex items-center overflow-hidden">
        {heroImages.map((img, i) => (
          <div key={img} className={`hero-slide absolute inset-0 ${i === slideIdx ? "hero-slide-active" : ""}`}>
            <img src={img} alt="K. Chen Construction project" className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="page-hero-overlay" />
        <div className="hero-header-shade absolute inset-x-0 top-0" />
        <div className="hero-content relative z-10 section-padding w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 max-w-6xl mx-auto">
            <div className="flex-1 max-w-xl">
              <h1 className="hero-heading text-primary-foreground">
                {t("home.heroTitle1")}<br />{t("home.heroTitle2")}
              </h1>
              <p className="mt-4 text-lg text-[hsl(var(--primary-foreground)/0.85)] max-w-xl">
                {t("home.heroSub")}
              </p>
              <Button asChild className="mt-8 h-auto px-6 py-3"><Link
                to={lp("/projects")}
              >
                {t("home.heroCta")} <ArrowRight className="h-4 w-4" />
              </Link></Button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="section-padding section-major">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-heading reveal-up">{t("home.introKicker")}</p>
          <h2 className="section-title reveal-up mb-6">{t("home.introTitle")}</h2>
          <p className="text-muted-foreground leading-relaxed reveal-up">{t("home.introBody")}</p>
        </div>
      </section>

      <section
        ref={certRef}
        className="section-padding section-related border-y border-border bg-secondary"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-heading reveal-up">{t("home.certsKicker")}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-10 items-center reveal-up">
            {certs.map((c) => (
              <img key={c.alt} src={c.src} alt={c.alt} className={`cert-logo mx-auto w-auto object-contain ${c.className}`} />
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />

      <section ref={featuredRef} className="section-padding section-major border-y border-border">
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up text-center">{t("home.featuredKicker")}</p>
          <h2 className="section-title reveal-up text-center mb-10">{t("home.featuredTitle")}</h2>

          {loading ? (
            <p className="text-center text-muted-foreground py-12">{t("projects.loading")}</p>
          ) : featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          ) : null}

          <div className="mt-10 text-center reveal-up">
            <Button asChild variant="outline" className="h-auto border-primary px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground"><Link
              to={lp("/projects")}
            >
              {t("home.featuredBtn")} <ArrowRight className="h-4 w-4" />
            </Link></Button>
          </div>
        </div>
      </section>

      <section ref={testimonialRef} className="section-padding section-standard">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto h-8 w-8 text-primary/30 mb-6 reveal-up" />
          <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground reveal-up">
            “{t("home.testimonial")}”
          </blockquote>
          <p className="mt-6 text-sm font-medium text-muted-foreground reveal-up">{t("home.testimonialBy")}</p>
        </div>
      </section>

      <section ref={ctaRef} className="section-padding section-standard bg-secondary">
        <div className="max-w-2xl mx-auto text-center reveal-up">
          <h2 className="section-title mb-4">{t("home.ctaTitle")}</h2>
          <p className="text-muted-foreground mb-8">{t("home.ctaBody")}</p>
          <Button asChild className="h-auto px-6 py-3"><Link
            to={lp("/contact")}
          >
            {t("home.ctaBtn")} <ArrowRight className="h-4 w-4" />
          </Link></Button>
        </div>
      </section>
    </>
  );
}
