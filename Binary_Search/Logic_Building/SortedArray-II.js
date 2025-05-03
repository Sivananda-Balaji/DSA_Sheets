//Search in rotated sorted array-II

function searchInARotatedSortedArrayII(nums, k) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === k) {
      return true;
    }
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
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
  return false;
}

const nums = [3, 1, 2, 3, 3, 3, 3],
  k = 1;

const result = searchInARotatedSortedArrayII(nums, k);

console.log(result);
