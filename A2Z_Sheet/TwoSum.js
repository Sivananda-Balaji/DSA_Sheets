//1. Two Sum

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (map[remain] !== undefined) {
      return [i, map[remain]];
    }
    map[nums[i]] = i;
  }
};

const nums = [1, 3, 4, 2],
  target = 6;

const result = twoSum(nums, target);

console.log(result);
