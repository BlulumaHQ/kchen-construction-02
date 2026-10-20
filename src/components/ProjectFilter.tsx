import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useT } from "@/i18n";
import { COMMERCIAL, commercialSubcategories } from "@/data/projectOverrides";

interface Props {
  categories: string[];
  services: string[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  selectedServices: string[];
  onCategoryChange: (c: string | null) => void;
  onSubcategoryChange: (s: string | null) => void;
  onServiceToggle: (s: string) => void;
  onClear: () => void;
  resultCount: number;
}

const pill = (active: boolean) =>
  `rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-background text-foreground hover:border-primary"
  }`;

export default function ProjectFilter({
  categories,
  services,
  selectedCategory,
  selectedSubcategory,
  selectedServices,
  onCategoryChange,
  onSubcategoryChange,
  onServiceToggle,
  onClear,
  resultCount,
}: Props) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const hasFilters = selectedCategory !== null || selectedServices.length > 0;
  const countLabel =
    resultCount === 1
      ? t("projects.countOne")
      : t("projects.countMany").replace("{n}", String(resultCount));

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | TouchEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <div className="mb-10 space-y-4">
      {categories.length > 0 && (
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("projects.projectType")}
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) =>
              c === COMMERCIAL ? (
                <div
                  key={c}
                  ref={ddRef}
                  className="relative"
                  onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setOpen(true)}
                  onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setOpen(false)}
                >
                  <div className={`${pill(selectedCategory === c)} flex items-center gap-1 p-0`}>
                    <button
                      className="py-1 pl-3"
                      onClick={() => {
                        onCategoryChange(selectedCategory === c && !selectedSubcategory ? null : c);
                        onSubcategoryChange(null);
                      }}
                    >
                      {c}
                      {selectedSubcategory ? ` · ${selectedSubcategory}` : ""}
                    </button>
                    <button
                      className="py-1 pr-2"
                      aria-label={t("projects.subcategories")}
                      aria-expanded={open}
                      onClick={() => setOpen((o) => (window.matchMedia("(hover: hover)").matches ? true : !o))}
                    >
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <div
                    className={`absolute left-0 top-full z-20 pt-2 transition-all duration-200 ${
                      open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="min-w-[12rem] overflow-hidden rounded-md border border-border bg-popover py-1 shadow-md">
                      <li>
                        <button
                          className={`block w-full px-4 py-2.5 text-left text-sm hover:bg-secondary ${
                            selectedCategory === c && !selectedSubcategory ? "text-primary font-medium" : ""
                          }`}
                          onClick={() => {
                            onCategoryChange(c);
                            onSubcategoryChange(null);
                            setOpen(false);
                          }}
                        >
                          {t("projects.allCommercial")}
                        </button>
                      </li>
                      {commercialSubcategories.map((s) => (
                        <li key={s}>
                          <button
                            className={`block w-full px-4 py-2.5 text-left text-sm hover:bg-secondary ${
                              selectedSubcategory === s ? "text-primary font-medium" : ""
                            }`}
                            onClick={() => {
                              onCategoryChange(c);
                              onSubcategoryChange(s);
                              setOpen(false);
                            }}
                          >
                            {s}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  key={c}
                  onClick={() => {
                    onCategoryChange(selectedCategory === c ? null : c);
                    onSubcategoryChange(null);
                  }}
                  className={pill(selectedCategory === c)}
                >
                  {c}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {services.length > 0 && (
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("projects.serviceType")}
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {services.map((s) => (
              <button key={s} onClick={() => onServiceToggle(s)} className={pill(selectedServices.includes(s))}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <span className="text-sm text-muted-foreground">{countLabel}</span>
        {hasFilters && (
          <button onClick={onClear} className="text-xs font-medium text-primary hover:underline">
            {t("projects.viewAll")}
          </button>
        )}
      </div>
    </div>
  );
}
