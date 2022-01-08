/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

import { ListNode } from './data-structure/circular-linked-list'

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false
  }

  let slow: ListNode | null = head
  let fast: ListNode | null = head.next

  while (fast) {
    if (!fast.next) {
      return false
    }

    slow = slow?.next ?? null
    fast = fast.next.next

    if (fast === slow) {
      return true
    }
  }
  return false
}
// @lc code=end

export { hasCycle }
