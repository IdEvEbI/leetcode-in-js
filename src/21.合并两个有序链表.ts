/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

import { ListNode } from './data-structure/models/linked-list'

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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1)
  let h = dummy

  while (list1 && list2) {
    if (list1.val < list2.val) {
      h.next = list1
      list1 = list1.next
    } else {
      h.next = list2
      list2 = list2.next
    }
    h = h.next
  }

  if (list1) {
    h.next = list1
  }
  if (list2) {
    h.next = list2
  }

  return dummy.next
}
// @lc code=end


export { mergeTwoLists }
