const getHalf = (arr) => {
  if (arr.length % 2 === 0) {
    return arr.length / 2;
  } else {
    return (arr.length - 1) / 2;
  }
};
const merge = (leftHalf, rightHalf) => {
  const mergedArray = leftHalf.concat(rightHalf);
  mergedArray.sort((a, b) => {
    return a - b;
  });
  return mergedArray;
};
const mergeSort = (arr) => {
  if (Array.isArray(arr) === false) {
    return undefined;
  }
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  const half = getHalf(arr);
  const leftHalf = arr.filter((element, index) => index < half);
  const rightHalf = arr.filter((element, index) => index >= half);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

module.exports = mergeSort;
