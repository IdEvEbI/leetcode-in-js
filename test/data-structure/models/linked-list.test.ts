import { ListNode } from '../../../src/data-structure/models/linked-list'

test('构造函数 val 和 next 都应该为 null', () => {
  const n = new ListNode<number>()

  expect(n.val).toBeNull()
  expect(n.next).toBeNull()
})

test('构造函数 val 应该为 10 next 应该为 null', () => {
  const n = new ListNode<number>(10)

  expect(n.val).toBe(10)
  expect(n.next).toBeNull()
})

test('构造函数 指向另外一个节点', () => {
  const p = new ListNode<number>(1)
  const n = new ListNode<number>(10, p)

  expect(n.next).toEqual(p)
})
