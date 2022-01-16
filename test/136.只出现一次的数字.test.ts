import { singleNumber } from '../src/136.只出现一次的数字'

test('singleNumber: [2, 2, 1] => 1', () => {
  expect(singleNumber([2, 2, 1])).toBe(1)
})

test('singleNumber: [4,1,2,1,2] => 1', () => {
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})
