import { firstUniqChar } from '../src/387.字符串中的第一个唯一字符'

test('leetcode 第一个唯一字符是位置 0', () => {
  expect(firstUniqChar('leetcode')).toBe(0)
})

test('loveleetcode 第一个唯一字符是位置 2', () => {
  expect(firstUniqChar('loveleetcode')).toBe(2)
})
