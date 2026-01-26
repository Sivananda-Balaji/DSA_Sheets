//Find Sum of Digits Until Single Digit

const sumOfDigits = (num, sum = 0) => {
  if (num === 0) {
    if (sum <= 9) {
      return sum;
    }
    return sumOfDigits(sum, 0);
  }
  sum += num % 10;
  return sumOfDigits(Math.floor(num / 10), sum);
};

const result = sumOfDigits(9875);

console.log(result);
