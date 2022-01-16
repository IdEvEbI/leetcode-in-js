import { majorityElement } from '../src/169.多数元素'

test('majorityElement: [3, 2, 3] => 3', () => {
  expect(majorityElement([3, 2, 3])).toBe(3)
})
test('majorityElement: [2, 2, 1, 1, 1, 2, 2] => 3', () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
})
