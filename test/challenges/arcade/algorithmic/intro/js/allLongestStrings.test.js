'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 9. allLongestStrings'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const allLongestStrings = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]), the output should be ["aba", "vcd", "aba"]', () => {
    expect(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba'])).toStrictEqual([
      'aba',
      'vcd',
      'aba',
    ]);
  });
});
describe('Test 2', () => {
  it('For allLongestStrings(["aa"]), the output should be ["aa"]', () => {
    expect(allLongestStrings(['aa'])).toStrictEqual(['aa']);
  });
});
describe('Test 3', () => {
  it('For allLongestStrings(["abc", "eeee", "abcd", "dcd"]), the output should be ["eeee", "abcd"]', () => {
    expect(allLongestStrings(['abc', 'eeee', 'abcd', 'dcd'])).toStrictEqual([
      'eeee',
      'abcd',
    ]);
  });
});
describe('Test 4', () => {
  it('For allLongestStrings(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]), the output should be ["zzzzzz", "abcdef", "aaaaaa"]', () => {
    expect(
      allLongestStrings([
        'a',
        'abc',
        'cbd',
        'zzzzzz',
        'a',
        'abcdef',
        'asasa',
        'aaaaaa',
      ])
    ).toStrictEqual(['zzzzzz', 'abcdef', 'aaaaaa']);
  });
});
describe('Test 5', () => {
  it('For allLongestStrings(["enyky", "benyky", "yely", "varennyky"]), the output should be ["varennyky"]', () => {
    expect(
      allLongestStrings(['enyky', 'benyky', 'yely', 'varennyky'])
    ).toStrictEqual(['varennyky']);
  });
});
describe('Test 6', () => {
  it('For allLongestStrings(["abacaba", "abacab", "abac", "xxxxxx"]), the output should be ["abacaba"]', () => {
    expect(
      allLongestStrings(['abacaba', 'abacab', 'abac', 'xxxxxx'])
    ).toStrictEqual(['abacaba']);
  });
});
describe('Test 7', () => {
  it('For allLongestStrings(["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"]), the output should be ["yooooooung", "watermelon"]', () => {
    expect(
      allLongestStrings([
        'young',
        'yooooooung',
        'hot',
        'or',
        'not',
        'come',
        'on',
        'fire',
        'water',
        'watermelon',
      ])
    ).toStrictEqual(['yooooooung', 'watermelon']);
  });
});
describe('Test 8', () => {
  it('For allLongestStrings(["onsfnib", "aokbcwthc", "jrfcw"]), the output should be ["aokbcwthc"]', () => {
    expect(allLongestStrings(['onsfnib', 'aokbcwthc', 'jrfcw'])).toStrictEqual([
      'aokbcwthc',
    ]);
  });
});
describe('Test 9', () => {
  it('For allLongestStrings(["lbgwyqkry"]), the output should be ["lbgwyqkry"]', () => {
    expect(allLongestStrings(['lbgwyqkry'])).toStrictEqual(['lbgwyqkry']);
  });
});
describe('Test 10', () => {
  it('For allLongestStrings(["i"]), the output should be ["i"]', () => {
    expect(allLongestStrings(['i'])).toStrictEqual(['i']);
  });
});
