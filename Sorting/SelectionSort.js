//Selection Sort

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
  return nums;
}

const nums = [7, 4, 1, 5, 3];

const result = selectionSort(nums);

console.log(result);
