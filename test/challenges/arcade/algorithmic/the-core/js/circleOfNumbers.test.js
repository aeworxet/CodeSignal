'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 6. Circle of Numbers'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const circleOfNumbers = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For circleOfNumbers(10, 2), the output should be 7', () => {
    expect(circleOfNumbers(10, 2)).toBe(7);
  });
});
describe('Test 2', () => {
  it('For circleOfNumbers(10, 7), the output should be 2', () => {
    expect(circleOfNumbers(10, 7)).toBe(2);
  });
});
describe('Test 3', () => {
  it('For circleOfNumbers(4, 1), the output should be 3', () => {
    expect(circleOfNumbers(4, 1)).toBe(3);
  });
});
describe('Test 4', () => {
  it('For circleOfNumbers(6, 3), the output should be 0', () => {
    expect(circleOfNumbers(6, 3)).toBe(0);
  });
});
describe('Test 5', () => {
  it('For circleOfNumbers(18, 6), the output should be 15', () => {
    expect(circleOfNumbers(18, 6)).toBe(15);
  });
});
describe('Test 6', () => {
  it('For circleOfNumbers(12, 10), the output should be 4', () => {
    expect(circleOfNumbers(12, 10)).toBe(4);
  });
});
describe('Test 7', () => {
  it('For circleOfNumbers(18, 5), the output should be 14', () => {
    expect(circleOfNumbers(18, 5)).toBe(14);
  });
});
