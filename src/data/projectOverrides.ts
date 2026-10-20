// Site-side project classification, layered on top of the CMS data.
// Edit these lists to change categories / Commercial subcategories.
// Keys are project slugs (the last part of /portfolio/<slug>).

export const MULTI_FAMILY = "Residential Multi-Family";
export const COMMERCIAL = "Commercial";

// TEMPORARY: client-confirmed corrections not yet made in the CMS.
// Remove each entry once the CMS record is updated (see AGENTS.md).
export const categoryOverrides: Record<string, string> = {
  "modern-city-boutique": MULTI_FAMILY,
  "the-otto": MULTI_FAMILY,
};

// Commercial subcategories, in dropdown order.
export const commercialSubcategories = [
  "Institutional",
  "Food & Beverage",
  "Medical",
  "Office",
  "Lifestyle",
] as const;
export type CommercialSubcategory = (typeof commercialSubcategories)[number];

// Commercial subcategory assignments. The CMS has no subcategory field yet,
// and no assignments have been confirmed by the client, so this is empty.
// Only add slugs here once confirmed, e.g. "ridge-dental-clinic": "Medical".
export const subcategoryBySlug: Record<string, CommercialSubcategory> = {};
