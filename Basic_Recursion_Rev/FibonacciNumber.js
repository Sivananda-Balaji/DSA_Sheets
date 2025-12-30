//Fibonacci Number

class Solution {
  fibCalc(n, map) {
    if (n < 2) {
      return n;
    }
    if (map[n]) {
      return map[n];
    }
    map[n] = this.fibCalc(n - 1, map) + this.fibCalc(n - 2, map);
    return map[n];
  }
  fib(n) {
    return this.fibCalc(n, {});
  }
}

const result = new Solution().fib(6);

console.log(result);
