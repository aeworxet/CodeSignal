'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 1. add'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const add = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For add(1, 2), the output should be 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
describe('Test 2', () => {
  it('For add(0, 1000), the output should be 1000', () => {
    expect(add(0, 1000)).toBe(1000);
  });
});
describe('Test 3', () => {
  it('For add(2, -39), the output should be -37', () => {
    expect(add(2, -39)).toBe(-37);
  });
});
describe('Test 4', () => {
  it('For add(99, 100), the output should be 199', () => {
    expect(add(99, 100)).toBe(199);
  });
});
describe('Test 5', () => {
  it('For add(-100, 100), the output should be 0', () => {
    expect(add(-100, 100)).toBe(0);
  });
});
describe('Test 6', () => {
  it('For add(-1000, -1000), the output should be -2000', () => {
    expect(add(-1000, -1000)).toBe(-2000);
  });
});
