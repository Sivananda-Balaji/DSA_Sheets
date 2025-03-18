//283. Move Zeroes

var moveZeroes = function (nums) {
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeros] = nums[i];
      zeros++;
    }
  }
  console.log(zeros);
  for (let i = zeros; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];

const result = moveZeroes(nums);

console.log(result);
