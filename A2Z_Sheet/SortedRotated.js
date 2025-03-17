// Is the given array sorted and rotated

var check = function (nums) {
  let count = 0,
    len = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % len]) {
      count++;
    }
  }
  return count <= 1;
};

const nums = [3, 4, 5, 1, 2];

const result = check(nums);

console.log(result);
