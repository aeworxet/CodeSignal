'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 17. Kill K-th Bit'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const killKthBit = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For killKthBit(37, 3), the output should be 33', () => {
    expect(killKthBit(37, 3)).toBe(33);
  });
});
describe('Test 2', () => {
  it('For killKthBit(37, 4), the output should be 37', () => {
    expect(killKthBit(37, 4)).toBe(37);
  });
});
describe('Test 3', () => {
  it('For killKthBit(37, 2), the output should be 37', () => {
    expect(killKthBit(37, 2)).toBe(37);
  });
});
describe('Test 4', () => {
  it('For killKthBit(0, 4), the output should be 0', () => {
    expect(killKthBit(0, 4)).toBe(0);
  });
});
describe('Test 5', () => {
  it('For killKthBit(2147483647, 16), the output should be 2147450879', () => {
    expect(killKthBit(2147483647, 16)).toBe(2147450879);
  });
});
describe('Test 6', () => {
  it('For killKthBit(374823748, 13), the output should be 374819652', () => {
    expect(killKthBit(374823748, 13)).toBe(374819652);
  });
});
describe('Test 7', () => {
  it('For killKthBit(2734827, 4), the output should be 2734819', () => {
    expect(killKthBit(2734827, 4)).toBe(2734819);
  });
});
describe('Test 8', () => {
  it('For killKthBit(1084197039, 15), the output should be 1084197039', () => {
    expect(killKthBit(1084197039, 15)).toBe(1084197039);
  });
});
describe('Test 9', () => {
  it('For killKthBit(1160825071, 3), the output should be 1160825067', () => {
    expect(killKthBit(1160825071, 3)).toBe(1160825067);
  });
});
describe('Test 10', () => {
  it('For killKthBit(2039063284, 4), the output should be 2039063284', () => {
    expect(killKthBit(2039063284, 4)).toBe(2039063284);
  });
});
