/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(-1)
  dummy.next = head
  let h = dummy

  while (h.next) {
    if (h.next.val === val) {
      h.next = h.next?.next || null
    } else {
      h = h.next
    }
  }

  return dummy.next
}
// @lc code=end

export { removeElements }
