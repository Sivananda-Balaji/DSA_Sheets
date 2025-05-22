//Koko eating bananas

function minimumRateToEatBananas(nums, h) {
  let left = 1,
    right = Math.max(...nums),
    ans = -Infinity;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += Math.ceil(nums[i] / mid);
    }
    if (sum <= h) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

const nums = [7, 15, 6, 3],
  h = 8;

const result = minimumRateToEatBananas(nums, h);

console.log(result);
