/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = 10000
  let profit = 0

  for (const p of prices) {
    if (p < minPrice) {
      minPrice = p
    }
    if (p - minPrice > profit) {
      profit = p - minPrice
    }
  }

  return profit
}
// @lc code=end

export { maxProfit }
