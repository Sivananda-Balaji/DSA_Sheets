//560. Subarray Sum Equals K

var subarraySum = function (nums, k) {
  let prefix = 0,
    count = 0;
  const map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];
    const remain = prefix - k;
    count += map[remain] >= 0 ? map[remain] : 0;
    if (map[prefix] !== undefined && map[prefix] >= 0) {
      map[prefix]++;
    } else {
      map[prefix] = 1;
    }
  }
  return count;
};

const nums = [1, 1, 1],
  k = 2;

const result = subarraySum(nums, k);

console.log(result);
