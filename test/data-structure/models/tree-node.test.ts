import { TreeNode } from '../../../src/data-structure/models/tree-node'

test('构造函数 val 应该为 0，left & right 应该为 null', () => {
  const n = new TreeNode()

  expect(n.val).toBe(0)
  expect(n.left).toBeNull()
  expect(n.right).toBeNull()
})

test('构造函数 val 应该为 10，left & right 应该为 null', () => {
  const n = new TreeNode(10)

  expect(n.val).toBe(10)
  expect(n.left).toBeNull()
  expect(n.right).toBeNull()
})

test('构造函数 指向另外一个节点', () => {
  const root = new TreeNode(3)
  root.left = new TreeNode(1)
  root.right = new TreeNode(5)

  expect(root.val).toBe(3)
  expect(root.left.val).toBe(1)
  expect(root.right.val).toBe(5)
})
