//Count digits in a number

const countDigits = (num) => {
  if (num <= 9) {
    return 1;
  }
  return 1 + countDigits(Math.floor(num / 10));
};

const result = countDigits(235);

console.log(result);
