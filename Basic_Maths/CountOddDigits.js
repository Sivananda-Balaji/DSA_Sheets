//Count number of odd digits in a number

function countOddDigit(n) {
  let count = 0;
  while (n > 0) {
    const last = n % 10;
    if (last % 2 !== 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
}

const result = countOddDigit(25);

console.log(result);
