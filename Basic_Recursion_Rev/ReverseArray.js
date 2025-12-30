//Reverse an array

class Solution {
  reverse(nums, start, end) {
    if (start > end) {
      return;
    }
    [nums[start], nums[end]] = [nums[end], nums[start]];
    return this.reverse(nums, start + 1, end - 1);
  }
  reverseArray(nums) {
    this.reverse(nums, 0, nums.length - 1);
    return nums;
  }
}

const result = new Solution();

console.log(result.reverseArray([1, 2, 3, 4, 5]));
