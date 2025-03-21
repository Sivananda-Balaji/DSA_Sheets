//Sort an array

var sortColors = function (nums) {
  let zero = 0,
    one = 0,
    two = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    } else if (nums[i] === 1) {
      one++;
    } else {
      two++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < zero) {
      nums[i] = 0;
    } else if (i < zero + one) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];

const result = sortColors(nums);

console.log(result);
