import { maxSubArray } from '../src/53.最大子数组和'

test('[-2, 1, -3, 4, -1, 2, 1, -5, 4] 最大和应该是 6', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})

test('[1] 最大和应该是 1', () => {
  expect(maxSubArray([1])).toBe(1)
})

test('[5, 4, -1, 7, 8] 最大和应该是 23', () => {
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
})
