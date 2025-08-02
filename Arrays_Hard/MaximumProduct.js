//Maximum Product Subarray in an Array

function maxProduct(nums) {
  let max = -Infinity;
  let pre = 1,
    post = 1;
  for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
    pre *= nums[i];
    post *= nums[j];
    max = Math.max(max, Math.max(pre, post));
    if (pre === 0) {
      pre = 1;
    }
    if (post === 0) {
      post = 1;
    }
  }
  return max;
}

const nums = [4, 5, 3, 7, 1, 2];

const result = maxProduct(nums);

console.log(result);
