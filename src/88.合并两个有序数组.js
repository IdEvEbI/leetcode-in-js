/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m + n - 1; i >= 0; i--) {
    const x1 = m - 1 >= 0 ? nums1[m - 1] : Number.MIN_SAFE_INTEGER
    const x2 = n - 1 >= 0 ? nums2[n - 1] : Number.MIN_SAFE_INTEGER

    if (x2 > x1) {
      nums1[i] = x2
      n--
    } else {
      nums1[i] = x1
      m--
    }
  }
}
// @lc code=end
let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0],
  m = 6
let nums2 = [1, 2, 2],
  n = 3

merge(nums1, m, nums2, n)
console.log(nums1)
