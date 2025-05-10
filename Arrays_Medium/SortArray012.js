//Sort an array of 0's 1's and 2's

function sortZeroOneTwo(nums) {
  let i = 0,
    j = 0,
    k = nums.length - 1;
  while (i <= k) {
    if (nums[i] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k--;
    }
  }
  return nums;
}

const nums = [1, 0, 2, 1, 0];

const result = sortZeroOneTwo(nums);

console.log(result);
