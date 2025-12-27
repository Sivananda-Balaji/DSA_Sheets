//House Robber

class Solution {
  robHouse(money) {
    const dp = [];
    dp[0] = money[0];
    dp[1] = Math.max(money[0], money[1]);
    for (let i = 2; i < money.length; i++) {
      dp[i] = Math.max(money[i] + dp[i - 2], dp[i - 1]);
    }
    return dp.at(-1);
  }
  houseRobber(money) {
    const len = money.length;
    if (len === 1) {
      return money[0];
    }
    if (len === 2) {
      return Math.max(money[0], money[1]);
    }
    const case1 = this.robHouse(money.slice(0, len - 1));
    const case2 = this.robHouse(money.slice(1));
    return Math.max(case1, case2);
  }
}

const result = new Solution();

console.log(result.houseRobber([1, 5, 2, 1, 6]));
