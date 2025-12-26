//Factorial of a Given Number

class Solution {
  factorialSum(n, product) {
    if (n <= 1) {
      return product;
    }
    product *= n;
    return this.factorialSum(n - 1, product);
  }
  factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
      throw new Error("Please provide a non-negtive integer");
    }
    const ans = this.factorialSum(n, 1);
    return ans;
  }
}

const result = new Solution();

console.log(result.factorial(3));
