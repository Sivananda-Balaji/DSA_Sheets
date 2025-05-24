//Majority Element-I

function majorityElement(nums) {
  let count = 0;
  let element = -1;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
      count++;
    } else if (nums[i] === element) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}

const nums = [7, 0, 0, 1, 7, 7, 2, 7, 7];

const result = majorityElement(nums);

console.log(result);
