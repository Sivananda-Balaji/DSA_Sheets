//First and last occurrence

function searchRange(nums, target) {
  let left = 0,
    right = nums.length - 1,
    ans = [-1, -1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  ans[0] = nums[left] === target ? left : -1;
  (left = 0), (right = nums.length - 1);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  ans[1] = nums[right] === target ? right : -1;
  return ans;
}

const nums = [5, 7, 7, 8, 8, 10],
  target = 8;

const result = searchRange(nums, target);

console.log(result);
