import { describe, expect, it } from "vitest";
import { HERO_SLIDE_INTERVAL_MS, nextHeroSlide } from "./heroMotion";

describe("nine-slide hero rotation", () => {
  it("advances exactly every four seconds", () => {
    expect(HERO_SLIDE_INTERVAL_MS).toBe(4000);
  });
  it("keeps the nine slides in sequence and loops to the first", () => {
    expect(Array.from({ length: 9 }, (_, i) => nextHeroSlide(i, 9))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 0]);
  });
});