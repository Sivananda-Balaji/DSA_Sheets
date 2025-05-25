//Majority Element-II

function majorityElementTwo(nums) {
  const len = nums.length;
  const mark = Math.floor(len / 3);
  const ans = [],
    map = {};
  for (let i = 0; i < len; i++) {
    const val = nums[i];
    map[val] !== undefined ? map[val]++ : (map[val] = 1);
  }
  for (let i in map) {
    if (map[i] > mark) {
      ans.push(Number(i));
    }
  }
  return ans;
}

const nums = [1, 2, 1, 1, 3, 2];

const result = majorityElementTwo(nums);

console.log(result);
