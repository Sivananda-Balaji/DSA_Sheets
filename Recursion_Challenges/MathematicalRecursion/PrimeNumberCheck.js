//Check if a Number Is Prime

const primeCheck = (num, divisor = 2) => {
  if (num <= 1) {
    return false;
  }
  if (divisor * divisor > num) {
    return true;
  }
  if (num % divisor === 0) {
    return false;
  }
  return primeCheck(num, divisor + 1);
};

const result = primeCheck(2);

console.log(result);
