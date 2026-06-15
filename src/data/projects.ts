import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// Categories/services are free text coming from the CMS now, so these are
// just string aliases — kept so existing components compile unchanged.
export type ProjectCategory = string;
export type ServiceType = string;

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  serviceTypes: ServiceType[];
  role: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
}

// Filter buttons shown on the Projects page. These are the values the CMS
// data uses for KChen; the filter simply hides any with no matching projects.
export const projectCategories: ProjectCategory[] = [
  "Commercial",
  "Residential (multi-family)",
  "Residential (single family)",
];

export const serviceTypes: ServiceType[] = [
  "Construction Management",
  "Design-Build",
  "Project Management",
];

// The client whose portfolio this site displays (matches the CMS client slug).
const CLIENT_SLUG = "kchen-construction";

function mapToProjects(items: any[]): Project[] {
  return (items ?? []).map((it) => {
    const details = Array.isArray(it.portfolio_details)
      ? it.portfolio_details[0]
      : it.portfolio_details;
    const media = ((it.media_assets ?? []) as any[]).slice();
    media.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
    const hero = media.find((m) => m.is_featured) ?? media[0];
    const gallery = media.filter((m) => m !== hero);
    const cats = (it.content_categories ?? [])
      .map((c: any) => c?.categories?.name)
      .filter(Boolean);
    return {
      slug: it.slug,
      title: it.title,
      location: details?.location ?? "",
      category: cats[0] ?? "",
      serviceTypes: (details?.services ?? []) as string[],
      role: details?.role ?? "",
      description: it.excerpt ?? details?.short_summary ?? "",
      heroImage: hero?.file_url ?? it.featured_image_url ?? "",
      galleryImages: gallery.map((m) => m.file_url),
    };
  });
}

async function fetchProjects(): Promise<Project[]> {
  const { data: client, error: cErr } = await supabase
    .from("clients")
    .select("id")
    .eq("slug", CLIENT_SLUG)
    .single();
  if (cErr || !client) throw cErr ?? new Error("Client not found");

  const { data, error } = await supabase
    .from("content_items")
    .select(
      `
      id, title, slug, excerpt, featured_image_url, sort_order,
      portfolio_details ( live_url, services, short_summary, location, role ),
      media_assets ( file_url, is_featured, sort_order ),
      content_categories ( categories ( name ) )
    `,
    )
    .eq("client_id", client.id)
    .eq("content_type", "portfolio")
    .eq("status", "published")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return mapToProjects(data ?? []);
}

// Module-level cache so navigating between the list and a detail page
// doesn't refetch.
let cache: Promise<Project[]> | null = null;
export function getProjects(): Promise<Project[]> {
  if (!cache) {
    cache = fetchProjects().catch((e) => {
      cache = null; // allow retry on next mount
      throw e;
    });
  }
  return cache;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    getProjects()
      .then((p) => alive && setProjects(p))
      .catch((e) => alive && setError(e?.message ?? "Failed to load projects"));
    return () => {
      alive = false;
    };
  }, []);

  return { projects: projects ?? [], loading: projects === null && !error, error };
}
