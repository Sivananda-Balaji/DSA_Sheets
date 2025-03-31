//Second Largest Element

function secondLargestElement(nums) {
  let first = -Infinity,
    second = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    } else if (nums[i] > second && nums[i] !== first) {
      second = nums[i];
    }
  }
  return second === -Infinity ? -1 : second;
}

const nums = [8, 8, 7, 6, 5];

const result = secondLargestElement(nums);

console.log(result);
