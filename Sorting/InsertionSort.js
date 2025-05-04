//Insertion Sorting

function insertionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let usi = nums[i + 1],
      j = i;
    while (j >= 0) {
      if (nums[j] < usi) {
        break;
      }
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = usi;
  }
  return nums;
}

const nums = [7, 4, 1, 5, 3];

const result = insertionSort(nums);

console.log(result);
