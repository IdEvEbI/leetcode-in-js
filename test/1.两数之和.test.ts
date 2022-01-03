import { twoSum } from '../src/1.两数之和'

test('[2, 7, 11, 15] 应该返回 [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('[3, 2, 4] 应该返回 [1, 2]', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
})

test('[3, 3] 应该返回 [0, 1]', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})

test('[3, 3] 应该返回 []', () => {
  expect(twoSum([3, 3], 7)).toEqual([])
})
