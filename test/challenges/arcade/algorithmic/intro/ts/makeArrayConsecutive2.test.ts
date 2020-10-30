/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 6. makeArrayConsecutive2'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const adjacentElementsProduct = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For adjacentElementsProduct([6, 2, 3, 8]), the output should be 3', () => {
    expect(adjacentElementsProduct([6, 2, 3, 8])).toBe(3);
  });
});
describe('Test 2', () => {
  it('For adjacentElementsProduct([0, 3]), the output should be 2', () => {
    expect(adjacentElementsProduct([0, 3])).toBe(2);
  });
});
describe('Test 3', () => {
  it('For adjacentElementsProduct([5, 4, 6]), the output should be 0', () => {
    expect(adjacentElementsProduct([5, 4, 6])).toBe(0);
  });
});
describe('Test 4', () => {
  it('For adjacentElementsProduct([6, 3]), the output should be 2', () => {
    expect(adjacentElementsProduct([6, 3])).toBe(2);
  });
});
describe('Test 5', () => {
  it('For adjacentElementsProduct([1]), the output should be 0', () => {
    expect(adjacentElementsProduct([1])).toBe(0);
  });
});
