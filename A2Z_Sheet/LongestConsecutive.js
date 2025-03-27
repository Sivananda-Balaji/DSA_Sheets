//128. Longest Consecutive Sequence

var longestConsecutive = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let count = 0,
    minValue = -Infinity,
    longest = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 === minValue) {
      count++;
      minValue = nums[i];
    } else if (nums[i] !== minValue) {
      count = 1;
      minValue = nums[i];
    }
    longest = Math.max(count, longest);
  }
  return longest;
};

const nums = [1, 0, 1, 2];

const result = longestConsecutive(nums);

console.log(result);
