// Is the Given Array Sorted

function isSorted(n, a) {
  // Write your code here.
  let increase = true,
    decrease = true;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] > a[i + 1]) {
      increase = false;
    }
    if (a[i] < a[i + 1]) {
      decrease = false;
    }
  }
  return increase || decrease;
}

const n = 5,
  a = [1, 2, 3, 4, 5];

const result = isSorted(n, a);

console.log(result);
