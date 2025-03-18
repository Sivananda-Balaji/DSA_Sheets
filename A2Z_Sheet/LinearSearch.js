//Linear Search

const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5],
  num = 3;

const result = linearSearch(arr, num);

console.log(result);
