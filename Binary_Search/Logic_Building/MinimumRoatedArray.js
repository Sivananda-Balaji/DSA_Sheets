//Find minimum in Rotated Sorted Array

function findMin(arr) {
  let left = 0,
    right = arr.length - 1;
  if (arr[left] <= arr[right]) {
    return arr[left];
  }
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
}

const nums = [
  90, -87, -78, -65, -49, -29, -28, -23, -2, 7, 12, 14, 24, 40, 46, 55, 76, 77,
  80, 83,
];

const result = findMin(nums);

console.log(result);
