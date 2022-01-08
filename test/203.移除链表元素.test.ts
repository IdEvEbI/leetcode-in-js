import { LinkedList } from '../src/data-structure/circular-linked-list'
import { removeElements } from '../src/203.移除链表元素'

test('head = [1, 2, 6, 3, 4, 5, 6], val = 6 result is [1, 2, 3, 4, 5]', () => {
  const ln = new LinkedList()
  ln.createCircularListWithArray([1, 2, 6, 3, 4, 5, 6], -1)

  ln.head = removeElements(ln.head, 6)
  ln.count = 5

  expect(ln.toArray()).toEqual([1, 2, 3, 4, 5])
})

test('head = [], val = 1 result is []', () => {
  const ln = new LinkedList()
  ln.createCircularListWithArray([], -1)

  ln.head = removeElements(ln.head, 1)
  ln.count = 0

  expect(ln.toArray()).toEqual([])
})

test('head = [7, 7, 7, 7], val = 7 result is []', () => {
  const ln = new LinkedList()
  ln.createCircularListWithArray([7, 7, 7, 7], -1)

  ln.head = removeElements(ln.head, 7)
  ln.count = 0

  expect(ln.toArray()).toEqual([])
})
