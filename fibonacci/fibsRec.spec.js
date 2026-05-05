const fibsRec = require("./fibsRec");

describe("fibsRec", () => {
  test("Returns the correct Fibonacci sequence for 8 numbers", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Returns an empty array for 0", () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test("Returns the first Fibonacci number for 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("Returns the first two Fibonacci numbers for 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("Handles larger sequences correctly", () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test("Returns undefined for negative numbers", () => {
    expect(fibsRec(-5)).toBe(undefined);
  });

  test("Returns undefined for non-number arguments", () => {
    expect(fibsRec("8")).toBe(undefined);
    expect(fibsRec(null)).toBe(undefined);
    expect(fibsRec(undefined)).toBe(undefined);
    expect(fibsRec({})).toBe(undefined);
  });
});
