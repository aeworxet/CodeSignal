/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 7. Late Ride'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const lateRide = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For lateRide(240), the output should be 4', () => {
    expect(lateRide(240)).toBe(4);
  });
});
describe('Test 2', () => {
  it('For lateRide(808), the output should be 14', () => {
    expect(lateRide(808)).toBe(14);
  });
});
describe('Test 3', () => {
  it('For lateRide(1439), the output should be 19', () => {
    expect(lateRide(1439)).toBe(19);
  });
});
describe('Test 4', () => {
  it('For lateRide(0), the output should be 0', () => {
    expect(lateRide(0)).toBe(0);
  });
});
describe('Test 5', () => {
  it('For lateRide(23), the output should be 5', () => {
    expect(lateRide(23)).toBe(5);
  });
});
describe('Test 6', () => {
  it('For lateRide(8), the output should be 8', () => {
    expect(lateRide(8)).toBe(8);
  });
});
