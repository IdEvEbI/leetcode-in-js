import { canConstruct } from '../src/383.赎金信'

test('ransomNote = "a", magazine = "b" return false', () => {
  expect(canConstruct('a', 'b')).toBeFalsy()
})

test('ransomNote = "aa", magazine = "ab" return false', () => {
  expect(canConstruct('aa', 'ab')).toBeFalsy()
})

test('ransomNote = "aa", magazine = "aab" return true', () => {
  expect(canConstruct('aa', 'aab')).toBeTruthy()
})
