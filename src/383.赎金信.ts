/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const arr1: number[] = new Array(26).fill(0)
  const arr2: number[] = new Array(26).fill(0)

  for (const ch of ransomNote) {
    arr1[ch.charCodeAt(0) - 97]++
  }
  for (const ch of magazine) {
    arr2[ch.charCodeAt(0) - 97]++
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return false
    }
  }

  return true
}
// @lc code=end

export { canConstruct }
