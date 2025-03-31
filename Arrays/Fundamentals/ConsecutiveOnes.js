//Maximum Consecutive Ones

function findMaxConsecutiveOnes(nums) {
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(count, max);
  }
  return max;
}

const nums = [1, 1, 0, 0, 1, 1, 1, 0];

const result = findMaxConsecutiveOnes(nums);

console.log(result);
