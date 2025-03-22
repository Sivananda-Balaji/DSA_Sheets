//169. Majority Element

var majorityElement = function (nums) {
  const limit = Math.floor(nums.length / 2);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  for (let i in map) {
    if (map[i] > limit) {
      return Number(i);
    }
  }
};

const nums = [3, 2, 3];

const result = majorityElement(nums);

console.log(result);
