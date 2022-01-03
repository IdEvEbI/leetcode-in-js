/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []

  if (nums1.length > nums2.length) {
    [nums2, nums1] = [nums1, nums2]
  }

  nums1.forEach(v => {
    const idx = nums2.indexOf(v)

    if (idx !== -1) {
      res.push(v)

      nums2.splice(idx, 1)
    }
  })

  return res
}
// @lc code=end

export { intersect }
