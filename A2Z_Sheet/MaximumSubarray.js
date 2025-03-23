//53. Maximum Subarray

var maxSubArray = function (nums) {
  let max = -Infinity,
    sum = 0;
  let startIndex = 0,
    endIndex = 0,
    tempStart = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
      startIndex = tempStart;
      endIndex = i;
    }
    if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }
  console.log(nums.slice(startIndex, endIndex + 1));
  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const result = maxSubArray(nums);

console.log(result);
