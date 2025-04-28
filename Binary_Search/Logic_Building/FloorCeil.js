//Floor and Ceil in Sorted Array

function getFloorAndCeil(nums, x) {
  let left = 0,
    right = nums.length - 1,
    floor = -1,
    ceil = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === x) {
      return [nums[mid], nums[mid]];
    } else if (nums[mid] < x) {
      floor = nums[mid];
      left = mid + 1;
    } else {
      ceil = nums[mid];
      right = mid - 1;
    }
  }
  return [floor, ceil];
}

const nums = [3, 4, 4, 7, 8, 10],
  x = 5;

const result = getFloorAndCeil(nums, x);

console.log(result);
