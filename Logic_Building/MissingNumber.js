//Find missing number

function missingNumber(nums) {
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return i;
}

const nums = [0, 2, 3, 1, 4];

const result = missingNumber(nums);

console.log(result);
