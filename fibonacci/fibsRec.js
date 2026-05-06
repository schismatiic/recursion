const fibsRec = (num) => {
  debugger;
  let currentFib = [];
  if (num < 0 || Number.isInteger(num) === false) {
    return undefined;
  }
  if (num === 0 || num === 1) {
    return num === 0 ? [] : [0];
  }
  console.log("This was printed recursively");
  const previousFib = fibsRec(num - 1);

  previousFib.forEach((element, index) => {
    currentFib = [
      ...previousFib,
      Number.isInteger(previousFib[index - 1]) === false
        ? element + 1
        : element + previousFib[index - 1],
    ];
  });
  return currentFib;
};
console.log(fibsRec(4));

module.exports = fibsRec;
