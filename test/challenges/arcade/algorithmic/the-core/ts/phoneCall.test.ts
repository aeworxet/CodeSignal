/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 8. Phone Call'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const phoneCall = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For phoneCall(3, 1, 2, 20), the output should be 14', () => {
    expect(phoneCall(3, 1, 2, 20)).toBe(14);
  });
});
describe('Test 2', () => {
  it('For phoneCall(2, 2, 1, 2), the output should be 1', () => {
    expect(phoneCall(2, 2, 1, 2)).toBe(1);
  });
});
describe('Test 3', () => {
  it('For phoneCall(10, 1, 2, 22), the output should be 11', () => {
    expect(phoneCall(10, 1, 2, 22)).toBe(11);
  });
});
describe('Test 4', () => {
  it('For phoneCall(2, 2, 1, 24), the output should be 14', () => {
    expect(phoneCall(2, 2, 1, 24)).toBe(14);
  });
});
describe('Test 5', () => {
  it('For phoneCall(1, 2, 1, 6), the output should be 3', () => {
    expect(phoneCall(1, 2, 1, 6)).toBe(3);
  });
});
describe('Test 6', () => {
  it('For phoneCall(10, 10, 10, 8), the output should be 0', () => {
    expect(phoneCall(10, 10, 10, 8)).toBe(0);
  });
});
