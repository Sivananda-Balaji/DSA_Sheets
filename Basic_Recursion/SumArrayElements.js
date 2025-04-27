//Sum of Array Elements

function arraySum(nums) {
  //your code goes here
  const helper = (sum, nums, index) => {
    if (index === nums.length - 1) {
      return sum + nums[index];
    }
    sum += nums[index];
    return helper(sum, nums, ++index);
  };
  const ans = helper(0, nums, 0);
  return ans;
}

const nums = [1, 2, 3];

const result = arraySum(nums);

console.log(result);
