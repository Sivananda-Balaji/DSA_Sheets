//Reverse a number

function reverseNumber(n) {
  let ans = 0;
  while (n > 0) {
    const last = n % 10;
    ans = ans * 10 + last;
    n = Math.floor(n / 10);
  }
  return ans;
}

const result = reverseNumber(25);

console.log(result);
