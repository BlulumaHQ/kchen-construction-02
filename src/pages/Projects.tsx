import { useState, useMemo } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useProjects } from "@/data/projects";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/hero/granville_feature.webp.asset.json";
import { useT } from "@/i18n";

export default function Projects() {
  const t = useT();
  usePageMeta({ title: t("projects.metaTitle"), description: t("projects.metaDesc") });

  const { projects, loading, error } = useProjects();
  const [category, setCategory] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
      <section className="page-hero">
        <img src={heroImage.url} alt={t("projects.pageTitle")} className="absolute inset-0 h-full w-full object-cover" />
        <div className="page-hero-overlay" />
        <h1 className="page-hero-title">{t("projects.pageTitle")}</h1>
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

          {loading && <p className="text-center text-muted-foreground py-12">{t("projects.loading")}</p>}

          {error && !loading && (
            <p className="text-center text-destructive py-12">{t("projects.error")}</p>
          )}

          {!loading && !error && (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" key={`${category}-${selectedServices.join()}`}>
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t("projects.none")}</p>
          )}
        </div>
      </section>
    </>
  );
}
