//Sum of Digits in a Given Number

class Solution {
  sumNumbers(num, sum) {
    if (num === 0) {
      if (sum < 10) {
        return sum;
      }
      return this.sumNumbers(sum, 0);
    }
    sum += num % 10;
    return this.sumNumbers(Math.floor(num / 10), sum);
  }
  addDigits(num) {
    return this.sumNumbers(num, 0);
  }
}

const result = new Solution().addDigits(529);

console.log(result);
