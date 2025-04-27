//Sum of Array Elements

function arraySum(nums) {
  //your code goes here
  const arraySumfn = (sum, nums, last) => {
    if (nums.length === 0) {
      return sum + last;
    }
    sum += last;
    return arraySumfn(sum, nums, nums.pop());
  };
  const ans = arraySumfn(0, nums, nums.pop());
  return ans;
}

const nums = [1, 2, 3];

const result = arraySum(nums);

console.log(result);
