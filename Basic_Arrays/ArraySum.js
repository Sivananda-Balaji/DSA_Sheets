//Sum of array elements

const sum = (arr, n) => {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
};

const n = 5,
  arr = [1, 2, 3, 4, 5];

const result = sum(arr, n);

console.log(result);
