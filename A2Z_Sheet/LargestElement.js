//Find the Largest element in an array

const largestElement = (arr) => {
  let answer = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > answer) {
      answer = arr[i];
    }
  }
  return answer;
};

const findLargest = (arr, count, len, answer) => {
  if (count >= len) {
    return answer;
  }
  if (arr[count] > answer) {
    answer = arr[count];
  }
  count++;
  return findLargest(arr, count, len, answer);
};

const largestElementRec = (arr) => {
  const len = arr.length;
  let count = 1;
  let answer = arr[0];
  answer = findLargest(arr, count, len, answer);
  return answer;
};

const arr = [2, 5, 1, 3, 0];

const result = largestElement(arr);

const resultRec = largestElementRec(arr);

console.log(result);

console.log(resultRec);
