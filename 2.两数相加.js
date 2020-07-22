/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const h = new ListNode(0)
  let p = h,
    d = 0

  while (l1 || l2) {
    // 取值
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0

    // 求和
    const sum = v1 + v2 + d
    // 进位
    d = Math.floor(sum / 10)

    // 新建节点
    p.next = new ListNode(sum % 10)
    p = p.next

    // 遍历链表
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  // 进制处理
  if (d > 0 && p) p.next = new ListNode(d)

  return h.next
}
// @lc code=end
