const fibs = (num) => {
  if (num < 0 || Number.isInteger(num) === false) {
    return undefined;
  }
  const fibArr = [];
  for (let index = 0; index < num; index++) {
    if (index === 0 || index === 1) {
      fibArr[index] = index === 0 ? 0 : 1;
    } else {
      fibArr[index] = fibArr[index - 1] + fibArr[index - 2];
    }
  }
  return fibArr;
};
console.log(fibs(8));
module.exports = fibs;
