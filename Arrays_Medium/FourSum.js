//4 Sum

function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let l = j + 1,
        k = nums.length - 1;

      while (l < k) {
        const sum = nums[i] + nums[j] + nums[l] + nums[k];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[l], nums[k]]);
          l++;
          while (l < k && nums[l] === nums[l - 1]) {
            l++;
          }
          k--;
          while (l < k && nums[k] === nums[k + 1]) {
            k--;
          }
        } else if (sum > target) {
          k--;
        } else {
          l++;
        }
      }
    }
  }
  return ans;
}

const nums = [1, -2, 3, 5, 7, 9],
  target = 7;

const result = fourSum(nums, target);

console.log(result);
