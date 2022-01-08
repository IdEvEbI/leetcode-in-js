/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {

  if (s.length !== t.length) {
    return false
  }

  const count: number[] = new Array(26).fill(0)

  for (const ch of s) {
    count[ch.charCodeAt(0) - 97]++
  }
  for (const ch of t) {
    if (--count[ch.charCodeAt(0) - 97] < 0) {
      return false
    }
  }

  return true
}
// @lc code=end

export { isAnagram }
