import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Shield, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero/dunns-famous-bc_01.webp.asset.json";
import blueprintBg from "@/assets/backgrounds/kchen-background.webp.asset.json";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import { useT } from "@/i18n";

export default function Recognitions() {
  const t = useT();
  usePageMeta({ title: t("recog.metaTitle"), description: t("recog.metaDesc") });

  const ref = useScrollReveal<HTMLElement>();
  const logoRef = useScrollReveal<HTMLElement>();

  const highlights = [
    { icon: Award, title: t("recog.g.title"), desc: t("recog.g.desc") },
    { icon: Shield, title: t("recog.w.title"), desc: t("recog.w.desc") },
    { icon: Users, title: t("recog.a.title"), desc: t("recog.a.desc") },
    { icon: Star, title: t("recog.n.title"), desc: t("recog.n.desc") },
  ];

  return (
    <>
      <section className="page-hero">
        <img src={heroImage.url} alt={t("recog.pageTitle")} className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">{t("recog.pageTitle")}</h1>
      </section>

      <section ref={ref} className="section-padding py-20">
        <div className="max-w-5xl mx-auto">
          <p className="section-heading reveal-up">{t("recog.kicker")}</p>
          <h2 className="section-title mb-12 reveal-up">{t("recog.title")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <div key={h.title} className="reveal-up flex gap-4" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={logoRef}
        className="section-padding py-20 bg-secondary"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.78), hsl(0 0% 100% / 0.78)), url(${blueprintBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center reveal-up">
            <img src={cert2510} alt="2-5-10 Year Warranty" className="mx-auto h-28 md:h-36 w-auto object-contain" />
            <img src={certNHW} alt="National Home Warranty" className="mx-auto h-28 md:h-36 w-auto object-contain" />
            <img src={certGVHBA} alt="GVHBA Member" className="mx-auto h-28 md:h-36 w-auto object-contain" />
            <img src={certGeorgie} alt="Georgie Awards" className="mx-auto h-28 md:h-36 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
