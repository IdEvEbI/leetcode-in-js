/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head
  }

  let n = head
  while (n.next) {
    if (n.val === n.next.val) {
      n.next = n.next.next
    } else {
      n = n.next
    }
  }

  return head
}
// @lc code=end

export { deleteDuplicates }
