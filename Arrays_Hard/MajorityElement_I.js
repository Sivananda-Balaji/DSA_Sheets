//Majority Element-I

function majorityElement(nums) {
  const mark = Math.floor(nums.length / 2);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] !== undefined ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  for (let i in map) {
    if (map[i] > mark) {
      return i;
    }
  }
}

const nums = [7, 0, 0, 1, 7, 7, 2, 7, 7];

const result = majorityElement(nums);

console.log(result);
