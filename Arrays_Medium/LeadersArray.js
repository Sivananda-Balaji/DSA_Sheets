//Leaders in an Array

function leaders(nums) {
  let len = nums.length;
  const ans = [];
  for (let i = len - 1; i >= 0; i--) {
    if (ans.length === 0) {
      ans.push(nums[i]);
    } else if (ans.at(-1) < nums[i]) {
      ans.push(nums[i]);
    }
  }
  return ans.reverse();
}

const nums = [1, 2, 5, 3, 1, 2];

const result = leaders(nums);

console.log(result);
