//last occurrence of an element

const lastOccurrence = (nums, target, index = 0, ans = -1) => {
  if (nums.length === index) {
    return ans;
  }
  if (nums[index] === target) {
    ans = index;
  }
  return lastOccurrence(nums, target, index + 1, ans);
};

const result = lastOccurrence([5, 3, 7, 3, 9], 3);

console.log(result);

console.log("--------------");

const lastOccurrenceEnd = (nums, target, index = nums.length - 1) => {
  if (index == -1) {
    return -1;
  }
  if (nums[index] === target) {
    return index;
  }
  return lastOccurrenceEnd(nums, target, index - 1);
};

const resultEnd = lastOccurrenceEnd([5, 3, 7, 3, 9], 3);
console.log(resultEnd);
