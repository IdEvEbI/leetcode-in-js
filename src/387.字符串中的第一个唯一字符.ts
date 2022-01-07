/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {

  const count: number[] = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - 97] === 1) {
      return i
    }
  }

  return -1
}
// @lc code=end

export { firstUniqChar }
