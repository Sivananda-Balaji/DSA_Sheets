//128. Longest Consecutive Sequence

var longestConsecutive = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    }
  }
  let count = 1,
    longest = 0;
  for (let val of set) {
    const prev = val - 1;
    if (!set.has(prev)) {
      let next = val + 1;
      count = 1;
      while (set.has(next)) {
        count++;
        next = next + 1;
      }
    }
    longest = Math.max(longest, count);
  }
  return longest;
};

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

const result = longestConsecutive(nums);

console.log(result);
