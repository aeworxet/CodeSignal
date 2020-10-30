'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 11. Extra Number'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const extraNumber = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For extraNumber(2, 7, 2), the output should be 7', () => {
    expect(extraNumber(2, 7, 2)).toBe(7);
  });
});
describe('Test 2', () => {
  it('For extraNumber(3, 2, 2), the output should be 3', () => {
    expect(extraNumber(3, 2, 2)).toBe(3);
  });
});
describe('Test 3', () => {
  it('For extraNumber(5, 5, 1), the output should be 1', () => {
    expect(extraNumber(5, 5, 1)).toBe(1);
  });
});
describe('Test 4', () => {
  it('For extraNumber(500000000, 3, 500000000), the output should be 3', () => {
    expect(extraNumber(500000000, 3, 500000000)).toBe(3);
  });
});
describe('Test 5', () => {
  it('For extraNumber(1, 5, 1), the output should be 5', () => {
    expect(extraNumber(1, 5, 1)).toBe(5);
  });
});
describe('Test 6', () => {
  it('For extraNumber(5, 5, 3), the output should be 3', () => {
    expect(extraNumber(5, 5, 3)).toBe(3);
  });
});
describe('Test 7', () => {
  it('For extraNumber(5, 1, 1), the output should be 5', () => {
    expect(extraNumber(5, 1, 1)).toBe(5);
  });
});
describe('Test 8', () => {
  it('For extraNumber(4000000, 3000000, 4000000), the output should be 3000000', () => {
    expect(extraNumber(4000000, 3000000, 4000000)).toBe(3000000);
  });
});
describe('Test 9', () => {
  it('For extraNumber(548442737, 82231042, 548442737), the output should be 82231042', () => {
    expect(extraNumber(548442737, 82231042, 548442737)).toBe(82231042);
  });
});
describe('Test 10', () => {
  it('For extraNumber(469992838, 66019520, 66019520), the output should be 469992838', () => {
    expect(extraNumber(469992838, 66019520, 66019520)).toBe(469992838);
  });
});
