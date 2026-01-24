//sum of array elements

const arraySum = (arr, index = 0) => {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + arraySum(arr, index + 1);
};

const result = arraySum([1, 2, 3, 4]);

console.log(result);
