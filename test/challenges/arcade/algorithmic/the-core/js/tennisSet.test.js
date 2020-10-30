'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 14. Tennis Set'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const tennisSet = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For tennisSet(2, 6), the output should be true', () => {
    expect(tennisSet(2, 6)).toBe(true);
  });
});
describe('Test 2', () => {
  it('For tennisSet(8, 5), the output should be false', () => {
    expect(tennisSet(8, 5)).toBe(false);
  });
});
describe('Test 3', () => {
  it('For tennisSet(6, 5), the output should be false', () => {
    expect(tennisSet(6, 5)).toBe(false);
  });
});
describe('Test 4', () => {
  it('For tennisSet(7, 7), the output should be false', () => {
    expect(tennisSet(7, 7)).toBe(false);
  });
});
describe('Test 5', () => {
  it('For tennisSet(6, 4), the output should be true', () => {
    expect(tennisSet(6, 4)).toBe(true);
  });
});
describe('Test 6', () => {
  it('For tennisSet(7, 5), the output should be true', () => {
    expect(tennisSet(7, 5)).toBe(true);
  });
});
describe('Test 7', () => {
  it('For tennisSet(7, 2), the output should be false', () => {
    expect(tennisSet(7, 2)).toBe(false);
  });
});
describe('Test 8', () => {
  it('For tennisSet(7, 6), the output should be true', () => {
    expect(tennisSet(7, 6)).toBe(true);
  });
});
describe('Test 9', () => {
  it('For tennisSet(4, 10), the output should be false', () => {
    expect(tennisSet(4, 10)).toBe(false);
  });
});
describe('Test 10', () => {
  it('For tennisSet(0, 0), the output should be false', () => {
    expect(tennisSet(0, 0)).toBe(false);
  });
});
