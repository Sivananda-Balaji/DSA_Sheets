//Rearrange array elements by sign

function rearrangeArray(nums) {
  const ans = [];
  let pos = 0,
    neg = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans[pos] = nums[i];
      pos += 2;
    } else if (nums[i] < 0) {
      ans[neg] = nums[i];
      neg += 2;
    }
  }
  return ans;
}

const nums = [2, 4, 5, -1, -3, -4];

const result = rearrangeArray(nums);

console.log(result);
