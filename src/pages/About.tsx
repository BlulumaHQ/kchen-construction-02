import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-home.jpg";
import logo from "@/assets/logo-full-color.svg";
import certNHW from "@/assets/cert-national-home-warranty.png";
import certGVHBA from "@/assets/cert-gvhba-member.png";
import certGeorgie from "@/assets/cert-georgie-awards.png";
import cert2510 from "@/assets/cert-2-5-10-warranty.png";

export default function About() {
  usePageMeta({
    title: "About | K. Chen Construction Management",
    description: "K. Chen Construction Management — your one-stop trusted advisor for residential and commercial construction in Greater Vancouver.",
  });

  const bioRef = useScrollReveal<HTMLElement>();
  const kevinRef = useScrollReveal<HTMLElement>();
  const certRef = useScrollReveal<HTMLElement>();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={heroImage} alt="About K. Chen Construction" className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">About Us</h1>
      </section>

      {/* Company story + enlarged logo */}
      <section ref={bioRef} className="section-padding py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Enlarged logo */}
          <img
            src={logo}
            alt="K. Chen Construction Management"
            className="mx-auto mb-10 h-24 w-auto md:h-32 reveal-up"
          />
          <p className="section-heading reveal-up">OUR STORY</p>
          <h2 className="section-title mb-6 reveal-up">Your One-Stop Trusted Advisor</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed reveal-up text-left">
            <p>
              K. Chen Construction Management is a full-service construction management company in Vancouver, BC,
              specializing in residential and commercial projects — fulfilling the visions of property owners,
              business owners, developers, and property managers. We help our clients build their dream homes and
              realize their investment goals while bridging communication barriers.
            </p>
            <p>
              We provide a streamlined range of services that brings efficiency to our clients by removing the hassle
              of coordinating multiple contractors. From the preliminary stage of evaluating a project's profitability
              and feasibility, to design and construction, to managing budget and schedule, we give our clients a
              genuine sense of security and comfort throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Kevin Chen */}
      <section ref={kevinRef} className="section-padding py-16 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <p className="section-heading reveal-up">OUR PEOPLE</p>
          <h2 className="section-title mb-1 reveal-up">Kevin Chen</h2>
          <p className="mb-6 text-sm font-medium text-primary reveal-up">P. Eng., GSC</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed reveal-up">
            <p>
              Kevin is the President of K. Chen Construction Management, and co-founder and partner of Formation
              Project Management Inc. With over 15 years of career expertise in the construction industry, Kevin works
              directly with clients and manages all trade partners at every stage of a project.
            </p>
            <p>
              Prior to starting K. Chen Construction Management, Kevin was a Project Manager at a larger Canadian-based
              international construction firm. He has served on construction projects of various scales, managed budgets
              ranging from $250K to over $80 million, and worked on projects from Victoria and Whistler to every corner
              of the Lower Mainland. Notable projects include the River Rock Casino Resort South Parkade in Richmond,
              the Horseshoe Bay BC Ferries terminal and parkade, and various BMO branches across Greater Vancouver.
            </p>
            <p>
              Kevin is a registered Professional Engineer and holds the Gold Seal Certification from the Canadian
              Construction Association.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certRef} className="section-padding py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-heading reveal-up">CERTIFICATIONS & MEMBERSHIPS</p>
          <h2 className="section-title mb-10 reveal-up">Industry Recognized</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center reveal-up">
            <img src={cert2510} alt="2-5-10 Year Warranty" className="mx-auto h-24 w-auto object-contain" />
            <img src={certNHW} alt="National Home Warranty" className="mx-auto h-24 w-auto object-contain" />
            <img src={certGVHBA} alt="Greater Vancouver Home Builders' Association Member" className="mx-auto h-24 w-auto object-contain" />
            <img src={certGeorgie} alt="Georgie Awards" className="mx-auto h-24 w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
