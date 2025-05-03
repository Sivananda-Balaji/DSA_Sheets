//Bubble Sort

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      return;
    }
  }
}

const nums = [7, 4, 1, 5, 3];

console.log(nums);

bubbleSort(nums);

console.log(nums);
