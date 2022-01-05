/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length, n = matrix[0].length
  const rows = new Set<number>()
  const cols = new Set<number>()

  // 1. 遍历数组，提取坐标为 0 的行和列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  // 2. 遍历集合
  rows.forEach((r) => {
    for (let j = 0; j < n; j++) {
      matrix[r][j] = 0
    }
  })
  cols.forEach((c) => {
    for (let i = 0; i < m; i++) {
      matrix[i][c] = 0
    }
  })
}
// @lc code=end

export { setZeroes }
