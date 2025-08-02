//Maximum Product Subarray in an Array

function maxProduct(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = i; j < nums.length; j++) {
      prod *= nums[j];
      max = Math.max(max, prod);
    }
  }
  return max;
}

const nums = [4, 5, 3, 7, 1, 2];

const result = maxProduct(nums);

console.log(result);
