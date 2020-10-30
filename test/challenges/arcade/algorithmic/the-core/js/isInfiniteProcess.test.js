'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 12. Is Infinite Process?'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const isInfiniteProcess = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For isInfiniteProcess(2, 6), the output should be false', () => {
    expect(isInfiniteProcess(2, 6)).toBe(false);
  });
});
describe('Test 2', () => {
  it('For isInfiniteProcess(2, 3), the output should be true', () => {
    expect(isInfiniteProcess(2, 3)).toBe(true);
  });
});
describe('Test 3', () => {
  it('For isInfiniteProcess(2, 6), the output should be false', () => {
    expect(isInfiniteProcess(2, 6)).toBe(false);
  });
});
describe('Test 4', () => {
  it('For isInfiniteProcess(0, 1), the output should be true', () => {
    expect(isInfiniteProcess(0, 1)).toBe(true);
  });
});
describe('Test 5', () => {
  it('For isInfiniteProcess(3, 1), the output should be true', () => {
    expect(isInfiniteProcess(3, 1)).toBe(true);
  });
});
describe('Test 6', () => {
  it('For isInfiniteProcess(10, 10), the output should be false', () => {
    expect(isInfiniteProcess(10, 10)).toBe(false);
  });
});
describe('Test 7', () => {
  it('For isInfiniteProcess(5, 10), the output should be true', () => {
    expect(isInfiniteProcess(5, 10)).toBe(true);
  });
});
describe('Test 8', () => {
  it('For isInfiniteProcess(6, 10), the output should be false', () => {
    expect(isInfiniteProcess(6, 10)).toBe(false);
  });
});
describe('Test 9', () => {
  it('For isInfiniteProcess(10, 0), the output should be true', () => {
    expect(isInfiniteProcess(10, 0)).toBe(true);
  });
});
describe('Test 10', () => {
  it('For isInfiniteProcess(5, 5), the output should be false', () => {
    expect(isInfiniteProcess(5, 5)).toBe(false);
  });
});
