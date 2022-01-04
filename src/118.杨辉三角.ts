/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const res: number[][] = Array.from(new Array<number[]>(numRows), () => [])

  for (let i = 0; i < numRows; i++) {
    res[i][0] = 1
    res[i][i] = 1

    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }

  return res
}
// @lc code=end

export { generate }
