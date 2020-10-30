/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 11. isLucky'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const isLucky = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For isLucky(1230), the output should be true', () => {
    expect(isLucky(1230)).toBe(true);
  });
});
describe('Test 2', () => {
  it('For isLucky(239017), the output should be false', () => {
    expect(isLucky(239017)).toBe(false);
  });
});
describe('Test 3', () => {
  it('For isLucky(134008), the output should be true', () => {
    expect(isLucky(134008)).toBe(true);
  });
});
describe('Test 4', () => {
  it('For isLucky(10), the output should be false', () => {
    expect(isLucky(10)).toBe(false);
  });
});
describe('Test 5', () => {
  it('For isLucky(11), the output should be true', () => {
    expect(isLucky(11)).toBe(true);
  });
});
describe('Test 6', () => {
  it('For isLucky(1010), the output should be true', () => {
    expect(isLucky(1010)).toBe(true);
  });
});
describe('Test 7', () => {
  it('For isLucky(261534), the output should be false', () => {
    expect(isLucky(261534)).toBe(false);
  });
});
describe('Test 8', () => {
  it('For isLucky(100000), the output should be false', () => {
    expect(isLucky(100000)).toBe(false);
  });
});
describe('Test 9', () => {
  it('For isLucky(999999), the output should be true', () => {
    expect(isLucky(999999)).toBe(true);
  });
});
describe('Test 10', () => {
  it('For isLucky(123321), the output should be true', () => {
    expect(isLucky(123321)).toBe(true);
  });
});
