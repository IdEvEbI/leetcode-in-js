/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length

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

  const len = nums1.length
  if (len % 2 === 0 && len >= 2) {
    const x = Math.floor(len / 2) - 1
    return (nums1[x] + nums1[x + 1]) * 0.5
  } else if (len % 2 !== 0) {
    return nums1[Math.floor(len / 2)]
  } else {
    return undefined
  }
}
// @lc code=end

nums1 = [2]
nums2 = [1]

console.log(findMedianSortedArrays(nums1, nums2))
