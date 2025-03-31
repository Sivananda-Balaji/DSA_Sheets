//Largest Element

function largestElement(nums) {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}

const nums = [3, 3, 6, 1];

const result = largestElement(nums);

console.log(result);
