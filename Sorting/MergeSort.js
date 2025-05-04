//Merge Sorting

const merge = (first, second) => {
  const len1 = first.length;
  const len2 = second.length;
  const res = new Array(len1 + len2);
  let i = 0,
    j = 0,
    k = 0;
  while (i < len1 && j < len2) {
    if (first[i] <= second[j]) {
      res[k++] = first[i++];
    } else {
      res[k++] = second[j++];
    }
  }
  while (i < len1) {
    res[k++] = first[i++];
  }
  while (j < len2) {
    res[k++] = second[j++];
  }
  return res;
};

const mergeSorting = (nums, left, right) => {
  if (left === right) {
    return [nums[left]];
  }

  const mid = Math.floor((left + right) / 2);

  const first = mergeSorting(nums, left, mid);
  const second = mergeSorting(nums, mid + 1, right);
  return merge(first, second);
};

function mergeSort(nums) {
  const left = 0,
    right = nums.length - 1;
  const ans = mergeSorting(nums, left, right);
  return ans;
}

const nums = [7, 4, 1, 5, 3];

const result = mergeSort(nums);

console.log(result);
