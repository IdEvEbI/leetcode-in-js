/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let single = 0
  for (const n of nums) {
    // 两个相同的数，异或结果为 0
    single = single ^ n
  }
  return single
}
// @lc code=end

export { singleNumber }
