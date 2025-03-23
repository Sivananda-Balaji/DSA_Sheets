//121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let profit = 0,
    min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const benefit = prices[i] - min;
    profit = Math.max(benefit, profit);
    min = Math.min(min, prices[i]);
  }
  return profit;
};

const prices = [3, 2, 6, 5, 0, 3];

const result = maxProfit(prices);

console.log(result);
