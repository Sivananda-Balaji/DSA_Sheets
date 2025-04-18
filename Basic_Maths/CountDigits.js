//Count all Digits of a Number

function countDigit(n) {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

const result = countDigit(14);

console.log(result);
