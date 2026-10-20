// Site-side project classification, layered on top of the CMS data.
// Edit these lists to change categories / Commercial subcategories.
// Keys are project slugs (the last part of /portfolio/<slug>).

export const MULTI_FAMILY = "Residential Multi-Family";
export const COMMERCIAL = "Commercial";

// Primary category corrections (replaces the CMS category).
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

// Which Commercial projects belong to which subcategory.
// Projects not listed still appear under "Commercial" (all).
export const subcategoryBySlug: Record<string, CommercialSubcategory> = {
  "taoism-tian-jin-temple": "Institutional",
  "dunns-famous-restaurant": "Food & Beverage",
  "smokes-poutinerie-robson": "Food & Beverage",
  "t-go-tea": "Food & Beverage",
  "la-latoria": "Food & Beverage",
  "viet-sub": "Food & Beverage",
  "empress-lounge": "Food & Beverage",
  "ridge-dental-clinic": "Medical",
  "pharmasave": "Medical",
  "agriculture-bank-of-china-abc": "Office",
  "sukis-salon": "Lifestyle",
  "party-world": "Lifestyle",
  // Not yet assigned (needs client confirmation): chinatown-house, w-broadway, moon-light
};
