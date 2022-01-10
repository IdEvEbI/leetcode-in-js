import { LinkedList } from '../src/data-structure/linked-list'
import { hasCycle } from '../src/141.环形链表'

test('head = [3, 2, 0, -4], pos = 1 return true', () => {

  const ln = createCircularList([3, 2, 0, -4], 1)

  expect(hasCycle(ln.head)).toBeTruthy
})

test('head = [1, 2], pos = 0 return true', () => {
  const ln = createCircularList([1, 2], 0)

  expect(hasCycle(ln.head)).toBeTruthy
})

test('head = [1], pos = -1 return false', () => {
  const ln = createCircularList([1], -1)

  expect(hasCycle(ln.head)).toBeFalsy
})

function createCircularList(arr: number[], pos: number) {
  const ln = new LinkedList()

  for (const v of arr) {
    ln.push(v)
  }

  if (pos >= 0 && pos < ln.size()) {
    const nTail = ln.getElementAt(arr.length - 1)
    nTail!.next = ln.getElementAt(pos)
  }

  return ln
}
