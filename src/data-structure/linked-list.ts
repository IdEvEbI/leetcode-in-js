import { ListNode } from './models/linked-list'

export class LinkedList {
  private _count = 0
  head: ListNode | null = null

  push(val: number) {
    const n = new ListNode(val)

    if (this.head === null) {
      this.head = n
    } else {
      let h = this.head

      while (h.next) {
        h = h.next
      }

      h.next = n
    }
    this._count++
  }

  insert(val: number, pos: number): boolean {
    if (pos < 0 || pos >= this._count) {
      return false
    }

    const n = new ListNode(val)
    if (pos === 0) {
      [n.next, this.head] = [this.head, n]
      this._count++

      return true
    }

    const pre = this.getElementAt(pos - 1)
    n.next = pre!.next
    pre!.next = n

    this._count++
    return true
  }

  getElementAt(pos: number) {
    if (pos < 0 || pos >= this._count) {
      return null
    }
    let h = this.head
    for (let i = 0; i < pos && h; i++) {
      h = h.next
    }
    return h
  }

  indexOf(val: number) {
    let h = this.head

    for (let i = 0; i < this.size() && h != null; i++) {
      if (val === h.val) {
        return i
      }

      h = h.next
    }

    return -1
  }

  removeAt(pos: number) {
    if (pos < 0 || pos >= this._count) {
      return -1
    }

    let h = this.head

    if (pos === 0 && h) {
      this.head = h.next
    } else {
      const pre = this.getElementAt(pos - 1)

      if (pre) {
        h = pre.next
        pre.next = h?.next ?? null
      }
    }
    this._count--
    return h?.val
  }

  remove(val: number) {
    return this.removeAt(this.indexOf(val))
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this._count
  }

  clear() {
    this.head = null
    this._count = 0
  }

  toString() {
    if (!this.head) {
      return ''
    }

    let str = `${this.head.val}`
    let h = this.head.next

    for (let i = 1; i < this.size() && h != null; i++) {
      str += `,${h.val}`
      h = h.next
    }

    return str
  }
}
