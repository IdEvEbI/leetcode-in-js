import { isAnagram } from '../src/242.有效的字母异位词'

test('s = "anagram", t = "nagaram" return true', () => {
  expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
})

test('s = "rat", t = "car" return false', () => {
  expect(isAnagram('rat', 'car')).toBeFalsy()
})
