import { intersect } from '../src/350.两个数组的交集-ii'

test('[1, 2, 2, 1]，[2, 2] 的交集是 [2, 2]', () => {
  const nums1 = [1, 2, 2, 1]
  const nums2 = [2, 2]

  expect(intersect(nums1, nums2)).toEqual([2, 2])
})

test('[4, 9, 5]，[9, 4, 9, 8, 4] 的交集是 [4, 9]', () => {
  const nums1 = [4, 9, 5]
  const nums2 = [9, 4, 9, 8, 4]

  expect(intersect(nums1, nums2)).toEqual([4, 9])
})
