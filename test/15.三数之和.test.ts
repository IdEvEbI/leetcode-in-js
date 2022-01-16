import { threeSum } from '../src/15.三数之和'

test('threeSum: [-1, 0, 1, 2, -1, -4] => [[-1, -1, 2], [-1, 0, 1]]', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]])
})

test('threeSum: [] => []', () => {
  expect(threeSum([])).toEqual([])
})

test('threeSum: [0] => []', () => {
  expect(threeSum([0])).toEqual([])
})
