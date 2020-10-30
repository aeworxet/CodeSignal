'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 2. Largest Number'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const largestNumber = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For largestNumber(2), the output should be 99', () => {
    expect(largestNumber(2)).toBe(99);
  });
});
describe('Test 2', () => {
  it('For largestNumber(1), the output should be 9', () => {
    expect(largestNumber(1)).toBe(9);
  });
});
describe('Test 3', () => {
  it('For largestNumber(7), the output should be 9999999', () => {
    expect(largestNumber(7)).toBe(9999999);
  });
});
describe('Test 4', () => {
  it('For largestNumber(4), the output should be 9999', () => {
    expect(largestNumber(4)).toBe(9999);
  });
});
describe('Test 5', () => {
  it('For largestNumber(3), the output should be 999', () => {
    expect(largestNumber(3)).toBe(999);
  });
});
