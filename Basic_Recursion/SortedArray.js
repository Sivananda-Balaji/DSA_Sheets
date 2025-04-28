//Check if the Array is Sorted II

function isSorted(nums) {
  //your code goes here
  const helper = (nums, index, endIndex) => {
    if (index === endIndex) {
      return true;
    }
    if (nums[index] > nums[index + 1]) {
      return false;
    }
    return helper(nums, index + 1, endIndex);
  };
  return helper(nums, 0, nums.length - 1);
}

const nums = [1, 2, 3, 4, 5];

const result = isSorted(nums);

console.log(result);
