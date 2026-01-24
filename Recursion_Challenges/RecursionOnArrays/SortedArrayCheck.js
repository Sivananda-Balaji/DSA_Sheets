//Check if an array is sorted

const isArraySorted = (arr, index = 0) => {
  if (index === arr.length - 1) {
    return true;
  }
  if (arr[index] > arr[index + 1]) {
    return false;
  }
  return isArraySorted(arr, index + 1);
};

const result = isArraySorted([1, 2, 3, 4]);

console.log(result);
