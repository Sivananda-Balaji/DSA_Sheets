//2149. Rearrange Array Elements by Sign

var rearrangeArray = function (nums) {
  const answer = [];
  let pos = 0,
    neg = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      answer[pos] = nums[i];
      pos += 2;
    } else {
      answer[neg] = nums[i];
      neg += 2;
    }
  }
  return answer;
};

const nums = [3, 1, -2, -5, 2, -4];

const result = rearrangeArray(nums);

console.log(result);
