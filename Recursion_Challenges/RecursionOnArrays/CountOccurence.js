//Count occurrences of a value in array

const countOccurence = (arr, target, index = 0) => {
  if (index === arr.length) {
    return 0;
  }
  const count = arr[index] === target ? 1 : 0;
  return count + countOccurence(arr, target, index + 1);
};

const result = countOccurence([1, 2, 3, 2, 2, 4], 2);

console.log(result);
