//Two Sum

function twoSum(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    if (obj[val] !== undefined) {
      return [i, obj[val]];
    } else {
      obj[nums[i]] = i;
    }
  }
}

const nums = [1, 6, 2, 10, 3],
  target = 7;

const result = twoSum(nums, target);

console.log(result);
