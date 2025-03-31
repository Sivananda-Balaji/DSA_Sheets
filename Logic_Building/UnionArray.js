//88. Union Sorted Array

function unionArray(nums1, nums2) {
  let pt1 = 0,
    pt2 = 0;
  const len1 = nums1.length,
    len2 = nums2.length;
  const ans = [];
  let index = 0;
  while (pt1 < len1 && pt2 < len2) {
    if (nums1[pt1] < nums2[pt2]) {
      if (ans.at(-1) !== nums1[pt1]) {
        ans[index++] = nums1[pt1];
      }
      pt1++;
    } else if (nums2[pt2] < nums1[pt1]) {
      if (ans.at(-1) !== nums2[pt2]) {
        ans[index++] = nums2[pt2];
      }
      pt2++;
    } else {
      if (ans.at(-1) !== nums1[pt1]) {
        ans[index++] = nums1[pt1];
      }
      pt1++;
      pt2++;
    }
  }
  while (pt1 < len1) {
    if (ans.at(-1) !== nums1[pt1]) {
      ans[index++] = nums1[pt1];
    }
    pt1++;
  }
  while (pt2 < len2) {
    if (ans.at(-1) !== nums2[pt2]) {
      ans[index++] = nums2[pt2];
    }
    pt2++;
  }
  return ans;
}

const nums1 = [3, 4, 4, 4],
  nums2 = [6, 7, 7];

const result = unionArray(nums1, nums2);

console.log(result);
