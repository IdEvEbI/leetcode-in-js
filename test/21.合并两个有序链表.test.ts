import { LinkedList } from '../src/data-structure/circular-linked-list'
import { mergeTwoLists } from '../src/21.合并两个有序链表'

test('l1 = [1, 2, 4], l2 = [1, 3, 4] result is [1, 1, 2, 3, 4, 4]', () => {
  const ln1 = new LinkedList()
  const ln2 = new LinkedList()
  ln1.createCircularListWithArray([1, 2, 4], -1)
  ln2.createCircularListWithArray([1, 3, 4], -1)

  ln1.head = mergeTwoLists(ln1.head, ln2.head)
  ln1.count = 6

  expect(ln1.toArray()).toEqual([1, 1, 2, 3, 4, 4])
})

test('l1 = [], l2 = [] result is []', () => {
  const ln1 = new LinkedList()
  const ln2 = new LinkedList()
  ln1.createCircularListWithArray([], -1)
  ln2.createCircularListWithArray([], -1)

  ln1.head = mergeTwoLists(ln1.head, ln2.head)
  ln1.count = 0

  expect(ln1.toArray()).toEqual([])
})

test('l1 = [], l2 = [0] result is []', () => {
  const ln1 = new LinkedList()
  const ln2 = new LinkedList()
  ln1.createCircularListWithArray([], -1)
  ln2.createCircularListWithArray([0], -1)

  ln1.head = mergeTwoLists(ln1.head, ln2.head)
  ln1.count = 1

  expect(ln1.toArray()).toEqual([0])
})
