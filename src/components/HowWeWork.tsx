import { MessageSquare, PenTool, FileCheck, HardHat, KeyRound } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useT } from "@/i18n";

export default function HowWeWork() {
  const ref = useScrollReveal<HTMLElement>();
  const t = useT();

  const steps = [
    { icon: MessageSquare, title: t("how.s1Title"), desc: t("how.s1Desc") },
    { icon: PenTool, title: t("how.s2Title"), desc: t("how.s2Desc") },
    { icon: FileCheck, title: t("how.s3Title"), desc: t("how.s3Desc") },
    { icon: HardHat, title: t("how.s4Title"), desc: t("how.s4Desc") },
    { icon: KeyRound, title: t("how.s5Title"), desc: t("how.s5Desc") },
  ];

  return (
    <section ref={ref} className="section-padding py-20 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-heading reveal-up">{t("how.kicker")}</p>
        <h2 className="section-title mb-4 reveal-up">{t("how.title")}</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-up flex flex-col items-center text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
