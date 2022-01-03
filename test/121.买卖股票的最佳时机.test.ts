import { maxProfit } from '../src/121.买卖股票的最佳时机'

test('[7, 1, 5, 3, 6, 4] 的收益是 5', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('[7, 6, 4, 3, 1] 的收益是 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})
