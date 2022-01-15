import { LinkedList } from '../src/data-structure/linked-list'
import { reverseList } from '../src/206.反转链表'

test('[1, 2, 3, 4, 5] => [5, 4, 3, 2, 1] ', () => {
  const ln = createLinkedList([1, 2, 3, 4, 5])
  let r = reverseList(ln.head)

  for (const v of [5, 4, 3, 2, 1]) {
    expect(r?.val).toEqual(v)
    r = r?.next ?? null
  }
})

test('[1, 2] => [2, 1] ', () => {
  const ln = createLinkedList([1, 2])
  let r = reverseList(ln.head)

  for (const v of [2, 1]) {
    expect(r?.val).toEqual(v)
    r = r?.next ?? null
  }
})

test('[] => [] ', () => {
  const ln = createLinkedList([])
  const r = reverseList(ln.head)

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
