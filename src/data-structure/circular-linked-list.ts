export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export class LinkedList {
  count = 0
  head: ListNode | null

  constructor() {
    this.head = null
  }

  /**
   * 创建环形链表链表
   * @param nums 链表使用的数组
   * @param pos 链表尾连接到链表中的位置（索引从 0 开始）
   * @returns
   */
  createCircularListWithArray(nums: number[], pos: number) {
    this.head = new ListNode()

    if (nums.length === 0) {
      return
    }

    let h = this.head
    this.count++
    h.val = nums[0]

    for (let i = 1; i < nums.length; i++) {
      h.next = new ListNode(nums[i])
      this.count++
      h = h.next
    }

    // 设置环形链表位置
    if (pos >= 0) {
      const n = this.at(pos)
      if (n) {
        h.next = n
      }
    }
  }

  /**
   * 返回链表中的元素个数
   * @returns 元素个数
   */
  size() {
    return this.count
  }

  /**
   * 方法接收一个整数值并返回该索引的项目
   * @param index 0 和正整数
   * @returns
   */
  at(index: number) {
    let h = this.head
    for (let i = 0; i < index && h !== null; i++) {
      h = h.next
    }
    return h
  }

  /**
   * 返回链表对应的数组
   */
  toArray() {
    const res: number[] = []

    if (this.head === null) {
      return res
    }

    let h: ListNode | null = this.head

    for (let i = 0; i < this.size() && h; i++) {
      res.push(h.val)
      h = h.next
    }

    return res
  }

  /**
   * 表示指定的链表及其元素。
   * @returns 返回一个链表描述字符串。
   */
  toString() {
    if (this.head === null) {
      return ''
    }

    let str = `[${this.head.val}`
    let h = this.head.next

    for (let i = 1; i < this.size() && h !== null; i++) {
      str += `, ${h.val}`
      h = h.next
    }
    str += ']'

    return str
  }
}

const cl = new LinkedList()
cl.createCircularListWithArray([1, 2, 3, 4], 1)
// cl.head = new ListNode(3)

// console.log(cl.toString())
console.log('over')