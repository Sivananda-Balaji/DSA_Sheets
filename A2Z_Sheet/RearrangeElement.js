//2149. Rearrange Array Elements by Sign

var rearrangeArray = function (nums) {
  const positive = [];
  const negative = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }
  const answer = [];
  let i = 0,
    index = 0;
  while (i < positive.length && i < negative.length) {
    answer[index++] = positive[i];
    answer[index++] = negative[i];
    i++;
  }
  return answer;
};

const nums = [3, 1, -2, -5, 2, -4];

const result = rearrangeArray(nums);

console.log(result);
