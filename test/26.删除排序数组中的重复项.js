import mod from '../src/26.删除排序数组中的重复项.js';
import test from 'ava';

test('删除排序数组中的重复项', t => {

  let nums = [1, 1, 2];
  t.is(mod.removeDuplicates(nums), 2);
  t.deepEqual(nums, [1, 2, 2]);

  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  t.is(mod.removeDuplicates(nums), 5);
  t.deepEqual(nums, [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]);
});