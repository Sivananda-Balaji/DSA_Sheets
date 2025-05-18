//Find the smallest divisor

function smallestDivisor(nums, limit) {
  const max = Math.max(...nums);
  for (let i = 1; i <= max; i++) {
    let val = 0;
    for (let j = 0; j < nums.length; j++) {
      val += Math.ceil(nums[j] / i);
    }
    if (val <= limit) {
      return i;
    }
  }
}

const nums = [1, 2, 3, 4, 5],
  limit = 8;

const result = smallestDivisor(nums, limit);

console.log(result);
