//Count Digits

const countDigits = (num) => {
  if (num < 0) {
    return null;
  }
  if (num <= 9) {
    return 1;
  }
  num = Math.floor(num / 10);
  return 1 + countDigits(num);
};

const result = countDigits(529);

console.log(result);
