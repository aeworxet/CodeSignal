/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 13. Arithmetic Expression'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const arithmeticExpression = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For arithmeticExpression(2, 3, 5), the output should be true', () => {
    expect(arithmeticExpression(2, 3, 5)).toBe(true);
  });
});
describe('Test 2', () => {
  it('For arithmeticExpression(8, 2, 4), the output should be true', () => {
    expect(arithmeticExpression(8, 2, 4)).toBe(true);
  });
});
describe('Test 3', () => {
  it('For arithmeticExpression(8, 3, 2), the output should be false', () => {
    expect(arithmeticExpression(8, 3, 2)).toBe(false);
  });
});
describe('Test 4', () => {
  it('For arithmeticExpression(6, 3, 3), the output should be true', () => {
    expect(arithmeticExpression(6, 3, 3)).toBe(true);
  });
});
describe('Test 5', () => {
  it('For arithmeticExpression(18, 2, 9), the output should be true', () => {
    expect(arithmeticExpression(18, 2, 9)).toBe(true);
  });
});
describe('Test 6', () => {
  it('For arithmeticExpression(2, 3, 6), the output should be true', () => {
    expect(arithmeticExpression(2, 3, 6)).toBe(true);
  });
});
describe('Test 7', () => {
  it('For arithmeticExpression(5, 2, 0), the output should be false', () => {
    expect(arithmeticExpression(5, 2, 0)).toBe(false);
  });
});
describe('Test 8', () => {
  it('For arithmeticExpression(10, 2, 2), the output should be false', () => {
    expect(arithmeticExpression(10, 2, 2)).toBe(false);
  });
});
describe('Test 9', () => {
  it('For arithmeticExpression(5, 2, 2), the output should be false', () => {
    expect(arithmeticExpression(5, 2, 2)).toBe(false);
  });
});
describe('Test 10', () => {
  it('For arithmeticExpression(1, 2, 1), the output should be false', () => {
    expect(arithmeticExpression(1, 2, 1)).toBe(false);
  });
});
describe('Test 11', () => {
  it('For arithmeticExpression(1, 2, 2), the output should be true', () => {
    expect(arithmeticExpression(1, 2, 2)).toBe(true);
  });
});
