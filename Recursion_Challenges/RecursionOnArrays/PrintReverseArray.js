//Print array in reverse

const printReverse = (nums, index = nums.length - 1) => {
  if (index == -1) {
    return;
  }
  console.log(nums[index]);
  printReverse(nums, index - 1);
};

printReverse([1, 2, 3, 4]);
