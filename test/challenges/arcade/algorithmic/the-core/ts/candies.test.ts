/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 3. Candies'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const candies = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For candies(3, 10), the output should be 9', () => {
    expect(candies(3, 10)).toBe(9);
  });
});
describe('Test 2', () => {
  it('For candies(1, 2), the output should be 2', () => {
    expect(candies(1, 2)).toBe(2);
  });
});
describe('Test 3', () => {
  it('For candies(10, 5), the output should be 0', () => {
    expect(candies(10, 5)).toBe(0);
  });
});
describe('Test 4', () => {
  it('For candies(4, 4), the output should be 4', () => {
    expect(candies(4, 4)).toBe(4);
  });
});
describe('Test 5', () => {
  it('For candies(4, 15), the output should be 12', () => {
    expect(candies(4, 15)).toBe(12);
  });
});
describe('Test 6', () => {
  it('For candies(9, 100), the output should be 99', () => {
    expect(candies(9, 100)).toBe(99);
  });
});
describe('Test 7', () => {
  it('For candies(8, 2), the output should be 0', () => {
    expect(candies(8, 2)).toBe(0);
  });
});
describe('Test 8', () => {
  it('For candies(3, 3), the output should be 3', () => {
    expect(candies(3, 3)).toBe(3);
  });
});
describe('Test 9', () => {
  it('For candies(7, 10), the output should be 7', () => {
    expect(candies(7, 10)).toBe(7);
  });
});
describe('Test 10', () => {
  it('For candies(3, 23), the output should be 21', () => {
    expect(candies(3, 23)).toBe(21);
  });
});
