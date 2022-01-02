import { containsDuplicate } from '../src/217.存在重复元素'

test('[1, 2, 3, 1] 应该返回 true', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy()
})

test('[1, 2, 3, 4] 应该返回 false', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy()
})

test('[1, 1, 1, 3, 3, 4, 3, 2, 4, 2] 应该返回 true', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy()
})
