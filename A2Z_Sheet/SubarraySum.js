//1800. Maximum Ascending Subarray Sum

var maxAscendingSum = function (nums) {
  let max = nums[0],
    temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      temp += nums[i];
    } else {
      max = Math.max(temp, max);
      temp = nums[i];
    }
  }
  max = Math.max(temp, max);
  return max;
};

const nums = [10, 20, 30, 5, 10, 50];

const result = maxAscendingSum(nums);

console.log(result);
