import { LinkedList } from '../src/data-structure/linked-list'
import { deleteDuplicates } from '../src/83.删除排序链表中的重复元素'


test('[1, 1, 2] => [1, 2]', () => {
  let r = deleteDuplicates(createLinkedList([1, 1, 2]).head)

  for (const v of [1, 2]) {
    expect(r?.val).toEqual(v)
    r = r?.next ?? null
  }
})

test('[1, 1, 2, 3, 3] => [1, 2, 3]', () => {
  let r = deleteDuplicates(createLinkedList([1, 1, 2, 3, 3]).head)

  for (const v of [1, 2, 3]) {
    expect(r?.val).toEqual(v)
    r = r?.next ?? null
  }
})

test('[] => []', () => {
  const r = deleteDuplicates(createLinkedList([]).head)

  expect(r).toBeNull()
})

function createLinkedList(arr: number[]) {
  const ln = new LinkedList()

  for (const v of arr) {
    ln.push(v)
  }

  return ln
}
