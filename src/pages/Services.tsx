import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Home, HardHat, ClipboardList, PenTool } from "lucide-react";
import heroImage from "@/assets/hero/t-go-tea_06.webp.asset.json";
import blueprintBg from "@/assets/backgrounds/kchen-background.webp.asset.json";

const services = [
  {
    icon: HardHat,
    title: "Construction Management",
    tagline: "We take care of everything",
    desc: "KChen delivers high-quality construction on budget, on time, and to our clients' satisfaction. From pre-construction planning — budgeting, scheduling, and identifying challenges and solutions — through a transparent bidding process, cost control, and on-site supervision, we ensure quality standards right through to completion.",
  },
  {
    icon: PenTool,
    title: "Design-Build",
    tagline: "Transforming dreams into reality",
    desc: "Our designers from North America, Europe, and Asia bring diverse cultural backgrounds to every project — from single-family homes to multi-family residences to commercial spaces. The integrated design-build process keeps design and construction coordinated, so projects run smoothly without the usual miscommunication between teams.",
  },
  {
    icon: ClipboardList,
    title: "Project Management / Owner's Representative",
    tagline: "We have your best interest in mind",
    desc: "With deep local knowledge, expertise, and a wide industry network, we help clients maximize their investment potential and assess project feasibility — including years of experience working with government bodies and local authorities. As your Owner's Representative, we protect your interests and provide strategy throughout development and construction.",
  },
];

const categories = [
  {
    icon: Home,
    title: "Residential",
    tagline: "Your home is our home",
    desc: "We don't just build houses — we build lasting relationships. From custom single-family homes to multi-family townhomes and condominiums, we build each home as if it were our own, helping clients create the sanctuary where lasting memories are made.",
  },
  {
    icon: Building2,
    title: "Commercial",
    tagline: "Your business's problem solver",
    desc: "We're in the business of supporting your success. Our team brings concrete, hands-on experience across offices, financial institutions, healthcare, restaurants, and religious buildings — turning your vision into reality, whatever the challenge.",
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
        <img src={heroImage.url} alt="Our Services" className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">Services</h1>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding py-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up">WHAT WE DO</p>
          <h2 className="section-title mb-12 reveal-up">Comprehensive Construction Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal-up rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-1 text-sm font-medium italic text-primary">{s.tagline}</p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential / Commercial */}
      <section
        ref={typeRef}
        className="section-padding py-20 bg-secondary relative"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.78), hsl(0 0% 100% / 0.78)), url(${blueprintBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="section-heading reveal-up">WHO WE BUILD FOR</p>
          <h2 className="section-title mb-12 reveal-up">Residential &amp; Commercial</h2>
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
