import { LinkedList } from '../src/data-structure/linked-list'
import { mergeTwoLists } from '../src/21.合并两个有序链表'

test('l1 = [1, 2, 4], l2 = [1, 3, 4] result is [1, 1, 2, 3, 4, 4]', () => {
  const ln1 = createLinkedList([1, 2, 4])
  const ln2 = createLinkedList([1, 3, 4])

  let r = mergeTwoLists(ln1.head, ln2.head)

  for (const v of [1, 1, 2, 3, 4, 4]) {
    expect(r?.val).toEqual(v)
    r = r?.next ?? null
  }
})

test('l1 = [], l2 = [] result is []', () => {
  const ln1 = createLinkedList([])
  const ln2 = createLinkedList([])

  const r = mergeTwoLists(ln1.head, ln2.head)

  expect(r?.val).toBeUndefined()
  expect(r?.next).toBeUndefined()
})

test('l1 = [], l2 = [0] result is []', () => {
  const ln1 = createLinkedList([])
  const ln2 = createLinkedList([0])

  const r = mergeTwoLists(ln1.head, ln2.head)

  expect(r?.val).toBe(0)
  expect(r?.next).toBeNull()
})

function createLinkedList(arr: number[]) {
  const ln = new LinkedList()

  for (const v of arr) {
    ln.push(v)
  }

  return ln
}
