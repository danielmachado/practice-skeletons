import { sum } from "../src/sum";

it("sums a couple of numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
