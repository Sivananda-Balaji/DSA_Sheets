//Left Rotate Array by One

function rotateArrayByOne(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  }
  return nums;
}

const nums = [1, 2, 3, 4, 5];

const result = rotateArrayByOne(nums);

console.log(result);
