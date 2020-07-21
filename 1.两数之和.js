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
  const map = {}

  for (let i = 0, len = nums.length; i < len; i++) {
    const n = nums[i],
      key = target - n

    if (typeof map[key] !== 'undefined' && map[key] !== i) {
      return [map[key], i]
    }

    map[n] = i
  }

  return []
}
// @lc code=end
