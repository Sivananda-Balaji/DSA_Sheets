//Merge two sorted arrays without extra space

function merge(nums1, m, nums2, n) {
  let index = nums1.length - 1,
    p1 = m - 1,
    p2 = n - 1;
  while (p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[index] = nums1[p1];
      index--;
      p1--;
    } else {
      nums1[index] = nums2[p2];
      index--;
      p2--;
    }
  }
  return nums1;
}

const nums1 = [-5, -2, 4, 5, 0, 0, 0],
  nums2 = [-3, 1, 8],
  m = 4,
  n = 3;

const result = merge(nums1, m, nums2, n);

console.log(result);
