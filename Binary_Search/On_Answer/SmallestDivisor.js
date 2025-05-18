//Find the smallest divisor

function smallestDivisor(nums, limit) {
  const max = Math.max(...nums);
  let left = 1,
    right = max,
    ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let val = 0;
    for (let i = 0; i < nums.length; i++) {
      val += Math.ceil(nums[i] / mid);
    }
    if (val <= limit) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

const nums = [1, 2, 3, 4, 5],
  limit = 8;

const result = smallestDivisor(nums, limit);

console.log(result);
