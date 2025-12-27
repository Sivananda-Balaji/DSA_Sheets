// Climbing stairs

class Solution {
  climbStairs(n) {
    let prev0 = 1;
    let prev1 = 1;
    for (let i = 2; i <= n; i++) {
      let curr = prev0 + prev1;
      prev0 = prev1;
      prev1 = curr;
    }
    return prev1;
  }
}

const result = new Solution();

console.log(result.climbStairs(3));
