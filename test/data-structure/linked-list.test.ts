import { LinkedList } from '../../src/data-structure/linked-list'

const ln = new LinkedList<number>()

test('test isEmpty: 新链表不为空', () => {
  expect(ln.isEmpty()).toBeTruthy()
})

test('test size: 新链表的尺寸应该为 0', () => {
  expect(ln.size()).toBe(0)
})

test('test toString: 新链表的描述字符串为 ``', () => {
  expect(ln.toString()).toBe('')
})

test('test push: 追加元素，检测链表长度', () => {
  [4, 5, 6].forEach((v, i) => {
    ln.push(v)
    expect(ln.size()).toBe(i + 1)
  })
})

test('test insert: 插入元素，检测链表长度', () => {
  [1, 2, 3].forEach((v, i) => {
    ln.insert(v, i)
    expect(ln.size()).toBe(i + 4)
  })

  expect(ln.insert(99, 99)).toBeFalsy()
})

test('test getElementAt: 从列表获取元素', () => {
  for (let i = 0; i < ln.size(); i++) {
    const n = ln.getElementAt(i)
    expect(n?.val).toBe(i + 1)
  }

  const n = ln.getElementAt(99)
  expect(n).toBeNull()
})

test('test indexOf: 获取值索引', () => {
  for (let i = 0; i < ln.size(); i++) {
    const idx = ln.indexOf(i + 1)
    expect(idx).toBe(i)
  }

  const idx = ln.indexOf(999)
  expect(idx).toBe(-1)
})

test('test removeAt: 删除指定位置的值', () => {
  for (let i = 0; i < 3; i++) {
    // 删除链表头部元素
    const val = ln.removeAt(0)

    expect(val).toBe(i + 1)
  }
})

test('test remove: 删除指定位置的值', () => {
  expect(ln.remove(6)).toBe(6)
  expect(ln.remove(99)).toBe(-1)
})

test('test toString: 链表描述字符串', () => {
  expect(Array.from(ln.toString().split(','), e => parseInt(e))).toEqual([4, 5])
})

test('test clear: 清空链表', () => {
  ln.clear()
  expect(ln.head).toBeNull()
  expect(ln.size()).toBe(0)
})
