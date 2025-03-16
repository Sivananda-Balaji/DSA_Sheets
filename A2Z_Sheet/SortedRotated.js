// Is the given array sorted and rotated

var check = function (nums) {
  if (nums.length < 2) {
    return true;
  }
  let violation = 0,
    index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      violation++;
      index = i + 1;
    }
  }
  if (violation === 0) {
    return true;
  }
  if (violation > 1) {
    return false;
  }
  if (violation === 1) {
    const left = nums.slice(0, index);
    const right = nums.slice(index);
    const finalArr = [...right, ...left];
    for (let i = 0; i < finalArr.length - 1; i++) {
      if (finalArr[i] > finalArr[i + 1]) {
        return false;
      }
    }
  }
  return true;
};

const nums = [3, 4, 5, 1, 2];

const result = check(nums);

console.log(result);
