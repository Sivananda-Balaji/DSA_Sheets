//Find Nth root of a number

function NthRoot(n, m) {
  let left = 1,
    right = m;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid ** n === m) {
      return mid;
    } else if (mid ** n < m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const N = 3,
  M = 27;

const result = NthRoot(N, M);

console.log(result);
