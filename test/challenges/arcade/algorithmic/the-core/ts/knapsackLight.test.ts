/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 10. Knapsack Light'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const knapsackLight = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For knapsackLight(10, 5, 6, 4, 8), the output should be 10', () => {
    expect(knapsackLight(10, 5, 6, 4, 8)).toBe(10);
  });
});
describe('Test 2', () => {
  it('For knapsackLight(10, 5, 6, 4, 9), the output should be 16', () => {
    expect(knapsackLight(10, 5, 6, 4, 9)).toBe(16);
  });
});
describe('Test 3', () => {
  it('For knapsackLight(5, 3, 7, 4, 6), the output should be 7', () => {
    expect(knapsackLight(5, 3, 7, 4, 6)).toBe(7);
  });
});
describe('Test 4', () => {
  it('For knapsackLight(10, 2, 11, 3, 1), the output should be 0', () => {
    expect(knapsackLight(10, 2, 11, 3, 1)).toBe(0);
  });
});
describe('Test 5', () => {
  it('For knapsackLight(15, 2, 20, 3, 2), the output should be 15', () => {
    expect(knapsackLight(15, 2, 20, 3, 2)).toBe(15);
  });
});
describe('Test 6', () => {
  it('For knapsackLight(2, 5, 3, 4, 5), the output should be 3', () => {
    expect(knapsackLight(2, 5, 3, 4, 5)).toBe(3);
  });
});
describe('Test 7', () => {
  it('For knapsackLight(4, 3, 3, 4, 4), the output should be 4', () => {
    expect(knapsackLight(4, 3, 3, 4, 4)).toBe(4);
  });
});
describe('Test 8', () => {
  it('For knapsackLight(3, 5, 3, 8, 10), the output should be 3', () => {
    expect(knapsackLight(3, 5, 3, 8, 10)).toBe(3);
  });
});
describe('Test 9', () => {
  it('For knapsackLight(3, 10, 3, 8, 9), the output should be 3', () => {
    expect(knapsackLight(3, 10, 3, 8, 9)).toBe(3);
  });
});
