//Sum of First N Numbers

class Solution {
  helperFn(N, sum) {
    if (N <= 0) {
      return sum;
    }
    sum += N;
    return this.helperFn(N - 1, sum);
  }
  NnumbersSum(N) {
    //your code goes here
    const sum = 0;
    const ans = this.helperFn(N, sum);
    return ans;
  }
}

const result = new Solution();

console.log(result.NnumbersSum(4));
