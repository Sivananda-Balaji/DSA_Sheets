//485. Max Consecutive Ones

var findMaxConsecutiveOnes = function (nums) {
  let index = 0;
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count = 0;
      index = i + 1;
      continue;
    }
    count++;
    max = Math.max(count, max);
  }
  return max;
};

const nums = [1, 0, 1, 1, 0, 1];

const result = findMaxConsecutiveOnes(nums);

console.log(result);
