import { TreeNode } from '../src/data-structure/models/tree-node'
import { preorderTraversal } from '../src/144.二叉树的前序遍历'
import { inorderTraversal } from '../src/94.二叉树的中序遍历'
import { postorderTraversal } from '../src/145.二叉树的后序遍历'

test('preorderTraversal', () => {
  const root = createTestingBinaryTree()

  expect(preorderTraversal(root)).toEqual([1, 2, 4, 8, 9, 5, 3, 6, 7])
})

test('inorderTraversal', () => {
  const root = createTestingBinaryTree()

  expect(inorderTraversal(root)).toEqual([8, 4, 9, 2, 5, 1, 6, 3, 7])
})

test('postorderTraversal', () => {
  const root = createTestingBinaryTree()

  expect(postorderTraversal(root)).toEqual([8, 9, 4, 5, 2, 6, 7, 3, 1])
})

/**
 * 创建测试 B 树，结构如下：
 *
 *                1
 *              /   \
 *             2     3
 *            / \   / \
 *           4  5  6   7
 *          / \
 *         8   9
 */
function createTestingBinaryTree() {
  const root = new TreeNode(1)

  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(7)
  root.left.left.left = new TreeNode(8)
  root.left.left.right = new TreeNode(9)

  return root
}
