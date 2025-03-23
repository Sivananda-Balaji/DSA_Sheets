//Leaders in an Array

const leadersArray = (nums) => {
  const ans = [];
  let lead = -Infinity;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= lead) {
      ans.push(nums[i]);
      lead = nums[i];
    }
  }
  return ans.reverse();
};

const nums = [4, 7, 1, 0];

const result = leadersArray(nums);

console.log(result);
