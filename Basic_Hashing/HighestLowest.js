//Sum of Highest and Lowest Frequency

function sumHighestAndLowestFrequency(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const letter = nums[i];
    map[letter] !== undefined ? map[letter]++ : (map[letter] = 1);
  }
  let lowVal = Infinity,
    highVal = -Infinity;

  for (let i in map) {
    if (map[i] > highVal) {
      highVal = map[i];
    }
    if (map[i] < lowVal) {
      lowVal = map[i];
    }
  }
  return Number(lowVal) + Number(highVal);
}

const arr = [1, 2, 2, 3, 3, 3];

const result = sumHighestAndLowestFrequency(arr);

console.log(result);
