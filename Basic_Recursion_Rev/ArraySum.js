//Sum of Array Elements

class Solution {
  arraySumFn(nums, index) {
    if (nums.length === index) {
      return 0;
    }
    return nums[index] + this.arraySumFn(nums, index + 1);
  }
  arraySum(nums) {
    //your code goes here
    const ans = this.arraySumFn(nums, 0);
    return ans;
  }
}

const result = new Solution();

console.log(result.arraySum([1, 2, 3]));
