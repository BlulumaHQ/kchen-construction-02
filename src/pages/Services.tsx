import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Home, HardHat, ClipboardList, PenTool } from "lucide-react";
import heroImage from "@/assets/project-commercial-1.jpg";

const services = [
  {
    icon: HardHat,
    title: "Construction Management",
    desc: "Full-service construction management from preconstruction through occupancy. We coordinate all trades, manage schedules and budgets, and ensure quality control at every stage.",
  },
  {
    icon: PenTool,
    title: "Design-Build",
    desc: "An integrated approach combining design and construction under one contract. This streamlined delivery method reduces costs, accelerates schedules, and simplifies communication.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Professional oversight of the full project lifecycle. We manage consultants, budgets, schedules, and stakeholder coordination to ensure your project is delivered on your terms.",
  },
];

export default function Services() {
  usePageMeta({
    title: "Services | K. Chen Construction Management",
    description: "Construction management, design-build, and project management services for residential and commercial projects across Greater Vancouver.",
  });

  const ref = useScrollReveal<HTMLElement>();
  const typeRef = useScrollReveal<HTMLElement>();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={heroImage} alt="Our Services" className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">Services</h1>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding py-20">
        <div className="max-w-5xl mx-auto">
          <p className="section-heading reveal-up">WHAT WE DO</p>
          <h2 className="section-title mb-12 reveal-up">Comprehensive Construction Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className="reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential / Commercial */}
      <section ref={typeRef} className="section-padding py-20 bg-secondary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="reveal-up">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Home className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Residential</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From custom single-family homes to multi-family townhome and condominium developments,
              we bring a detail-oriented approach to residential construction. Our team manages every
              aspect — from permits and scheduling to finishing touches — ensuring your home is built
              to the highest standard.
            </p>
          </div>
          <div className="reveal-up" style={{ transitionDelay: "100ms" }}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Commercial</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our commercial portfolio spans office buildings, retail spaces, medical facilities,
              and mixed-use developments. We understand the complexity of commercial construction and
              deliver projects that meet the rigorous demands of institutional and corporate clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
