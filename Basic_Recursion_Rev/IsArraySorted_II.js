//Check if the Array is Sorted II

class Solution {
  isArraySorted(nums, index) {
    if (nums.length - 1 === index) {
      return true;
    }
    if (nums[index] > nums[index + 1]) {
      return false;
    }
    return this.isArraySorted(nums, index + 1);
  }
  isSorted(nums) {
    if (nums.length < 2) {
      return true;
    }
    return this.isArraySorted(nums, 0);
  }
}

const result = new Solution().isSorted([4, 5]);

console.log(result);
