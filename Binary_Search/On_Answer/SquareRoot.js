//Find square root of a number

function floorSqrt(n) {
  let left = 0,
    right = Math.floor(n / 2);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

const n = 28;

const result = floorSqrt(n);

console.log(result);
