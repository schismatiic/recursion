const fibs = require("./fibs");

describe("fibs", () => {
  test("Returns the correct Fibonacci sequence for 8 numbers", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Returns an empty array for 0", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("Returns the first Fibonacci number for 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("Returns the first two Fibonacci numbers for 2", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("Handles larger sequences correctly", () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test("Returns undefined for negative numbers", () => {
    expect(fibs(-5)).toBe(undefined);
  });

  test("Returns undefined for non-number arguments", () => {
    expect(fibs("8")).toBe(undefined);
    expect(fibs(null)).toBe(undefined);
    expect(fibs(undefined)).toBe(undefined);
    expect(fibs([])).toBe(undefined);
  });
});
