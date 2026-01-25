//Check if array is palindrome

const palindromeCheck = (nums, start = 0, end = nums.length - 1) => {
  if (start >= end) {
    return true;
  }
  if (nums[start] !== nums[end]) {
    return false;
  }
  return palindromeCheck(nums, start + 1, end - 1);
};

const result = palindromeCheck([1, 2, 3, 2, 1]);

console.log(result);
