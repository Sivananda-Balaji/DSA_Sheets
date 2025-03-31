//Left Rotate Array by K Places

function rotateArray(nums, k) {
  k = Math.floor(k % nums.length);
  let i = 0,
    j = k - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  (i = k), (j = nums.length - 1);
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  (i = 0), (j = nums.length - 1);
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return nums;
}

const nums = [1, 2, 3, 4, 5, 6],
  k = 2;

const result = rotateArray(nums, k);

console.log(result);
