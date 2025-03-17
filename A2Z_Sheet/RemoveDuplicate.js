//26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const result = removeDuplicates(nums);

console.log(result);
