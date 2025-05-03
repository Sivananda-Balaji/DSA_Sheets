//Find out how many times the array is rotated

function findKRotation(nums) {
  let left = 0,
    right = nums.length - 1;
  if (nums[left] < nums[right]) {
    return 0;
  }
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const nums = [4, 5, 6, 7, 0, 1, 2, 3];

const result = findKRotation(nums);

console.log(result);
