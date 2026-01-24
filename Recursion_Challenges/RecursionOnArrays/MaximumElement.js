//Find maximum element in array using recursion

const maximumElement = (arr, index = 0, maxElement = -Infinity) => {
  if (index === arr.length) {
    return maxElement;
  }
  if (arr[index] > maxElement) {
    maxElement = arr[index];
  }
  return maximumElement(arr, index + 1, maxElement);
};

const result = maximumElement([3, 1, 7, 2, 5]);

console.log(result);
