/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 9. Reach Next Level'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const reachNextLevel = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('For reachNextLevel(10, 15, 5), the output should be true', () => {
    expect(reachNextLevel(10, 15, 5)).toBe(true);
  });
});
describe('Test 2', () => {
  it('For reachNextLevel(10, 15, 4), the output should be false', () => {
    expect(reachNextLevel(10, 15, 4)).toBe(false);
  });
});
describe('Test 3', () => {
  it('For reachNextLevel(3, 6, 4), the output should be true', () => {
    expect(reachNextLevel(3, 6, 4)).toBe(true);
  });
});
describe('Test 4', () => {
  it('For reachNextLevel(84, 135, 36), the output should be false', () => {
    expect(reachNextLevel(84, 135, 36)).toBe(false);
  });
});
describe('Test 5', () => {
  it('For reachNextLevel(74, 170, 58), the output should be false', () => {
    expect(reachNextLevel(74, 170, 58)).toBe(false);
  });
});
describe('Test 6', () => {
  it('For reachNextLevel(80, 199, 15), the output should be false', () => {
    expect(reachNextLevel(80, 199, 15)).toBe(false);
  });
});
describe('Test 7', () => {
  it('For reachNextLevel(97, 57, 7), the output should be true', () => {
    expect(reachNextLevel(97, 57, 7)).toBe(true);
  });
});
describe('Test 8', () => {
  it('For reachNextLevel(235, 293, 4), the output should be false', () => {
    expect(reachNextLevel(235, 293, 4)).toBe(false);
  });
});
describe('Test 9', () => {
  it('For reachNextLevel(222, 137, 58), the output should be true', () => {
    expect(reachNextLevel(222, 137, 58)).toBe(true);
  });
});
describe('Test 10', () => {
  it('For reachNextLevel(16, 23, 16), the output should be true', () => {
    expect(reachNextLevel(16, 23, 16)).toBe(true);
  });
});
