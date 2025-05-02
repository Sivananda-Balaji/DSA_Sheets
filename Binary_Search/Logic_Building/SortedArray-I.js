//Search in rotated sorted array-I

function search(nums, k) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === k) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      if (k >= nums[left] && k < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (k > nums[mid] && k <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2],
  k = 0;

const result = search(nums, k);

console.log(result);
