//Count Inversions

function merge(first, second) {
  const len1 = first.length;
  const len2 = second.length;
  const res = new Array(len1 + len2);
  let i = 0,
    j = 0,
    k = 0,
    count = 0;
  while (i < len1 && j < len2) {
    if (first[i] <= second[j]) {
      res[k++] = first[i++];
    } else {
      res[k++] = second[j++];
      count += len1 - i;
    }
  }
  while (i < len1) {
    res[k++] = first[i++];
  }
  while (j < len2) {
    res[k++] = second[j++];
  }
  return [count, res];
}

function mergeSort(nums, left, right) {
  if (left === right) {
    return [0, [nums[left]]];
  }
  const mid = Math.floor((left + right) / 2);
  const [leftCount, leftHalf] = mergeSort(nums, left, mid);
  const [rightCount, rightHalf] = mergeSort(nums, mid + 1, right);
  const [mergeCount, merged] = merge(leftHalf, rightHalf);
  return [leftCount + rightCount + mergeCount, merged];
}

function numberOfInversions(nums) {
  let left = 0,
    right = nums.length - 1;
  const [ans] = mergeSort(nums, left, right);
  return ans;
}

const nums = [2, 3, 7, 1, 3, 5];

const result = numberOfInversions(nums);

console.log(result);
