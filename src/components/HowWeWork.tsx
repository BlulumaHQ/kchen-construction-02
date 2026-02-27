import { MessageSquare, PenTool, FileCheck, HardHat, KeyRound } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We listen to your vision and assess the project scope." },
  { icon: PenTool, title: "Design & Budgeting", desc: "Detailed plans and transparent budgets tailored to you." },
  { icon: FileCheck, title: "Permitting & Planning", desc: "We handle all permits and regulatory requirements." },
  { icon: HardHat, title: "Construction & Supervision", desc: "Hands-on management ensuring quality and schedule." },
  { icon: KeyRound, title: "Handover & Warranty", desc: "Smooth handover with comprehensive warranty coverage." },
];

export default function HowWeWork() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="section-padding py-20 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-heading reveal-up">HOW WE WORK</p>
        <h2 className="section-title mb-4 reveal-up">
          Let's Talk About Your New Project, We Can Do It!
        </h2>
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
