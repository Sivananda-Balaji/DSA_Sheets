//Second Highest Occurring Element

function secondMostFrequentElement(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] !== undefined ? map[num]++ : (map[num] = 1);
  }
  let firstVal = -1,
    first = -1,
    secondVal = -1,
    second = -1;
  for (let i in map) {
    if (map[i] > firstVal) {
      secondVal = firstVal;
      second = first;
      firstVal = map[i];
      first = i;
    } else if (map[i] > secondVal && map[i] < firstVal) {
      secondVal = map[i];
      second = i;
    }
  }
  return second;
}

const arr = [4, 4, 5, 5, 6, 7];

const result = secondMostFrequentElement(arr);

console.log(result);
