import { LinkedList } from '../src/data-structure/circular-linked-list'
import { hasCycle } from '../src/141.环形链表'

test('head = [3, 2, 0, -4], pos = 1 return true', () => {
  const ln = new LinkedList()
  ln.createCircularListWithArray([3, 2, 0, -4], 1)

  expect(hasCycle(ln.head)).toBeTruthy
})

test('head = [1, 2], pos = 0 return true', () => {
  const ln = new LinkedList()
  ln.createCircularListWithArray([1, 2], 0)

  expect(hasCycle(ln.head)).toBeTruthy
})

test('head = [1], pos = -1 return false', () => {
  const ln = new LinkedList()
  ln.createCircularListWithArray([1], -1)

  expect(hasCycle(ln.head)).toBeFalsy
})
