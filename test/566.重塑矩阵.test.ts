import { matrixReshape } from '../src/566.重塑矩阵'

test('[[1, 2], [3, 4]], 1, 4 重塑后的结果是 [[1, 2, 3, 4]]', () => {
  const mat = [[1, 2], [3, 4]]

  expect(matrixReshape(mat, 1, 4)).toEqual([[1, 2, 3, 4]])
})

test('[[1, 2], [3, 4]], 2, 4 重塑后的结果是 [[1, 2], [3, 4]]', () => {
  const mat = [[1, 2], [3, 4]]

  expect(matrixReshape(mat, 2, 4)).toEqual([[1, 2], [3, 4]])
})

// 提交时没有跑过的单元测试
test('[[1, 2], [3, 4]], 4, 1 重塑后的结果是 [[1], [2], [3], [4]]', () => {
  const mat = [[1, 2], [3, 4]]

  expect(matrixReshape(mat, 4, 1)).toEqual([[1], [2], [3], [4]])
})