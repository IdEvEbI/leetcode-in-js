import mod from '../src/11.盛最多水的容器.js';
import test from 'ava';

test('盛最多水的容器', t => {
  t.is(mod.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
  t.is(mod.maxArea([1, 1]), 1)
  t.is(mod.maxArea([4, 3, 2, 1, 4]), 16)
  t.is(mod.maxArea([1, 2, 1]), 2)
})