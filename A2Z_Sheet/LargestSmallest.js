//Find Second Smallest and Second Largest Element in an array

const secondSmallest = (arr) => {
  let small = Infinity,
    smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      small = smallest;
      smallest = arr[i];
    } else if (arr[i] < small && arr[i] > smallest) {
      small = arr[i];
    }
  }
  return small === Infinity ? -1 : small;
};

const secondLargest = (arr) => {
  let large = -Infinity,
    largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      large = largest;
      largest = arr[i];
    } else if (arr[i] > large && arr[i] < largest) {
      large = arr[i];
    }
  }
  return large === -Infinity ? -1 : large;
};

const arr = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr);
const sL = secondLargest(arr);

console.log("Second smallest is " + sS);
console.log("Second largest is " + sL);
