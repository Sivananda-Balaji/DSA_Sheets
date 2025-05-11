//Kadane's Algorithm

function maxSubArray(nums) {
  let curr = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(curr, max);
  }
  return max;
}

const nums = [-1, 2, 3, -1, 2, -6, 5];

const result = maxSubArray(nums);

console.log(result);
