import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-home.jpg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";

export default function About() {
  usePageMeta({
    title: "About | K. Chen Construction Management",
    description: "Learn about Kevin Chen and the K. Chen Construction Management team — over 20 years of construction excellence in Greater Vancouver.",
  });

  const bioRef = useScrollReveal<HTMLElement>();
  const certRef = useScrollReveal<HTMLElement>();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={heroImage} alt="About K. Chen Construction" className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">About Us</h1>
      </section>

      {/* Bio */}
      <section ref={bioRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto">
          <p className="section-heading reveal-up">OUR STORY</p>
          <h2 className="section-title mb-6 reveal-up">Building with Integrity Since 2003</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed reveal-up">
            <p>
              Kevin is the President of K. Chen Construction Management Inc. With more than 20 years of
              experience in the construction industry, Kevin has managed a diverse portfolio of residential
              and commercial projects across the Greater Vancouver area.
            </p>
            <p>
              His hands-on approach, combined with deep technical knowledge and strong relationships with
              architects, engineers, and subtrades, ensures that every project is delivered on time, on budget,
              and to the highest standards of quality.
            </p>
            <p>
              K. Chen Construction Management Inc. was founded on the principle that great construction is
              about more than just building — it's about trust, transparency, and a genuine commitment to
              exceeding client expectations. From custom single-family homes to large-scale commercial
              developments, we bring the same level of care and professionalism to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certRef} className="section-padding py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-heading reveal-up">CERTIFICATIONS & MEMBERSHIPS</p>
          <h2 className="section-title mb-10 reveal-up">Industry Recognized</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center reveal-up">
            <img src={cert2510} alt="2-5-10 Year Warranty" className="mx-auto h-20 w-auto object-contain" />
            <img src={certNHW} alt="National Home Warranty" className="mx-auto h-20 w-auto object-contain" />
            <img src={certGVHBA} alt="Greater Vancouver Home Builders' Association Member" className="mx-auto h-20 w-auto object-contain" />
            <img src={certGeorgie} alt="Georgie Awards" className="mx-auto h-20 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
