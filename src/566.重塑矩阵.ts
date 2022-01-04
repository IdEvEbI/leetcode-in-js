/*
 * @lc app=leetcode.cn id=566 lang=typescript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {

  const arr = mat.flat(mat.length)

  if (arr.length !== r * c) {
    return mat
  }

  const res: number[][] = []

  for (let i = 0; i < r; i++) {
    res.push(arr.splice(0, c) as number[])
  }

  return res
}
// @lc code=end

export { matrixReshape }
