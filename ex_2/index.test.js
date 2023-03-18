import { getPercents } from "./index.js";

describe("tests for getPercents function", () => {
  it("should correctly get percent of number", () => {
    expect(getPercents(4, 100)).toBe(4);
  }),
  it("shouldn't return 4 if we pass 4 and 200", () => {
    expect(getPercents(4, 200)).not.toBe(4);
  }),
  it("should return NAN if we pass 4 and NAN", () => {
    expect(getPercents(4, NaN)).toBe(NaN);
  })
});