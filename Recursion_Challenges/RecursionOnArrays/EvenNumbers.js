//Return a new array with all even numbers

const evenNumbers = (nums, index = 0, ans = []) => {
  if (index === nums.length) {
    return ans;
  }
  if (nums[index] % 2 === 0) {
    ans.push(nums[index]);
  }
  return evenNumbers(nums, index + 1, ans);
};

const result = evenNumbers([1, 2, 3, 4, 6, 7]);

console.log(result);
