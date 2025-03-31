//Move Zeros to End

function moveZeroes(nums) {
  const newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newNums.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newNums[i] || 0;
  }
  return nums;
}

const nums = [0, 1, 4, 0, 5, 2];

const result = moveZeroes(nums);

console.log(result);
