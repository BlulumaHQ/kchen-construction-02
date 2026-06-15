import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero/kuan-ti-temple_02.webp.asset.json";
import blueprintBg from "@/assets/backgrounds/kchen-background.webp.asset.json";
import kevinPhoto from "@/assets/people/kevin-chen.webp.asset.json";
import logo from "@/assets/logo-full-color.svg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import { useT } from "@/i18n";

export default function About() {
  const t = useT();
  usePageMeta({ title: t("about.metaTitle"), description: t("about.metaDesc") });

  const bioRef = useScrollReveal<HTMLElement>();
  const kevinRef = useScrollReveal<HTMLElement>();
  const certRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <section className="page-hero">
        <img src={heroImage.url} alt={t("about.pageTitle")} className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">{t("about.pageTitle")}</h1>
      </section>

      <section ref={bioRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={logo}
            alt="K. Chen Construction Management"
            className="mx-auto mb-10 h-24 w-auto md:h-32 reveal-up"
          />
          <p className="section-heading reveal-up">{t("about.storyKicker")}</p>
          <h2 className="section-title mb-6 reveal-up">{t("about.storyTitle")}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed reveal-up text-left">
            <p>{t("about.storyP1")}</p>
            <p>{t("about.storyP2")}</p>
          </div>
        </div>
      </section>

      <section
        ref={kevinRef}
        className="section-padding py-20 bg-secondary"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.78), hsl(0 0% 100% / 0.78)), url(${blueprintBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
          <div className="reveal-up flex-shrink-0 mx-auto md:mx-0">
            <img
              src={kevinPhoto.url}
              alt={t("about.kevinName")}
              className="w-56 md:w-64 aspect-square object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="section-heading reveal-up">{t("about.peopleKicker")}</p>
            <h2 className="section-title mb-1 reveal-up">{t("about.kevinName")}</h2>
            <p className="mb-6 text-sm font-medium text-primary reveal-up">{t("about.kevinTitle")}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed reveal-up">
              <p>{t("about.kevinP1")}</p>
              <p>{t("about.kevinP2")}</p>
              <p>{t("about.kevinP3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={certRef} className="section-padding py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-heading reveal-up">{t("about.certsKicker")}</p>
          <h2 className="section-title mb-10 reveal-up">{t("about.certsTitle")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center reveal-up">
            <img src={cert2510} alt="2-5-10 Year Warranty" className="mx-auto h-28 md:h-36 w-auto object-contain" />
            <img src={certNHW} alt="National Home Warranty" className="mx-auto h-28 md:h-36 w-auto object-contain" />
            <img src={certGVHBA} alt="Greater Vancouver Home Builders' Association Member" className="mx-auto h-28 md:h-36 w-auto object-contain" />
            <img src={certGeorgie} alt="Georgie Awards" className="mx-auto h-28 md:h-36 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
