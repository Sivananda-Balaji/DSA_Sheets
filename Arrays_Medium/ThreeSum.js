//3 Sum

function threeSum(nums) {
  const ans = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    const obj = {};
    for (let j = i + 1; j < nums.length; j++) {
      const val = -(nums[i] + nums[j]);
      if (obj[val] !== undefined) {
        const temp = [nums[i], nums[j], obj[val]].sort((a, b) => a - b);
        ans.add(temp.toString());
      }
      obj[nums[j]] = nums[j];
    }
  }
  return Array.from(ans).map((str) => str.split(",").map(Number));
}

const nums = [2, -2, 0, 3, -3, 5];

const result = threeSum(nums);

console.log(result);
