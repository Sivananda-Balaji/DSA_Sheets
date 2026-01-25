//first occurrence of an element

const firstOccurrence = (nums, target, index = 0) => {
  if (nums.length === index) {
    return -1;
  }
  if (nums[index] === target) {
    return index;
  }
  return firstOccurrence(nums, target, index + 1);
};

const result = firstOccurrence([5, 3, 7, 3, 9], 3);

console.log(result);
