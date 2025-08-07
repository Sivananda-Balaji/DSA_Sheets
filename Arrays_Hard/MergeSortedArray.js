//Merge two sorted arrays without extra space

function merge(nums1, m, nums2, n) {
  const ans = [];
  let p1 = 0,
    p2 = 0;
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      ans.push(nums1[p1]);
      p1++;
    } else {
      ans.push(nums2[p2]);
      p2++;
    }
  }
  while (p1 < m) {
    ans.push(nums1[p1]);
    p1++;
  }
  while (p2 < n) {
    ans.push(nums2[p2]);
    p2++;
  }
  for (let i = 0; i < ans.length; i++) {
    nums1[i] = ans[i];
  }
  return nums1;
}

const nums1 = [-5, -2, 4, 5],
  nums2 = [-3, 1, 8],
  m = nums1.length,
  n = nums2.length;

const result = merge(nums1, m, nums2, n);

console.log(result);
