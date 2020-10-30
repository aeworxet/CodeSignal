/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 3. checkPalindrome'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const checkPalindrome = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For checkPalindrome("aabaa"), the output should be true', () => {
    expect(checkPalindrome('aabaa')).toBe(true);
  });
});
describe('Test 2', () => {
  it('For checkPalindrome("abac"), the output should be false', () => {
    expect(checkPalindrome('abac')).toBe(false);
  });
});
describe('Test 3', () => {
  it('For checkPalindrome("a"), the output should be true', () => {
    expect(checkPalindrome('a')).toBe(true);
  });
});
describe('Test 4', () => {
  it('For checkPalindrome("az"), the output should be false', () => {
    expect(checkPalindrome('az')).toBe(false);
  });
});
describe('Test 5', () => {
  it('For checkPalindrome("abacaba"), the output should be true', () => {
    expect(checkPalindrome('abacaba')).toBe(true);
  });
});
describe('Test 6', () => {
  it('For checkPalindrome("z"), the output should be true', () => {
    expect(checkPalindrome('z')).toBe(true);
  });
});
describe('Test 7', () => {
  it('For checkPalindrome("aaabaaaa"), the output should be false', () => {
    expect(checkPalindrome('aaabaaaa')).toBe(false);
  });
});
describe('Test 8', () => {
  it('For checkPalindrome("zzzazzazz"), the output should be false', () => {
    expect(checkPalindrome('zzzazzazz')).toBe(false);
  });
});
describe('Test 9', () => {
  it('For checkPalindrome("hlbeeykoqqqqokyeeblh"), the output should be true', () => {
    expect(checkPalindrome('hlbeeykoqqqqokyeeblh')).toBe(true);
  });
});
describe('Test 10', () => {
  it('For checkPalindrome("hlbeeykoqqqokyeeblh"), the output should be true', () => {
    expect(checkPalindrome('hlbeeykoqqqokyeeblh')).toBe(true);
  });
});
