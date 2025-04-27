//Reverse an array

function reverseArray(nums) {
  //your code goe shere
  const helper = (first, nums, last) => {
    if (first >= last) {
      return nums;
    }
    [nums[first], nums[last]] = [nums[last], nums[first]];
    return helper(first + 1, nums, last - 1);
  };
  return helper(0, nums, nums.length - 1);
}

const nums = [1, 2, 3, 4, 5];

const result = reverseArray(nums);

console.log(result);
