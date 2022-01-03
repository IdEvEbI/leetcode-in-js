import { merge } from '../src/88.合并两个有序数组'

test('[1, 2, 3, 0, 0, 0]，[2, 5, 6] 合并后得到 [1, 2, 2, 3, 5, 6]', () => {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const nums2 =  [2, 5, 6]
  merge(nums1, 3, nums2, 3)

  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})

test('[1]，[] 合并后得到 [1]', () => {
  const nums1 = [1]
  const nums2: number[] = []
  merge(nums1, 1, nums2, 0)

  expect(nums1).toEqual([1])
})

test('[0]，[1] 合并后得到 [1]', () => {
  const nums1 = [0]
  const nums2 = [1]
  merge(nums1, 0, nums2, 1)

  expect(nums1).toEqual([1])
})

// 提交时没有跑过的单元测试
test('[-1, 0, 0, 3, 3, 3, 0, 0, 0]，[1, 2, 2] 合并后得到 [-1, 0, 0, 1, 2, 2, 3, 3, 3]', () => {
  const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
  const nums2 = [1, 2, 2]
  merge(nums1, 6, nums2, 3)

  expect(nums1).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3])
})
