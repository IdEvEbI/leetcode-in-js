/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const firstNums = {}
  const result = []

  for (let i = 0, len = nums.length; i < len; i++) {
    const n = nums[i]

    if (typeof firstNums[target - n] !== 'undefined') {
      result.push(firstNums[target - n], i)
    }

    firstNums[n] = i
  }

  return result
}
// @lc code=end
