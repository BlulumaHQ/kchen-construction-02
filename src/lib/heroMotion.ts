export const HERO_SLIDE_INTERVAL_MS = 4000;

export function nextHeroSlide(current: number, slideCount: number) {
  return (current + 1) % slideCount;
}