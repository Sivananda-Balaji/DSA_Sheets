//Find missing number

function missingNumber(nums) {
  let prefixSum = 0;
  for (let i = 1; i <= nums.length; i++) {
    prefixSum += i;
  }
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return prefixSum - total;
}

const nums = [0, 2, 3, 1, 4];

const result = missingNumber(nums);

console.log(result);
