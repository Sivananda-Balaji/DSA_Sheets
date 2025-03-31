//Check if the array is sorted

const arraySortedOrNot = (arr, n) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const n = 5,
  arr = [1, 2, 3, 4, 5];

const result = arraySortedOrNot(arr, n);

console.log(result);
