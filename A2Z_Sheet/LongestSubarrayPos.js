//Longest Subarray with given Sum K(Positives)

const getLongestSubarray = (nums, k) => {
  let count = 0;
  let sum = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum > k) {
      sum -= nums[index];
      index++;
    }
    if (sum === k) {
      count = Math.max(count, i - index + 1);
    }
  }
  return count;
};

const k = 1,
  nums = [-1, 1, 1];

const result = getLongestSubarray(nums, k);

console.log(result);
