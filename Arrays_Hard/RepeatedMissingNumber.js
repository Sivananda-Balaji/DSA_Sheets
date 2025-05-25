//Find the repeating and missing number

function findMissingRepeatingNumbers(nums) {
  const len = nums.length;
  const ans = [],
    map = {};
  for (let i = 0; i < len; i++) {
    const val = nums[i];
    map[val] !== undefined ? map[val]++ : (map[val] = 1);
  }
  for (let i in map) {
    if (map[i] > 1) {
      ans.push(Number(i));
    }
  }
  for (let i = 1; i <= len; i++) {
    if (!nums.includes(i)) {
      ans.push(i);
    }
  }
  return ans;
}

const nums = [3, 5, 4, 1, 1];

const result = findMissingRepeatingNumbers(nums);

console.log(result);
