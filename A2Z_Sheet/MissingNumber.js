//268. Missing Number

var missingNumber = function (nums) {
  let miss = -1;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return miss === -1 && nums.length;
};

const nums = [3, 0, 1];

const result = missingNumber(nums);

console.log(result);
