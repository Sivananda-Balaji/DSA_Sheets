//Check for Perfect Number

function isPerfect(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      ans += i;
    }
  }
  return ans === n;
}

const result = isPerfect(6);

console.log(result);
