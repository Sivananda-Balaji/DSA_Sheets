//169. Majority Element

var majorityElement = function (nums) {
  let ele = -1,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      ele = nums[i];
      count = 1;
    } else if (ele !== nums[i]) {
      count--;
    } else {
      count++;
    }
  }
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (ele === nums[i]) {
      count++;
    }
  }
  return count > Math.floor(nums.length / 2) ? ele : -1;
};

const nums = [3, 2, 3];

const result = majorityElement(nums);

console.log(result);
