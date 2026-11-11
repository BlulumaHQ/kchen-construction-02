import { describe, expect, it } from "vitest";
import { HERO_SLIDE_INTERVAL_MS, nextHeroSlide } from "./heroMotion";

describe("preserved eight-slide hero", () => {
  it("advances exactly every four seconds", () => {
    expect(HERO_SLIDE_INTERVAL_MS).toBe(4000);
  });
  it("keeps the eight slides in sequence and loops to the first", () => {
    expect(Array.from({ length: 8 }, (_, i) => nextHeroSlide(i, 8))).toEqual([1, 2, 3, 4, 5, 6, 7, 0]);
  });
});