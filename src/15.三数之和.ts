/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  const len = nums.length

  if (len < 3) {
    return res
  }
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      break
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = len - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])

        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      }
    }
  }

  return res
}
// @lc code=end

// console.log(threeSum([]))
// console.log(threeSum([0]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

export { threeSum }
