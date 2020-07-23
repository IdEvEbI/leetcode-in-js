/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0,
    count = 0
  let sub = ''

  for (c of s) {
    if (sub.indexOf(c) === -1) {
      sub += c
      count++

      maxLen = maxLen < count ? count : maxLen
    } else {
      sub += c
      sub = sub.slice(sub.indexOf(c) + 1)
      count = sub.length
    }
  }

  return maxLen
}
// @lc code=end
