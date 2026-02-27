import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group reveal-up block overflow-hidden rounded bg-background shadow-sm transition-shadow hover:shadow-md"
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold">{project.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{project.category}</p>
      </div>
    </Link>
  );
}
