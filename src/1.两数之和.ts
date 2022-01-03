/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const obj: {
    [v: number]: number
  } = {}

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]

    if ((target - v) in obj) {
      return [obj[target - v], i]
    }
    obj[v] = i
  }

  return []
}
// @lc code=end

export { twoSum }
