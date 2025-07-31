//Next Permutation

function nextPermutation(nums) {
  // Your code goes here
  const len = nums.length;
  let index = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return nums.reverse();
  }
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] > nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      break;
    }
  }
  let i = index + 1,
    j = len - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return nums;
}

const nums = [1, 3, 2];

const result = nextPermutation(nums);

console.log(result);
