'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 1. Add Two Digits'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const addTwoDigits = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For addTwoDigits(29), the output should be 11', () => {
    expect(addTwoDigits(29)).toBe(11);
  });
});
describe('Test 2', () => {
  it('For addTwoDigits(48), the output should be 12', () => {
    expect(addTwoDigits(48)).toBe(12);
  });
});
describe('Test 3', () => {
  it('For addTwoDigits(10), the output should be 1', () => {
    expect(addTwoDigits(10)).toBe(1);
  });
});
describe('Test 4', () => {
  it('For addTwoDigits(25), the output should be 7', () => {
    expect(addTwoDigits(25)).toBe(7);
  });
});
describe('Test 5', () => {
  it('For addTwoDigits(52), the output should be 7', () => {
    expect(addTwoDigits(52)).toBe(7);
  });
});
describe('Test 6', () => {
  it('For addTwoDigits(99), the output should be 18', () => {
    expect(addTwoDigits(99)).toBe(18);
  });
});
describe('Test 7', () => {
  it('For addTwoDigits(44), the output should be 8', () => {
    expect(addTwoDigits(44)).toBe(8);
  });
});
describe('Test 8', () => {
  it('For addTwoDigits(50), the output should be 5', () => {
    expect(addTwoDigits(50)).toBe(5);
  });
});
describe('Test 9', () => {
  it('For addTwoDigits(39), the output should be 12', () => {
    expect(addTwoDigits(39)).toBe(12);
  });
});
describe('Test 10', () => {
  it('For addTwoDigits(26), the output should be 8', () => {
    expect(addTwoDigits(26)).toBe(8);
  });
});
