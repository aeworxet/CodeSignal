'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 16. Are Similar?'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const areSimilar = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For a: [1, 2, 3], b: [1, 2, 3], the output should be true', () => {
    expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true);
  });
});
describe('Test 2', () => {
  it('For a: [1, 2, 3], b: [2, 1, 3], the output should be true', () => {
    expect(areSimilar([1, 2, 3], [2, 1, 3])).toBe(true);
  });
});
describe('Test 3', () => {
  it('For a: [1, 2, 2], b: [2, 1, 1], the output should be false', () => {
    expect(areSimilar([1, 2, 2], [2, 1, 1])).toBe(false);
  });
});
describe('Test 4', () => {
  it('For a: [1, 1, 4], b: [1, 2, 3], the output should be false', () => {
    expect(areSimilar([1, 1, 4], [1, 2, 3])).toBe(false);
  });
});
describe('Test 5', () => {
  it('For a: [1, 2, 3], b: [1, 10, 2], the output should be false', () => {
    expect(areSimilar([1, 2, 3], [1, 10, 2])).toBe(false);
  });
});
describe('Test 6', () => {
  it('For a: [2, 3, 1], b: [1, 3, 2], the output should be true', () => {
    expect(areSimilar([2, 3, 1], [1, 3, 2])).toBe(true);
  });
});
describe('Test 7', () => {
  it('For a: [2, 3, 9], b: [10, 3, 2], the output should be false', () => {
    expect(areSimilar([2, 3, 9], [10, 3, 2])).toBe(false);
  });
});
describe('Test 8', () => {
  it('For a: [4, 6, 3], b: [3, 4, 6], the output should be false', () => {
    expect(areSimilar([4, 6, 3], [3, 4, 6])).toBe(false);
  });
});
describe('Test 9', () => {
  it('For \
a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279], \
b: [832, 998, 148, 570, 533, 561, 455, 147, 894, 279], the output should be true', () => {
    expect(
      areSimilar(
        [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
        [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
      )
    ).toBe(true);
  });
});
describe('Test 10', () => {
  it('For \
a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279], \
b: [832, 570, 148, 998, 533, 561, 455, 147, 894, 279], the output should be false', () => {
    expect(
      areSimilar(
        [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
        [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
      )
    ).toBe(false);
  });
});
