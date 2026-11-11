import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero/01-tian-jin-temple.webp";
import kevinPhoto from "@/assets/people/kevin-chen.webp";
import logo from "@/assets/logo-full-color.svg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function About() {
  const t = useT();
  usePageMeta({ title: t("about.metaTitle"), description: t("about.metaDesc") });

  const bioRef = useScrollReveal<HTMLElement>();
  const kevinRef = useScrollReveal<HTMLElement>();
  const certRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <section className="page-hero">
        <img src={heroImage} alt={t("about.pageTitle")} className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay page-title-overlay" />
        <h1 className="page-hero-title">{t("about.pageTitle")}</h1>
      </section>

      <section ref={bioRef} className="section-padding section-major">
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
        className="section-padding section-related bg-secondary"
      >
        <div className="max-w-3xl mx-auto text-center reveal-up">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="group h-auto gap-4 py-3 pl-3 pr-6">
                <img src={kevinPhoto} alt="" className="h-14 w-14 rounded-sm object-cover" />
                <span className="text-left">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-primary">{t("projects.founderBtn")}</span>
                  <span className="block text-base font-semibold">{t("about.kevinName")}</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent aria-describedby={undefined} className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-10">
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-start">
          <img
            src={kevinPhoto}
            alt={t("about.kevinName")}
            className="w-40 md:w-56 aspect-square object-cover rounded-sm mx-auto md:mx-0"
          />
          <div>
            <DialogTitle className="section-title mb-1">{t("about.kevinName")}</DialogTitle>
            <p className="mb-6 text-sm font-medium text-primary">{t("about.kevinTitle")}</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.kevinP1")}</p>
              <p>{t("about.kevinP2")}</p>
              <p>{t("about.kevinP3")}</p>
            </div>
          </div>
        </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section ref={certRef} className="section-padding section-related">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-heading reveal-up">{t("about.certsKicker")}</p>
          <h2 className="section-title mb-10 reveal-up">{t("about.certsTitle")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center reveal-up">
            <img src={cert2510} alt="2-5-10 Year Warranty" className="mx-auto h-28 md:h-36 w-auto object-contain cert-logo" />
            <img src={certNHW} alt="National Home Warranty" className="mx-auto h-28 md:h-36 w-auto object-contain cert-logo" />
            <img src={certGVHBA} alt="Greater Vancouver Home Builders' Association Member" className="mx-auto h-28 md:h-36 w-auto object-contain cert-logo" />
            <img src={certGeorgie} alt="Georgie Awards" className="mx-auto h-28 md:h-36 w-auto object-contain cert-logo" />
          </div>
        </div>
      </section>
    </>
  );
}
