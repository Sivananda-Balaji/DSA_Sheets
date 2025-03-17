//189. Rotate Array

var rotate = function (nums, k) {
  nums.reverse();
  const len = nums.length;
  k = Math.floor(k % len);
  let i = 0,
    j = k - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  (i = k), (j = len - 1);
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return nums;
};

const nums = [1, 2];
k = 3;

const result = rotate(nums, k);

console.log(result);
