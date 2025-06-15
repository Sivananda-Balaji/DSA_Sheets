//Highest Occurring Element in an Array

function mostFrequentElement(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] !== undefined ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  let ans = null,
    val = -1;
  for (let i in map) {
    if (map[i] > val) {
      ans = i;
      val = map[i];
    }
  }
  return ans;
}

const arr = [100, 200, 200, 300, 300];

const result = mostFrequentElement(arr);

console.log(result);
