//Move Zeros to End

function moveZeroes(nums) {
  let zero = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero = i;
      break;
    }
  }
  if (zero >= 0) {
    for (let i = zero + 1; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[zero], nums[i]] = [nums[i], nums[zero]];
        zero++;
      }
    }
  }
  return nums;
}

const nums = [0, 1, 4, 0, 5, 2];

const result = moveZeroes(nums);

console.log(result);
