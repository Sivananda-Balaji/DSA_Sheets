//Search X in sorted array

function search(nums, target) {
  let left = 0,
    right = nums.length - 1;
  const binSearch = (nums, left, right, target) => {
    if (left > right) {
      return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binSearch(nums, mid + 1, right, target);
    } else {
      return binSearch(nums, left, mid - 1, target);
    }
  };
  const ans = binSearch(nums, left, right, target);
  return ans;
}

const nums = [-1, 0, 3, 5, 9, 12],
  target = 9;
const result = search(nums, target);

console.log(result);
