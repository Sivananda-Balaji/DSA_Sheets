//Single element in sorted array

function singleNonDuplicate(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left];
}

const nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];

const result = singleNonDuplicate(nums);

console.log(result);
