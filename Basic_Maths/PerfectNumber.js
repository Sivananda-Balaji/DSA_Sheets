//Check for Perfect Number

function isPerfect(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  let ans = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      ans += i;
      if (i !== Math.floor(n / i)) {
        ans += Math.floor(n / i);
      }
    }
  }
  return ans === n;
}

const result = isPerfect(1);

console.log(result);
