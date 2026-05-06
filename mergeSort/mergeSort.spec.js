const fibsRec = require("./mergeSort");
const mergeSort = require("./mergeSort");

describe("mergeSort", () => {
  test("Returns an empty array when given an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("Returns the same array when given a single element", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test("Returns an already sorted array unchanged", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Sorts an unsorted array correctly", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test("Sorts a random array of numbers correctly", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });

  test("Sorts arrays containing negative numbers", () => {
    expect(mergeSort([4, -2, 7, -9, 0, 1])).toEqual([-9, -2, 0, 1, 4, 7]);
  });

  test("Sorts arrays containing duplicate values", () => {
    expect(mergeSort([5, 3, 8, 3, 1, 5])).toEqual([1, 3, 3, 5, 5, 8]);
  });

  test("Returns undefined for non-array arguments", () => {
    expect(mergeSort("123")).toBe(undefined);
    expect(mergeSort(123)).toBe(undefined);
    expect(mergeSort({ a: 1 })).toBe(undefined);
    expect(mergeSort(null)).toBe(undefined);
  });
});
