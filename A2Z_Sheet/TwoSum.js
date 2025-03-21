//1. Two Sum

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] && map[nums[i]].length > 0) {
      map[nums[i]].push(i);
    } else {
      map[nums[i]] = [i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (map[remain] && map[remain].length === 2) {
      return map[remain];
    } else if (map[remain] && map[remain].length < 2 && i !== map[remain][0]) {
      return [i, map[remain][0]];
    }
  }
};

const nums = [1, 3, 4, 2],
  target = 6;

const result = twoSum(nums, target);

console.log(result);
