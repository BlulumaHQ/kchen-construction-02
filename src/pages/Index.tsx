import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HowWeWork from "@/components/HowWeWork";
import hero1 from "@/assets/hero/angus-dr_01.webp.asset.json";
import hero2 from "@/assets/hero/avery_03.webp.asset.json";
import hero3 from "@/assets/hero/ballatree-rd_feature.webp.asset.json";
import hero4 from "@/assets/hero/dunns-famous-bc_01.webp.asset.json";
import hero5 from "@/assets/hero/granville_feature.webp.asset.json";
import hero6 from "@/assets/hero/kuan-ti-temple_02.webp.asset.json";
import hero7 from "@/assets/hero/madsen_03.webp.asset.json";
import hero8 from "@/assets/hero/no2-rd_03.webp.asset.json";
import hero9 from "@/assets/hero/sukis-salon_06.webp.asset.json";
import hero10 from "@/assets/hero/t-go-tea_06.webp.asset.json";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import blueprintBg from "@/assets/backgrounds/blueprint-street.webp.asset.json";
import { toast } from "sonner";

function HeroContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card/55 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-xl ring-1 ring-white/20 space-y-4 w-full max-w-md">
      <h3 className="text-lg font-semibold text-white drop-shadow">Get a Free Consultation</h3>
      <input
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/70 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/70 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/70 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <textarea
        placeholder="Tell us about your project..."
        rows={3}
        required
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className="w-full rounded border border-white/30 bg-white/70 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Message"}
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
  usePageMeta({
    title: "K. Chen Construction Management | Vancouver",
    description: "K. Chen Construction Management provides integrated design, project, and construction management services across Greater Vancouver.",
  });

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
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={img.url}
            src={img.url}
            alt="K. Chen Construction project"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slideIdx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="page-hero-overlay" />
        <div className="relative z-10 section-padding w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 max-w-6xl mx-auto">
            {/* Left – Text */}
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[hsl(var(--primary-foreground))] leading-tight">
                Building Excellence<br />Across Vancouver
              </h1>
              <p className="mt-4 text-lg text-[hsl(var(--primary-foreground)/0.85)] max-w-xl">
                Integrated design, project, and construction management services for discerning clients.
              </p>
              <Link
                to="/projects"
                className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Right – Contact Form */}
            <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-heading reveal-up">WHO WE ARE</p>
          <h2 className="section-title reveal-up mb-6">
            We provide integrated design, project, and construction management services across Greater Vancouver.
          </h2>
          <p className="text-muted-foreground leading-relaxed reveal-up">
            K. Chen Construction Management is a full-service construction management firm based in Vancouver, British Columbia.
            With over two decades of experience in residential, commercial, and institutional projects, we bring a meticulous
            approach to every build — from initial consultation through final handover.
          </p>
        </div>
      </section>

      {/* Certifications — trust band over blueprint backdrop */}
      <section
        ref={certRef}
        className="section-padding py-16 border-y border-border"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary)/0.9), hsl(var(--secondary)/0.9)), url(${blueprintBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="section-heading reveal-up">CERTIFICATIONS & MEMBERSHIPS</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-10 items-center reveal-up">
            {certs.map((c) => (
              <img key={c.alt} src={c.src} alt={c.alt} className="mx-auto h-24 w-auto object-contain md:h-32" />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Testimonial */}
      <section ref={testimonialRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto h-8 w-8 text-primary/30 mb-6 reveal-up" />
          <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground reveal-up">
            "Kevin and his team delivered our home with exceptional attention to detail and professionalism.
            The process was transparent, on time, and the result exceeded our expectations."
          </blockquote>
          <p className="mt-6 text-sm font-medium text-muted-foreground reveal-up">— Homeowner, Shaughnessy</p>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-padding py-20 bg-secondary">
        <div className="max-w-2xl mx-auto text-center reveal-up">
          <h2 className="section-title mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your vision. We'd love to hear about your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
