import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group reveal-up project-card"
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <div className="project-photo relative aspect-[4/3] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="project-caption">
        <h3 className="text-sm font-medium">{project.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{project.category}</p>
      </div>
    </Link>
  );
}
