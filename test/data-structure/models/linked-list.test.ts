import { ListNode } from '../../../src/data-structure/models/linked-list'

test('构造函数 val 应该为 0，next 应该为 null', () => {
  const n = new ListNode()

  expect(n.val).toBe(0)
  expect(n.next).toBeNull()
})

test('构造函数 val 应该为 10 next 应该为 null', () => {
  const n = new ListNode(10)

  expect(n.val).toBe(10)
  expect(n.next).toBeNull()
})

test('构造函数 指向另外一个节点', () => {
  const p = new ListNode(1)
  const n = new ListNode(10, p)

  expect(n.next).toEqual(p)
})
