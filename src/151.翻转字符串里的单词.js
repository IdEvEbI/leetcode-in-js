/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
}
// @lc code=end

/**
 * 解法一：倒序遍历
 * 
 * @param {*} s 
 */
var reverseWords1 = function (s) {
  let words = []

  let end = s.length
  let start = s.length
  // 倒序遍历数组
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      start = i
    } else {
      if (end > start) {
        words.push(s.substring(start, end))
      }
      start = i
      end = i
    }
  }
  if (end > start) {
    words.push(s.substring(start, end))
  }

  return words.join(' ')
}

export default { reverseWords, reverseWords1 }
