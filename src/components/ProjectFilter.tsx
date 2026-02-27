import { projectCategories, serviceTypes, type ProjectCategory, type ServiceType } from "@/data/projects";

interface Props {
  selectedCategory: ProjectCategory | null;
  selectedServices: ServiceType[];
  onCategoryChange: (c: ProjectCategory | null) => void;
  onServiceToggle: (s: ServiceType) => void;
  onClear: () => void;
  resultCount: number;
}

export default function ProjectFilter({
  selectedCategory,
  selectedServices,
  onCategoryChange,
  onServiceToggle,
  onClear,
  resultCount,
}: Props) {
  const hasFilters = selectedCategory !== null || selectedServices.length > 0;

  return (
    <div className="mb-10 space-y-4">
      {/* Project Type */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Type</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => onCategoryChange(selectedCategory === c ? null : c)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                selectedCategory === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Type</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {serviceTypes.map((s) => (
            <button
              key={s}
              onClick={() => onServiceToggle(s)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                selectedServices.includes(s)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Counter & Clear */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-muted-foreground">
          {resultCount} project{resultCount !== 1 ? "s" : ""}
        </span>
        {hasFilters && (
          <button onClick={onClear} className="text-xs font-medium text-primary hover:underline">
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}
