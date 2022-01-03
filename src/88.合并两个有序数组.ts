/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m + n - 1; i >= 0; i--) {
    const x1 = (m - 1 >= 0) ? nums1[m - 1] : Number.MIN_SAFE_INTEGER
    const x2 = (n - 1 >= 0) ? nums2[n - 1] : Number.MIN_SAFE_INTEGER

    if (x1 > x2) {
      nums1[i] = x1
      m--
    } else {
      nums1[i] = x2
      n--
    }
  }
}

// @lc code=end

export { merge }
