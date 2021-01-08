import mod from '../src/509.斐波那契数.js';
import test from 'ava';

test('斐波那契数', t => {
  t.is(mod.fibRecursion(0), 0);
  t.is(mod.fibRecursion(1), 1);
  t.is(mod.fibRecursion(2), 1);
  t.is(mod.fibRecursion(3), 2);
  t.is(mod.fibRecursion(4), 3);
  t.is(mod.fibRecursion(5), 5);
  t.is(mod.fibRecursion(6), 8);
  t.is(mod.fibRecursion(7), 13);
  t.is(mod.fibRecursion(8), 21);
  t.is(mod.fibRecursion(9), 34);
  t.is(mod.fibRecursion(10), 55);

  t.is(mod.fib(0), 0);
  t.is(mod.fib(1), 1);
  t.is(mod.fib(2), 1);
  t.is(mod.fib(3), 2);
  t.is(mod.fib(4), 3);
  t.is(mod.fib(5), 5);
  t.is(mod.fib(6), 8);
  t.is(mod.fib(7), 13);
  t.is(mod.fib(8), 21);
  t.is(mod.fib(9), 34);
  t.is(mod.fib(10), 55);
});
