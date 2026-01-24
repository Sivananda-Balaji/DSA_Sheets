//Find minimum element in array

const minimumElement = (arr, index = 0, minElement = Infinity) => {
  if (index === arr.length) {
    return minElement;
  }
  if (arr[index] < minElement) {
    minElement = arr[index];
  }
  return minimumElement(arr, index + 1, minElement);
};

const result = minimumElement([3, 1, 7, 2, 5]);

console.log(result);
