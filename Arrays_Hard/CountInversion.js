//Count Inversions

function numberOfInversions(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
  }
  return count;
}

const nums = [2, 3, 7, 1, 3, 5];

const result = numberOfInversions(nums);

console.log(result);
