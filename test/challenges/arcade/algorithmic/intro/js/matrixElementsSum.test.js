'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 8. matrixElementsSum'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const matrixElementsSum = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]), the output should be 9', () => {
    expect(
      matrixElementsSum([
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3],
      ])
    ).toBe(9);
  });
});
describe('Test 2', () => {
  it('For matrixElementsSum([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]), the output should be 9', () => {
    expect(
      matrixElementsSum([
        [1, 1, 1, 0],
        [0, 5, 0, 1],
        [2, 1, 3, 10],
      ])
    ).toBe(9);
  });
});
describe('Test 3', () => {
  it('For matrixElementsSum([[1, 1, 1], [2, 2, 2], [3, 3, 3]]), the output should be 18', () => {
    expect(
      matrixElementsSum([
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
      ])
    ).toBe(18);
  });
});
describe('Test 4', () => {
  it('For matrixElementsSum([[0]]), the output should be 0', () => {
    expect(matrixElementsSum([[0]])).toBe(0);
  });
});
describe('Test 5', () => {
  it('For matrixElementsSum([[1, 0, 3], [0, 2, 1], [1, 2, 0]]), the output should be 5', () => {
    expect(
      matrixElementsSum([
        [1, 0, 3],
        [0, 2, 1],
        [1, 2, 0],
      ])
    ).toBe(5);
  });
});
describe('Test 6', () => {
  it('For matrixElementsSum([[1], [5], [0], [2]]), the output should be 6', () => {
    expect(matrixElementsSum([[1], [5], [0], [2]])).toBe(6);
  });
});
describe('Test 7', () => {
  it('For matrixElementsSum([[1, 2, 3, 4, 5]]), the output should be 15', () => {
    expect(matrixElementsSum([[1, 2, 3, 4, 5]])).toBe(15);
  });
});
describe('Test 8', () => {
  it('For matrixElementsSum([[2], [5], [10]]), the output should be 17', () => {
    expect(matrixElementsSum([[2], [5], [10]])).toBe(17);
  });
});
describe('Test 9', () => {
  it('For matrixElementsSum([[4, 0, 1], [10, 7, 0], [0, 0, 0], [9, 1, 2]]), the output should be 15', () => {
    expect(
      matrixElementsSum([
        [4, 0, 1],
        [10, 7, 0],
        [0, 0, 0],
        [9, 1, 2],
      ])
    ).toBe(15);
  });
});
describe('Test 10', () => {
  it('For matrixElementsSum([[1]]), the output should be 1', () => {
    expect(matrixElementsSum([[1]])).toBe(1);
  });
});
