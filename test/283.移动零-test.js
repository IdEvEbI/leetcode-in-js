import mod from '../src/283.移动零.js'
import test from 'ava'

test('移动零', t => {
  let nums = [0, 1, 0, 3, 12];
  mod.moveZeroes(nums);
  t.deepEqual(nums, [1, 3, 12, 0, 0]);

  nums = [0, 0, 0, 1];
  mod.moveZeroes(nums);
  t.deepEqual(nums, [1, 0, 0, 0]);
})
