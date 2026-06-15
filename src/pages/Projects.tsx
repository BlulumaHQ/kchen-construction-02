import { useState, useMemo } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useProjects } from "@/data/projects";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/project-multifamily-1.jpg";

export default function Projects() {
  usePageMeta({
    title: "Projects | K. Chen Construction Management",
    description: "Explore our portfolio of residential and commercial construction projects across Greater Vancouver.",
  });

  const { projects, loading, error } = useProjects();
  const [category, setCategory] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Filter options are derived from the data — whatever categories/services
  // exist in the CMS show up here automatically.
  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category).filter(Boolean))).sort(),
    [projects],
  );
  const services = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.serviceTypes).filter(Boolean))).sort(),
    [projects],
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category && p.category !== category) return false;
      if (selectedServices.length > 0 && !selectedServices.some((s) => p.serviceTypes.includes(s))) return false;
      return true;
    });
  }, [projects, category, selectedServices]);

  const toggleService = (s: string) => {
    setSelectedServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  const clearFilters = () => {
    setCategory(null);
    setSelectedServices([]);
  };

  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={heroImage} alt="Our Projects" className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">Projects</h1>
      </section>

      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          <ProjectFilter
            categories={categories}
            services={services}
            selectedCategory={category}
            selectedServices={selectedServices}
            onCategoryChange={setCategory}
            onServiceToggle={toggleService}
            onClear={clearFilters}
            resultCount={filtered.length}
          />

          {loading && <p className="text-center text-muted-foreground py-12">Loading projects…</p>}

          {error && !loading && (
            <p className="text-center text-destructive py-12">Couldn’t load projects. Please try again later.</p>
          )}

          {!loading && !error && (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" key={`${category}-${selectedServices.join()}`}>
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No projects match the selected filters.</p>
          )}
        </div>
      </section>
    </>
  );
}
