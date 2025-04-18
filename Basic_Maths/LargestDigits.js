//Return the Largest Digit in a Number

function largestDigit(n) {
  let ans = -Infinity;
  while (n > 0) {
    const last = n % 10;
    if (last > ans) {
      ans = last;
    }
    n = Math.floor(n / 10);
  }
  return ans;
}

const result = largestDigit(25);

console.log(result);
