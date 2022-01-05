/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {

  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const boxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const n = board[i][j].charCodeAt(0) - '0'.charCodeAt(0) - 1

      if (n < 0) {
        continue
      }

      rows[i][n]++
      cols[j][n]++
      boxes[Math.floor(i / 3)][Math.floor(j / 3)][n]++

      if (rows[i][n] > 1
        || cols[j][n] > 1
        || boxes[Math.floor(i / 3)][Math.floor(j / 3)][n] > 1) {

        return false
      }
    }
  }

  return true
}
// @lc code=end

export { isValidSudoku }
