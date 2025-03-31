//Remove duplicates from sorted array

function removeDuplicates(nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      nums[index + 1] = nums[i];
      index++;
    }
  }
  return index + 1;
}

const nums = [0, 0, 3, 3, 5, 6];

const result = removeDuplicates(nums);

console.log(result);
