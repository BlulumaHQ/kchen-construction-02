import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HowWeWork from "@/components/HowWeWork";
import heroImage from "@/assets/hero-home.jpg";

export default function Index() {
  usePageMeta({
    title: "K. Chen Construction Management | Vancouver",
    description: "K. Chen Construction Management provides integrated design, project, and construction management services across Greater Vancouver.",
  });

  const introRef = useScrollReveal<HTMLElement>();
  const ctaRef = useScrollReveal<HTMLElement>();
  const testimonialRef = useScrollReveal<HTMLElement>();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <img src={heroImage} alt="Modern construction project in Vancouver" className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <div className="relative z-10 section-padding max-w-3xl">
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
