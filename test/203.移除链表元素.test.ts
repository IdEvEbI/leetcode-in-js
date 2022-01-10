import { LinkedList } from '../src/data-structure/linked-list'
import { removeElements } from '../src/203.移除链表元素'

test('head = [1, 2, 6, 3, 4, 5, 6], val = 6 result is [1, 2, 3, 4, 5]', () => {
  const ln = createLinkedList([1, 2, 6, 3, 4, 5, 6])
  let r = removeElements(ln.head, 6)

  for (const v of [1, 2, 3, 4, 5]) {
    expect(r?.val).toEqual(v)
    r = r?.next ?? null
  }
})

test('head = [], val = 1 result is []', () => {
  const ln = createLinkedList([])
  const r = removeElements(ln.head, 1)

  expect(r?.val).toBeUndefined()
  expect(r?.next).toBeUndefined()
})

test('head = [7, 7, 7, 7], val = 7 result is []', () => {
  const ln = createLinkedList([7, 7, 7, 7])
  const r = removeElements(ln.head, 7)

  expect(r?.val).toBeUndefined()
  expect(r?.next).toBeUndefined()
})

function createLinkedList(arr: number[]) {
  const ln = new LinkedList()

  for (const v of arr) {
    ln.push(v)
  }

  return ln
}
