/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 4. adjacentElementsProduct'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const adjacentElementsProduct = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For adjacentElementsProduct([3, 6, -2, -5, 7, 3]), the output should be 21', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
  });
});
describe('Test 2', () => {
  it('For adjacentElementsProduct([-1, -2]), the output should be 2', () => {
    expect(adjacentElementsProduct([-1, -2])).toBe(2);
  });
});
describe('Test 3', () => {
  it('For adjacentElementsProduct([5, 1, 2, 3, 1, 4]), the output should be 6', () => {
    expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6);
  });
});
describe('Test 4', () => {
  it('For adjacentElementsProduct([1, 2, 3, 0]), the output should be 6', () => {
    expect(adjacentElementsProduct([1, 2, 3, 0])).toBe(6);
  });
});
describe('Test 5', () => {
  it('For adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), the output should be 50', () => {
    expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50);
  });
});
describe('Test 6', () => {
  it('For adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), the output should be 30', () => {
    expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toBe(30);
  });
});
describe('Test 7', () => {
  it('For adjacentElementsProduct([4, 1, 2, 3, 1, 5]), the output should be 6', () => {
    expect(adjacentElementsProduct([4, 1, 2, 3, 1, 5])).toBe(6);
  });
});
describe('Test 8', () => {
  it('For adjacentElementsProduct([-23, 4, -3, 8, -12]), the output should be -12', () => {
    expect(adjacentElementsProduct([-23, 4, -3, 8, -12])).toBe(-12);
  });
});
describe('Test 9', () => {
  it('For adjacentElementsProduct([1, 0, 1, 0, 1000]), the output should be 0', () => {
    expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toBe(0);
  });
});
