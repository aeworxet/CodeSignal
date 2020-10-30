'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 15. Will You?'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const willYou = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For willYou(true, true, true), the output should be false', () => {
    expect(willYou(true, true, true)).toBe(false);
  });
});
describe('Test 2', () => {
  it('For willYou(true, false, true), the output should be true', () => {
    expect(willYou(true, false, true)).toBe(true);
  });
});
describe('Test 3', () => {
  it('For willYou(false, false, false), the output should be false', () => {
    expect(willYou(false, false, false)).toBe(false);
  });
});
describe('Test 4', () => {
  it('For willYou(false, false, true), the output should be true', () => {
    expect(willYou(false, false, true)).toBe(true);
  });
});
