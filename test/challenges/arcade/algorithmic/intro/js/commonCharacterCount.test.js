'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 10. commonCharacterCount'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const commonCharacterCount = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For commonCharacterCount("aabcc", "adcaa"), the output should be 3', () => {
    expect(commonCharacterCount('aabcc', 'adcaa')).toBe(3);
  });
});
describe('Test 2', () => {
  it('For commonCharacterCount("zzzz", "zzzzzzz"), the output should be 4', () => {
    expect(commonCharacterCount('zzzz', 'zzzzzzz')).toBe(4);
  });
});
describe('Test 3', () => {
  it('For commonCharacterCount("abca", "xyzbac"), the output should be 3', () => {
    expect(commonCharacterCount('abca', 'xyzbac')).toBe(3);
  });
});
describe('Test 4', () => {
  it('For commonCharacterCount("a", "b"), the output should be 0', () => {
    expect(commonCharacterCount('a', 'b')).toBe(0);
  });
});
describe('Test 5', () => {
  it('For commonCharacterCount("a", "aaa"), the output should be 1', () => {
    expect(commonCharacterCount('a', 'aaa')).toBe(1);
  });
});
