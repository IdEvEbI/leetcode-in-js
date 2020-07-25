/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  // 1. 计算最大值和求和（二分查找范围）
  const numsMaxSum = () => {
    let max = 0,
      sum = 0
    for (let i = 0, len = nums.length; i < len; i++) {
      if (nums[i] > max) max = nums[i]
      sum += nums[i]
    }
    return [max, sum]
  }

  // 2. 测试中点大小
  const checkMid = (mid) => {
    let sum = 0,
      cnt = 1
    for (let i = 0, len = nums.length; i < len; i++) {
      if (sum + nums[i] > mid) {
        cnt++
        sum = nums[i]
      } else {
        sum += nums[i]
      }
    }
    return cnt <= m
  }

  // 3. 二份查找
  let [left, right] = numsMaxSum()

  while (left < right) {
    let mid = Math.floor((left + right) * 0.5)

    if (checkMid(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
// @lc code=end

let nums = [1, 2147483646]
const m = 1

console.log(splitArray(nums, m))
