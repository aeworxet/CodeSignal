'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 13. reverseInParentheses'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const reverseInParentheses = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For reverseInParentheses("(bar)"), the output should be "rab"', () => {
    expect(reverseInParentheses('(bar)')).toBe('rab');
  });
});
describe('Test 2', () => {
  it('For reverseInParentheses("foo(bar)baz"), the output should be "foorabbaz"', () => {
    expect(reverseInParentheses('foo(bar)baz')).toBe('foorabbaz');
  });
});
describe('Test 3', () => {
  it('For reverseInParentheses("foo(bar)baz(blim)"), the output should be "foorabbazmilb"', () => {
    expect(reverseInParentheses('foo(bar)baz(blim)')).toBe('foorabbazmilb');
  });
});
describe('Test 4', () => {
  it('For reverseInParentheses("foo(bar(baz))blim"), the output should be "foobazrabblim"', () => {
    expect(reverseInParentheses('foo(bar(baz))blim')).toBe('foobazrabblim');
  });
});
describe('Test 5', () => {
  it('For reverseInParentheses(""), the output should be ""', () => {
    expect(reverseInParentheses('')).toBe('');
  });
});
describe('Test 6', () => {
  it('For reverseInParentheses("()"), the output should be ""', () => {
    expect(reverseInParentheses('()')).toBe('');
  });
});
describe('Test 7', () => {
  it('For reverseInParentheses("(abc)d(efg)"), the output should be "cbadgfe"', () => {
    expect(reverseInParentheses('(abc)d(efg)')).toBe('cbadgfe');
  });
});
describe('Test 8', () => {
  it('For reverseInParentheses("foobarbaz"), the output should be "foobarbaz"', () => {
    expect(reverseInParentheses('foobarbaz')).toBe('foobarbaz');
  });
});
describe('Test 9', () => {
  it('For reverseInParentheses("(())(((())))"), the output should be ""', () => {
    expect(reverseInParentheses('(())(((())))')).toBe('');
  });
});
describe('Test 10', () => {
  it('For reverseInParentheses("((bar))"), the output should be "bar"', () => {
    expect(reverseInParentheses('((bar))')).toBe('bar');
  });
});
describe('Test 11', () => {
  it('For reverseInParentheses("wi(ez)(((il)))(en)"), the output should be "wizeline"', () => {
    expect(reverseInParentheses('wi(ez)(((il)))(en)')).toBe('wizeline');
  });
});
describe('Test 12', () => {
  it('For reverseInParentheses("foo()bar"), the output should be "foobar"', () => {
    expect(reverseInParentheses('foo()bar')).toBe('foobar');
  });
});
describe('Test 13', () => {
  it('For reverseInParentheses("abc((ghi((mno((stu((xyz)wv))rqp))lkj))fed)"), the output should be "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(
      reverseInParentheses('abc((ghi((mno((stu((xyz)wv))rqp))lkj))fed)')
    ).toBe('abcdefghijklmnopqrstuvwxyz');
  });
});
describe('Test 14', () => {
  it('For reverseInParentheses("abc((ghi((mno((stu((xyz)wv))rqp))lkj))fed)((abcd))"), the output should be "abcdefghijklmnopqrstuvwxyzabcd"', () => {
    expect(
      reverseInParentheses('abc((ghi((mno((stu((xyz)wv))rqp))lkj))fed)((abcd))')
    ).toBe('abcdefghijklmnopqrstuvwxyzabcd');
  });
});
