//Quick Sorting

function partition(nums, left, right) {
  let pivot = nums[right];
  let i = left,
    j = left;
  while (i <= right) {
    if (nums[i] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j - 1;
}

function quickSorting(nums, left, right) {
  if (left < right) {
    const pivotIndex = partition(nums, left, right);
    quickSorting(nums, left, pivotIndex - 1);
    quickSorting(nums, pivotIndex + 1, right);
  }
}

function quickSort(nums) {
  const left = 0,
    right = nums.length - 1;
  quickSorting(nums, left, right);
}

const nums = [7, 4, 1, 5, 3];

quickSort(nums);

console.log(nums);
