/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  return nums.sort()[Math.floor(nums.length / 2)]
}
// @lc code=end

console.log(majorityElement([3, 2, 3, 3]))

export { majorityElement }
