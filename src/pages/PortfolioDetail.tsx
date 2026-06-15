import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, MapPin, Briefcase, Tag } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useProjects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { projects, loading, error } = useProjects();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  usePageMeta({
    title: project ? `${project.title} | K. Chen Construction Management` : "Project",
    description: project?.description?.slice(0, 155) || "",
  });

  const ref = useScrollReveal<HTMLElement>();

  if (loading) {
    return (
      <div className="section-padding py-20 text-center">
        <p className="text-muted-foreground">Loading project…</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="section-padding py-20 text-center">
        <h1 className="text-2xl font-semibold mb-4">
          {error ? "Couldn’t load this project" : "Project Not Found"}
        </h1>
        <Link to="/projects" className="text-primary hover:underline">Back to Projects</Link>
      </div>
    );
  }

  const allImages = [project.heroImage, ...project.galleryImages].filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={project.heroImage} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
      </section>

      <section ref={ref} className="section-padding py-16">
        <div className="max-w-5xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 reveal-up">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold mb-6 reveal-up">{project.title}</h1>

          {/* Info row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 reveal-up">
            {project.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{project.location}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{project.role}</span>
              </div>
            )}
            {project.category && (
              <div className="flex items-center gap-2 text-sm">
                <Tag className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{project.category}</span>
              </div>
            )}
          </div>

          {project.description && (
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-3xl reveal-up">{project.description}</p>
          )}

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-up">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="aspect-[4/3] overflow-hidden rounded cursor-pointer"
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox images={allImages} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
