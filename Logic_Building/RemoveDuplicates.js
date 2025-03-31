//Remove duplicates from sorted array

function removeDuplicates(nums) {
  const distinctArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (distinctArr.at(-1) !== nums[i]) {
      distinctArr.push(nums[i]);
    }
  }
  for (let i = 0; i < distinctArr.length; i++) {
    nums[i] = distinctArr[i];
  }
  return distinctArr.length;
}

const nums = [0, 0, 3, 3, 5, 6];

const result = removeDuplicates(nums);

console.log(result);
