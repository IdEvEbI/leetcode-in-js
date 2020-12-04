import mod from '../src/151.翻转字符串里的单词.js'
import test from "ava"

test('翻转字符串里的单词（方法 2）', t => {
  t.is(mod.reverseWords('the sky is blue'), 'blue is sky the')
  t.is(mod.reverseWords('  hello world!  '), 'world! hello')
  t.is(mod.reverseWords('a good   example'), 'example good a')
  t.is(mod.reverseWords('  Bob    Loves  Alice   '), 'Alice Loves Bob')
  t.is(mod.reverseWords('Alice does not even like bob'), 'bob like even not does Alice')
})

test('翻转字符串里的单词（方法 1）', t => {
  t.is(mod.reverseWords1('the sky is blue'), 'blue is sky the')
  t.is(mod.reverseWords1('  hello world!  '), 'world! hello')
  t.is(mod.reverseWords1('a good   example'), 'example good a')
  t.is(mod.reverseWords1('  Bob    Loves  Alice   '), 'Alice Loves Bob')
  t.is(mod.reverseWords1('Alice does not even like bob'), 'bob like even not does Alice')
})
