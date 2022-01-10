/**
 * 链表节点
 */
export class ListNode<T> {
  val: T | null
  next: ListNode<T> | null

  constructor(val?: T, next?: ListNode<T>) {
    this.val = (val === undefined) ? null : val
    this.next = (next === undefined) ? null : next
  }
}
