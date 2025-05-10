//3 Sum

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        k--;
        while (nums[k] === nums[k + 1]) {
          k--;
        }
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return ans;
}

const nums = [2, -2, 0, 3, -3, 5];

const result = threeSum(nums);

console.log(result);
