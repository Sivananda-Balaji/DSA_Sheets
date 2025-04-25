//Lower Bound

function lowerBound(nums, x) {
  let left = 0,
    right = nums.length - 1,
    ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === x) {
      ans = mid;
      right = mid - 1;
    } else if (nums[mid] < x) {
      left = mid + 1;
    } else {
      ans = mid;
      right = mid - 1;
    }
  }
  return ans === -1 ? nums.length : ans;
}

const nums = [1, 2, 2, 3],
  x = 2;
const result = lowerBound(nums, x);

console.log(result);
