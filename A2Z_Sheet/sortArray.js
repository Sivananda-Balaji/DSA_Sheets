//Sort an array

var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let isSwap = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        isSwap = true;
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    if (!isSwap) {
      return nums;
    }
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];

const result = sortColors(nums);

console.log(result);
