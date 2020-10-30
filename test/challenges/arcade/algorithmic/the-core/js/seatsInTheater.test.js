'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 4. Seats in Theater'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const seatsInTheater = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For seatsInTheater(16, 11, 5, 3), the output should be 96', () => {
    expect(seatsInTheater(16, 11, 5, 3)).toBe(96);
  });
});
describe('Test 2', () => {
  it('For seatsInTheater(1, 1, 1, 1), the output should be 0', () => {
    expect(seatsInTheater(1, 1, 1, 1)).toBe(0);
  });
});
describe('Test 3', () => {
  it('For seatsInTheater(13, 6, 8, 3), the output should be 18', () => {
    expect(seatsInTheater(13, 6, 8, 3)).toBe(18);
  });
});
describe('Test 4', () => {
  it('For seatsInTheater(60, 100, 60, 1), the output should be 99', () => {
    expect(seatsInTheater(60, 100, 60, 1)).toBe(99);
  });
});
describe('Test 5', () => {
  it('For seatsInTheater(1000, 1000, 1000, 1000), the output should be 0', () => {
    expect(seatsInTheater(1000, 1000, 1000, 1000)).toBe(0);
  });
});
