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
  let maxLen = 0

  for (let i = 0, len = s.length; i < len; i++) {
    let sub = s[i]
    for (let j = i + 1; j < len; j++) {
      // 判断字符串中是否包含 [j] 字符
      if (sub.indexOf(s[j]) >= 0) break

      sub += s[j]
    }

    if (sub.length > maxLen) maxLen = sub.length
  }
  return maxLen
}
// @lc code=end
