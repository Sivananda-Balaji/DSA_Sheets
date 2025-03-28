//128. Longest Consecutive Sequence

var longestConsecutive = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let count = 1,
    max = -Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      count++;
    } else if (nums[i] !== nums[i + 1]) {
      count = 1;
    }
    max = Math.max(count, max);
  }
  return max === -Infinity ? 1 : max;
};

const nums = [1, 0, 1, 2];

const result = longestConsecutive(nums);

console.log(result);
