import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HowWeWork from "@/components/HowWeWork";
import hero1 from "@/assets/hero/angus-dr_01.webp";
import hero2 from "@/assets/hero/avery_03.webp";
import hero3 from "@/assets/hero/ballatree-rd_feature.webp";
import hero4 from "@/assets/hero/dunns-famous-bc_01.webp";
import hero5 from "@/assets/hero/granville_feature.webp";
import hero6 from "@/assets/hero/kuan-ti-temple_02.webp";
import hero7 from "@/assets/hero/madsen_03.webp";
import hero8 from "@/assets/hero/no2-rd_03.webp";
import hero9 from "@/assets/hero/sukis-salon_06.webp";
import hero10 from "@/assets/hero/t-go-tea_06.webp";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import blueprintBg from "@/assets/backgrounds/kchen-background.webp";
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
    <form onSubmit={handleSubmit} className="bg-card/35 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-xl ring-1 ring-white/20 space-y-4 w-full max-w-md">
      <h3 className="text-lg font-semibold text-white drop-shadow">{t("home.formTitle")}</h3>
      <input
        type="text"
        placeholder={t("home.formName")}
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="email"
        placeholder={t("home.formEmail")}
        required
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="tel"
        placeholder={t("home.formPhone")}
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <textarea
        placeholder={t("home.formMsg")}
        rows={3}
        required
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? t("home.formSubmitting") : t("home.formSubmit")}
      </button>
    </form>
  );
}

const certs = [
  { src: cert2510, alt: "2-5-10 Year Warranty" },
  { src: certNHW, alt: "National Home Warranty" },
  { src: certGVHBA, alt: "Greater Vancouver Home Builders' Association Member" },
  { src: certGeorgie, alt: "Georgie Awards" },
];

export default function Index() {
  const t = useT();
  const lp = useLocalePath();
  usePageMeta({ title: t("home.metaTitle"), description: t("home.metaDesc") });

  const introRef = useScrollReveal<HTMLElement>();
  const certRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();
  const testimonialRef = useScrollReveal<HTMLElement>();

  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10];
  const [slideIdx, setSlideIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlideIdx((i) => (i + 1) % heroImages.length), 3000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <>
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="K. Chen Construction project"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slideIdx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="page-hero-overlay" />
        <div className="relative z-10 section-padding w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 max-w-6xl mx-auto pt-8 md:pt-0">
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[hsl(var(--primary-foreground))] leading-tight">
                {t("home.heroTitle1")}<br />{t("home.heroTitle2")}
              </h1>
              <p className="mt-4 text-lg text-[hsl(var(--primary-foreground)/0.85)] max-w-xl">
                {t("home.heroSub")}
              </p>
              <Link
                to={lp("/projects")}
                className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("home.heroCta")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <section ref={introRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-heading reveal-up">{t("home.introKicker")}</p>
          <h2 className="section-title reveal-up mb-6">{t("home.introTitle")}</h2>
          <p className="text-muted-foreground leading-relaxed reveal-up">{t("home.introBody")}</p>
        </div>
      </section>

      <section
        ref={certRef}
        className="section-padding py-16 border-y border-border"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.78), hsl(0 0% 100% / 0.78)), url(${blueprintBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-heading reveal-up">{t("home.certsKicker")}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-10 items-center reveal-up">
            {certs.map((c) => (
              <img key={c.alt} src={c.src} alt={c.alt} className="mx-auto h-24 w-auto object-contain md:h-32" />
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />

      <section ref={testimonialRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto h-8 w-8 text-primary/30 mb-6 reveal-up" />
          <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground reveal-up">
            “{t("home.testimonial")}”
          </blockquote>
          <p className="mt-6 text-sm font-medium text-muted-foreground reveal-up">{t("home.testimonialBy")}</p>
        </div>
      </section>

      <section ref={ctaRef} className="section-padding py-20 bg-secondary">
        <div className="max-w-2xl mx-auto text-center reveal-up">
          <h2 className="section-title mb-4">{t("home.ctaTitle")}</h2>
          <p className="text-muted-foreground mb-8">{t("home.ctaBody")}</p>
          <Link
            to={lp("/contact")}
            className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("home.ctaBtn")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
