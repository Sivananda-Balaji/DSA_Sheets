//Longest Subarray with sum K | [Postives and Negatives]

const getLongestSubarray = (nums, k) => {
  const map = {};
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    const remain = sum - k;
    if (map[remain]) {
      const index = map[remain];
      maxLen = Math.max(maxLen, i - index);
    }
    if (map[sum]) {
      map[sum] = i;
    }
  }
  return maxLen;
};

const nums = [2, -1, 2, 3, -2, 4],
  k = 3;

const result = getLongestSubarray(nums, k);

console.log(result);
